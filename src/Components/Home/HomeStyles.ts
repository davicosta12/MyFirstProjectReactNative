import { StyleSheet, StatusBar, } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d416e',
  },
  flatListContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    position: 'absolute',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 30,
    width: '100%',
    top: '40%',
    backgroundColor: '#c0cfd8',
  },
  titleFlatContainer: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#001a2f'
  },
  subTitleFlatContainer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#001a2f'
  },
  title: {
    fontSize: 32,
  },
  cardContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});