import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import CanvasDemo from './app/modules/CanvasDemo';
import CanvasSizeDemo from './app/modules/CanvasSize';
import ShapeDemo from './app/modules/home/ShapeDemo';
import HomeScreen from './app/modules/home/HomeScreen';
import TextDemo from './app/modules/TextDemo';
import GroupDemo from './app/modules/GroupDemo';
import Metaball from './app/modules/Metaball';
import ProgressBar from './app/modules/ProgressBar';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CanvasSizeDemo" component={CanvasSizeDemo} />
          <Stack.Screen name="CanvasDemo" component={CanvasDemo} />
          <Stack.Screen name="ShapeDemo" component={ShapeDemo} />
          <Stack.Screen name="TextDemo" component={TextDemo} />
          <Stack.Screen name="GroupDemo" component={GroupDemo} />
          <Stack.Screen name="Metaball" component={Metaball} />
          <Stack.Screen name="ProgressBar" component={ProgressBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
