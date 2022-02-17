export declare const expandArray: <T extends string | number>(arr: T[], append?: string, inKey?: boolean, transform?: (v: T) => T) => Record<string, string>;
export declare const duration: Record<string, string>;
export declare const delay: {
    [x: string]: string;
};
export declare const repeat: Record<string, string>;
export declare const ease: {
    linear: string;
    in: string;
    out: string;
    "in-out": string;
};
export declare const fill: Record<string, string>;
