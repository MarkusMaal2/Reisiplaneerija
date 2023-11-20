import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginBottom: 43,
    },

    thumbnail: {
        minWidth: 147,
        minHeight: 185,
        backgroundColor: colors.background,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 3,
        marginRight: 12,
    },

    scrollContainer: {
        flexDirection: 'row',
        minWidth: '100%',
    },

    locationLabel: {
        textAlign: 'center',
        position: 'absolute',
        top: '35%',
        alignSelf: 'center',
        backgroundColor: colors.white,
        padding: 5,
        fontFamily: 'InriaSerif Regular',
        fontSize: 24,
        borderColor: colors.black,
        borderWidth: 1,
        minWidth: 85,
    },

    label: {
        fontSize: 22,
        fontFamily: 'InriaSerif Bold',
        textShadowColor: colors.black,
        textShadowRadius: 2,
        textShadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        marginBottom: 12,
    }
})