import plugin from "tailwindcss/src/public/create-plugin";

import { duration, delay, repeat, ease, fill } from "./utils/config";

import magic from "./magic/magic";
import swap from "./magic/swap";
import twisterInUp from "./magic/twisterInUp";
import twisterInDown from "./magic/twisterInDown";

import puffIn from "./bling/puffIn";
import puffOut from "./bling/puffOut";
import vanishIn from "./bling/vanishIn";
import vanishOut from "./bling/vanishOut";

import openDownLeft from "./staticEffects/openDownLeft";
import openDownLeftReturn from "./staticEffects/openDownLeftReturn";
import openDownRight from "./staticEffects/openDownRight";
import openDownRightReturn from "./staticEffects/openDownRightReturn";
import openUpLeft from "./staticEffects/openUpLeft";
import openUpLeftReturn from "./staticEffects/openUpLeftReturn";
import openUpRight from "./staticEffects/openUpRight";
import openUpRightReturn from "./staticEffects/openUpRightReturn";

import openDownLeftOut from "./staticEffectsOut/openDownLeftOut";
import openDownRightOut from "./staticEffectsOut/openDownRightOut";
import openUpLeftOut from "./staticEffectsOut/openUpLeftOut";
import openUpRightOut from "./staticEffectsOut/openUpRightOut";

import perspectiveDown from "./perspective/perspectiveDown";
import perspectiveDownReturn from "./perspective/perspectiveDownReturn";
import perspectiveLeft from "./perspective/perspectiveLeft";
import perspectiveLeftReturn from "./perspective/perspectiveLeftReturn";
import perspectiveRight from "./perspective/perspectiveRight";
import perspectiveRightReturn from "./perspective/perspectiveRightReturn";
import perspectiveUp from "./perspective/perspectiveUp";
import perspectiveUpReturn from "./perspective/perspectiveUpReturn";

import rotateDownIn from "./rotate/rotateDownIn";
import rotateDownOut from "./rotate/rotateDownOut";
import rotateLeftIn from "./rotate/rotateLeftIn";
import rotateLeftOut from "./rotate/rotateLeftOut";
import rotateRightIn from "./rotate/rotateRightIn";
import rotateRightOut from "./rotate/rotateRightOut";
import rotateUpIn from "./rotate/rotateUpIn";
import rotateUpOut from "./rotate/rotateUpOut";

import slideDown from "./slide/slideDown";
import slideDownReturn from "./slide/slideDownReturn";
import slideLeft from "./slide/slideLeft";
import slideLeftReturn from "./slide/slideLeftReturn";
import slideRight from "./slide/slideRight";
import slideRightReturn from "./slide/slideRightReturn";
import slideUp from "./slide/slideUp";
import slideUpReturn from "./slide/slideUpReturn";

import foolishIn from "./math/foolishIn";
import foolishOut from "./math/foolishOut";
import holeIn from "./math/holeIn";
import holeOut from "./math/holeOut";
import swashIn from "./math/swashIn";
import swashOut from "./math/swashOut";

import tinDownIn from "./tin/tinDownIn";
import tinDownOut from "./tin/tinDownOut";
import tinLeftIn from "./tin/tinLeftIn";
import tinLeftOut from "./tin/tinLeftOut";
import tinRightIn from "./tin/tinRightIn";
import tinRightOut from "./tin/tinRightOut";
import tinUpIn from "./tin/tinUpIn";
import tinUpOut from "./tin/tinUpOut";

import bombLeftOut from "./bomb/bombLeftOut";
import bombRightOut from "./bomb/bombRightOut";

import boingInUp from "./boing/boingInUp";
import boingOutDown from "./boing/boingOutDown";

import spaceInDown from "./space/spaceInDown";
import spaceInLeft from "./space/spaceInLeft";
import spaceInRight from "./space/spaceInRight";
import spaceInUp from "./space/spaceInUp";
import spaceOutDown from "./space/spaceOutDown";
import spaceOutLeft from "./space/spaceOutLeft";
import spaceOutRight from "./space/spaceOutRight";
import spaceOutUp from "./space/spaceOutUp";

