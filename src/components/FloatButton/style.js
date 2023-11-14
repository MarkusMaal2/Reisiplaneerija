import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: colors.black,
        minWidth: 67,
        minHeight: 67,
        borderRadius: 100,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
        right: 18,
        bottom: 185,
    },

    text: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 48,
        fontFamily: 'Inria Serif',
    }
})