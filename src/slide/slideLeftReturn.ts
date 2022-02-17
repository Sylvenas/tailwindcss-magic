import { translateX } from "../utils";
import type { Animation } from "../utils/types";

const slideLeftReturn: Animation = {
  "0%": {
    transformOrigin: "0 0",
    transform: translateX("-100%"),
  },
  "100%": {
    transformOrigin: "0 0",
    transform: translateX("0%"),
  },
};

export default slideLeftReturn;
