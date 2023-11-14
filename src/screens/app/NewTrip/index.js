import React from "react";
import { SafeAreaView, View } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";
import FormInput from "../../../components/FormInput";
import Button from "../../../components/Button";

const NewTrip = ({navigation}) => {

    const back = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="New Trip" onBack={back}></Header>
            <FormInput type="text" label="Destination" style={styles.fullWidthField}></FormInput>
            <View style={styles.doubleInput}>
                <FormInput type="text" label="Time" style={styles.halfWidthField}></FormInput>
                <FormInput type="text" label="Duration" style={styles.halfWidthField}></FormInput>
            </View>
            <FormInput type="text" label="Transportation" style={styles.fullWidthField}></FormInput>
            <FormInput type="text" label="Housing" style={styles.fullWidthField}></FormInput>
            <FormInput type="text" label="Goals" style={styles.fullWidthField}></FormInput>
            <Button title={"Add trip"} style={[styles.button, styles.buttonFontSize]}></Button>
        </SafeAreaView>
    )
}

export default NewTrip;