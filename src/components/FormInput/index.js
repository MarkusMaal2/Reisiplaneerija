import React, { useState } from "react";
import { TextInput, TouchableOpacity, Pressable, Image, View, Text, Modal } from "react-native";

import styles from "./style";

const FormInput = ({type, label, style, dropDownItems = []}) => {
    /*
        this component support the following props:
        type - sets the type of form input
        label - sets the label to show above the input
    */
    const [isPickerVisible, toggleDropDown] = useState(false);

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
                    <Pressable style={styles.dropdown} onPress={() => toggleDropDown(true)}>
                        <View style={styles.textBox}></View>
                        <Image resizeMode="contain" source={require('../../assets/dropdown.png')} style={styles.dropdownIcon}></Image>
                    </Pressable>
                    <Modal transparent visible={isPickerVisible}>
                        <TouchableOpacity activeOpacity={1} onPress={() => toggleDropDown(false)} style={styles.modalWrapper}>
                            <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                                <Text style={styles.optionTitle}>Select {label}</Text>
                                {
                                    dropDownItems?.map(opt => {
                                        return (<Text key={opt + String(Math.random())}  onPress={() => console.log(opt)} style={[styles.optionText, {}]}>{opt}</Text>)
                                    })
                                }
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </Modal>
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