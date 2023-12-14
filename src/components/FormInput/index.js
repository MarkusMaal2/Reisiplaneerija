import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, Pressable, Image, View, Text, Modal } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import styles from "./style";

const FormInput = ({ type, label, style, dropDownItems = [], value }) => {
    /*
        this component support the following props:
        type - sets the type of form input
        label - sets the label to show above the input
    */
    const [isPickerVisible, toggleDropDown] = useState(false);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);

    const uploadNewImage = async () => {
        setLoading(true);
        const result = await launchImageLibrary();

        if (result?.assets?.length > 0) {
            const newImage = result.assets[0];
            console.log(newImage)
            setImages([newImage]);
            setLoading(false);
        } else {
            setLoading(false);
        }
    };
    const handleSelectOption = (option) => {
        setSelectedOption(option);
        toggleDropDown(false);
    };

    const handleClearFilter = () => {
        setSelectedOption(null);
        toggleDropDown(false);
    }



    switch (type) {
        case "text":
            return (
                <View style={[styles.container, style]}>
                    <Text style={styles.label}>{label}</Text>
                    <TextInput style={styles.textBox} value={value}></TextInput>
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
                        <View style={styles.textBox}>
                            <Text>{selectedOption ? selectedOption.name : `Select ${label}`}</Text>
                        </View>
                        <Image resizeMode="contain" source={require('../../assets/dropdown.png')} style={styles.dropdownIcon}></Image>
                    </Pressable>
                    <Modal transparent visible={isPickerVisible}>
                        <TouchableOpacity activeOpacity={1} onPress={() => toggleDropDown(false)} style={styles.modalWrapper}>
                            <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                                <Text style={styles.optionTitle}>Select {label}</Text>
                                {dropDownItems?.map((opt) => (
                                    <TouchableOpacity
                                        key={opt.id}
                                        style={[
                                            styles.optionText,
                                            opt.id === selectedOption?.id && styles.selectedOption,
                                        ]}
                                        onPress={() => handleSelectOption(opt)}
                                    >
                                        <Text>{opt.name}</Text>
                                    </TouchableOpacity>
                                ))}
                                {selectedOption && (
                                    <TouchableOpacity style={styles.clearButton} onPress={handleClearFilter}>
                                        <Text>Clear Filter</Text>
                                    </TouchableOpacity>
                                )}
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
                        <TextInput style={styles.textBox} value={value}></TextInput>
                        <Image resizeMode="contain" source={require('../../assets/pin.png')} style={styles.pinIcon}></Image>
                    </View>
                </View>
            );
        case "image":
            return (
                <View style={[styles.container, style]}>
                    <Text style={styles.label}>{label}</Text>
                    <View style={styles.inputContainer}>
                        {images.length > 0 ? (
                            <View style={styles.uploadedImageContainer}>
                                <Image source={{ uri: images[0].uri }} style={styles.uploadedImage} />
                                <TouchableOpacity style={styles.editOverlay} onPress={uploadNewImage}>
                                    <Image source={require('../../assets/Pliiats.png')} style={styles.editIcon} />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TouchableOpacity style={styles.uploadContainer} onPress={uploadNewImage}>
                                <View style={styles.uploadCircle}>
                                    <Text style={styles.uploadPlus}>+</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            )
        case "textarea":
            break;
    }
}

export default FormInput;