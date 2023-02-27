import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,

} from 'react-native';
export default function HomeScreen() {


  return (
    <SafeAreaView style={styles.container}>
      <View>
       <Text>Home page</Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
