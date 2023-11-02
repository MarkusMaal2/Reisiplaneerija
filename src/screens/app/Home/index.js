import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import SampleText from "../../../components/SampleText";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SampleText style={styles.text} message={"It works!!!"}></SampleText>
        </SafeAreaView>
    );
}

export default Home;