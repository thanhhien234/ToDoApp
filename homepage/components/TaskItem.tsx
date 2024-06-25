/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text} from 'react-native';
import {styles} from '../style/style';


interface TaskItemProps {  //có thể kế thừa
    content: String;
}

// type TaskItemProps {  //không thể kế thừa
//     content: String;
// }

const TaskItem = (props: TaskItemProps) => {
    return (
        <View style={styles.item}>
            <View style={styles.subItem}>
                <View style={styles.square} />
                <Text>{props.content}</Text>
            </View>
            <View style={styles.circle} />
        </View>
    );
};

export {TaskItem}