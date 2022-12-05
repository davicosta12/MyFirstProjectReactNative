import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import Routes from "./src/Routes";

const App = () => {

  return (
    <>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </>
  );
}

export default App;