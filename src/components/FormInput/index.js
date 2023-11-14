import React from "react";
import { TextInput, TouchableOpacity, Image, View, Text } from "react-native";

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
            return (
                <View style={[styles.container, style]}>
                    <Text style={styles.label}>{label}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textBox}></TextInput>
                        <Image resizeMode="contain" source={require('../../assets/clock.png')} style={styles.clock}></Image>
                    </View>
                </View>
            );
        case "select":
            return (
                <View style={[styles.container, style]}>
                    <Text style={styles.label}>{label}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textBox}></TextInput>
                        <Image resizeMode="contain" source={require('../../assets/dropdown.png')} style={styles.dropdownIcon}></Image>
                    </View>
                </View>
            );
        case "location":
            return (
                <View style={[styles.container, style]}>
                    <Text style={styles.label}>{label}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textBox}></TextInput>
                        <Image resizeMode="contain" source={require('../../assets/pin.png')} style={styles.pinIcon}></Image>
                    </View>
                </View>
            );
        case "textarea":
            break;
    }
}

export default FormInput;