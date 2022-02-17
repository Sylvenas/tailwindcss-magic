
import { HEXToRGB } from '../../src/index'

describe('HEX To RGB', () => {
    test(" '#rgb' => 'rgb(r,g,b)' ", () => {
        expect(HEXToRGB('#f36')).toEqual([255, 51, 102]);
        expect(HEXToRGB('#75d')).toEqual([119, 85, 221]);
        expect(HEXToRGB('#f5f')).toEqual([255, 85, 255]);
    });

    test(" '#rgba' => (r,g,b,a) ", () => {
        expect(HEXToRGB('#f363')).toEqual([255, 51, 102, 0.2]);
        expect(HEXToRGB('#75d6')).toEqual([119, 85, 221, 0.4]);
        expect(HEXToRGB('#f5f9')).toEqual([255, 85, 255, 0.6]);
    });

    test(" '#rrggbb' => 'rgb(r,g,b)' ", () => {
        expect(HEXToRGB('#ff3366')).toEqual([255, 51, 102]);
        expect(HEXToRGB('#7755dd')).toEqual([119, 85, 221]);
        expect(HEXToRGB('#ff55ff')).toEqual([255, 85, 255]);
    });

    test(" '#rrggbbaa' => 'rgba(r,g,b,a)' ", () => {
        expect(HEXToRGB('#ff336633')).toEqual([255, 51, 102, 0.2]);
        expect(HEXToRGB('#7755dd66')).toEqual([119, 85, 221, 0.4]);
        expect(HEXToRGB('#ff55ff99')).toEqual([255, 85, 255, 0.6]);
    });

});