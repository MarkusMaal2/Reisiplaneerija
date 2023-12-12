import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const SightInfo = ({ route, navigation }) => {
  const { sight } = route.params;

  // Implement your logic to display sight details

  return (
    <View style={styles.container}>
      <Text>Sight Information</Text>
      <Text>Name: {sight.name}</Text>
      <Text>Location: {sight.location}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SightInfo;
