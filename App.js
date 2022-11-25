import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from "./components/Form";
import Home from "./components/Home";
import Panel from "./components/Panel";
import { Provider } from 'react-redux'

import store from './components/redux/store/store'
const Stack = createNativeStackNavigator();

export default function App() {
  return (

<Provider  store={store}>
    <NativeBaseProvider>
     

<NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="Form" component={Form} /> 
     <Stack.Screen name="Panel" component={Panel} /> 
    </Stack.Navigator>
  </NavigationContainer>
     
    
    </NativeBaseProvider>
    </Provider>

  );
}

