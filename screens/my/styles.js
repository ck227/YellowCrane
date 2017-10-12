import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    cat: {
        width: 96,
        height: 96,
        borderRadius: 48,
        borderColor: 'white',
        borderWidth: 1
    },
    title: {
        flex: 1,
        marginRight: 60,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        fontSize: 18,
        color: 'white',
        marginTop: 16
    },
    text2: {
        fontSize: 18,
        color: '#e84a22',
    },
    contentIcon: {
        width: 28,
        height: 28
    },
    contentText: {
        color: '#393b3b',
        fontSize: 16,
        marginLeft: 8
    },
    contentItem2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 24,
        paddingLeft: 24,
        paddingRight: 24
    },
    contentArrow: {
        width: 24,
        height: 24
    },
    arrowParent: {
        flex: 1,
        alignItems: 'flex-end'
    }
});