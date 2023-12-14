import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './style';
import Header from '../../../components/Header';
import FormInput from '../../../components/FormInput';
import Button from '../../../components/Button';

const SightInfo = ({ route, navigation }) => {
  const { sight } = route.params;
  const back = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Modify Sighting" onBack={back}></Header>
      <FormInput type="location" label="Location" style={styles.fullWidthField} value={sight.location}></FormInput>
      <FormInput type="text" label="Name of Sighting" style={styles.fullWidthField} value={sight.name}></FormInput>
      <FormInput type="image" label="Image" style={styles.fullWidthField}></FormInput>
      <Button title={"Modify"} style={[styles.button, styles.buttonFontSize]}></Button>
    </SafeAreaView>
  );
};

export default SightInfo;
