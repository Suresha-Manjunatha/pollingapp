/** @format */

import { StyleSheet } from "react-native";

export const ScreenStyles = StyleSheet.create({
    screen: {
        paddingTop: 20,
        backgroundColor: "white",
        marginTop: 20
    },
    item: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // marginVertical: 10,
        height: 150,
        width: "100%",
        // flexWrap: "wrap",
    },

    item1: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // marginVertical: 10,
        // height: '50px',
        width: "100%",
        position: 'sticky',
        top: 40,
        color: 'lightblue',
        fontSize: 22,
        // backgroundColor: 'lightblue'
    },
    itemText1: {
        width: "20%",
        // borderWidth: 1,
        // borderColor: "black",
        padding: 5,
        height: 150,
        flex: 1,
        overflow: 'hidden'
    },
    itemText2: {
        width: "30%",
        // borderWidth: 1,
        // borderColor: "black",
        padding: 5,
        height: 150,
        flex: 1,
        flexWrap: "wrap",
    },
    itemText3: {
        width: "30%",
        // borderWidth: 1,
        color: 'blue',
        // borderColor: "black",
        padding: 5,
        height: 150,
        flex: 1,
        flexWrap: "wrap",
        overflow: 'hidden'
    },
});