import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 3,
        backgroundColor: colors.white,
    },
    title: {
        minWidth: 80,
        color: colors.black,
        textAlign: 'center',
        fontSize: 28,
        fontFamily: 'Inria Serif',
        fontWeight: 'bold',
    },
})