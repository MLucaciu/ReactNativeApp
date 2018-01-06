import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Animated,
  Easing,
  TouchableOpacity,
  Image,
  NetInfo,

} from 'react-native';

import {Pie} from 'react-native-pathjs-charts';
import Controller from './Controller';
import {StackNavigator} from 'react-navigation';

export default class Status extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username : ''
    }
   // console.log('ctr');
  }

  componentWillMount(){
     this.animatedValue = new Animated.Value(100);
     this.loadInitialState().done();
   // console.log('will mount');
  }


  componentDidMount(){
    this.loadInitialState().done();

//    console.log('did mount');
  }

   async componentDidMount(){
 var i = 0;
    var array = [];

        const orase = await Controller.getOrase();
        //console.log("dadada");
        //console.log(orase);
        this.setState({orase});

         for(i=0; i < this.state.orase.length; i++){
          var pop = parseInt(this.state.orase[i].Populatie);
      array.push({
        "name" : this.state.orase[i].Nume,
        "population" : pop
      });
    }
console.log("pentru chart");
    console.log(array);
    this.setState({arr : array});
       // console.log('async did mount');
    };

  loadInitialState = async () => {
   // console.log('load initial state');
    

     this.loadData();
      Animated.timing(this.animatedValue, {
        toValue : 650,
        duration : 3000,
        easing : Easing.ease
      }).start();
    }
  




  loadData = () => {
   
     //let item = this.props.navigation.state.params.item;
    console.log("load data");
    //console.log("orasele:");

    

  //  console.log(this.state.orase);
   

  }


  render() {

    //console.log('render');
    //this.loadData();
   const animatedStyle = {height : this.animatedValue}
   return (


       <Animated.View style = {[styles.container,animatedStyle]}>
      <TouchableOpacity style = {styles.buttonBack} onPress = {this.goBack}>
        <Image
          source={require('./big_arrow_left.png')}
          style={styles.ImageIconStyleV2}
          />

      </TouchableOpacity>
        <Text style = {styles.header}>- Grafic cu orasele dupa populatii -</Text>
        <View style = {{marginTop : 100}}>

        <Pie
          data={this.state.arr}
          options={options}
          accessorKey="population" />
          </View>
         </Animated.View>



   );
 }

 goBack = () => {
   this.props.navigation.navigate('Home');
 }


}



    let options = {
      margin: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      width: 350,
      height: 350,
      color: '#32CD32',
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 10,
        fontWeight: true,
        color: '#ECF0F1'
      }
    }


const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
    backgroundColor : '#2896d3',
  },
  container : {

    backgroundColor : '#2896d3',

  },
  header : {
    fontSize : 14,
    marginTop : 15,
    color : '#fff',
    fontWeight : 'bold',
    alignSelf : 'center'
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
