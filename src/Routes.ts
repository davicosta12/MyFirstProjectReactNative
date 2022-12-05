import { createSwitchNavigator, createAppContainer } from "react-navigation";
import DetailComponent from "./Components/Detail/Detail";
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
    Detail: {
        screen: DetailComponent,
    },
});

export default createAppContainer(Routes);