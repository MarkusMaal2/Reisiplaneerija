import React from "react";
import { SafeAreaView, View } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";
import FormInput from "../../../components/FormInput";
import Button from "../../../components/Button";

const NewTrip = ({ navigation }) => {

    const back = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="New Trip" onBack={back}></Header>
            <FormInput type="location" label="Destination" style={styles.fullWidthField}></FormInput>
            <View style={styles.doubleInput}>
                <FormInput type="datetime" label="From:" style={styles.halfWidthField}></FormInput>
                <FormInput type="datetime" label="To:" style={styles.halfWidthField}></FormInput>
            </View>
            <FormInput type="select" label="Transportation" style={styles.fullWidthField} dropDownItems={[{ id: 1, name: 'Type A' }, { id: 2, name: 'Type B' }, { id: 3, name: 'Type C' }]}></FormInput>
            <FormInput type="location" label="Housing" style={styles.fullWidthField}></FormInput>
            <FormInput type="text" label="Goals" style={styles.fullWidthField}></FormInput>
            <Button title={"Add trip"} style={[styles.button, styles.buttonFontSize]}></Button>
        </SafeAreaView>
    )
}

export default NewTrip;