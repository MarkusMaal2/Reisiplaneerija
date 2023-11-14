import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import SampleText from "../../../components/SampleText";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Header from "../../../components/Header";

const Home = () => {
    const [title, setTitle] = useState('It works!!!');
    const onClick = () => {
        console.log("Click event handler!");
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"My Trips"}></Header>
        </SafeAreaView>
    );
}

export default Home;