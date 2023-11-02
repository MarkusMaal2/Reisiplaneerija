import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import SampleText from "../../../components/SampleText";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";

const Home = () => {
    const onClick = () => {
        console.log("Click event handler!");
    }
    return (
        <SafeAreaView style={styles.container}>
            <SampleText style={styles.text} message={"It works!!!"}></SampleText>
            <Button text={"Sample Button"} onClick={onClick} style={styles.button}></Button>
        </SafeAreaView>
    );
}

export default Home;