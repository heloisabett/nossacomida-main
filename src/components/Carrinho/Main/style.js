import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
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
});

export default styles;
