import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

const Routes = createSwitchNavigator({
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
});

export default createAppContainer(Routes);