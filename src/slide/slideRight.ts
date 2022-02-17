import { translateX } from "../utils";
import type { Animation } from "../utils/types";

const slideRight: Animation = {
  "0%": {
    transformOrigin: "0 0",
    transform: translateX("0%"),
  },
  "100%": {
    transformOrigin: "0 0",
    transform: translateX("100%"),
  },
};

export default slideRight;
