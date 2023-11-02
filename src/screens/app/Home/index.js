import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import SampleText from "../../../components/SampleText";

const Home = () => {
    return (
        <View style={styles.container}>
            <SampleText style={styles.text} message={"It works!!!"}></SampleText>
        </View>
    );
}

export default Home;