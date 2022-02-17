import React, { Component } from "react";

const root = {
  placeholder: {
    backgroundColor: "#eee",
    width: "100px",
    height: "100px",
    left: "12%",
    top: "200px",
    position: "fixed",
    borderRadius: "3px",
    fontFamily:
      '"SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif',
  },
  magicAni: {
    backgroundColor: "#FF7374",
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: "3px",
    textAlign: "center",
    color: "#fff",
  },
  cssOptions: {
    width: "50%",
    left: "35%",
    position: "absolute",
    fontFamily:
      '"SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif',
    color: "#52616A",
    // userSelect: 'none'
  },
  title: {
    position: "relative",
    left: "10%",
  },
  chunk: {
    padding: "1em 0 0 0",
    left: "10%",
    clear: "both",
    overflow: "hidden",
  },
  h2: {
    // marginTop: '110px',
    marginBottom: "5px",
    fontWeight: 400,
  },
};
const styles = {
  btnDefault: {
    fontSize: 16,
    display: "block",
    float: "left",
    margin: "10px 10px 10px 0",
    padding: "12px 18px",
    background: "#fff",
    border: "2px solid #C9D6DE",
    color: "#52616A",
    borderRadius: "4px",
    cursor: "pointer",
  },
  btnHover: {},
};

const PVaule = [
  ["magic", "twisterInDown", "twisterInUp", "swap"],
  ["puffIn", "puffOut", "vanishIn", "vanishOut"],
  [
    "openDownLeft",
    "openDownLeftReturn",
    "openDownRight",
    "openDownRightReturn",
    "openUpLeft",
    "openUpLeftReturn",
    "openUpRight",
    "openUpRightReturn",
  ],
  ["openDownLeftOut", "openDownRightOut", "openUpLeftOut", "openUpRightOut"],
  [
    "perspectiveDown",
    "perspectiveDownReturn",
    "perspectiveLeft",
    "perspectiveLeftReturn",
    "perspectiveRight",
    "perspectiveRightReturn",
    "perspectiveUp",
    "perspectiveUpReturn",
  ],
  [
    "rotateDownIn",
    "rotateDownOut",
    "rotateLeftIn",
    "rotateLeftOut",
    "rotateRightIn",
    "rotateRightOut",
    "rotateUpIn",
    "rotateUpOut",
  ],
  [
    "slideDown",
    "slideDownReturn",
    "slideLeft",
    "slideLeftReturn",
    "slideRight",
    "slideRightReturn",
    "slideUp",
    "slideUpReturn",
  ],
  ["foolishIn", "foolishOut", "holeIn", "holeOut", "swashIn", "swashOut"],
  [
    "tinDownIn",
    "tinDownOut",
    "tinLeftIn",
    "tinLeftOut",
    "tinRightIn",
    "tinRightOut",
    "tinUpIn",
    "tinUpOut",
  ],
  ["bombLeftOut", "bombRightOut"],
  ["boingInUp", "boingOutDown"],
  [
    "spaceInDown",
    "spaceInLeft",
    "spaceInRight",
    "spaceInUp",
    "spaceOutDown",
    "spaceOutLeft",
    "spaceOutRight",
    "spaceOutUp",
  ],
];
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isPlaying: false,
      magicClass: null,
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  handleBtnClick(e) {
    if (this.state.isPlaying) {
      return;
    }
    var cssName = e.target.innerText;
    this.setState({
      isPlaying: true,
      magicClass: "magic-" + cssName,
    });
    setTimeout(() => {
      this.setState({
        isPlaying: false,
        magicClass: null,
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <div style={root.placeholder}>
          <div style={root.magicAni} className={`${this.state.magicClass}`}>
            <h2 className="h-full flex items-center justify-center">
              React
              <br />
              Magic
            </h2>
          </div>
        </div>
        <div style={root.cssOptions}>
          <h1 style={root.title}>React-Magic</h1>
          <div style={root.chunk} className="group">
            <h2 style={root.h2}>React-Magic Effects</h2>
            {PVaule[0].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className={`btnHover`}
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Bling</h2>
            {PVaule[1].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Static Effects</h2>
            {PVaule[2].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Static Effects Out</h2>
            {PVaule[3].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Perspective</h2>
            {PVaule[4].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Rotate</h2>
            {PVaule[5].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Slide</h2>
            {PVaule[6].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Math</h2>
            {PVaule[7].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Tin</h2>
            {PVaule[8].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Bomb</h2>
            {PVaule[9].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Boing</h2>
            {PVaule[10].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Space</h2>
            {PVaule[11].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
        </div>
        <div
          className={`
            hidden
            magic-magic magic-swap magic-twisterInUp magic-twisterInDown

            magic-puffIn magic-puffOut magic-vanishIn magic-vanishOut

            magic-openDownLeft magic-openDownLeftReturn magic-openDownRight magic-openDownRightReturn
            magic-openUpLeft magic-openUpLeftReturn magic-openUpRight magic-openUpRightReturn

            magic-openDownLeftOut magic-openDownRightOut magic-openUpLeftOut magic-openUpRightOut

            magic-perspectiveDown magic-perspectiveDownReturn magic-perspectiveLeft magic-perspectiveLeftReturn
            magic-perspectiveRight magic-perspectiveRightReturn magic-perspectiveUp magic-perspectiveUpReturn

            magic-rotateDownIn magic-rotateDownOut magic-rotateLeftIn magic-rotateLeftOut
            magic-rotateRightIn magic-rotateRightOut magic-rotateUpIn magic-rotateUpOut

            magic-slideDown magic-slideDownReturn magic-slideLeft magic-slideLeftReturn
            magic-slideRight magic-slideRightReturn magic-slideUp magic-slideUpReturn

            magic-foolishIn magic-foolishOut magic-holeIn
            magic-holeOut magic-swashIn magic-swashOut

            magic-tinDownIn magic-tinDownOut magic-tinLeftIn magic-tinLeftOut
            magic-tinRightIn magic-tinRightOut magic-tinUpIn magic-tinUpOut

            magic-bombLeftOut magic-bombRightOut 
            magic-boingInUp magic-boingOutDown

            magic-spaceInDown magic-spaceInLeft magic-spaceInRight magic-spaceInUp
            magic-spaceOutDown magic-spaceOutLeft magic-spaceOutRight magic-spaceOutUp
        `}
        ></div>
      </div>
    );
  }
}

export default App;
