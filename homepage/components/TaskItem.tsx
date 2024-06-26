/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../style/style';


interface TaskItemProps {  //có thể kế thừa
    content: String;
    onDelete: Function;
}

// type TaskItemProps {  //không thể kế thừa
//     content: String;
// }

const TaskItem = (props: TaskItemProps) => {
    return (
        <TouchableOpacity onPress={() => props.onDelete()}>
            <View style={styles.item}>
                <View style={styles.subItem}>
                    <View style={styles.square} />
                    <Text>{props.content}</Text>
                </View>
                <View style={styles.circle} />
            </View>
        </TouchableOpacity>
    );
};

export {TaskItem}