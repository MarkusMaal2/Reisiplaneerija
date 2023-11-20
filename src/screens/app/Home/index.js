import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";
import SampleText from "../../../components/SampleText";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Header from "../../../components/Header";
import FloatButton from "../../../components/FloatButton";
import Trip from "../../../components/Trip";

const Home = ({navigation}) => {
    const [title, setTitle] = useState('It works!!!');
    const newTrip = () => {
        navigation.navigate('NewTrip');
    }

    const tapTest = () => {
        console.log("Tap test")
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Header title={"My Trips"}></Header>
                <ScrollView>
                    <Trip location={"Italy"} label={"Ongoing"} onPress={tapTest} imageURL={"../../assets/sampleimg.png"}></Trip>
                </ScrollView>
                <FloatButton onClick={newTrip}></FloatButton>
            </View>
        </SafeAreaView>
    );
}

export default Home;