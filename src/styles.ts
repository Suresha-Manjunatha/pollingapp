/** @format */

import { StyleSheet } from "react-native";

export const ScreenStyles = StyleSheet.create({
    screen: {
        paddingTop: 20,
        backgroundColor: "white",
        marginTop: 20,
        width: '100%',
        padding: 5
    },
    item: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 10,
        width: "100%",
        flexWrap: "wrap",
        backgroundColor: 'lightyellow',
        borderWidth: 1,
        borderColor: 'orange',
        padding: 5,
        borderRadius: 15
    },


    itemText1: {
        width: '100%',
        fontSize: 18,
        padding: 5,
        flex: 1,
    }, title: {
        fontSize: 18,
        fontWeight: '600'
    }
});