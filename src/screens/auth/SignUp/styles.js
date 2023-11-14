import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export default styles = StyleSheet.create({
    

    bg: {
        backgroundColor: colors.background,
        color: colors.black,
        minHeight: '100%',
    },
    imgContainer: {
        marginTop: 48,
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        marginLeft: 26,
        marginRight: 15,
    },
    road: {
        justifyContent: 'center',
    },
    smallButton: {
        minWidth: 140,
        minHeight: 50,
        fontSize: 20,
        alignSelf: 'center',
        flexDirection: 'row',
    },

    notice: {
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: 48,
    },

    noticeText: {
        textAlign: 'center',
        fontSize: 19,
        fontFamily: 'Inria Serif',
    },

})