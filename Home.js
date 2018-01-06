import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  ToolbarAndroid,
  TextInput,
  Image,
  FlatList,
  NetInfo,

} from 'react-native';

import Controller from './Controller';


import Grafic from './Grafic';
import {StackNavigator} from 'react-navigation';


export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username : '',
      stareButonGraf : false,
      stareButonLista : false,
      stareButonLogOut : false,
      searchPattern : '',
    }
  }
  componentDidMount(){
    this.loadInitialState().done();

  }
   async componentDidMount(){
        const orase = await Controller.getOrase();
        this.setState({orase});
    };


  loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    this.state.username = value;
  }

  render() {
    return (

      <View style = {styles.container}>
        <Text style = {styles.header} > - Bine ai venit {this.state.username} - </Text>

        <View style = {styles.toolbar}>
          <TouchableOpacity style = {this.state.stareButonLista ? styles.buttonApasat : styles.buttonMenu}
                  onPress = {this.lista}>
                  <Text> Lista de Orase </Text>
                  </TouchableOpacity>
          <TouchableOpacity style = {this.state.stareButonLogOut ? styles.buttonApasat : styles.buttonMenu}
                onPress = {this.logout}>
                <Text> Log out </Text>
                </TouchableOpacity>
         <TouchableOpacity style = {this.state.stareButonGraf ? styles.buttonApasat : styles.buttonMenu}
          onPress = {this.graf}>
          <Text> Grafic cu populatiile </Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.searchbar}>
          <TextInput style = {styles.textInput} placeholder = '   Cauta un oras ...'
                    onChangeText = {(searchPattern) => this.setState ({searchPattern})}
                    underlineColorAndroid = 'transparent' />
          <TouchableOpacity style = {styles.buttonSearch}
                    onPress = {this.searchUsers}>
                    <Image
                      source={require('./searchicon.png')}
                      style={styles.ImageIconStyle}
          />
          </TouchableOpacity>
        </View>

       



      </View>
    );
  }

  searchUsers = () => {
    var pattern = this.state.searchPattern;

    if(pattern){
      if(pattern === "All" || pattern === "all"){
        this.setState({friends : this.state.allFriends})
      }
      else{
        var i = 0;
        var searched = [];
        for(i = 0; i < this.state.allFriends.length; i++){
          if(this.state.orase[i].Nume.startsWith(pattern)){
            searched.push(this.state.orase[i]);
          }
        }
        //alert(searched.length);
        this.setState({friends : searched});
      }
    }
    else{
      alert("Enter something.");
    }

  }


  lista = () => {

    this.setState({stareButonLista : true});
    this.setState({stareButonLogOut : false});
    this.setState({ stareButonGraf: false });
    this.props.navigation.navigate('OrasList');
  }

  logout = () => {

    this.setState({stareButonGraf : false});
    this.setState({stareButonLista : false});
    this.setState({stareButonLogOut : true});
    AsyncStorage.removeItem('user');
    this.props.navigation.navigate('LogIn');
  }

  graf = () => {
    console.log("spre grafic");
    this.setState({stareButonGraf : true});
    this.setState({stareButonLista : false});
    this.setState({stareButonLogOut : false});
    AsyncStorage.removeItem('user');
    this.props.navigation.navigate('Grafic');
  }



}


const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
  },
  container : {
    flex : 1,
    backgroundColor : '#2896d3',
  },

  friends : {
    flex : 1,
    marginTop : 5
  },

  textInput : {
    alignSelf : 'center',
    marginTop : 150,
    backgroundColor : '#2896d3',
  },
  header : {
    fontSize : 24,
    marginTop : 30,
    color : '#fff',
    fontWeight : 'bold',
    alignSelf : 'center'
  },

  buttonMenu : {
    backgroundColor : '#01c853',
    marginTop :0,
    marginLeft : 1,
    justifyContent : 'center',
    alignItems : 'center',
    width : 125,
    height : 50
  },
  buttonSearch : {
    backgroundColor : '#2896d3',
    marginTop :0,
    marginLeft : 1,
    justifyContent : 'center',
    alignItems : 'center',
    width : 75,
    height : 50
  },
  buttonGo : {
    backgroundColor : '#2896d3',
    justifyContent : 'center',
    alignItems : 'center',
    width : 75,
    height : 50,
    flex : 1,
    alignSelf : 'flex-end',
  },
  buttonApasat : {
    backgroundColor : '#008000',
    marginTop :0,
    marginLeft : 1,
    justifyContent : 'center',
    alignItems : 'center',
    width : 125,
    height : 50
  },
  toolbar : {
    marginTop : 30,
    flexDirection:'row',
  },
  searchbar : {
    marginTop : 10,
    flexDirection:'row',
  },
  textInput : {
    alignSelf : 'stretch',
    backgroundColor : '#fff',
    width : 290,
    height : 50,
    borderRadius : 20,

  },
  ImageIconStyle: {
   padding: 0,
   margin: 5,
   height: 50,
   width: 50,
   resizeMode : 'stretch',
  },
  ImageIconStyleV2: {

   padding: 0,
   height: 50,
   width: 50
  },
});
