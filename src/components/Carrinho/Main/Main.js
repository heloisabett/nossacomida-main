import { View, Text, ScrollView } from "react-native";
import React, { Component } from "react";
import CardLanche from "../CardLanche/Card";
import styles from "./style";


export default class Main extends Component {
  render() {
    const lanches = [
      {
        id: 1,
        nomeProduto: "Mega combo Ourfood",
        valor: 30,
        caminhoImagem: require("../../../../assets/img/xburguerduplo.jpeg"),
        descricaoProduto: "Três hamburgueres, queijo, bacon, cheddar, tomate, cebola e milho",
      },
      {
        id: 2,
        nomeProduto: "Mega combo Ourfood",
        valor: 30,
        caminhoImagem: require("../../../../assets/img/xsalada.jpeg"),
        descricaoProduto: "Beef Burger, batata frita e refrigerante",
      },
      {
        id: 3,
        nomeProduto: "Mega combo",
        valor: 30,
        caminhoImagem: require("../../../../assets/img/images.jpeg"),
        descricaoProduto: "Beef Burger, batata frita e refrigerante",
      },
      {
        id: 4,
        nomeProduto: "Mega combo Ourfood",
        valor: 30,
        caminhoImagem: require("../../../../assets/img/images.jpeg"),
        descricaoProduto: "Beef Burger, batata frita e refrigerante",
      },
      {
        id: 5,
        nomeProduto: "Mega combo Ourfood",
        valor: 30,
        caminhoImagem: require("../../../../assets/img/images.jpeg"),
        descricaoProduto: "Beef Burger, batata frita e refrigerante",
      },
      {
        id: 6,
        nomeProduto: "Mega combo",
        valor: 30,
        caminhoImagem: require("../../../../assets/img/images.jpeg"),
        descricaoProduto: "Beef Burger, batata frita e refrigerante",
      },
    ];
    return (
      <View>
        <View style={styles.main}>
          <ScrollView>
            {lanches.map((lanche) => (
              <CardLanche key={lanche.id} lanche={lanche} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