function addAnimationJIT(matchUtilities: Function) {
  matchUtilities(
    { "animate-delay": (value) => ({ animationDelay: value }) },
    { values: delay }
  );

  matchUtilities(
    { "animate-iteration": (value) => ({ animationIterationCount: value }) },
    { values: repeat }
  );

  matchUtilities(
    {
      "animate-time": (value) => ({
        animationTimingFunction: `cubic-bezier(${value})`,
      }),
    },
    { values: ease }
  );

  matchUtilities(
    {
      "animate-duration": (value) => ({ animationDuration: value }),
    },
    { values: duration }
  );

  matchUtilities(
    { "animate-fill": (value) => ({ animationFillMode: value }) },
    { values: fill }
  );

  matchUtilities(
    {
      "animate-steps-start": (value) => ({
        animationTimingFunction: `steps(${value},jump-start)`,
      }),
    },
    { values: repeat }
  );

  matchUtilities(
    {
      "animate-steps-end": (value) => ({
        animationTimingFunction: `steps(${value},jump-end)`,
      }),
    },
    { values: repeat }
  );

  matchUtilities(
    {
      "animate-steps-both": (value) => ({
        animationTimingFunction: `steps(${value},jump-both)`,
      }),
    },
    { values: repeat }
  );

  matchUtilities(
    {
      "animate-steps-none": (value) => ({
        animationTimingFunction: `steps(${value},jump-none)`,
      }),
    },
    { values: repeat }
  );
}

