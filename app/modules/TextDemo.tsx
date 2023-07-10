import React from 'react';
import {
  Canvas,
  useFont,
  Text,
  LinearGradient,
  vec,
  Rect,
  RadialGradient,
  SweepGradient,
  Circle,
} from '@shopify/react-native-skia';

const TextDemo = () => {
  const fontSize = 32;
  const font = useFont(require('../fonts/Roboto-Black.ttf'), fontSize);
  if (font === null) {
    return null;
  }

  const center = {x: 200, y: 200};
  // ['cyan','magenta', 'yellow', 'cyan']
  return (
    <Canvas style={{flex: 1}}>
      <Text x={0} y={fontSize} text="Hello World" font={font} />
      <Rect x={0} y={50} width={256} height={256}>
        <LinearGradient
          start={vec(0, 170)} //Start position of the gradient.
          end={vec(256, 256)} // end position of the gradient.
          colors={['purple', 'green', 'yellow']}
        />
      </Rect>

      <LinearGradient
        start={vec(60, 150)}
        end={vec(256, 256)}
        colors={['blue', 'red']}
      />
      <Text x={0} y={350} text="React Native skia" font={font} />

      <Rect x={10} y={400} width={256} height={256}>
        <RadialGradient c={vec(140, 530)} r={128} colors={['red', 'pink']} />
      </Rect>

      {/* <SweepGradient c={center} colors={['lightred', 'red', 'lightred']} /> */}
      {/* <Circle c={vec(200, 200)} r={50} /> */}

      {/* <Fill color="white" /> */}
    </Canvas>
  );
};

export default TextDemo;
