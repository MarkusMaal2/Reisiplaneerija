import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Button = ({onClick, text, style}) => {
    return (
        <TouchableOpacity onPress={onClick} style={[styles.container, style]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;