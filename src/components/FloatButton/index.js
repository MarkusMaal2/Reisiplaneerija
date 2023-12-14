import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

const FloatButton = ({containerStyle, onClick}) => {
    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={onClick}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    )
}

export default FloatButton;