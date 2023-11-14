import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export default styles = StyleSheet.create({
    bg : {
        backgroundColor: colors.background,
        color: colors.black,
        minHeight: '100%',
    },

    firstField: {
        marginTop: 130,
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

    imgContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: -30,
    },

    tent: {
        width: '40%',
        marginRight: 30,
        transform: [{ rotate: '-3deg' }]
    }
})