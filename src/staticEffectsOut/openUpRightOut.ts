import { rotate } from "../utils";
import type { Animation } from "../utils/types";

const openUpRightOut: Animation = {
  "0%": {
    opacity: 1,
    transformOrigin: "top right",
    transform: rotate(0),
    animationTimingFunction: "ease-out",
  },
  "100%": {
    opacity: 0,
    transformOrigin: "top right",
    transform: rotate(-110),
    animationTimingFunction: "ease-in-out",
  },
};

export default openUpRightOut;
