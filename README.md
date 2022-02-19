# tailwindcss-magic

English | [简体中文](./README-zh_CN.md)

A set of magical animation libraries for [tailwindcss](https://tailwindcss.com/), accessed using the [tailwindcss plugin](https://tailwindcss.com/docs/plugins).

Preview the example live on CodeSandbox: [Open in CodeSandbox](https://codesandbox.io/s/fancy-glade-3197y8?file=/pages/index.js)

> How to customize the animation properties？ Try [tailwindcss-animation-property](https://github.com/Sylvenas/tailwindcss-animation-property).

<div style="text-align:center" align="center">
  <img src="https://d2.music.126.net/dmusic/obj/w5zCg8OAw6HDjzjDgMK_/13149595646/634a/b004/4d12/446e83f18c5445c666b1fbdf9b532969.gif" />
</div>

## Usage

### install

```sh
npm i tailwindcss-magic

or

yarn add tailwindcss-magic
```

### import plugin

Edit the `tailwind.config.js` file

```js
module.exports = {
  // ...
  plugins: [require("tailwindcss-magic")],
};
```

> After the code has been wrapped by tailwindcss, only the animations which are already used will be included in the final code, so be relax ...

### Used in HTML

```html
<div className="magic-magic"></div>
```

### Used in states such as Hover, Focus, etc.

```html
<div class="group">
  <h2 class="group-hover:magic-magic">Hello World</h2>
</div>
```

### Customized animation property

The default animation property setting is `animation-duration:1s`.

You can use the [tailwindcss-animation-property](https://github.com/Sylvenas/tailwindcss-animation-property) to modify the other animation properties: `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`.

## Animation

All animation names are composed of `magic` and a name follows the underscore (`magic-puffIn`, `magic-openDownLeft`...).

The full list of animation titles is as follows：

```
.
├── magic
│   |── magic
│   |── twisterInDown
│   |── twisterInUp
│   └── swap
├── bling
│   |── puffIn
│   |── puffOut
│   |── vanishIn
│   └── vanishOut
├── staticEffects
│   |── openDownLeft
│   |── openDownLeftReturn
│   |── openDownRight
│   |── openDownRightReturn
│   |── openUpLeft
│   |── openUpLeftReturn
│   |── openUpRight
│   └── openUpRightReturn
├── staticEffectsOut
│   |── openDownLeftOut
│   |── openDownRightOut
│   |── openUpLeftOut
│   └── openUpRightOut
├── perspective
│   |── perspectiveDown
│   |── perspectiveDownReturn
│   |── perspectiveLeft
│   |── perspectiveLeftReturn
│   |── perspectiveRight
│   |── perspectiveRightReturn
│   |── perspectiveUp
│   └── perspectiveUpReturn
├── rotate
│   |── rotateDownIn
│   |── rotateDownOut
│   |── rotateLeftIn
│   |── rotateLeftOut
│   |── rotateRightIn
│   |── rotateRightOut
│   |── rotateUpIn
│   └── rotateUpOut
├── slide
│   |── slideDown
│   |── slideDownReturn
│   |── slideLeft
│   |── slideLeftReturn
│   |── slideRight
│   |── slideRightReturn
│   |── slideUp
│   └── slideUpReturn
├── math
│   |── foolishIn
│   |── foolishOut
│   |── holeIn
│   |── holeOut
│   |── swashIn
│   └── swashOut
├── tin
│   |── tinDownIn
│   |── tinDownOut
│   |── tinLeftIn
│   |── tinLeftOut
│   |── tinRightIn
│   |── tinRightOut
│   |── tinUpIn
│   └── tinUpOut
├── bomb
│   |── bombLeftOut
│   └── bombRightOut
├── boing
│   |── boingInUp
│   └── boingOutDown
├── space
│   |── spaceInDown
│   |── spaceInLeft
│   |── spaceInRight
│   |── spaceInUp
│   |── spaceOutDown
│   |── spaceOutLeft
│   |── spaceOutRight
│   └── spaceOutUp
```

### develop & test

- 📦 package

```
yarn
yarn build
```

- unit test

```
npm run test
```

## TODO

- add the online DEMO

## License

[MIT](./LICENSE)

> Most of the animation effects are based on [magic](https://github.com/miniMAC/magic).
