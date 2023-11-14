import React from "react";
import { Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Link from "../../../components/Link";

const SignUp = ({navigation}) => {
    const signInHandler = () => {
        navigation.navigate('SignInScreen');
    }

    const signUpHandler = () => {
        console.log("signUpHandler");
    }

    return (
        <SafeAreaView style={styles.bg}>
            <View style={styles.imgContainer}>
                <Image resizeMode="contain" source={require('../../../assets/road.png')} style={styles.road}></Image>
            </View>
            <Input label="Name"></Input>
            <Input label="Email"></Input>
            <Input label="Password" password={true}></Input>
            <Button title="Sign up" style={[styles.smallButton, styles.buttonText]} onPress={signUpHandler}></Button>
            <View style={styles.notice}>
                <Text style={styles.noticeText}>Already have an</Text>
                <Text style={styles.noticeText}>account?</Text>
            </View>
            <Link onClick={signInHandler} label={"Sign in"}></Link>
        </SafeAreaView>
    )
}

export default SignUp;