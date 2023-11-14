import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Button = ({title, onPress, style}) => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, (style.length>1)?style[0]:style]}>
            <Text style={[styles.title, (style.length>1)?style[1]:null]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;