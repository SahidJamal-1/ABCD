import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import Register from './Register';
function AllScreens() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            
            <Stack.Screen name="Register" component={Register} />

            <Stack.Screen name="Login" component={LoginScreen} />
           


        </Stack.Navigator>
    );
}
export default AllScreens