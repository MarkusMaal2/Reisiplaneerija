import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./styles";

const Header = ({title, onBack}) => {
    return (
        <View style={styles.container}>
            {onBack?(<TouchableOpacity onPress={onBack}>
                <Image resizeMode="contain" source={require('../../assets/Tagasi.png')} style={styles.arrow}></Image>
            </TouchableOpacity>):null}
            <Text style={styles.title}>{title}</Text>
            <View style={styles.line}></View>
        </View>
    )
}

export default Header;