import * as React from "react";
import {
  Mafs,
  Ellipse,
  Coordinates,
  Point,
  Line,
  Circle,
  Polygon,
  Plot,
  labelPi,
  useMovablePoint,
  Text,
  useStopwatch,
  Vector,
  vec,
  Theme,
  Polyline,
  Transform,
} from "mafs";

import "mafs/core.css";
import "mafs/font.css";

export default function HelloFx() {
  const { time, start } = useStopwatch();
  const a = [-2, -2];
  const b = useMovablePoint([-1, 1]);
  const c = useMovablePoint([1, -1]);
  const d = [2, 2];

  const point_test = [-2, -2];

  const point_test_mov = useMovablePoint([3, 0]);

  // const point1 = useMovablePoint([-2, -1]);
  // const point2 = useMovablePoint([2, 1]);

  // Stopwatches are stopped initially, so we
  // can start it when the component mounts.
  // We declare `start` as a dependency of the
  // effect to make React happy, but Mafs
  // guarantees its identity will never change.

  React.useEffect(() => start(), [start]);

  const fn = (x) => x + 1;

  return (
    <Mafs>
      <Coordinates.Cartesian />
      {/* <Point
        x={Math.cos(time * 2 * Math.PI)}
        y={Math.sin(time * 2 * Math.PI)}
      /> */}
      {/* <Circle center={[0, 0]} radius={3} /> */}
      {/* <Polyline points={[a, b.point, c.point, d]} color={Theme.blue} />
      {b.element}
      {c.element} */}
      {/* point_test = {point_test + Math.cos(time * 2 * Math.PI)} */}
      {/* num1 = point_test[0] + Math.cos(time * 2 * Math.PI); num2 = point_test[1]+
      Math.cos(time * 2 * Math.PI); console.log(num1, num2); */}
      {/* <Line.Segment
        // point1={point1.point + Math.cos(time * 2 * Math.PI)}
        point1={point_test}
        point2={point2.point}
      />
      {point1.element}
      {point2.element} */}
      <Text
        x={point_test_mov.x}
        y={point_test_mov.y}
        attach='w'
        attachDistance={5}
      >
        ({point_test_mov.x}, {point_test_mov.y})
      </Text>
      <Text x={point_test[0]} y={point_test[1]} attach='w' attachDistance={5}>
        ({point_test[0]}, {point_test[1]})
      </Text>
      {/* num1 = Update(point_test[0]); */}
      {/* num1 = fn(point_test_mov.x); */}
      {/* num1 = fn(point_test[0]); */}
      {/* num2 = point_test[1] + 1; */}
      <Text
        x={fn(point_test_mov.x)}
        y={fn(point_test_mov.y)}
        attach='w'
        attachDistance={5}
      >
        ({fn(point_test_mov.x)}, {fn(point_test_mov.y)})
      </Text>
      {/* num1 = point_test_mov.x + 1; num2 = point_test_mov.y + 1 */}
      {/* num1 = point_test_mov[0] + 1; num2 = point_test_mov[1] + 1 */}
      {/* <Line.Segment point1={[num1, num2]} point2={point2.point} /> */}
    </Mafs>
  );
}
