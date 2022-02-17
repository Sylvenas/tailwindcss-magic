import { RGBToHEX } from '../../src/index'

describe('RGB To HEX', () => {
    test(" (r,g,b) => '#rrggbb' ", () => {
        expect(RGBToHEX(255, 255, 255)).toEqual(['ff', 'ff', 'ff']);
        expect(RGBToHEX(117, 216, 96)).toEqual(['75', 'd8', '60']);
        expect(RGBToHEX(245, 245, 220)).toEqual(['f5', 'f5', 'dc']);
    });

    test(" (r,g,b,a) => '#rrggbbaa' ", () => {
        expect(RGBToHEX(255, 232, 186, 0.4)).toEqual(['ff', 'e8', 'ba', '66']);
        expect(RGBToHEX(117, 216, 96, 0.6)).toEqual(['75', 'd8', '60', '99']);
        expect(RGBToHEX(245, 245, 220, 0.9)).toEqual(['f5', 'f5', 'dc', 'e6']);
    });

    test(" 'rgb(r,g,b)' => '#rrggbb' ", () => {
        expect(RGBToHEX('rgb(255, 255, 255)')).toEqual(['ff', 'ff', 'ff']);
        expect(RGBToHEX('rgb(117, 216, 96)')).toEqual(['75', 'd8', '60']);
        expect(RGBToHEX('rgb(245, 245, 220)')).toEqual(['f5', 'f5', 'dc']);
    });

    test(" 'rgba(r,g,b,a)' => '#rrggbbaa' ", () => {
        expect(RGBToHEX('rgba(255, 232, 186, 0.4)')).toEqual(['ff', 'e8', 'ba', '66']);
        expect(RGBToHEX('rgba(117, 216, 96, 0.6)')).toEqual(['75', 'd8', '60', '99']);
        expect(RGBToHEX('rgba(245, 245, 220, 0.9)')).toEqual(['f5', 'f5', 'dc', 'e6']);
    });

    test(" 'rgb(r g b)' => '#rrggbb' ", () => {
        expect(RGBToHEX('rgb(255 255 255)')).toEqual(['ff', 'ff', 'ff']);
        expect(RGBToHEX('rgb(117 216 1)')).toEqual(['75', 'd8', '01']);
        expect(RGBToHEX('rgb(245 245 220)')).toEqual(['f5', 'f5', 'dc']);
    });

    test(" 'rgba(r g b / a)' => '#rrggbbaa' ", () => {
        expect(RGBToHEX('rgba(10 232 186 / 0.4)')).toEqual(['0a', 'e8', 'ba', '66']);
        expect(RGBToHEX('rgba(117 10 196 / 0.6)')).toEqual(['75', '0a', 'c4', '99']);
        expect(RGBToHEX('rgba(245 245 22 / 0)')).toEqual(['f5', 'f5', '16', '00']);
    });

    test(" 'rgb(r%,g%,b%)' => '#rrggbbaa' ", () => {
        expect(RGBToHEX('rgb(100%,0%,60%)')).toEqual(['ff', '00', '99']);
    });

    test(" 'rgba(r%,g%,b%,a%)' => '#rrggbbaa' ", () => {
        expect(RGBToHEX('rgba(100%,0%,60%,40%)')).toEqual(['ff', '00', '99', '66']);
    });

    test(" 'rgb(r% g% b%)' => '#rrggbbaa' ", () => {
        expect(RGBToHEX('rgb(100% 0% 60%)')).toEqual(['ff', '00', '99']);
    });

    test(" 'rgb(r% g% b% / a%)' => '#rrggbbaa' ", () => {
        expect(RGBToHEX('rgba(100% 0% 60% / 40%)')).toEqual(['ff', '00', '99', '66']);
    });

    test(" 'rgb(r% g% b% / a)' => '#rrggbbaa' ", () => {
        expect(RGBToHEX('rgba(100% 0% 60% / 0.4)')).toEqual(['ff', '00', '99', '66']);
    });

});