import { FunctionComponent } from 'react';
import { View, Text, StatusBar, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { styles } from './HomeStyles';

interface Props {
}

const Home: FunctionComponent<Props> = (props) => {

  const Item = ({ title }: { title: string }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );


  const renderItem = ({ item }: any) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

export default Home;

const DATA = new Array(50).fill(0).map((item: any, i: number) => Object.assign({}, { id: i.toString(), title: `Item ${i}` }));