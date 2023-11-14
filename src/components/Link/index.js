import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Link = ({label, onClick}) => {
    return (
        <TouchableOpacity onPress={onClick} style={styles.container}>
            <Text style={styles.linkText}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Link;