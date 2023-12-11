import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    foto: {
        width: "100%",
        height: 170,
        borderRadius: 15,
    },
    card: {
        width: 230,
        height: 275,
        margin: 5,
        borderRadius: 15,
        marginTop: 15,
        backgroundColor: "#fff",
        justifyContent: "space-around",
    },
    nomeProduto: {
        fontSize: 15,
        fontWeight: "600",
        color: "#333"
    },
    infos: {
        padding: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        backgroundColor: "#FF842B",
        width: 40,
        height: 40,
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