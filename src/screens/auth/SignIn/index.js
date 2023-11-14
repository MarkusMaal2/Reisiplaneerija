import React from "react";
import { Text, SafeAreaView, View, Image } from "react-native";
import styles from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Link from "../../../components/Link";

const SignIn = ({navigation}) => {
    const signInHandler = () => {

    }

    const signUpHandler = () => {
        navigation.navigate('SignUpScreen');
    }

    return (
        <SafeAreaView style={styles.bg}>
            <Input label="Email" style={styles.firstField}></Input>
            <Input label="Password" password={true}></Input>
            <Button title="Sign in" style={[styles.smallButton, styles.buttonText]} onPress={signInHandler}></Button>
            <View style={styles.notice}>
                <Text style={styles.noticeText}>Don't have an</Text>
                <Text style={styles.noticeText}>account?</Text>
            </View>
            <Link onClick={signUpHandler} label={"Sign up"}></Link>
            <View style={styles.imgContainer}>
                <Image resizeMode="contain" source={require('../../../assets/Tent.png')} style={styles.tent}></Image>
            </View>
        </SafeAreaView>
    )
}

export default SignIn;