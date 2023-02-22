import { StyleSheet,View ,TextInput,Image} from "react-native";
import React from "react";
import { MyButton , CardSearch,CardShoping,CardIcons} from "@my-workspace/my-ui";

import { ApplicationProvider, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import LottieViewComponent from "./screens/LottieViewComponent";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeShoping from "./screens/HomeShoping";


const App = () => {
  const Stack = createStackNavigator();
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LottieViewComponent" component={LottieViewComponent} />

          <Stack.Screen name="HomeShoping" component={HomeShoping} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
