import { compose, perspective, rotateY, translateZ } from "../utils";
import type { Animation } from "../utils/types";

const perspectiveRotateYTranslateZ = compose(perspective, rotateY, translateZ);

const rotateRightIn: Animation = {
  "0%": {
    opacity: 0,
    transformOrigin: "50% 0",
    transform: perspectiveRotateYTranslateZ(["800px"], [180], ["300px"]),
  },
  "100%": {
    opacity: 1,
    transformOrigin: "0 0",
    transform: perspectiveRotateYTranslateZ(["800px"], [0], ["0px"]),
  },
};

export default rotateRightIn;
