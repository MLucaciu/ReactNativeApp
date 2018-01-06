import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';

export default class Oras extends React.Component {

    static propTypes = {
        oras: PropTypes.object.isRequired
    };

    render() {
        return (
            <View style={[styles.post]}>
                <View style={styles.info}>
                    <Text style={styles.title}>{this.props.oras.Nume}</Text>
                    <Text>{this.props.oras.Descriere}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    post: {
        marginHorizontal: 12,
        marginTop: 12,
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
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});