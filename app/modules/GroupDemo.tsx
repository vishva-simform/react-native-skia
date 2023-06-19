import {
  Blur,
  Canvas,
  Circle,
  Group,
  Image,
  Paint,
  rect,
  rrect,
  useFont,
  useImage,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';

const widthCircle = 256;
const height = 256;

const strokeWidth = 10;
const c = vec(widthCircle / 2, height);
const r = (widthCircle - strokeWidth) / 2;

const roundedRect = rrect(rect(89, 89, 70, 70), 100, 100);

const GroupDemo = () => {
  const image = useImage(require('../assets/flower.jpeg'));
  const font = useFont(require('../fonts/Roboto-Black.ttf'), 20);
  const bodyFont = useFont(require('../fonts/Roboto-Black.ttf'), 14);
  if (font === null || bodyFont === null) {
    return null;
  }

  return (
    <>
      <Canvas style={{flex: 1}}>
        {/* paint  demo code */}
        {false ? (
          <Circle c={c} r={r} color="red">
            <Paint color="purple" />
            <Paint
              color="green"
              style="stroke"
              strokeWidth={20}
              opacity={0.7}
            />
            <Paint
              color="yellow"
              style="stroke"
              strokeWidth={strokeWidth / 2}
            />
          </Circle>
        ) : (
          <>
            <Circle cx={r} cy={r} r={r} color="#51AFED" />
            {/* The paint is inherited by the following sibling and descendants. */}
            <Group
              color="darkBlue"
              style="stroke"
              strokeWidth={10}
              //   transform={[{translateX: 20}, {translateY: 40}]}
              //   layer={
              //     <Paint>
              //       <Blur blur={6} />
              //     </Paint>
              //   }
            >
              <Image
                image={image}
                x={10}
                y={250}
                width={230}
                height={200}
                fit="cover"
              />
              <Circle
                origin={vec(123, 123)}
                transform={[{scaleX: 1.7}, {scaleY: 0.9}]}
                cx={r}
                cy={r}
                r={r / 2}
                strokeWidth={8}
              />
              <Circle cx={r} cy={r} r={r / 2.5} color="black" style={'fill'} />

              <Group
                clip={roundedRect}
                // invertClip
                // layer={
                //   <Paint>
                //     <Blur blur={1} />
                //   </Paint>
                // }
              >
                <Image
                  image={image}
                  x={10}
                  y={20}
                  width={230}
                  height={200}
                  fit="cover"
                />
              </Group>
            </Group>
          </>
        )}
      </Canvas>
    </>
  );
};

export default GroupDemo;
