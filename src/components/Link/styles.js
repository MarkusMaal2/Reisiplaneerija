import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
export default styles = StyleSheet.create({
    linkText: {
        color: colors.black,
        textAlign: 'center',
        fontSize: 19,
        fontFamily: 'Inria Serif',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    container: {
        marginTop: 22,
        flexDirection: 'column',
    },
})