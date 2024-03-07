import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homescreen/HomeScreen';
import TasksScreen from './screens/tasksscreen/TasksScreen';
import TaskDetails from './screens/tasksscreen/TaskDetails';
import ResultScreen from './screens/resultscreen/ResultScreen';


const Stack = createStackNavigator();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Tasks" component={TasksScreen} options={{ headerShown: false }} />
                <Stack.Screen name="TaskDetails" component={TaskDetails} options={{ headerShown: false }}/>
                <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;