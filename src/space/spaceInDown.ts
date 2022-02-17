import { compose, scale, translateXY } from "../utils";
import type { Animation } from "../utils/types";

const scaletranslateXY = compose(scale, translateXY);

const spaceInDown: Animation = {
  "0%": {
    opacity: 0,
    transformOrigin: "50% 100%",
    transform: scaletranslateXY([0.2], ["0%", "200%"]),
  },
  "100%": {
    opacity: 1,
    transformOrigin: "50% 100%",
    transform: scaletranslateXY([1], ["0%", "0%"]),
  },
};

export default spaceInDown;
