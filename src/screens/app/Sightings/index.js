import React from "react";
import { View } from "react-native";
import SampleText from "../../../components/SampleText";
import styles from "./styles";

const Sightings = () => {
    return (
        <View style={styles.container}>
            <SampleText style={styles.text} message="Sightings screen"></SampleText>
        </View>
    )
}

export default Sightings