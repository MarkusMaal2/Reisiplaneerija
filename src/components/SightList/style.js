// style.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  sightImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  sightInfo: {
    flex: 1,
  },
  sightName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sightLocation: {
    fontSize: 14,
    color: '#555',
  },
  modifyIconContainer: {
    padding: 8,
  },
  modifyIcon: {
    width: 24,
    height: 24,
  },
});
