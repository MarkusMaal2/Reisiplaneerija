import React from "react";
import { View } from "react-native";
import SampleText from "../../../components/SampleText";
import styles from "./styles";

const Notes = () => {
    return (
        <View style={styles.container}>
            <SampleText message={"Notes screen"} style={styles.text}></SampleText>
        </View>
    )
}

export default Notes