import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },
  body: {
    backgroundColor: "#F7F7F7",
    flex: 1,
  },
  title: {
    color: "#666",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
  },
  valor: {
    color: "#444",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    borderBottomColor: "#999",
    borderBottomWidth: 1,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  ValorContainer: {
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
  }
});

export default styles;
