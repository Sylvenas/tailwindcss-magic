import { HSLToHEX } from '../../src/index'

describe('HSL To HEX', () => {
    test(" (h,s,l) => '#rgb' ", () => {
        expect(HSLToHEX(25, 60, 50)).toEqual(['cc', '73', '33']);
        expect(HSLToHEX(90, 71, 47)).toEqual(['78', 'cd', '23']);
        expect(HSLToHEX(150, 30, 20)).toEqual(['24', '42', '33']);
    });

    test(" (h,s,l,a) => '#rgba' ", () => {
        expect(HSLToHEX(200, 90, 50, 0.1)).toEqual(['0d', 'a6', 'f2', '1a']);
        expect(HSLToHEX(270, 71, 47, 0.4)).toEqual(['78', '23', 'cd', '66']);
        expect(HSLToHEX(330, 30, 20, 0.6)).toEqual(['42', '24', '33', '99']);
    });

    test(" 'hsl(h,s,l)' => '#rgb' ", () => {
        expect(HSLToHEX('hsl(25, 60%, 50%)')).toEqual(['cc', '73', '33']);
        expect(HSLToHEX('hsl(90, 71%, 47%)')).toEqual(['78', 'cd', '23']);
        expect(HSLToHEX('hsl(150, 30%, 20%)')).toEqual(['24', '42', '33']);
    });

    test(" hsla(h,s,l,a) => '#rgba' ", () => {
        expect(HSLToHEX('hsla(200, 90%, 50%, 0.1)')).toEqual(['0d', 'a6', 'f2', '1a']);
        expect(HSLToHEX('hsla(270, 71%, 47%, 0.4)')).toEqual(['78', '23', 'cd', '66']);
        expect(HSLToHEX('hsla(330, 30%, 20%, 0.6)')).toEqual(['42', '24', '33', '99']);
    });

    test(" 'hsl(h s l)' => '#rgb' ", () => {
        expect(HSLToHEX('hsl(25 60% 50%)')).toEqual(['cc', '73', '33']);
        expect(HSLToHEX('hsl(90 71% 47%)')).toEqual(['78', 'cd', '23']);
        expect(HSLToHEX('hsl(150 30% 20%)')).toEqual(['24', '42', '33']);
    });

    test(" 'hsl(hdeg,s,l)' => '#rgb' ", () => {
        expect(HSLToHEX('hsl(25deg, 60%, 50%)')).toEqual(['cc', '73', '33']);
        expect(HSLToHEX('hsl(90deg, 71%, 47%)')).toEqual(['78', 'cd', '23']);
        expect(HSLToHEX('hsl(150deg, 30%, 20%)')).toEqual(['24', '42', '33']);
    });

    test(" 'hsl(hrad,s,l)' => '#rgb' ", () => {
        expect(HSLToHEX('hsl(3.14rad, 100%, 50%)')).toEqual(['00', 'ff', 'ff']);
        expect(HSLToHEX('hsl(1.8rad, 71%, 47%)')).toEqual(['53', 'cd', '23']);
        expect(HSLToHEX('hsl(0.5rad, 30%, 20%)')).toEqual(['42', '32', '24']);
    });

    test(" 'hsl(hturn,s,l)' => '#rgb' ", () => {
        expect(HSLToHEX('hsl(0.3turn, 100%, 50%)')).toEqual(['33', 'ff', '00']);
        expect(HSLToHEX('hsl(0.6turn, 71%, 47%)')).toEqual(['23', '67', 'cd']);
        expect(HSLToHEX('hsl(0.9turn, 98%, 49%)')).toEqual(['f7', '02', '95']);
    });

    test(" hsla(h s l / a) => '#rgba' ", () => {
        expect(HSLToHEX('hsla(200 90% 50% / 0.1)')).toEqual(['0d', 'a6', 'f2', '1a']);
        expect(HSLToHEX('hsla(270 71% 47% / 0.4)')).toEqual(['78', '23', 'cd', '66']);
        expect(HSLToHEX('hsla(330 30% 20% / 0.6)')).toEqual(['42', '24', '33', '99']);
    });

    test(" hsla(h s l / a%) => '#rgba' ", () => {
        expect(HSLToHEX('hsla(200 90% 50% / 10%)')).toEqual(['0d', 'a6', 'f2', '1a']);
        expect(HSLToHEX('hsla(270 71% 47% / 40%)')).toEqual(['78', '23', 'cd', '66']);
        expect(HSLToHEX('hsla(330 30% 20% / 60%)')).toEqual(['42', '24', '33', '99']);
    });

})