import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";
import SampleText from "../../../components/SampleText";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Header from "../../../components/Header";
import FloatButton from "../../../components/FloatButton";
import Trip from "../../../components/Trip";
import TripCarousel from "../../../components/TripCarousel";

const Home = ({navigation}) => {
    const [title, setTitle] = useState('It works!!!');
    const newTrip = () => {
        navigation.navigate('NewTrip');
    }

    const tripInfo = () => {
        navigation.navigate("TripInfo")
    }

    const futureTrips = [{name: "Bali", image: "../../../assets/sampleimg.png"},
                         {name: "Saaremaa", image: "../../../assets/sampleimg.png"},
                         {name: "Italy", image: "https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg"}]

    const pastTrips =  [{name: "Norra", image: "../../../assets/sampleimg.png"},
                        {name: "Horvaatia", image: "../../../assets/sampleimg.png"},
                        {name: "Italy", image: "https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg"}]
    return (
        <SafeAreaView style={styles.container}>
        <Header title={"My Trips"}></Header>
            <ScrollView>
                <View style={styles.container}>
                    <Trip location={"Italy"} label={"Ongoing"} onPress={tripInfo} imageURL={"https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg"}></Trip>
                    <TripCarousel trips={futureTrips} label={"Future"} onPress={tripInfo}></TripCarousel>
                    <TripCarousel trips={pastTrips} label={"Recent trips"} onPress={tripInfo}></TripCarousel>
                </View>
            </ScrollView>
            <FloatButton onClick={newTrip}></FloatButton>
        </SafeAreaView>
    );
}

export default Home;