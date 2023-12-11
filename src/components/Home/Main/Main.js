import React, { useState, useEffect } from 'react';
import {
  View, ScrollView, TextInput, Image, Text, TouchableOpacity, StatusBar, StyleSheet, Picker, Modal, FlatList
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import produtoService from "../../../services/produtos";
import styles from "./style";

export default function Main() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [pesquisa, setPesquisa] = useState('');
  const [carrinho, setCarrinho] = useState([]);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [opcaoPagamento, setOpcaoPagamento] = useState('PIX');

  const getProdutos = async () => {
    const data = await produtoService.getAllProdutos();
    setProdutos(data);
  };

  const getCategorias = async () => {
    const data = await fetch('http://192.168.137.170:19003/api/categorias/')
                      .then(response => response.json());
    setCategorias(data);
  };

  useEffect(() => {
    getProdutos();
    getCategorias();
  }, []);

  const produtosFiltrados = produtos.filter(produto => {
    const correspondePesquisa = pesquisa ?
      produto.nome.toLowerCase().includes(pesquisa.toLowerCase()) : true;
    const correspondeCategoria = categoriaSelecionada ?
      produto.categoria.id.toString() === categoriaSelecionada : true;

    return correspondePesquisa && correspondeCategoria;
  });

  const adicionarAoCarrinho = (produto) => {
    setCarrinho(carrinhoAtual => {
      const produtoExistente = carrinhoAtual.find(item => item.id === produto.id);
      if (produtoExistente) {
        return carrinhoAtual.map(item =>
          item.id === produto.id ? { ...item, quantidade: Math.min(item.quantidade + 1, produto.quantidade) } : item
        );
      }
      return [...carrinhoAtual, { ...produto, quantidade: 1 }];
    });
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, produto) => total + produto.preco * produto.quantidade, 0).toFixed(2);
  };

  const quantidadeTotalNoCarrinho = () => {
    return carrinho.reduce((total, item) => total + item.quantidade, 0);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <TextInput
          style={additionalStyles.inputPesquisa}
          placeholder="Pesquisar..."
          value={pesquisa}
          onChangeText={setPesquisa}
        />

        <View style={additionalStyles.pickerContainer}>
          <Picker
            selectedValue={categoriaSelecionada}
            style={additionalStyles.picker}
            onValueChange={(itemValue) => setCategoriaSelecionada(itemValue)}
            mode="dropdown"
          >
            <Picker.Item label="Todas as Categorias" value="" />
            {categorias.map((categoria) => (
              <Picker.Item key={categoria.id} label={categoria.descricao} value={categoria.id.toString()} />
            ))}
          </Picker>
        </View>

        <View style={productCardStyles.row}>
          {produtosFiltrados.map((produto) => (
            <View key={produto.id} style={productCardStyles.card}>
              <Image
                source={{ uri: produto.capa.file }}
                style={productCardStyles.image}
              />
              <Text style={productCardStyles.productName}>{produto.nome}</Text>
              <Text style={productCardStyles.productInfo}>Preço: R${produto.preco}</Text>
              <Text style={productCardStyles.productInfo}>Quantidade: {produto.quantidade}</Text>
              <Text style={productCardStyles.productInfo}>Categoria: {produto.categoria.descricao}</Text>
              <TouchableOpacity
                style={productCardStyles.button}
                onPress={() => adicionarAoCarrinho(produto)}
              >
                <Text>Adicionar ao Carrinho</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => setModalVisivel(true)}
        style={additionalStyles.floatingButton}
      >
        <MaterialIcons name="shopping-cart" size={24} color="white" />
        <Text style={additionalStyles.cartItemCount}>{quantidadeTotalNoCarrinho()}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisivel}
        onRequestClose={() => {
          setModalVisivel(!modalVisivel);
        }}
      >
        <View style={additionalStyles.modalView}>
          <Text style={additionalStyles.modalTitle}>Carrinho</Text>

          <FlatList
            data={carrinho}
            renderItem={({ item }) => (
              <View style={additionalStyles.listItem}>
                <Image source={{ uri: item.capa.file }} style={additionalStyles.cartItemImage} />
                <View style={additionalStyles.itemDetails}>
                  <Text>{item.nome}</Text>
                  <Text>Quantidade: {item.quantidade}</Text>
                  <Text>Preço: R${(item.preco * item.quantidade).toFixed(2)}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />

          <Text style={additionalStyles.total}>Total: R${calcularTotal()}</Text>

          <Picker
            selectedValue={opcaoPagamento}
            style={additionalStyles.picker}
            onValueChange={(itemValue) => setOpcaoPagamento(itemValue)}
          >
            <Picker.Item label="PIX" value="PIX" />
            <Picker.Item label="Cartão Débito" value="Debito" />
            <Picker.Item label="Cartão Crédito" value="Credito" />
            <Picker.Item label="Dinheiro" value="Dinheiro" />
          </Picker>

          <TouchableOpacity
            style={additionalStyles.closeModalButton}
            onPress={() => setModalVisivel(false)}
          >
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
const additionalStyles = StyleSheet.create({
  inputPesquisa: {
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 25,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontSize: 16,
    fontFamily: 'Arial',
  },
  buttonAtualizar: {
    backgroundColor: '#FF842B',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  pickerContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FF842B',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: 'white',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  closeModalButton: {
    marginTop: 20,
    backgroundColor: '#FF842B',
    padding: 10,
    borderRadius: 5,
  },
  picker: {
    width: '100%',
    height: 50,
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FF842B',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    flexDirection: 'row',
  },
  cartItemCount: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: 'white',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  cartItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemDetails: {
    marginLeft: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  closeModalButton: {
    marginTop: 20,
    backgroundColor: '#FF842B',
    padding: 10,
    borderRadius: 5,
  },
  picker: {
    width: '100%',
    height: 50,
  },
});

const productCardStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: 'center',
    width: '45%',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  productInfo: {
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FF842B',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  }
});
