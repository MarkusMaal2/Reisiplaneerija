import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default styles = StyleSheet.create({
    label: {
        fontFamily: 'Inria Serif',
        marginBottom: 10,
    },

    textBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 3,
        backgroundColor: colors.white,
        minHeight: 40,
        padding: 10,
    },

    clock: {
        width: 22,
        position: 'absolute',
        right: 9,
        top: -17,
    },

    dropdownIcon: {
        width: 22,
        position: 'absolute',
        right: 15,
        top: 8,
    },

    pinIcon: {
        width: 22,
        position: 'absolute',
        right: 9,
        top: -10,
    },

    modalWrapper: {
        backgroundColor: "rgba(0,0,0,0.2)",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    modalContent: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 16,
        width: '80%'
    },
    optionTitle: {
        color: colors.black,
        marginBottom: 16,
        fontSize: 16,
    },
    optionText: {
        color: colors.black,
        paddingVertical: 4,
        fontSize: 15,
    },
    selectedOption: {
        color: colors.blue,
        fontWeight: 'bold',
    },
    uploadContainer: {
        width: 360  ,
        height: 212,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.gray,
        borderStyle: 'dotted',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    uploadCircle: {
        width: 64,
        height: 64,
        borderRadius: 20,
        backgroundColor: colors.lightGrey,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadPlus: {
        color: colors.black,
        fontSize: 64,
        marginTop: -4
    },uploadedImage: {
        width: 355,
        height: 212,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.gray,
        borderStyle: 'dotted',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },editOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },

    editIcon: {
        width: 32,
        height: 32,
        tintColor: colors.white, 
    },
})