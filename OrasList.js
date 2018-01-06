import React from 'react';
import Controller from './Controller';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import Oras from './Oras';

export default class OrasList extends React.Component {

    static navigationOptions = {
        title: 'Oras List'
    };

    state = {
        isLoggedIn: true,
        orase: [],
    };

    /**
     * Logic executed when component mounts
     *
     * @returns {Promise.<void>}
     */
    async componentDidMount(){
        const orase = await Controller.getOrase();
        this.setState({orase});
    };

    /**
     *  Clear isLoggedIn flag > Cause component to re-render
     */
    clearLoggedInStatus(){
        this.setState({isLoggedIn: false});
    }

    render() {
        if(this.state.isLoggedIn === true){
            console.log('am trecut de primul');
            if(this.state.orase){
                console.log('al doilea');
                let {navigate} = this.props.navigation;
                return (
                    <View style={[styles.container]}>
                        <View style={[styles.list]}>
                            <FlatList
                                data={this.state.orase}
                                renderItem={({item}) =>
                                    <TouchableOpacity style={[styles.post]} onPress={() => navigate('OrasDetail',{item})}>
                                        <Oras oras={item} />
                                    </TouchableOpacity>
                                }
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                    </View>
                )
            }else{
                return (
                    <View style={[styles.loadingContainer]}>
                        <Text style={[styles.loadingText]}>Loading ...</Text>
                    </View>
                )
            }
        }else{
            return (
                <View>
                    <Text>You must be logged in to see this page</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#eee',
    },
    list: {
        marginTop: 10,
        backgroundColor: '#eee',
        width: '100%',
    },
    loadingContainer: {
        flex:1,
        justifyContent: 'center',
    },
    loadingText: {
        fontSize: 20,
        textAlign: 'center'
    }
});