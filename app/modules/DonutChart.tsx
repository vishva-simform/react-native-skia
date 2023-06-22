import {
  Canvas,
  Path,
  Skia,
  Text,
  useFont,
  useTiming,
} from '@shopify/react-native-skia';
import React from 'react';
import {StyleSheet} from 'react-native';

//Drawing with skia
const DonutChart = () => {
  const path = Skia.Path.Make();
  path.addCircle(200, 200, 150);

  const font = useFont(require('../fonts/Roboto-Black.ttf'), 90);
  const powerFont = useFont(require('../fonts/Roboto-Black.ttf'), 30);

  const progress = useTiming(
    {
      from: 0,
      to: 0.9,
    },
    {
      duration: 1500,
    },
  );
  if (font === null || powerFont === null) {
    return null;
  }
  return (
    <Canvas style={styles.container}>
      <Path
        path={path}
        color="orange"
        style="stroke"
        strokeWidth={14}
        strokeCap="round"
        start={0}
        end={progress}
      />
      <Text x={150} y={215} text={'85'} font={font} color="black" />
      <Text x={160} y={240} text={'Power'} font={powerFont} color="black" />
    </Canvas>
  );
};
export default DonutChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
