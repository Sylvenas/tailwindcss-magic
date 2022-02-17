import type { CSSValue } from "./types";
/**
 * Composes a variable number of CSS helper functions.
 * Returns a function that accepts all the original arguments
 * of the functions it composed. If the original function
 * accepted multiple arguments, they must be passed as
 * an array.
 
 * @example
 * const translateXandRotateY = compose(translateX, rotateY);
 * const cssValue = translateXandRotateY('-5px', '30deg');
 */
export declare const compose: (...funcs: Array<Function>) => (...styleArgs: Array<CSSValue | Array<CSSValue>>) => string;
export declare const cubicBezier: (a: number, b: number, c: number, d: number) => string;
export declare const translate3d: (a: CSSValue, b: CSSValue, c: CSSValue) => string;
export declare const translateX: (a: CSSValue) => string;
export declare const scale3d: (a: number, b: number, c: number) => string;
export declare const scale: (a: number) => string;
export declare const skewX: (deg: number) => string;
export declare const skewY: (deg: number) => string;
export declare const skewXY: (x: number, y: number) => string;
export declare const rotateY: (a: CSSValue) => string;
export declare const rotate3d: (a: number, b: number, c: number, d: number) => string;
export declare const perspective: (a: CSSValue) => string;
export declare const translateY: (a: CSSValue) => string;
export declare const translateZ: (a: CSSValue) => string;
export declare const translateXY: (a: CSSValue, b: CSSValue) => string;
export declare const rotate: (a: CSSValue) => string;
export declare const rotateX: (a: CSSValue) => string;
export declare const blur: (a: CSSValue) => string;
