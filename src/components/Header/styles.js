import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignSelf: 'center',
        padding: '10%',
        paddingTop: 48,
    },

    line: {
        borderBottomColor: colors.black,
        borderBottomWidth: 1,
        minWidth: '100%',
        transform: [{rotate: '0.2deg'}],
    },

    title: {
        textAlign: 'center',
        fontFamily: 'Inria Serif',
        fontSize: 32,
        marginBottom: 16,
    },

    arrow: {
        maxWidth: 32,
        position: "absolute",
        left: -20,
        top: -10,
    }
})