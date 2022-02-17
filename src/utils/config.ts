export const expandArray = <T extends number | string>(
  arr: Array<T>,
  append = "",
  inKey = false,
  transform = (v: T): T => v
): Record<string, string> =>
  arr.reduce(
    (a, v) => ({
      ...a,
      [`${v}${inKey ? append : ""}`]: `${transform(v)}${append}`,
    }),
    {}
  );

const range = (a: number, b?: number, c?: number): Array<number> => {
  const len = Math.abs(b != null ? Math.ceil((b - a) / (c ?? 1)) : a);
  const arr = new Array(len).fill(0);

  return arr.map(
    (_, k) => (k * (c ?? (a < 0 ? -1 : 1)) || 0) + (b != null ? a : 0)
  );
};

export const duration = expandArray([100, 200, 300, 500, 1000], "ms");

export const delay = { ...duration };

export const repeat = expandArray(range(5));

export const ease = {
  linear: "0,0,1,1",
  in: ".42,0,1,1",
  out: "0,0,.58,1",
  "in-out": ".42,0,.58,1",
};

export const fill = expandArray(["none", "forwards", "backwards", "both"]);
