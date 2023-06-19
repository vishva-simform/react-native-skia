import {
  Canvas,
  Circle,
  interpolate,
  RoundedRect,
  useComputedValue,
  useTiming,
} from '@shopify/react-native-skia';
import React from 'react';

const ProgressBar = () => {
  const x = useTiming({from: 0, to: 1, loop: true}, {duration: 2000});

  const width = useComputedValue(() => {
    return interpolate(x.current, [0, 0.5, 1], [0, 200, 10]);
  }, [x]);
  const value = useComputedValue(() => {
    return interpolate(x.current, [0, 0.5, 1], [100, 0, 100]);
  }, [x]);

  const r = useTiming({from: 0, to: 1, loop: true}, {duration: 3000});

  const circle1 = useComputedValue(() => {
    return interpolate(r.current, [0, 0.3, 1], [50, 100, 50]);
  }, [r]);

  const opacity1 = useComputedValue(() => {
    return interpolate(r.current, [0, 0.3, 1], [0.9, 0, 0]);
  }, [r]);

  const circle2 = useComputedValue(() => {
    return interpolate(r.current, [0, 0.2, 0.5, 1], [50, 50, 100, 50]);
  }, [r]);

  const opacity2 = useComputedValue(() => {
    return interpolate(r.current, [0.2, 0.5, 1], [0.9, 0, 0]);
  }, [r]);

  return (
    <Canvas style={{flex: 1}}>
      <Circle
        r={circle2}
        c={{x: 200, y: 200}}
        color="#FF6060"
        opacity={opacity2}
      />
      <Circle
        r={circle1}
        c={{x: 200, y: 200}}
        color="#FF6060"
        opacity={opacity1}
      />
      <Circle r={50} c={{x: 200, y: 200}} color="#FF6060" opacity={0.5} />
      <RoundedRect x={100} y={400} height={30} width={width} r={20} />
      {/* <RoundedRect
        x={value}
        y={400}
        height={30}
        width={width}
        r={20}
        color={'green'}
      /> */}
    </Canvas>
  );
};

export default ProgressBar;
