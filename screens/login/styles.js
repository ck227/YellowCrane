import { StyleSheet,Platform } from 'react-native';

export default StyleSheet.create({
    header: {
        backgroundColor: "#e84a22",
        height: 60,
        // height: 76,
        // paddingTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
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
        justifyContent: 'center',
        alignItems: 'center'
    }
});