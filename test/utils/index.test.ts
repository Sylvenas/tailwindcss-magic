import {
  compose,
  cubicBezier,
  translate3d,
  translateX,
  scale3d,
  scale,
  skewX,
  skewY,
  skewXY,
  rotateY,
  rotate3d,
  perspective,
  translateY,
  translateZ,
  translateXY,
  rotate,
  rotateX,
  blur,
} from "../../src/utils";

describe("utils", () => {
  test("cubicBezier", () => {
    expect(cubicBezier(1, 2, 3, 4)).toEqual("cubic-bezier(1, 2, 3, 4)");
  });

  test("translate3d", () => {
    expect(translate3d(1, 2, 3)).toEqual("translate3d(1, 2, 3)");
  });

  test("translateX", () => {
    expect(translateX("-5px")).toEqual("translateX(-5px)");
  });

  test("scale3d", () => {
    expect(scale3d(1, 2, 3)).toEqual("scale3d(1, 2, 3)");
  });

  test("scale", () => {
    expect(scale(1)).toEqual("scale(1)");
  });

  test("skewX", () => {
    expect(skewX(1)).toEqual("skewX(1deg)");
  });

  test("skewY", () => {
    expect(skewY(1)).toEqual("skewY(1deg)");
  });

  test("skewXY", () => {
    expect(skewXY(1, 2)).toEqual("skewX(1deg) skewY(2deg)");
  });

  test("rotateY", () => {
    expect(rotateY(1)).toEqual("rotateY(1deg)");
  });

  test("rotate3d", () => {
    expect(rotate3d(1, 2, 3, 4)).toEqual("rotate3d(1, 2, 3, 4deg)");
  });

  test("perspective", () => {
    expect(perspective(1)).toEqual("perspective(1)");
  });

  test("translateY", () => {
    expect(translateY(1)).toEqual("translateY(1)");
  });

  test("translateZ", () => {
    expect(translateZ(1)).toEqual("translateZ(1)");
  });

  test("translateXY", () => {
    expect(translateXY(1, 2)).toEqual("translate(1,2)");
  });

  test("rotate", () => {
    expect(rotate(1)).toEqual("rotate(1deg)");
  });

  test("rotateX", () => {
    expect(rotateX(1)).toEqual("rotateX(1deg)");
  });

  test("blur", () => {
    expect(blur(1)).toEqual("blur(1)");
  });

  test("compose", () => {
    const translateXandRotateY = compose(translateX, rotateY);
    const cssValue = translateXandRotateY("-5px", "30");
    expect(cssValue).toEqual("translateX(-5px) rotateY(30deg)");
  });
});
