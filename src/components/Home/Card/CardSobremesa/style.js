import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    foto: {
        width: 150,
        height: 150,
        borderRadius: 15,
    },
    card: {
        width: 160,
        margin: 5,
        borderRadius: 15,
        justifyContent: "center",
        backgroundColor: "#fff",

    },
    nomeProduto: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "600",
    },
    infos: {
        justifyContent: "center",
        padding: 8,
    },
    btn: {
        backgroundColor: "#FF842B",
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: 15,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        zIndex: 5,
        position: "absolute",
        bottom: 0,
        right: 0,
    }

});

export default styles