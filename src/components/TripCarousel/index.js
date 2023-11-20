import React from "react";
import { View, TouchableOpacity, Text, ScrollView, FlatList, Dimensions, Image } from "react-native";
import styles from "./styles";


const {width} = Dimensions.get('window');
const TripCarousel = ({label, trips, onPress}) => {
    const handleScrollEnd = (e) => {
        const horizontalOffset = e.nativeEvent.contentOffset.x;
    }

    const renderTrips = ({item}) => {
        return (
            <TouchableOpacity onPress={onPress} style={styles.thumbnail}>
                <Image resizeMode="contain" source={{uri: item.image}} style={styles.thumbnailImage}></Image>
                <Text style={styles.locationLabel}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <FlatList horizontal style={styles.list} data={trips} renderItem={renderTrips}/>
        </View>
    )
}

export default TripCarousel