/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style/style';

class Homepage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>To Do List</Text>
        <ScrollView style={{marginTop:24}}>
          <View style={styles.item}>
            <View style={styles.subItem}>
              <View style={styles.square}>

              </View>
              <Text>Like</Text>
            </View>
            <View style={styles.circle}>

            </View>
          </View>
        </ScrollView>

        <View style={styles.wrapper}>
          <TextInput style={styles.input} placeholder="Add to do" />
          <TouchableOpacity style={styles.btn}>
            <Image style={styles.img} source={require('../assets/add.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Homepage;
