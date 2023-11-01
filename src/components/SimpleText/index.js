import React from "react";
import { Text, View } from "react-native";

const SimpleText = ({style, message}) => {
    return (
        <Text style={style}>{message}</Text>
    );
}

export default SimpleText;