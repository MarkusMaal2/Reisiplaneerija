import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import SampleText from "../../../components/SampleText";

const Splash = ({navigation}) => {
    const handleSignUp = () => {
        navigation.navigate('SignUpScreen');
    }

    const handleSignIn = () => {
        navigation.navigate('SignInScreen');
    }

    return (
        <SafeAreaView style={styles.bg}>
            <View style={styles.container}>
                <Image resizeMode="contain" source={require('../../../assets/bg_lennuk.png')} style={styles.bg_plane}></Image>
                <Image resizeMode="contain" source={require('../../../assets/Lennuk.png')} style={styles.plane}></Image>
            </View>
            <View style={styles.buttons}>
                <Button title="Sign Up" onPress={handleSignUp} style={styles.button}></Button>
                <Button title="Sign In" onPress={handleSignIn} style={styles.button}></Button>
            </View>
        </SafeAreaView>
    )
}

export default Splash;