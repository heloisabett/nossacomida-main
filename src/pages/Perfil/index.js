import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function MenuCard(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.rota)}>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#444" }}>{props.opcao}</Text>
        <FontAwesome name="arrow-right" size={19} color="#FF842B" />
      </View>
    </TouchableOpacity>
  );
}
export default function Perfil({}) {
  return (
    <View style={styles.body}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 25, color: "#FF842B" }}>
          Olá RafaAlbano!
        </Text>
        <Text style={{ fontWeight: "500", fontSize: 16, color: "#333" }}>
          Aqui estão mais informações para você
        </Text>
      </View>
      <View style={{ gap: 10, marginTop: 20 }}>
        <MenuCard opcao="Favoritos" rota="Favoritos"/>
        <MenuCard opcao="Pedidos" rota="Pedidos" />
        <MenuCard opcao="Pagamentos" rota="Pagamentos"/>
        <MenuCard opcao="Endereços" rota="Enderecos"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    padding: 40,
  },
});
