import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

const Routes = createSwitchNavigator({
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
    Home: {
        screen: Home,
    },
});

export default createAppContainer(Routes);