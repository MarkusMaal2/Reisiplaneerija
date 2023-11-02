import React from "react";
import { View, SafeAreaView } from "react-native";
import SampleText from "../../../components/SampleText";
import styles from "./styles";

const Notes = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SampleText message={"Notes screen"} style={styles.text}></SampleText>
        </SafeAreaView>
    )
}

export default Notes