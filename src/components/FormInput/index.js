import React from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

import styles from "./style";

const FormInput = ({type, label, style}) => {
    /*
        this component support the following props:
        type - sets the type of form input
        label - sets the label to show above the input
    */
    switch (type) {
        case "text":
            return (
                <View style={[styles.container, style]}>
                    <Text style={styles.label}>{label}</Text>
                    <TextInput style={styles.textBox}></TextInput>
                </View>
            );
        case "datetime":
            break;
        case "select":
            break;
        case "location":
            break;
        case "textarea":
            break;
    }
}

export default FormInput;