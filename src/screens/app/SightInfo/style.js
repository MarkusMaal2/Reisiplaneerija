import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export default styles = StyleSheet.create({
    container: {
        padding: Platform.OS !== 'ios' ? 20 : 0,
        backgroundColor: colors.background2,
        minHeight: '100%',
    },

    fullWidthField: {
        marginHorizontal: 18,
        marginBottom: 20,
    },

    halfWidthField: {
        marginHorizontal: 18,
        minWidth: 154,
        maxWidth: 174,
        marginBottom: 20,
    },

    doubleInput: {
        flexDirection: 'row',
        columnGap: 5,
        margin: 0,
    },

    button: {
        minWidth: 179,
        minHeight: 47,
        alignSelf: 'center',
    },

    buttonFontSize: {
        fontSize: 24,
    },
})