import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Button,
  Alert
} from 'react-native';
import profile from '../assets/profile.png';
import home from '../assets/home.png';

import {useNavigation} from '@react-navigation/native';
import Application from '../navigation/Application';

export default function CustomSidebarMenu(props) {
   
  const [currentTab, setCurrentTab] = useState('Home');

  return (
    <SafeAreaView style={styles.container}>
       
      <View
        style={{
          justifyContent: 'flex-start',
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
        }}>
        <ImageBackground style={{padding: 20}} source={profile} blurRadius={5}>
          <Image
            source={profile}
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
              marginTop: 8,
            }}></Image>

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 20,
            }}>
            Jessica smitz
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                marginTop: 6,
                color: 'white',
              }}>
              myulogic@gmail.com
            </Text>
          </TouchableOpacity>
        </ImageBackground>

        <View>
          {TabButton(currentTab, setCurrentTab, 'Application', home)}
          {TabButton(currentTab, setCurrentTab, 'Application Status', home)}
         
        
        </View>
        {/* <Button onPress={ handleNext} title='application status'/> */}
      </View>
    
    </SafeAreaView>
  );
}

const TabButton = (currentTab, setCurrentTab, title, image) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        setCurrentTab(title);
        navigation.navigate(title)
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? '#7fffd4' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 1,
         height:55
        }}>
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? 'grey' : 'black',
          }}></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? 'grey' : 'black',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
