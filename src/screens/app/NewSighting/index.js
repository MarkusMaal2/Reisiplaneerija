import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";
import FormInput from "../../../components/FormInput";
import Button from "../../../components/Button";

const NewSighting = ({ navigation }) => {

    const back = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="New Sighting" onBack={back}></Header>
            <FormInput type="select" label="Trip" style={styles.fullWidthField} dropDownItems={["Saaremaa", "Bali", "Italy"]}></FormInput>
            <FormInput type="location" label="Location" style={styles.fullWidthField}></FormInput>
            <FormInput type="text" label="Name of Sighting" style={styles.fullWidthField}></FormInput>
            <FormInput type="image" label="Image" style={styles.fullWidthField}></FormInput>
            <Button title={"Add Sighting"} style={[styles.button, styles.buttonFontSize]}></Button>
        </SafeAreaView>
    )
}

export default NewSighting;