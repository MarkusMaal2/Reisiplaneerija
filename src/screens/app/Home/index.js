import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import SimpleText from "../../../components/SimpleText";

const Home = () => {
    return (
        <View style={styles.container}>
            <SimpleText style={styles.text} message="It works!!!"></SimpleText>
        </View>
    );
}

export default Home;