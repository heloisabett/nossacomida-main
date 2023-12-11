import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header() {
  const navigation = useNavigation();
  const [userProfilePic, setUserProfilePic] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const userDataString = await AsyncStorage.getItem('userData');
      const userData = JSON.parse(userDataString);
      if (userData && userData.capa && userData.capa.url) {
        setUserProfilePic(userData.capa.url);
      }
    };

    getUserData();
  }, []);

  return (
    <View style={styles.header}>
      <View style={styles.headerPrincipal}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.nomeLoja}>OURFOOD</Text>
        </TouchableOpacity>
        <View style={styles.icones}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            
            <TouchableOpacity>
              <Image
                style={{ width: 40, height: 40, borderRadius: 10 }}
                source={{ uri: userProfilePic || "../../../assets/img/default-profile-pic.jpg" }} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
