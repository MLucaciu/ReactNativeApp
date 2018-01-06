import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class OrasDetail extends React.Component {
    static navigationOptions = {
        title: 'Oras View'
    };

    render() {
        let item = this.props.navigation.state.params.item;
        return (

            <View style={[styles.post]}>
                <View style={styles.info}>
                    <Text style={styles.title}>{item.Nume}</Text>
                    <Text>{item.Descriere}</Text>
                    <Text>{"Populatie : \n" + item.Populatie}</Text>
                    <Text>{"Muzee : \n" + item.Muzee}</Text>
                    <Text>{"Primar : \n" + item.Primar}</Text>
                    <Text>{"Tara : \n" + item.Tara}</Text>
                    <Text>{"Densitatea populatiei : \n" + item.Densitate}</Text>
                    <Text>{"Personalitati : \n" + item.Personalitati}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    post: {
        marginHorizontal: 12,
        marginTop: 30,
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
    },
    info: {
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#bbb',
        borderWidth: 1,
        borderTopWidth: 0,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});