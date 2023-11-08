import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Input from "../../../components/Input";

const SignUp = () => {
    return (
        <SafeAreaView style={styles.bg}>
            <Input label="Name"></Input>
            <Input label="Email"></Input>
            <Input label="Password"></Input>
        </SafeAreaView>
    )
}

export default SignUp;