import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export default styles = StyleSheet.create({
    

    bg: {
        backgroundColor: colors.background,
        color: colors.black,
        minHeight: '100%',
    },
    imgContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        marginLeft: 26,
        marginRight: 15,
        marginBottom: -20,
    },
    road: {
        justifyContent: 'center',
        width: '100%',
    },

    notice: {
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: 48,
    },

    noticeText: {
        textAlign: 'center',
        fontSize: 19,
        fontFamily: 'Inria Serif Bold',
    },

    smallButton: {
        minWidth: 140,
        minHeight: 50,
        fontSize: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 15,
    },

    buttonText: {
        fontSize: 20,
    }
})