import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Image, TouchableOpacity, Text } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const CardSobremesa = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Sobremesa")}>
      <View style={styles.card}>
        <View style={styles.btn}>
          <MaterialCommunityIcons name="cart-plus" size={18} color="white" />
        </View>
        <Image
          source={props.sobremesa.caminhoImagem}
          style={styles.foto}
        />
        <View style={styles.infos}>
          <Text style={styles.nomeProduto}>
            {props.sobremesa.nomeProduto}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#FF842B" }}>R$</Text>
            <Text style={styles.nomeProduto}>{props.sobremesa.valor}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardSobremesa;
