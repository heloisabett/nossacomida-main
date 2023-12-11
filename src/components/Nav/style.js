import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#fff",
    height: 170,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
  },
  categorias: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  card: {
    marginTop: 10,
    justifyContent: "space-around",
    flexDirection: "column",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    backgroundColor: "#F7F7F7",
  },
  nomeCategoria: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "700",
    color: "#333"
  },

  input: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#E6E6E6",
    height: 40,
    paddingLeft: 10,
  },


  pesquisaView: {
    flexDirection: "row",
    marginTop: 10,
  },
  btnSearch: {
    backgroundColor: "#FF842B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 40,
    padding: 10,
    position: "absolute",
    right: 0,
  },
});

export default styles;
