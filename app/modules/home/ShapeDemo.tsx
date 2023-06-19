import {
  Canvas,
  Circle,
  DiffRect,
  rect,
  Rect,
  RoundedRect,
  rrect,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';

const ShapeDemo = () => {
  // const center = {x: 200, y: 400};
  //['cyan','magenta', 'yellow', 'cyan']
  const outer = rrect(rect(30, 40, 330, 600), 25, 25);
  const inner = rrect(rect(51, 60, 290, 500), 25, 25);

  return (
    <>
      <Canvas style={{flex: 1}}>
        {/* <SweepGradient c={center} colors={['lightred', 'red', 'lightred']} /> */}
        {false ? (
          <>
            <Circle cx={100} cy={100} r={80} color="yellow" />
            {/* <Circle c={vec(100, 100)} r={50} /> */}
            <Rect x={50} y={200} width={256} height={256} color={'red'} />
            <RoundedRect
              x={100}
              y={500}
              width={100}
              height={100}
              color={'green'}
              r={10}
            />
          </>
        ) : (
          <>
            <DiffRect inner={inner} outer={outer} color="orange" />
            <Circle
              c={{x: 195, y: 600}}
              r={20}
              style={'stroke'}
              strokeWidth={10}
            />
          </>
        )}
      </Canvas>
    </>
  );
};

export default ShapeDemo;
