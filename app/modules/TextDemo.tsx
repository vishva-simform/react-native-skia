import React from 'react';
import {
  Canvas,
  useFont,
  Text,
  LinearGradient,
  vec,
  Group,
  Rect,
  RadialGradient,
} from '@shopify/react-native-skia';

const TextDemo = () => {
  const fontSize = 32;
  const font = useFont(require('../fonts/Roboto-Black.ttf'), fontSize);
  if (font === null) {
    return null;
  }
  return (
    <Canvas style={{flex: 1}}>
      <Text x={0} y={fontSize} text="Hello World" font={font} />
      <Rect x={0} y={50} width={256} height={256}>
        <LinearGradient
          start={vec(10, 170)}
          end={vec(256, 256)}
          colors={['purple', 'green', 'yellow']}
        />
      </Rect>
      <Group>
        <LinearGradient
          start={vec(60, 150)}
          end={vec(256, 256)}
          colors={['blue', 'red']}
        />
        <Text x={0} y={350} text="React Native skia" font={font} />
      </Group>
      <Group>
        <Rect x={10} y={400} width={256} height={256}>
          <RadialGradient c={vec(140, 530)} r={128} colors={['red', 'pink']} />
        </Rect>
      </Group>
      {/* <Fill color="white" /> */}
    </Canvas>
  );
};

export default TextDemo;
