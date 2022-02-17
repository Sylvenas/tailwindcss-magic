import { compose, scale, translateXY } from "../utils";
import type { Animation } from "../utils/types";

const scaleAndtranslateXY = compose(scale, translateXY);

const swap: Animation = {
  "0%": {
    opacity: 0,
    transformOrigin: "0 100%",
    transform: scaleAndtranslateXY([0], ["-700px", "0px"]),
  },
  "100%": {
    opacity: 1,
    transformOrigin: "100% 100%",
    transform: scaleAndtranslateXY([1], ["0px", "0px"]),
  },
};

export default swap;
