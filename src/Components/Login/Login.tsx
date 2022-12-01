import { FunctionComponent, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './LoginStyles';

interface Props {
  navigation: any;
}

const Login: FunctionComponent<Props> = (props) => {

  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>

      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.titleText}>Tela de Login</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.ImageUserLogo}
            source={require('../../../assets/user-blue.png')}
          />
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.titleInputText}>Email</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(newText: string) => setText(newText)}
          placeholder='Email'
          autoComplete='email'
          autoCapitalize='none'
        />
        <Text style={styles.titleInputText}>Senha</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(newText: string) => setPassword(newText)}
          placeholder='Senha'
          autoComplete='password'
          autoCapitalize='none'
          autoCorrect={true}
        />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.textCreateAccount} onPress={() => props.navigation.navigate("Register")}> Criar uma nova conta</Text>
      </View>
    </View >
  );
};

export default Login;
