import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import CanvasDemo from '../CanvasDemo';
import CanvasSizeDemo from '../CanvasSize';
import DonutChart from '../DonutChart';
import GroupDemo from '../GroupDemo';
import Metaball from '../Metaball';
import ProgressBar from '../ProgressBar';
import TextDemo from '../TextDemo';
import ShapeDemo from './ShapeDemo';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <PrimaryButton
        title="Canvas  Demo"
        onPress={() => navigation.navigate(CanvasDemo)}
      />
      <PrimaryButton
        title="Shape Demo"
        onPress={() => navigation.navigate(ShapeDemo)}
      />
      <PrimaryButton
        title="Text & Shader Demo"
        onPress={() => navigation.navigate(TextDemo)}
      />
      <PrimaryButton
        title="Paint, Image & Groups Demo"
        onPress={() => navigation.navigate(GroupDemo)}
      />
      <PrimaryButton
        title="Canvas Size Demo"
        onPress={() => navigation.navigate(CanvasSizeDemo)}
      />
      <PrimaryButton
        title="Metaball"
        onPress={() => navigation.navigate(Metaball)}
      />
      <PrimaryButton
        title="Progress Bar"
        onPress={() => navigation.navigate(ProgressBar)}
      />
      <PrimaryButton
        title="Donut Chart"
        onPress={() => navigation.navigate(DonutChart)}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    gap: 6,
  },
});
