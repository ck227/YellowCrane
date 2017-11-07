import {Text, View, Image, TouchableOpacity, TextInput, Alert, ActivityIndicator, FlatList} from 'react-native'
import React from 'react'
import styles from './styles';

var parseString = require('react-native-xml2js').parseString;

export default class OrdersScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            page: 0,
            error: null,
            refreshing: false
        };
        id = this.props.id
    }

    componentDidMount() {
        this._getDataFromApi();
    }

    async _getDataFromApi() {
        const {page} = this.state;
        var that = this
        let response = await fetch('http://114.104.160.233:8015/WebService/HHLJGTWebService.asmx/SearchEventList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `DEVID=15527021408&beginTime=&endTime=&title=&type=&flag=${this.props.id}&pageIndex=${this.state.page}&pageSize=20`
        });
        var responseJson = await response.text()

        parseString(responseJson, function (err, result) {
            that.setState({
                data: page === 0 ? result.ArrayOfSS_JGTEVENT.SS_JGTEVENT : [...that.state.data, ...result.ArrayOfSS_JGTEVENT.SS_JGTEVENT],
                error: result.error || null,
                loading: false,
                refreshing: false
            });
        });
    }

    handleRefresh = () => {
        this.setState(
            {
                page: 0,
                refreshing: true
            },
            () => {
                this._getDataFromApi();
            }
        );
    };

    handleLoadMore = () => {
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this._getDataFromApi();
            }
        );
    };

    renderFooter = () => {
        if (!this.state.loading) return null;
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}>
                <ActivityIndicator animating size="large"/>
            </View>
        );
    };

    _onItemClick = () => {
        this.props.navigation.navigate('OrderDetailScreen')
    };

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({item, index}) => (
                        <TouchableOpacity onPress={this._onItemClick}>
                            <View style={styles.item}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Text style={{color: '#e84a22'}}>{item.EVENT_TITLE}</Text>
                                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                                        <Text>{item.EVENT_ADDTIME}</Text>
                                    </View>
                                </View>
                                <Text style={{marginTop: 12}}>{item.EVENT_DESC}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() =>
                        <View
                            style={{
                                flex: 1, flexDirection: 'row',
                                height: 1,
                                backgroundColor: "#CED0CE",
                            }}
                        />
                    }
                    keyExtractor={(item, index) => index}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    //onEndReachedThreshold={15}
                />

            </View>
        );
    }

}


