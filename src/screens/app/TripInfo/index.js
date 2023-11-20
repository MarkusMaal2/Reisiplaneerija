import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Header from "../../../components/Header";

const TripInfo = ({navigation}) => {
    const back = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Trip info" onBack={back}></Header>
        </SafeAreaView>
    )
}

export default TripInfo