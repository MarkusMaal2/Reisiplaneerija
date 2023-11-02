import { StyleSheet, Dimensions, Platform } from "react-native";
import { colors } from "../../../utils/colors";
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container: {
        padding: Platform.OS !== 'ios' ? 20 : 0,
        backgroundColor: colors.white,
        minHeight: windowHeight,
    },

    text: {
        textAlign: 'center',
        fontSize: 25,
        color: colors.black,
    },
})