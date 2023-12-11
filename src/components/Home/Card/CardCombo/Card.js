import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const CardCombo = (props) => {
  const navigation = useNavigation();

  return (
      <TouchableOpacity
      onPress={() => navigation.navigate("Combo")}
    >
      <View style={styles.card}>
        <View style={styles.btn}>
          <MaterialCommunityIcons name="cart-plus" size={20} color="white" />  
        </View>
        <Image source={props.combo.caminhoImagem} style={styles.foto} />
        <View style={styles.infos}>
          <Text style={styles.nomeProduto}>{props.combo.nomeProduto}</Text>
          <Text style={{color: "#777", fontSize: 14, textAlign: "center"}}>{props.combo.descricaoProduto}</Text>
          <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
            <Text style={{color: "#FF842B", fontWeight: "700", fontSize: 10}}>R$</Text>
            <Text style={{fontWeight: "700", fontSize: 25, color: "#333"}}>{props.combo.valor}</Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    );
  }

  export default CardCombo;
