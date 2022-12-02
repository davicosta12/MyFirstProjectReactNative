import { MaterialIcons } from '@expo/vector-icons';
import { AspectRatio, Box, Center, Heading, HStack, Icon, IconButton, Image, Stack, Text, VStack, View as ViewBase, Avatar, Badge, Button } from 'native-base';
import { FunctionComponent } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { styles } from './HomeStyles';

interface Props {
  navigation: any;
}

const Home: FunctionComponent<Props> = (props) => {

  const Item = ({ title }: { title: string }) => (
    <Box alignItems="center" marginY='8px'>
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image w="100%" source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text fontSize="xs" _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
              The Silicon Valley of India.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );


  const renderItem = ({ item }: any) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>

      <ViewBase flex={1} flexDirection='row' alignItems='center' justifyContent='space-between' paddingX={30}>
        <Text fontSize={22} fontWeight="bold" color="#c0cfd8" >
          Texto Home
        </Text>
        <ViewBase flexDirection='row' alignItems='center'>
          <VStack>
            <IconButton
              as={MaterialIcons}
              _dark={{
                color: "warmGray.50"
              }}
              _icon={{
                as: MaterialIcons,
                name: "logout",
                size: '3xl',
                color: "#c0cfd8"
              }}
              onPress={() => props.navigation.navigate("Login")}
            />
          </VStack>

          <VStack marginRight={5}>
            <Badge
              colorScheme="danger"
              rounded="full"
              mb={-5}
              mr={-2}
              zIndex={1}
              variant="solid"
              alignSelf="flex-end"
              size="48"
              _text={{
                fontSize: 12
              }}>
              2
            </Badge>
            <Icon
              as={MaterialIcons}
              name="notifications"
              color="#c0cfd8"
              size='3xl'
              _dark={{
                color: "warmGray.50"
              }}
            />
          </VStack>
          <VStack space={2} alignItems={{
            base: "center",
            md: "flex-start"
          }}>
            <Avatar bg="indigo.500"
              alignSelf="center"
              size="lg"
              source={{
                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }}
              borderColor="#fff"
              borderWidth={2}
            >
              RS
            </Avatar>
          </VStack>
        </ViewBase>
      </ViewBase>

      <View style={styles.cardContainer}>
        <ViewBase alignItems='center'>
          <VStack space={4} alignItems="center">
            <IconButton
              size='lg'
              variant="solid"
              _icon={{
                as: MaterialIcons,
                name: "poll"
              }}
            />
          </VStack>
          <Text fontWeight="bold" color="#c0cfd8">Send</Text>
        </ViewBase>

        <ViewBase alignItems='center'>
          <VStack space={4} alignItems="center" rounded="md" shadow={10}>
            <IconButton size='lg' variant="solid" _icon={{
              as: MaterialIcons,
              name: "public"
            }} />
          </VStack>
          <Text fontWeight="bold" color="#c0cfd8">Send</Text>
        </ViewBase>

        <ViewBase alignItems='center'>
          <VStack space={4} alignItems="center">
            <IconButton size='lg' variant="solid" _icon={{
              as: MaterialIcons,
              name: "mail"
            }} />
          </VStack>
          <Text fontWeight="bold" color="#c0cfd8">Send</Text>
        </ViewBase>

        <ViewBase alignItems='center'>
          <VStack space={4} alignItems="center">
            <IconButton size='lg' variant="solid" _icon={{
              as: MaterialIcons,
              name: "science"
            }} />
          </VStack>
          <Text fontWeight="bold" color="#c0cfd8">Send</Text>
        </ViewBase>
      </View>

      <View style={styles.flatListContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 8 }}>
          <Text style={styles.titleFlatContainer}>Título</Text>
          <Text style={styles.subTitleFlatContainer}>Subtítulo</Text>
        </View>
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

export default Home;

const DATA = new Array(6).fill(0).map((item: any, i: number) => Object.assign({}, { id: i.toString(), title: `Item ${i}` }));