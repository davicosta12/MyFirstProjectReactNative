import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, AspectRatio, Image, VStack, IconButton, Icon } from 'native-base';
import { FunctionComponent } from 'react';

interface Props {
  navigation: any;
}

const DetailComponent: FunctionComponent<Props> = (props) => {

  return (
    <View flex={1} alignItems='center' justifyContent='center' backgroundColor='#c0cfd8'>
      <VStack
        position='absolute'
        marginTop={8}
        marginLeft={3}
        zIndex='3'
        top={0}
        left={0}
      >
        <IconButton
          variant="solid"
          borderRadius="full"
          onPress={() => props.navigation.navigate("Home")}
          icon={
            <Icon as={MaterialIcons}
              size="5"
              name="arrow-back"
              _dark={{
                color: "warmGray.50"
              }}
              color="warmGray.50"
            />
          }
        />
      </VStack>
      <View flex={1} alignItems='center' justifyContent='flex-start' zIndex='1'>
        <AspectRatio w='100%' h='40%' ratio={16 / 9}>
          <Image
            w='100%'
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            }}
            alt='image' />
        </AspectRatio>
      </View>
      <View
        flex={2}
        w='100%'
        h='64%'
        paddingX={25}
        alignItems='center'
        justifyContent='center'
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        backgroundColor='#c0cfd8'
        position='absolute'
        top='36%'
        zIndex='2'
      >
        <View flex={1} w='100%' justifyContent='space-between' alignItems='center' flexDirection='row'>
          <Text>Título</Text>
          <VStack>
            <IconButton
              variant="solid"
              bg="red.500"
              colorScheme="red"
              borderRadius="full"
              icon={
                <Icon as={MaterialIcons}
                  size="6"
                  name="favorite"
                  _dark={{
                    color: "warmGray.50"
                  }}
                  color="warmGray.50"
                />
              }
            />
          </VStack>
        </View>
        <View flex={3} justifyContent='flex-start'>
          <Text>subtítulo</Text>
          <Text>subtítulo</Text>
          <Text>subtítulo</Text>
          <Text>subtítulo</Text>
        </View>
        <View flex={1} justifyContent='center'>
          <Text>Rodapé</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailComponent;
