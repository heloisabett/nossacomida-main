import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardBebida = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Bebida")}>
      <View style={styles.card}>
        <View style={styles.btn}>
          <MaterialCommunityIcons name="cart-plus" size={18} color="white" />
        </View>
        <Image source={props.bebida.caminhoImagem} style={styles.foto} />
        <View style={styles.infos}>
          <Text style={styles.nomeProduto}>
            {props.bebida.nomeProduto}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#FF842B" }}>R$</Text>
            <Text style={styles.nomeProduto}>{props.bebida.valor}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CardBebida;
