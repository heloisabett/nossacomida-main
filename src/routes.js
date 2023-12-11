import HomeScreen from "./pages/Home/index";
import Combos from "./pages/Home/Combos";
import Bebidas from "./pages/Home/Bebidas";
import Lanches from "./pages/Home/Lanches";
import Sobremesas from "./pages/Home/Sobremesas";
import Perfil from "./pages/Perfil/index";
import Enderecos from "./pages/Perfil/Menu/Enderecos";
import Favoritos from "./pages/Perfil/Menu/Favoritos";
import Pagamentos from "./pages/Perfil/Menu/Pagamentos";
import Pedidos from "./pages/Perfil/Menu/Pedidos";
import Pesquisa from "./pages/Pesquisa/index";
import Bebida from "./pages/Produtos/Bebidas/index";
import Lanche from "./pages/Produtos/Lanches/index";
import Combo from "./pages/Produtos/Combos/index";
import Sobremesa from "./pages/Produtos/Sobremesas/index";
import Header from "./components/Header/Header";
import Carrinho from "./pages/Carrinho/index";
import Pagamento from "./pages/Pagamento/index";
import Pix from "./pages/Pagamento/Pix";
import Dinheiro from "./pages/Pagamento/Dinheiro";
import Cartao from "./pages/Pagamento/Cartao";
import LoginScreen from './pages/Login/login.js'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function app() {
  const CustomHeader = () => <Header />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: CustomHeader,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen}  />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="PIX" component={Pix} />
        <Stack.Screen name="Dinheiro" component={Dinheiro} />
        <Stack.Screen name="Cartao" component={Cartao} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Combos" component={Combos} />
        <Stack.Screen name="Bebidas" component={Bebidas} />
        <Stack.Screen name="Lanches" component={Lanches} />
        <Stack.Screen name="Pesquisa" component={Pesquisa} />
        <Stack.Screen name="Sobremesas" component={Sobremesas} />
        <Stack.Screen name="Lanche" component={Lanche} />
        <Stack.Screen name="Combo" component={Combo} />
        <Stack.Screen name="Bebida" component={Bebida} />
        <Stack.Screen name="Sobremesa" component={Sobremesa} />
        <Stack.Screen name="Enderecos" component={Enderecos} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
        <Stack.Screen name="Pagamentos" component={Pagamentos} />
        <Stack.Screen name="Pedidos" component={Pedidos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
