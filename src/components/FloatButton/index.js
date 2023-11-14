import React from "react";
import { TouchableOpacity, Text } from "react-native";
import style from "./style";

const FloatButton = ({onClick}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    )
}

export default FloatButton;