// TripFilter.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, FlatList, Pressable } from 'react-native';
import styles from './styles';

const DestinationFilter = ({ destinations, selectedDestination, onSelectDestination, style }) => {
    const [isPickerVisible, setPickerVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const togglePicker = () => setPickerVisible(!isPickerVisible);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        onSelectDestination(option.id);
        setPickerVisible(false);
    };

    const handleClearFilter = () => {
        setSelectedOption(null);
        onSelectDestination(null);
        setPickerVisible(false);
    }

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>Filter by Destination</Text>
            <TouchableOpacity style={styles.textBox} onPress={togglePicker}>
                <Text>{selectedOption ? selectedOption.name : 'Select Destination'}</Text>
                <Image
                    resizeMode="contain"
                    source={require('../../assets/dropdown.png')} // Adjust the path based on your project structure
                    style={styles.dropdownIcon}
                />
            </TouchableOpacity>

            <Modal transparent visible={isPickerVisible}>
                <TouchableOpacity activeOpacity={1} onPress={togglePicker} style={styles.modalWrapper}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                        <Text style={styles.optionTitle}>Select Destination</Text>
                        {destinations.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                style={[
                                    styles.optionText,
                                    item.id === selectedOption?.id && styles.selectedOption,
                                ]}
                                onPress={() => handleSelectOption(item)}
                            >
                                <Text>{item.name}</Text>
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
};

export default DestinationFilter;