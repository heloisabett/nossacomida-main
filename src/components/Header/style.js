import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "column",
    marginTop: 30,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    padding: 15,
  },
  headerPrincipal: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "space-between",
  },
  nomeLoja: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#FF842B",
  },
  btnCart: {
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 40,
    padding: 10,
  },
  carrinhoText: {
    backgroundColor: "#FF842B",
    borderRadius: 50,
    paddingHorizontal: 3,
    height: 20,
    marginRight: -10,
    zIndex: 10,
    color: "white"
  },
});

export default styles;
