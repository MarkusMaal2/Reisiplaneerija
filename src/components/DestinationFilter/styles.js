import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";


export default styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  label: {
    fontFamily: 'Inria Serif',
    marginBottom: 10,
  },
  dropdownIcon: {
    width: 22,
    position: "absolute",
    right: 15,
    top: 8,
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
  separator: {
    height: 10
  }
});