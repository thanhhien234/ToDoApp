/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style/style';
import {TaskItem} from './components/TaskItem';

interface State {
  inputContent: string;
  listItem: string[];
}

class Homepage extends Component<{}, State> {  //sử dụng interface State
  private listItem: string[];

  constructor(props: any) {
    super(props);
    this.state = {  //giá trị thuộc tính của state
      inputContent: '',
      listItem: [],
    };
    this.listItem = []; //biến số thông thường
  }

  _onPress = () => {
    const { inputContent} = this.state;
    if (inputContent.trim() !== '') {
      this.listItem.push(inputContent);
      this.setState({  //cập nhật giá trị thuộc tính của state
        listItem: [...this.listItem],
        inputContent: '', // Clear input after adding task
      });
    }
  };

  _onTextChange = (text: string) => {  //khi text change thì thay đổi giá trị của inputContent trong state
    this.setState({ inputContent: text });
  };

  _renderTaskItems = () => {  //lấy giá trị từ state để render
    return this.state.listItem.map((item, index) => (
      <TaskItem content={item} key={index} />
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>To Do List</Text>
        <ScrollView style={{ marginTop: 24 }}>
          {this._renderTaskItems()}
        </ScrollView>

        <View style={styles.wrapper}>
          <TextInput
            style={styles.input}
            placeholder="Add to do"
            onChangeText={this._onTextChange}
            value={this.state.inputContent}
          />
          <TouchableOpacity style={styles.btn} onPress={this._onPress}>
            <Image style={styles.img} source={require('../assets/add.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Homepage;
