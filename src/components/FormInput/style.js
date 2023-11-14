import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default styles = StyleSheet.create({
    label: {
        fontFamily: 'Inria Serif',
        marginBottom: 10,
    },

    textBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 3,
        backgroundColor: colors.white,
        minHeight: 40,
        padding: 10,
    }
})