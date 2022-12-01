import { FunctionComponent, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './RegisterStyles';

interface Props {
  navigation: any;
}

const Register: FunctionComponent<Props> = (props) => {

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.titleText}>Cadastre-se aqui</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(newText: string) => setName(newText)}
          placeholder='Nome'
          autoComplete='name'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(newText: string) => setEmail(newText)}
          placeholder='Email'
          autoComplete='email'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={(newText: string) => setGender(newText)}
          placeholder='Gênero'
          autoComplete='gender'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(newText: string) => setPassword(newText)}
          placeholder='Senha'
          autoComplete='password'
          autoCapitalize='none'
          autoCorrect={true}
        />
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={(newText: string) => setConfirmPassword(newText)}
          placeholder='Confirmar Senha'
          autoComplete='password'
          autoCapitalize='none'
          autoCorrect={true}
        />
      </View>

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.buttonBack}>
          <Text style={styles.textButton} onPress={() => props.navigation.navigate("Login")}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
