import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import Main from "../../components/Carrinho/Main/Main";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

function ValorTotal() {
  const navigation = useNavigation();
  
  return (
    <View
      style={styles.ValorContainer}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18, color: "#FF842B" }}>
        Valor total da compra
      </Text>
      <View style={{gap: 10, paddingHorizontal: 10}}>
        <View style={styles.row}>
          <Text style={styles.title}>Subtotal</Text>
          <Text style={styles.valor}>R$53,22</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Delivery</Text>
          <Text style={styles.valor}>R$5,82</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Total</Text>
          <Text style={styles.valor}>R$59,04</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Pagamento")}>
        <Text style={{color: "white", fontSize: 16, padding: 10, textAlign: "center", fontWeight: "600", borderRadius: 10, marginTop: 20,backgroundColor: "#FF842B"}}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  );
}
export default function Carrinho() {
  return (
    <View style={styles.body}>
      <ScrollView>
        <Main />
      </ScrollView>
      <ValorTotal />
    </View>
  );
}
