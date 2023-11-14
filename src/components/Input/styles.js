import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
export default styles = StyleSheet.create({
    container: {
        maxWidth: 258,
        flexDirection: 'column',
        alignSelf: 'center',
        marginBottom: 40,
    },
    
    label: {
        minWidth: 80,
        color: colors.black,
        textAlign: 'center',
        fontSize: 28,
        padding: 5,
        marginBottom: 7,
        fontFamily: 'Inria Serif',
        fontWeight: 'bold',
    },

    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 3,
        backgroundColor: colors.white,
    },

    input: {
        minWidth: 220,
        minHeight: 45,
        marginHorizontal: 15,
    },
})