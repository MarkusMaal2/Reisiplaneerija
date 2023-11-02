import React from "react";
import { Text, View } from "react-native";

const SampleText = ({style, message}) => {
    return (
        <Text style={style}>{message}</Text>
    );
}

export default SampleText;