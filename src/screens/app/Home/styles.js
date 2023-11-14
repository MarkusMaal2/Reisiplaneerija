import { StyleSheet, Dimensions, Platform } from "react-native";
import { colors } from "../../../utils/colors";
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container: {
        padding: Platform.OS !== 'ios' ? 20 : 0,
        backgroundColor: colors.background2,
        minHeight: windowHeight,
    },

    text: {
        textAlign: 'center',
        fontSize: 25,
        color: colors.black,
    },

    button: {
        marginTop: 10,
    }
})