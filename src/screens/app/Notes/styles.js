import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../utils/colors";
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.white,
        minHeight: windowHeight,
    },

    text: {
        textAlign: 'center',
        fontSize: 25,
        color: colors.primary,
    },
})