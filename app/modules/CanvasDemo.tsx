import {
  Canvas,
  Circle,
  useTouchHandler,
  useValue,
} from '@shopify/react-native-skia';
import React from 'react';

const CanvasDemo = () => {
  const cx = useValue(100);
  const cy = useValue(100);

  const touchHandler = useTouchHandler({
    onActive: ({x, y}) => {
      console.log('Active', {x, y});
      cx.current = x;
      cy.current = y;
    },
    onStart: ({x, y}) => {
      console.log('Start', x, y);
      cx.current = x;
      cy.current = y;
    },
    onEnd: ({x, y}) => {
      console.log('End', x, y);
      cx.current = x;
      cy.current = y;
    },
  });
  return (
    <>
      <Canvas style={{flex: 1}} onTouch={touchHandler}>
        <Circle cx={cx} cy={cy} r={20} />
      </Canvas>
    </>
  );
};

export default CanvasDemo;
