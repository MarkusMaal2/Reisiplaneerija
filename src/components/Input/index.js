import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "./styles";

const Input = ({label, placeholder, password, style}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder={placeholder} style={styles.input} secureTextEntry={password??false} />
            </View>
        </View>
    )    
}

export default Input