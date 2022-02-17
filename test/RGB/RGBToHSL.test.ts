import { RGBToHSL } from '../../src/index'

describe('RGB To HSL', () => {
    test(" (r,g,b) => hsl(h,s,l) ", () => {
        expect(RGBToHSL(0, 132, 255)).toEqual([209, 100, 50]);
        expect(RGBToHSL(35, 209, 96)).toEqual([141, 71.3, 47.8]);
        expect(RGBToHSL(236, 114, 89)).toEqual([10, 79.5, 63.7]);
    });

    test(" (r,g,b,a) => 'hsla(h,s,l,a)' ", () => {
        expect(RGBToHSL(0, 132, 255, 0.3)).toEqual([209, 100, 50, 0.3]);
        expect(RGBToHSL(35, 209, 96, 0.6)).toEqual([141, 71.3, 47.8, 0.6]);
        expect(RGBToHSL(236, 114, 89, 0.9)).toEqual([10, 79.5, 63.7, 0.9]);
    });

    test(" (r,g,b,a) => 'hsla(h,s,l,a)' && delta == 0", () => {
        expect(RGBToHSL(1, 1, 1)).toEqual([0, 0, 0.4]);
    });

    test(" (r,g,b,a) => 'hsla(h,s,l,a)' && h < 0", () => {
        expect(RGBToHSL(255, 1, 234)).toEqual([305, 100, 50.2]);
    });

    test(" 'rgb(r,g,b)' => 'hsl(h,s,l)' ", () => {
        expect(RGBToHSL('rgb(0, 132, 255)')).toEqual([209, 100, 50]);
        expect(RGBToHSL('rgb(35, 209, 96)')).toEqual([141, 71.3, 47.8]);
        expect(RGBToHSL('rgb(236, 114, 89)')).toEqual([10, 79.5, 63.7]);
    });

    test(" 'rgba(r,g,b,a)' => 'hsla(h,s,l,a)' ", () => {
        expect(RGBToHSL('rgba(0, 132, 255, 0.3)')).toEqual([209, 100, 50, 0.3]);
        expect(RGBToHSL('rgba(35, 209, 96, 0.6)')).toEqual([141, 71.3, 47.8, 0.6]);
        expect(RGBToHSL('rgba(236, 114, 89, 0.9)')).toEqual([10, 79.5, 63.7, 0.9]);
    });

    test(" 'rgb(r g b)' => 'hsl(h,s,l)' ", () => {
        expect(RGBToHSL('rgb(0 132 255)')).toEqual([209, 100, 50]);
        expect(RGBToHSL('rgb(35 209 96)')).toEqual([141, 71.3, 47.8]);
        expect(RGBToHSL('rgb(236 114 89)')).toEqual([10, 79.5, 63.7]);
    });

    test(" 'rgb(r%,g%,b%)' => 'hsl(h,s,l)' ", () => {
        expect(RGBToHSL('rgb(100%,0%,60%)')).toEqual([324, 100, 50]);
    });

    test(" 'rgb(r%,g%,b%,a%)' => 'hsla(h,s,l,a)' ", () => {
        expect(RGBToHSL('rgba(100%,0%,60%,40%)')).toEqual([324, 100, 50, 0.4]);
    });

    test(" 'rgb(r% g% b%)' => 'hsl(h,s,l)' ", () => {
        expect(RGBToHSL('rgb(100% 0% 60%)')).toEqual([324, 100, 50]);
    });

    test(" 'rgba(r g b / a)' => 'hsla(h,s,l,a)' ", () => {
        expect(RGBToHSL('rgba(0 132 255 / 0.3)')).toEqual([209, 100, 50, 0.3]);
        expect(RGBToHSL('rgba(35 209 96 / 0.6)')).toEqual([141, 71.3, 47.8, 0.6]);
        expect(RGBToHSL('rgba(236 114 89 / 0.9)')).toEqual([10, 79.5, 63.7, 0.9]);
    });

    test(" 'rgb(r% g% b% / a%)' => 'hsla(h,s,l,a)' ", () => {
        expect(RGBToHSL('rgba(100% 0% 60% / 40%)')).toEqual([324, 100, 50, 0.4]);
    });

    test(" 'rgb(r% g% b% / a)' => 'hsla(h,s,l,a)' ", () => {
        expect(RGBToHSL('rgba(100% 0% 60% / 0.4)')).toEqual([324, 100, 50, 0.4]);
    });

});