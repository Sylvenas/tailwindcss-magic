# color transfer

English | [简体中文](./README-zh_CN.md)

Most animations was implemented base on [magic](https://github.com/miniMAC/magic).

![transfer](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5423051457/1526/5e24/bb06/4f5e0666331b5d13e2b0974cdec4d599.png)

## Usage

### install

```sh
npm i color-transfer
```

### import & usage

```js
import {
  HEXToHSL,
  HEXToRGB,
  RGBToHEX,
  RGBToHSL,
  HSLToHEX,
  HSLToRGB,
} from "color-transfer";

HEXToRGB("#f36"); // => [255, 51, 102]
RGBToHSL("rgba(100% 0% 60% / 0.4)"); // => [324, 100, 50, 0.4]

// ...
```

### handling Hover, Focus, and Other States

```html
<div className="group">
  <div className="group-hover:magic_swap"></div>
</div>
```

## dev & test

- 📦 bundle

```
npm i
npm run build
```

- unit test

```
npm run test
```

### unit test

All 50 type conversions have passed unit tested, with **100%** unit test code coverage
![unit test](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5145843442/827c/41aa/b619/632d70a18a6c35e469c1497074453aa8.png)

## TODO

- support for format output

##
