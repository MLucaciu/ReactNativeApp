import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class Register extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
      email : '',
    }
  }

  componentDidMount(){

  }


  render() {
    return (
      <KeyboardAvoidingView behavior = 'padding' style = {styles.wrapper}>
      <TouchableOpacity style = {styles.buttonBack} onPress = {this.goBack}>
        <Image
          source={require('./big_arrow_left.png')}
          style={styles.ImageIconStyleV2}
          />

      </TouchableOpacity>
        <View style = {styles.container}>

          <Text style = {styles.header} > - REGISTER - </Text>

          <TextInput style = {styles.textInput} placeholder = 'Username'
                     onChangeText = {(username) => this.setState ({username})}
                     underlineColorAndroid = 'transparent' />

          <TextInput style = {styles.passwordInput} secureTextEntry = {true} placeholder = 'Password'
                      onChangeText = {(password) => this.setState ({password})}
                      underlineColorAndroid = 'transparent' />

          <TextInput style = {styles.textInput} placeholder = 'Email'
                      onChangeText = {(email) => this.setState ({email})}
                      underlineColorAndroid = 'transparent' />

          <TouchableOpacity style = {styles.button}
                  onPress = {this.login}>
                  <Text> Register </Text>
          </TouchableOpacity>


        </View>


      </KeyboardAvoidingView>
    );
  }

  goBack = () => {
    this.props.navigation.navigate('Home');
  }

  login = () => {

    var data = 'username=' + this.state.username + '&password=' + this.state.password + '&email=' + this.state.email;

    fetch('https://travian-npc.000webhostapp.com/Register.php', {
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/x-www-form-urlencoded',
      },
      body : data
    })
    .then((response) => response.json())
    .then((res ) => {
      if (res.succes === true){

        AsyncStorage.setItem('user', res.username);
        this.props.navigation.navigate('Home');
      }
      else{
        alert(res.errors);
      }
    })
    .done();
  }


}


const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
    backgroundColor : '#228b22',
  },
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#228b22',
    paddingLeft : 40,
    paddingRight : 40,
  },

  header : {
    fontSize : 24,
    marginBottom : 60,
    color : '#fff',
    fontWeight : 'bold',
  },

  textInput : {
    alignSelf : 'stretch',
    padding : 16,
    marginBottom : 20,
    backgroundColor : '#fff',
  },

  passwordInput : {
      alignSelf : 'stretch',
      padding : 16,
      marginBottom : 20,
      backgroundColor : '#fff',

    },

    button : {
      alignSelf : 'stretch',
      backgroundColor : '#01c853',
      padding : 20,
      marginTop : 10,
      alignItems : 'center',

    },
    buttonBack : {
      backgroundColor : '#2896d3',
      justifyContent : 'center',
      alignItems : 'center',
      width : 75,
      height : 50,
      marginTop : 20,
      marginLeft : 1,
    },
    ImageIconStyleV2: {

     padding: 0,
     height: 50,
     width: 60
    },
});
