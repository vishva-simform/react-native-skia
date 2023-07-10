import {
  BackdropBlur,
  Canvas,
  Fill,
  Image,
  interpolate,
  Paint,
  rect,
  Rect,
  RoundedRect,
  rrect,
  Text,
  useComputedValue,
  useFont,
  useImage,
  useTiming,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {useWindowDimensions} from 'react-native';

const Metaball = () => {
  const {width, height} = useWindowDimensions();
  const center = vec(width / 2 - 50, height / 2 - 100);
  const blurClipPath = rrect(rect(24, center.y, width - 48, 200), 12, 12);
  const image = useImage(require('../assets/flower.jpeg'));
  const value = useTiming({from: 0, to: 1, loop: true}, {duration: 2000});
  const blur = useComputedValue(() => {
    return interpolate(value.current, [0, 0.5, 1], [0, 10, 0]);
  }, [value]);

  const font = useFont(require('../fonts/Roboto-Black.ttf'), 40);
  if (font === null || image === null) {
    return null;
  }
  return (
    <Canvas style={{flex: 1}}>
      <Image
        x={0}
        y={0}
        width={width}
        height={height}
        image={image}
        fit={'cover'}
      />
      <BackdropBlur blur={blur} clip={blurClipPath}>
        <Fill color={'rgba(122, 122, 122, 0.2)'} />
      </BackdropBlur>
      <Text
        x={center.x - 50}
        y={center.y + 110}
        text="Hello Skia"
        font={font}
        color="#fff"
        style="stroke"
        strokeWidth={1.5}
      />
    </Canvas>
  );
};

export default Metaball;
