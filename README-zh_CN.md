# tailwindcss-magic

[English](./README.md) | 简体中文

一组适用于 [tailwindcss](https://tailwindcss.com/) 的神奇动画库,使用 [tailwindcss plugin](https://tailwindcss.com/docs/plugins) 的方式接入。[查看 DEMO]()

> 大部分动画效果基于 [magic](https://github.com/miniMAC/magic) 实现。

<div style="text-align:center" align="center">
  <img src="https://p1.music.126.net/T4JA1NmZlSTZZZK4EgBncA==/109951164699178486.gif" />
</div>

## 使用方法

### install

```sh
npm i tailwindcss-magic

or

yarn add tailwindcss-magic
```

### 引入插件

编辑 `tailwind.config.js` 文件

```js
module.exports = {
  // ...
  plugins: [require("tailwindcss-magic")],
};
```

### 在 HTML 元素中使用

```html
<div className="magic-magic"></div>
```

### 在 Hover, Focus 等状态中使用

```html
<div class="group">
  <h2 class="group-hover:magic-magic">Hello World</h2>
</div>
```

### 自定义 animation property

默认 `animation-duration:1s`,可借助 [tailwindcss-animation](TODO) 插件修改其他的动画属性: `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`。

## 动画名称

所有的动画名称均以 `magic` 开头，然后下划线之后是“真正的”动画名称(`magic-puffIn`, `magic-openDownLeft`...)，全部的动画名称列表如下：

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

### 开发与测试

- 📦 打包

```
yarn
yarn build
```

- 单元测试

```
npm run test
```

## TODO

- 添加线上 DEMO

## License

[MIT](./LICENSE)
