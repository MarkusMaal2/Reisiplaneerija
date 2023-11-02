import React from "react";
import { View } from "react-native";
import SimpleText from "../../../components/SimpleText";
import styles from "./styles";

const Notes = () => {
    return (
        <View style={styles.container}>
            <SimpleText message={"Notes screen"} style={styles.text}></SimpleText>
        </View>
    )
}

export default Notes