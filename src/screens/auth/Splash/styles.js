import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export default styles = StyleSheet.create({
    test: {
        margin: 50,
    },

    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        marginBottom: 80,
    },

    bg: {
        backgroundColor: colors.background,
        color: colors.black,
        minHeight: '100%',
    },

    plane: {
        width: '75%',
        justifyContent: 'center',
        position: "absolute",
        marginTop: 40,
    },

    plane_bg: {
        position: "absolute",
    },

    button: {
        width: 230,
        height: 60,
        marginBottom: 28,
    },

    buttons: {
        alignItems: 'center',
    
    }, 
})