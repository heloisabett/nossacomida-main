import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    foto: {
        borderRadius: 15,
        height: 100,
        width: 100
    },
    card: {
        margin: 5,
        borderRadius: 10,
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "600",
    },
    infos: {
        position: "static",
        justifyContent: "space-between",
        width: "65%"
    },
    btn: {
        backgroundColor: "#FF842B",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
    }
});

export default styles