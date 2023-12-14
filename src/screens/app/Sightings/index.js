import React, {useState, useEffect} from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import SampleText from "../../../components/SampleText";
import styles from "./styles";
import Header from "../../../components/Header";
import FloatButton from "../../../components/FloatButton";
import SightList from "../../../components/SightList";
import DestinationFilter from "../../../components/DestinationFilter";


const Sightings = ({ navigation }) => {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const destinations = [
        { id: 1, name: 'Saaremaa' },
        { id: 2, name: 'Bali' },
        { id: 3, name: 'Italy' },
        // Add more destinations as needed
    ];

    const newSighting = () => {
        navigation.navigate('NewSighting')
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Sightings"}></Header>
            <DestinationFilter
                destinations={destinations}
                selectedDestination={selectedDestination}
                onSelectDestination={(destinationId) => setSelectedDestination(destinationId)}
            />
                <SightList navigation={navigation} selectedTrip={selectedDestination}></SightList>
            <FloatButton containerStyle={styles.button} onClick={newSighting}></FloatButton>
        </SafeAreaView>
    )
}

export default Sightings;