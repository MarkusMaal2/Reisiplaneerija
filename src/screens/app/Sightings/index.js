import React from "react";
import { View } from "react-native";
import SimpleText from "../../../components/SimpleText";
import styles from "./styles";

const Sightings = () => {
    return (
        <View style={styles.container}>
            <SimpleText style={styles.text} message="Sightings screen"></SimpleText>
        </View>
    )
}

export default Sightings