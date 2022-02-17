import { HEXToHSL } from '../../src/index'

describe('HEX To RGB', () => {
    test(" '#rgb' => 'hsl(h,a,l)' ", () => {
        expect(HEXToHSL('#f36')).toEqual([345, 100, 60]);
        expect(HEXToHSL('#75d')).toEqual([255, 66.7, 60]);
        expect(HEXToHSL('#f5f')).toEqual([300, 100, 66.7]);
    });

    test(" '#rgba' => 'hsl(h,s,l,a)' ", () => {
        expect(HEXToHSL('#f363')).toEqual([345, 100, 60, 0.2]);
        expect(HEXToHSL('#75d6')).toEqual([255, 66.7, 60, 0.4]);
        expect(HEXToHSL('#f5f9')).toEqual([300, 100, 66.7, 0.6]);
    });

    test(" '#rrggbb' => 'hsl(h,s,l)' ", () => {
        expect(HEXToHSL('#ff3366')).toEqual([345, 100, 60]);
        expect(HEXToHSL('#7755dd')).toEqual([255, 66.7, 60]);
        expect(HEXToHSL('#ff55ff')).toEqual([300, 100, 66.7]);
    });

    test(" '#rrggbbaa' => 'hsl(h,s,l,a)' ", () => {
        expect(HEXToHSL('#ff336633')).toEqual([345, 100, 60, 0.2]);
        expect(HEXToHSL('#7755dd66')).toEqual([255, 66.7, 60, 0.4]);
        expect(HEXToHSL('#ff55ff99')).toEqual([300, 100, 66.7, 0.6]);
    });

    test(" '#rgb' => 'hsl(h,s,l)' && delta===0 ", () => {
        expect(HEXToHSL('#999')).toEqual([0, 0, 60]);
    });

    test(" '#rgb' => 'hsl(h,s,l)' && delta===0 ", () => {
        expect(HEXToHSL('#9f9')).toEqual([120, 100, 80]);
    });

});