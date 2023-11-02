import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        minWidth: '100%',
    },
    text: {
        backgroundColor: colors.primary,
        minWidth: 80,
        padding: 15,
        color: colors.white,
        textAlign: 'center',
    },
})