const magicAnimation = plugin(function ({
  addUtilities,
  matchUtilities,
  theme,
}) {
  const fallbackKeyframes = {
    "@keyframes magic": magic,
    "@keyframes swap": swap,
    "@keyframes twisterInUp": twisterInUp,
    "@keyframes twisterInDown": twisterInDown,

    "@keyframes puffIn": puffIn,
    "@keyframes puffOut": puffOut,
    "@keyframes vanishIn": vanishIn,
    "@keyframes vanishOut": vanishOut,

    "@keyframes openDownLeft": openDownLeft,
    "@keyframes openDownLeftReturn": openDownLeftReturn,
    "@keyframes openDownRight": openDownRight,
    "@keyframes openDownRightReturn": openDownRightReturn,
    "@keyframes openUpLeft": openUpLeft,
    "@keyframes openUpLeftReturn": openUpLeftReturn,
    "@keyframes openUpRight": openUpRight,
    "@keyframes openUpRightReturn": openUpRightReturn,

    "@keyframes openDownLeftOut": openDownLeftOut,
    "@keyframes openDownRightOut": openDownRightOut,
    "@keyframes openUpLeftOut": openUpLeftOut,
    "@keyframes openUpRightOut": openUpRightOut,

    "@keyframes perspectiveDown": perspectiveDown,
    "@keyframes perspectiveDownReturn": perspectiveDownReturn,
    "@keyframes perspectiveLeft": perspectiveLeft,
    "@keyframes perspectiveLeftReturn": perspectiveLeftReturn,
    "@keyframes perspectiveRight": perspectiveRight,
    "@keyframes perspectiveRightReturn": perspectiveRightReturn,
    "@keyframes perspectiveUp": perspectiveUp,
    "@keyframes perspectiveUpReturn": perspectiveUpReturn,

    "@keyframes rotateDownIn": rotateDownIn,
    "@keyframes rotateDownOut": rotateDownOut,
    "@keyframes rotateLeftIn": rotateLeftIn,
    "@keyframes rotateLeftOut": rotateLeftOut,
    "@keyframes rotateRightIn": rotateRightIn,
    "@keyframes rotateRightOut": rotateRightOut,
    "@keyframes rotateUpIn": rotateUpIn,
    "@keyframes rotateUpOut": rotateUpOut,

    "@keyframes slideDown": slideDown,
    "@keyframes slideDownReturn": slideDownReturn,
    "@keyframes slideLeft": slideLeft,
    "@keyframes slideLeftReturn": slideLeftReturn,
    "@keyframes slideRight": slideRight,
    "@keyframes slideRightReturn": slideRightReturn,
    "@keyframes slideUp": slideUp,
    "@keyframes slideUpReturn": slideUpReturn,

    "@keyframes foolishIn": foolishIn,
    "@keyframes foolishOut": foolishOut,
    "@keyframes holeIn": holeIn,
    "@keyframes holeOut": holeOut,
    "@keyframes swashIn": swashIn,
    "@keyframes swashOut": swashOut,

    "@keyframes tinDownIn": tinDownIn,
    "@keyframes tinDownOut": tinDownOut,
    "@keyframes tinLeftIn": tinLeftIn,
    "@keyframes tinLeftOut": tinLeftOut,
    "@keyframes tinRightIn": tinRightIn,
    "@keyframes tinRightOut": tinRightOut,
    "@keyframes tinUpIn": tinUpIn,
    "@keyframes tinUpOut": tinUpOut,

    "@keyframes bombLeftOut": bombLeftOut,
    "@keyframes bombRightOut": bombRightOut,

    "@keyframes boingInUp": boingInUp,
    "@keyframes boingOutDown": boingOutDown,

    "@keyframes spaceInDown": spaceInDown,
    "@keyframes spaceInLeft": spaceInLeft,
    "@keyframes spaceInRight": spaceInRight,
    "@keyframes spaceInUp": spaceInUp,
    "@keyframes spaceOutDown": spaceOutDown,
    "@keyframes spaceOutLeft": spaceOutLeft,
    "@keyframes spaceOutRight": spaceOutRight,
    "@keyframes spaceOutUp": spaceOutUp,
  };

  const fallbackUtilities = {
    ".magic-magic": {
      animationName: "magic",
      animationDuration: "1s",
    },
    ".magic-swap": {
      animationName: "swap",
      animationDuration: "1s",
    },
    ".magic-twisterInUp": {
      animationName: "twisterInUp",
      animationDuration: "1s",
    },
    ".magic-twisterInDown": {
      animationName: "twisterInDown",
      animationDuration: "1s",
    },

    ".magic-puffIn": {
      animationName: "puffIn",
      animationDuration: "1s",
    },
    ".magic-puffOut": {
      animationName: "puffOut",
      animationDuration: "1s",
    },
    ".magic-vanishIn": {
      animationName: "vanishIn",
      animationDuration: "1s",
    },
    ".magic-vanishOut": {
      animationName: "vanishOut",
      animationDuration: "1s",
    },

    ".magic-openDownLeft": {
      animationName: "openDownLeft",
      animationDuration: "1s",
    },
    ".magic-openDownLeftReturn": {
      animationName: "openDownLeftReturn",
      animationDuration: "1s",
    },
    ".magic-openDownRight": {
      animationName: "openDownRight",
      animationDuration: "1s",
    },
    ".magic-openDownRightReturn": {
      animationName: "openDownRightReturn",
      animationDuration: "1s",
    },
    ".magic-openUpLeft": {
      animationName: "openUpLeft",
      animationDuration: "1s",
    },
    ".magic-openUpLeftReturn": {
      animationName: "openUpLeftReturn",
      animationDuration: "1s",
    },
    ".magic-openUpRight": {
      animationName: "openUpRight",
      animationDuration: "1s",
    },
    ".magic-openUpRightReturn": {
      animationName: "openUpRightReturn",
      animationDuration: "1s",
    },

    ".magic-openDownLeftOut": {
      animationName: "openDownLeftOut",
      animationDuration: "1s",
    },
    ".magic-openDownRightOut": {
      animationName: "openDownRightOut",
      animationDuration: "1s",
    },
    ".magic-openUpLeftOut": {
      animationName: "openUpLeftOut",
      animationDuration: "1s",
    },
    ".magic-openUpRightOut": {
      animationName: "openUpRightOut",
      animationDuration: "1s",
    },

    ".magic-perspectiveDown": {
      animationName: "perspectiveDown",
      animationDuration: "1s",
    },
    ".magic-perspectiveDownReturn": {
      animationName: "perspectiveDownReturn",
      animationDuration: "1s",
    },
    ".magic-perspectiveLeft": {
      animationName: "perspectiveLeft",
      animationDuration: "1s",
    },
    ".magic-perspectiveLeftReturn": {
      animationName: "perspectiveLeftReturn",
      animationDuration: "1s",
    },
    ".magic-perspectiveRight": {
      animationName: "perspectiveRight",
      animationDuration: "1s",
    },
    ".magic-perspectiveRightReturn": {
      animationName: "perspectiveRightReturn",
      animationDuration: "1s",
    },
    ".magic-perspectiveUp": {
      animationName: "perspectiveUp",
      animationDuration: "1s",
    },
    ".magic-perspectiveUpReturn": {
      animationName: "perspectiveUpReturn",
      animationDuration: "1s",
    },

    ".magic-rotateDownIn": {
      animationName: "rotateDownIn",
      animationDuration: "1s",
    },
    ".magic-rotateDownOut": {
      animationName: "rotateDownOut",
      animationDuration: "1s",
    },
    ".magic-rotateLeftIn": {
      animationName: "rotateLeftIn",
      animationDuration: "1s",
    },
    ".magic-rotateLeftOut": {
      animationName: "rotateLeftOut",
      animationDuration: "1s",
    },
    ".magic-rotateRightIn": {
      animationName: "rotateRightIn",
      animationDuration: "1s",
    },
    ".magic-rotateRightOut": {
      animationName: "rotateRightOut",
      animationDuration: "1s",
    },
    ".magic-rotateUpIn": {
      animationName: "rotateUpIn",
      animationDuration: "1s",
    },
    ".magic-rotateUpOut": {
      animationName: "rotateUpOut",
      animationDuration: "1s",
    },

    ".magic-slideDown": {
      animationName: "slideDown",
      animationDuration: "1s",
    },
    ".magic-slideDownReturn": {
      animationName: "slideDownReturn",
      animationDuration: "1s",
    },
    ".magic-slideLeft": {
      animationName: "slideLeft",
      animationDuration: "1s",
    },
    ".magic-slideLeftReturn": {
      animationName: "slideLeftReturn",
      animationDuration: "1s",
    },
    ".magic-slideRight": {
      animationName: "slideRight",
      animationDuration: "1s",
    },
    ".magic-slideRightReturn": {
      animationName: "slideRightReturn",
      animationDuration: "1s",
    },
    ".magic-slideUp": {
      animationName: "slideUp",
      animationDuration: "1s",
    },
    ".magic-slideUpReturn": {
      animationName: "slideUpReturn",
      animationDuration: "1s",
    },

    ".magic-foolishIn": {
      animationName: "foolishIn",
      animationDuration: "1s",
    },
    ".magic-foolishOut": {
      animationName: "foolishOut",
      animationDuration: "1s",
    },
    ".magic-holeIn": {
      animationName: "holeIn",
      animationDuration: "1s",
    },
    ".magic-holeOut": {
      animationName: "holeOut",
      animationDuration: "1s",
    },
    ".magic-swashIn": {
      animationName: "swashIn",
      animationDuration: "1s",
    },
    ".magic-swashOut": {
      animationName: "swashOut",
      animationDuration: "1s",
    },

    ".magic-tinDownIn": {
      animationName: "tinDownIn",
      animationDuration: "1s",
    },
    ".magic-tinDownOut": {
      animationName: "tinDownOut",
      animationDuration: "1s",
    },
    ".magic-tinLeftIn": {
      animationName: "tinLeftIn",
      animationDuration: "1s",
    },
    ".magic-tinLeftOut": {
      animationName: "tinLeftOut",
      animationDuration: "1s",
    },
    ".magic-tinRightIn": {
      animationName: "tinRightIn",
      animationDuration: "1s",
    },
    ".magic-tinRightOut": {
      animationName: "tinRightOut",
      animationDuration: "1s",
    },
    ".magic-tinUpIn": {
      animationName: "tinUpIn",
      animationDuration: "1s",
    },
    ".magic-tinUpOut": {
      animationName: "tinUpOut",
      animationDuration: "1s",
    },

    ".magic-bombLeftOut": {
      animationName: "bombLeftOut",
      animationDuration: "1s",
    },
    ".magic-bombRightOut": {
      animationName: "bombRightOut",
      animationDuration: "1s",
    },

    ".magic-boingInUp": {
      animationName: "boingInUp",
      animationDuration: "1s",
    },
    ".magic-boingOutDown": {
      animationName: "boingOutDown",
      animationDuration: "1s",
    },

    ".magic-spaceInDown": {
      animationName: "spaceInDown",
      animationDuration: "1s",
    },
    ".magic-spaceInLeft": {
      animationName: "spaceInLeft",
      animationDuration: "1s",
    },
    ".magic-spaceInRight": {
      animationName: "spaceInRight",
      animationDuration: "1s",
    },
    ".magic-spaceInUp": {
      animationName: "spaceInUp",
      animationDuration: "1s",
    },
    ".magic-spaceOutDown": {
      animationName: "spaceOutDown",
      animationDuration: "1s",
    },
    ".magic-spaceOutLeft": {
      animationName: "spaceOutLeft",
      animationDuration: "1s",
    },
    ".magic-spaceOutRight": {
      animationName: "spaceOutRight",
      animationDuration: "1s",
    },
    ".magic-spaceOutUp": {
      animationName: "spaceOutUp",
      animationDuration: "1s",
    },
  };

  addUtilities(fallbackKeyframes, {
    respectImportant: false,
  });

  addUtilities(fallbackUtilities, {
    variants: ["hover"],
    respectImportant: false,
  });

  addAnimationJIT(matchUtilities);
});

export default magicAnimation;
