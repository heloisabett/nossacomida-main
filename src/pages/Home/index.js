import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Main from '../../components/Home/Main/Main';
import Nav from '../../../src/components/Nav/Nav';
import HeaderComp from '../../components/Header/Header.js'

export default function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.body}>
      <HeaderComp />
      <ScrollView>
        <Main />
      </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F7F7F7',
    flex: 1,
  },
});
