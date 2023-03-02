import {View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
export default function Application() {
  const data = ['App', 'App1', 'App2', 'App3'];

  return (
    <SafeAreaView >
      <Text style={styles.heading}>Select FS service</Text>

      <View style={styles.dropDown}>
        <SelectDropdown
          data={data}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
        />
      </View>
      <Text style={styles.heading}>Home address</Text>

      <View style={styles.homeAddressContainer}>
        <View style={styles.nameContainer}>
          <View>
            <Text style={{color:'black'}}>First name</Text>
            <TextInput style={styles.nameInput} placeholder="Fname" />
          </View>
          <View>
            <Text style={{color:'black'}}>Last name</Text>
            <TextInput style={styles.nameInput} placeholder="Lname" />
          </View>
        </View>
        <View>
          <Text style={{color:'black'}}>Default name</Text>
          <TextInput style={styles.defaultInput} placeholder="Dname" />
        </View>

        <View style={styles.nameContainer}>
          <View>
            <Text style={{color:'black'}}>Zip</Text>
            <TextInput style={styles.addressInput} placeholder="Zip" />
          </View>
          <View>
            <Text style={{color:'black'}}>City</Text>
            <TextInput style={styles.addressInput} placeholder="City" />
          </View>

          <View>
            <Text style={{color:'black'}}>State</Text>
            <TextInput style={styles.addressInput} placeholder="State" />
          </View>
        </View>
      </View>

      <Text style={styles.heading}>Financial information</Text>

      <View style={styles.financialContainer} >
        <View>
          <Text style={{color:'black'}}>Default name</Text>
          <TextInput style={styles.defaultInput} placeholder="Input caption" />
        </View>

        <View style={styles.nameContainer}>
          <View>
            <Text style={{color:'black'}}>Default name</Text>
            <TextInput style={styles.nameInput} placeholder="Input caption" />
          </View>
          <View>
            <Text style={{color:'black'}}>Default name</Text>
            <TextInput style={styles.nameInput} placeholder="Input caption" />
          </View>
        </View>
  
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{color:'white', fontSize:20}}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    alignItems:'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    marginBottom: 10,
  },
  dropDown: {
    alignItems: 'center',
    borderWidth: 1,
    width: '90%',
    borderRadius: 5,
    marginLeft: 20
  },
  nameContainer: {
    flexDirection: 'row',
    gap: 40,
    margin:10
  },
  nameInput: {
    borderBottomWidth: 1,
    width: 160,
  },
  addressInput: {
    borderBottomWidth: 1,
    width: 90,
  },
  defaultInput: {
    borderBottomWidth: 1,
    width: 360,
  },
  homeAddressContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20
  },
  financialContainer:{
    width: '100%',
    alignItems: 'center',
    marginTop: 20
  },
  button:{
    width:"90%",
    borderRadius: 5,
    backgroundColor:"blue",
    alignItems:'center',
    margin:20,
    height:45,
    justifyContent:'center'
  }
});
