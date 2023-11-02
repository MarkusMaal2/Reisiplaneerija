import React from "react";
import { View, SafeAreaView } from "react-native";
import SampleText from "../../../components/SampleText";
import styles from "./styles";

const Sightings = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SampleText style={styles.text} message="Sightings screen"></SampleText>
        </SafeAreaView>
    )
}

export default Sightings