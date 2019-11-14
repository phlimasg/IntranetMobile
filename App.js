import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, StatusBar, SafeAreaView,TextInput, Button, Alert } from 'react-native';





function AlertLogin() {
  Alert.alert('Login de Alerta')
}

function getLivros() {
  return fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((responseJson) => {
      Alert.alert('Login de Alerta')
      return responseJson.movies;
    })
    .catch((error) => {
      Alert.alert('Login de error')
      console.error(error);
    });
}

export default class App extends Component {
  
  render() {    
    return (
      <>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <SafeAreaView>
        <View>
          <Image 
          source={{uri:'https://img.freepik.com/free-vector/gradient-geometric-shape-background_78532-374.jpg'}}
          style={styles.loginLogo}
          />
            <View style={styles.container}>
              <Text style={styles.label}>Usuário:</Text>
              <TextInput autoFocus={true} placeholder="Seu CPF" keyboardType='number-pad' style={styles.input}></TextInput>
              <Text style={styles.label}>Senha:</Text>
              <TextInput placeholder="Sua Senha" secureTextEntry={true}  style={styles.input} ></TextInput>
                <View style={styles.button}>
                  <Button title='Entrar' onPress={() => getLivros()} style={{fontSize:25}}/>
                </View>
            </View>
        </View>      
      </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  loginLogo:{
    width:"100%",
    height:"40%"
  },
  container: {
    //flex: 1,
    padding: 15,
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    
  },
  input: {     
    fontSize: 24,
    padding: 15,
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 1,
    width: "100%",    
  },
  label: {
    fontWeight:'bold',
    fontSize: 18    
  },
  button: {    
    width: '100%',
    paddingTop:15,            
  }

});