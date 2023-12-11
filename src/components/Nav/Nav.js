import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Card(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.categoria.nome)}>
      <View style={styles.card}>
        <MaterialCommunityIcons
          name={props.categoria.icon}
          size={24}
          color="#333"
        />
        <View style={styles.infos}>
          <Text style={styles.nomeCategoria}>{props.categoria.nome}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
function Pesquisa() {
  const navigation = useNavigation();
  return (
    <View style={styles.pesquisaView}>
      <TextInput style={styles.input} placeholder="Pesquisa" />
      <TouchableOpacity onPress={() => navigation.navigate("Pesquisa")}>
        <View style={styles.btnSearch}>
          <AntDesign name="search1" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default function Nav() {
  
  return (
    <View style={styles.nav}>
      <Pesquisa />
    </View>
  );
}
