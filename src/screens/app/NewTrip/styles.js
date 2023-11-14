import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export default styles = StyleSheet.create({
    container: {
        padding: Platform.OS !== 'ios' ? 20 : 0,
        backgroundColor: colors.background2,
        minHeight: '100%',
    },
})