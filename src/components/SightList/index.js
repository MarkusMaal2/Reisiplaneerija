import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';


const imageList = [
  {
    sightId: 1,
    imageName: "sorve.png"
  },
  {
    sightId: 2,
    imageName: "kuressaareloss.png"
  },
  {
    sightId: 3,
    imageName: "colosseum.png"
  },
]



const dummySights = [
  {
    id: 1,
    trip: 1,
    name: 'Sõrve Lighthouse',
    location: 'Sääre, Saaremaa',
    image: require('../../assets/sorve.png'),
  },
  {
    id: 2,
    trip: 1,
    name: 'Kuressaare Castle',
    location: 'Lossihoov 1, Kuressaare ',
    image: require('../../assets/kuressaareloss.png'),
  },
  {
    id: 3,
    trip: 3,
    name: 'Colosseum',
    location: 'Piazza Del Colosseo 1, Roma',
    image: require('../../assets/colosseum.png')
  }
];

const SightList = ({ navigation, selectedTrip }) => {
  const [selectedSight, setSelectedSight] = useState(null);

  const handleModifySight = (sight) => {
    let index = imageList.findIndex((imageInfo) => imageInfo.sightId === sight.id);
    sight.image = '../../assets/' + imageList[index].imageName;
    console.log(sight);
    navigation.navigate('SightInfo', { sight })
  };

  // Filter sights based on the selected trip
  const filteredSights = selectedTrip
    ? dummySights.filter(sight => sight.trip === selectedTrip)
    : dummySights;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.sightContainer}
    >
      <Image source={item.image} style={styles.sightImage} />
      <View style={styles.sightInfo}>
        <Text style={styles.sightName}>{item.name}</Text>
        <Text style={styles.sightLocation}>{item.location}</Text>
      </View>
      <TouchableOpacity onPress={() => handleModifySight(item)} style={styles.modifyIconContainer}>
        <Image source={require('../../assets/Pliiats.png')} style={styles.modifyIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredSights}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        extraData={selectedSight}
      />
    </View>
  );
};

export default SightList;
