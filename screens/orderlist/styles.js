import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    width: {
        width: 60
    },
    header: {
        backgroundColor: "#e84a22",
        height: 60,
        // height: 76,
        // paddingTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
    },
    width: {
        width: 60
    },

    backImg: {
        width: 24,
        height: 24,
        marginLeft: 15
    },
    titleText: {
        color: 'white',
        fontSize: 18
    },
    whiteColor: {
        color: "#ffffff"
    },
    title: {
        flex: 1,
        marginRight: 60,
        justifyContent: 'center',
        alignItems: 'center'

    },

    item: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor:'white'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 8
    },

});

