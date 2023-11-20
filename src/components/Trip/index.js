import React from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity, Image } from "react-native";

const Trip = ({label, location, imageURL, onPress}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity onPress={onPress} style={styles.thumbnail}>
                <Image resizeMode="contain" source={{uri: imageURL}} style={styles.thumbnailImage}></Image>
                <Text style={styles.locationLabel}>{location}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Trip