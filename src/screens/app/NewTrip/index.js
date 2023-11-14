import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";

const NewTrip = ({navigation}) => {

    const back = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="New Trip" onBack={back}></Header>
        </SafeAreaView>
    )
}

export default NewTrip;