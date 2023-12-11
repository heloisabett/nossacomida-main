import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const CardLanche = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Lanche")}>
      <View style={styles.card}>
        <View style={styles.btn}>
          <MaterialCommunityIcons name="cart-plus" size={18} color="white" />
        </View>
        <Image source={props.lanche.caminhoImagem} style={styles.foto} />
        <View style={styles.infos}>
          <Text style={styles.nomeProduto}>
            {props.lanche.nomeProduto}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#FF842B" }}>R$</Text>
            <Text style={styles.nomeProduto}>{props.lanche.valor}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardLanche;
