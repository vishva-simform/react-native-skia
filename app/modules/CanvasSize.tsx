import React, {useCallback} from 'react';
import {Button} from 'react-native';
import {
  useClockValue,
  Canvas,
  Circle,
  useComputedValue,
  useValue,
  Rect,
} from '@shopify/react-native-skia';

const interval = 2000;

const CanvasSizeDemo = () => {
  const position = useValue(0);

  const updateValue = useCallback(
    () => (position.current = position.current + 10),
    [position],
  );

  //A new value that will be updated on every frame redraw with the number of milliseconds elapsed since the value was started
  const clock = useClockValue();
  //Creates a new computed value - a value that will calculate its value depending on other values.
  const opacity = useComputedValue(() => {
    return (clock.current % interval) / interval;
  }, [clock]);

  return (
    <>
      <Canvas style={{flex: 1}}>
        <Rect x={position} y={100} width={20} height={20} color={'red'} />
        <Circle r={100} cx={100} cy={300} color="black" opacity={opacity} />
      </Canvas>
      <Button title="Move it" onPress={updateValue} />
    </>
  );
};
export default CanvasSizeDemo;
