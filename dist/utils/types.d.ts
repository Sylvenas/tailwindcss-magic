export declare type CSSValue = string | number;
export declare type Keyframe = {
    [property: string]: CSSValue;
};
export declare type Animation = {
    [keyframe: string]: Keyframe;
};
