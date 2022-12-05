import { StyleSheet, StatusBar, } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d416e',
    flexDirection: 'column'
  },
  flatListContainer: {
    flex: 3,
    marginTop: StatusBar.currentHeight || 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 30,
    width: '100%',
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
    flex: .6,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});