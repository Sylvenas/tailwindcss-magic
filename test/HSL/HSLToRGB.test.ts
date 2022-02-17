import { HSLToRGB } from '../../src/index'

describe('HSL To RGB', () => {
    test("(h,s,l) => rgb(r,g,b)", () => {
        expect(HSLToRGB(30, 100, 50)).toEqual([255, 128, 0]);
        expect(HSLToRGB(90, 71, 47)).toEqual([120, 205, 35]);
        expect(HSLToRGB(150, 30, 20)).toEqual([36, 66, 51]);
    });

    test("(h,s,l,a) => rgba(r,g,b,a)", () => {
        expect(HSLToRGB(210, 30, 20, 0.3)).toEqual([36, 51, 66, 0.3]);
        expect(HSLToRGB(270, 60, 40, 0.6)).toEqual([102, 41, 163, 0.6]);
        expect(HSLToRGB(330, 90, 80, 0.9)).toEqual([250, 158, 204, 0.9]);
    });

    test("hsl(h,s,l) => rgb(r,g,b) ", () => {
        expect(HSLToRGB('hsl(30, 100%, 50%)')).toEqual([255, 128, 0]);
        expect(HSLToRGB('hsl(90, 71%, 47%)')).toEqual([120, 205, 35]);
        expect(HSLToRGB('hsl(150, 30%, 20%)')).toEqual([36, 66, 51]);
    });

    test(" hsla(h,s,l,a) => rgba(r,g,b,a) ", () => {
        expect(HSLToRGB('hsla(210, 30%, 20%, 0.3)')).toEqual([36, 51, 66, 0.3]);
        expect(HSLToRGB('hsla(270, 60%, 40%, 0.6)')).toEqual([102, 41, 163, 0.6]);
        expect(HSLToRGB('hsla(330, 90%, 80%, 0.9)')).toEqual([250, 158, 204, 0.9]);
    });

    test(" hsl(h s l) => rgb(r,g,b) ", () => {
        expect(HSLToRGB('hsl(30 100% 50%)')).toEqual([255, 128, 0]);
        expect(HSLToRGB('hsl(90 71% 47%)')).toEqual([120, 205, 35]);
        expect(HSLToRGB('hsl(150 30% 20%)')).toEqual([36, 66, 51]);
    });

    test(" hsl(hdeg,s,l) => rgb(r,g,b) ", () => {
        expect(HSLToRGB('hsl(30deg, 100%, 50%)')).toEqual([255, 128, 0]);
        expect(HSLToRGB('hsl(90deg, 71%, 47%)')).toEqual([120, 205, 35]);
        expect(HSLToRGB('hsl(150deg, 30%, 20%)')).toEqual([36, 66, 51]);
    });

    test(" hsl(hrad,s,l) => rgb(r,g,b) ", () => {
        expect(HSLToRGB('hsl(3.14rad, 100%, 50%)')).toEqual([0, 255, 255]);
        expect(HSLToRGB('hsl(1.8rad, 71%, 47%)')).toEqual([83, 205, 35]);
        expect(HSLToRGB('hsl(0.5rad, 30%, 20%)')).toEqual([66, 50, 36]);
    });

    test(" hsl(hturn,s,l) => rgb(r,g,b) ", () => {
        expect(HSLToRGB('hsl(0.3turn, 100%, 50%)')).toEqual([51, 255, 0]);
        expect(HSLToRGB('hsl(0.6turn, 71%, 47%)')).toEqual([35, 103, 205]);
        expect(HSLToRGB('hsl(0.9turn, 30%, 20%)')).toEqual([66, 36, 54]);
    });

    test(" hsla(h s l / a) => rgba(r,g,b,a) ", () => {
        expect(HSLToRGB('hsla(210 30% 20% / 0.3)')).toEqual([36, 51, 66, 0.3]);
        expect(HSLToRGB('hsla(270 60% 40% / 0.6)')).toEqual([102, 41, 163, 0.6]);
        expect(HSLToRGB('hsla(330 90% 80% / 0.9)')).toEqual([250, 158, 204, 0.9]);
    });

    test(" hsla(h s l / a%) => rgba(r,g,b,a) ", () => {
        expect(HSLToRGB('hsla(210 30% 20% / 30%)')).toEqual([36, 51, 66, 0.3]);
        expect(HSLToRGB('hsla(270 60% 40% / 60%)')).toEqual([102, 41, 163, 0.6]);
        expect(HSLToRGB('hsla(330 90% 80% / 90%)')).toEqual([250, 158, 204, 0.9]);
    });
})