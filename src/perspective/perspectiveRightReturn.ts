import { compose, perspective, rotateY } from "../utils";
import type { Animation } from "../utils/types";

const perspectiveRotateY = compose(perspective, rotateY);

const perspectiveRightReturn: Animation = {
  "0%": {
    transformOrigin: "100% 0",
    transform: perspectiveRotateY(["800px"], [180]),
  },
  "100%": {
    transformOrigin: "100% 0",
    transform: perspectiveRotateY(["800px"], [0]),
  },
};

export default perspectiveRightReturn;
