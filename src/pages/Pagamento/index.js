import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function PagamentoCard(props) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color: "#444" }}>{props.formato}</Text>
      <FontAwesome name={props.icon} size={24} color="#444" />
    </View>
  );
}
export default function Pagamento() {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          color: "#333",
          marginBottom: 25,
        }}
      >
        Escolha seu formato de pagamento
      </Text>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate("PIX")}>
          <PagamentoCard formato="PIX" icon="credit-card-alt" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Dinheiro")}>
        <PagamentoCard formato="Dinheiro" icon="money"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cartao")}>
        <PagamentoCard formato="Débito / crédito" icon="bank" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
  main: {
    gap: 10,
  },
});
