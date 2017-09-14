/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images__ = __webpack_require__(1);


document.addEventListener('DOMContentLoaded', () => {



  const headerStage = new createjs.Stage("headerCanvas");
  const headerBackground = new createjs.Shape();
  headerBackground.graphics.beginFill("#000").drawRect(0, 0, 700, 50);
  let headerLabel = new createjs.Text("Fireworks Show", "30px Oxygen", "#FFF");
  headerLabel.x = 250;
  headerLabel.y = 0;
  headerStage.addChild(headerBackground, headerLabel);
  headerStage.update();

  let recordingLabel = new createjs.Text("Start Recording", "26px Arial", "green");
  let showArr = [{
    time: "",
    xcoord: "",
    ycoord: "",
    images: ""
  }];
  let showTime = "";
  let startTime = "";
  let endTime = "";





  function playShow(){
    console.log(showArr);
    if (showArr[0].images === ""){
      showArr = showArr.slice(1);
    }

    if (showArr.empty) {
      return;
    } else if ((Date.now() - showTime) - showArr[0].time <= 1000 || (Date.now() - showTime) - showArr[0].time >= -1000) {
        createjs.Ticker.addEventListener("tick", showTick);
    } else {
      playShow();
    }
    let imagesdup1 = showArr[0].images;
    let x1 = showArr[0].xcoord;
    let y1 = showArr[0].ycoord;
    let imagesdup2 = showArr[1].images;
    let x2 = showArr[1].xcoord;
    let y2 = showArr[1].ycoord;
    let imagesdup3 = showArr[2].images;
    let x3 = showArr[2].xcoord;
    let y3 = showArr[2].ycoord;
    let imagesdup4 = showArr[3].images;
    let x4 = showArr[3].xcoord;
    let y4 = showArr[3].ycoord;
    let imagesdup5 = showArr[4].images;
    let x5 = showArr[4].xcoord;
    let y5 = showArr[4].ycoord;

    function showTick() {
      let bitmapImage1 = new createjs.Bitmap(imagesdup1[0]);
      bitmapImage1.x = x1;
      bitmapImage1.y = y1;
      bitmapImage1.width = 200;
      bitmapImage1.height = 200;
      stage.addChild(bitmapImage1);
      let bitmapImage2 = new createjs.Bitmap(imagesdup2[0]);
      bitmapImage2.x = x2;
      bitmapImage2.y = y2;
      bitmapImage2.width = 200;
      bitmapImage2.height = 200;
      stage.addChild(bitmapImage2);
      let bitmapImage3 = new createjs.Bitmap(imagesdup3[0]);
      bitmapImage3.x = x3;
      bitmapImage3.y = y3;
      bitmapImage3.width = 200;
      bitmapImage3.height = 200;
      let bitmapImage4 = new createjs.Bitmap(imagesdup4[0]);
      bitmapImage4.x = x4;
      bitmapImage4.y = y4;
      bitmapImage4.width = 200;
      bitmapImage4.height = 200;
      stage.addChild(bitmapImage3);
      stage.addChild(bitmapImage4);
      let bitmapImage5 = new createjs.Bitmap(imagesdup5[0]);
      bitmapImage5.x = x5;
      bitmapImage5.y = y5;
      bitmapImage5.width = 200;
      bitmapImage5.height = 200;
      stage.addChild(bitmapImage5);
      stage.update();
      showArr = showArr.slice(5);
      imagesdup1 = imagesdup1.slice(1);
      imagesdup2 = imagesdup2.slice(1);
      imagesdup3 = imagesdup3.slice(1);
      imagesdup4 = imagesdup4.slice(1);
      imagesdup5 = imagesdup5.slice(1);
      if (imagesdup1.length === 0) {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", showTick);
        stage.addChild(rectBackground);
        stage.update();
      }
      playShow();
     }
  }


  function recordingClick() {

    if (startTime === "") {
      startTime = Date.now();
      textOutput();
    } else if (endTime === ""){
      endTime = Date.now();
      textOutput();
    } else {

      startTime = "";
      endTime = "";
      textOutput();
      showTime = Date.now();
      playShow();
    }
  }

  function textOutput() {
    if (startTime === "") {
      recordingLabel = new createjs.Text("Start Recording", "26px Arial", "green");
      recordingCanvas.removeAllChildren();

      recordingCanvas.addChild(recordingLabel);
      recordingLabel.addEventListener("click", recordingClick);
      recordingCanvas.update();

    } else if (endTime === ""){
      recordingLabel = new createjs.Text("Stop Recording", "26px Arial", "red");
      recordingCanvas.removeAllChildren();

      recordingCanvas.addChild(recordingLabel);
      recordingLabel.addEventListener("click", recordingClick);
      recordingCanvas.update();
    } else {
      recordingLabel = new createjs.Text("Play my Show", "26px Arial", "blue");
      recordingCanvas.removeAllChildren();

      recordingCanvas.addChild(recordingLabel);
      recordingLabel.addEventListener("click", recordingClick);
      recordingCanvas.update();
    }
  }

  const recordingCanvas = new createjs.Stage("recordingCanvas");
  // const hoverBox = new createjs.Shape().graphics.beginFill("black").drawRect(0, 0, 100, 100);
  // recordingCanvas.enableMouseOver();
  // hoverBox.on("mouseover", handleMouseOver);
  // hoverBox.on("mouseout", handleMouseOut);
  // recordingCanvas.addChild(hoverBox);
  // recordingCanvas.setChildIndex(hoverBox, 0);
  // recordingCanvas.update();
  // function handleMouseOver() {
  //   hoverBox.graphics.clear().beginFill("yellow").drawRect(0, 0, 100, 80);
  //   recordingCanvas.addChild(hoverBox);
  //   recordingCanvas.setChildIndex(hoverBox, 0);
  //   recordingCanvas.update();
  // }
  // function handleMouseOut(){
  //   hoverBox.graphics.clear().beginFill("black").drawRect(0 , 0, 100, 80);
  //   recordingCanvas.addChild(hoverBox);
  //   recordingCanvas.setChildIndex(hoverBox, 0);
  //   recordingCanvas.update();
  // }


  recordingLabel.x = 0;
  recordingLabel.y = 0;

  recordingLabel.addEventListener("click", recordingClick);

  recordingCanvas.addChild(recordingLabel);
  recordingCanvas.update();






  const stage = new createjs.Stage("displayCanvas");
  const rectBackground = new createjs.Shape();
  rectBackground.graphics.beginFill("#000").drawRect(0, 0, 700, 500);
  stage.addChild(rectBackground);

  const clickStage = new createjs.Stage("clickFireworks");


  let hit01 = new createjs.Shape();
  let label01 = new createjs.Text("Waterfall", "18px Arial", "#FFF");
  hit01.graphics.beginFill("#FFF").drawRect(0, 0, label01.getMeasuredWidth(), label01.getMeasuredHeight());
  label01.x = 0;
  label01.y = 0;
  label01.hitArea = hit01;


  clickStage.addChild(label01);
  clickStage.update();
  label01.addEventListener("click", handleClickfw01);
  clickStage.update();
  stage.update();

  function handleClickfw01() {


    let imagesdup1 = __WEBPACK_IMPORTED_MODULE_0__images__["a" /* fw01 */];
    let imagesdup2 = __WEBPACK_IMPORTED_MODULE_0__images__["a" /* fw01 */];
    let imagesdup3 = __WEBPACK_IMPORTED_MODULE_0__images__["a" /* fw01 */];
    let imagesdup4 = __WEBPACK_IMPORTED_MODULE_0__images__["a" /* fw01 */];
    let imagesdup5 = __WEBPACK_IMPORTED_MODULE_0__images__["a" /* fw01 */];
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .9,
        ycoord: y1 * .9,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .8,
        ycoord: y1 * .8,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .7,
        ycoord: y1 * .7,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .6,
        ycoord: y1 * .6,
        images: imagesdup5
      });
    }

    createjs.Ticker.addEventListener("tick", tick01);


    function tick01() {
      let bitmap01 = new createjs.Bitmap(imagesdup1[0]);
      let bitmap02 = new createjs.Bitmap(imagesdup2[0]);
      let bitmap03 = new createjs.Bitmap(imagesdup3[0]);
      let bitmap04 = new createjs.Bitmap(imagesdup4[0]);
      let bitmap05 = new createjs.Bitmap(imagesdup5[0]);
      bitmap01.x = x1;
      bitmap01.y = y1;
      bitmap01.width = 200;
      bitmap01.height = 200;
      bitmap02.x = x1 * .9;
      bitmap02.y = y1 * .9;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x1 * .8;
      bitmap03.y = y1 * .8;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x1 * .7;
      bitmap04.y = y1 * .7;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x1 * .6;
      bitmap05.y = y1 * .6;
      bitmap05.width = 200;
      bitmap05.height = 200;
      stage.addChild(bitmap01);
      stage.addChild(bitmap02);
      stage.addChild(bitmap03);
      stage.addChild(bitmap04);
      stage.addChild(bitmap05);
      stage.update();
      imagesdup1 = imagesdup1.slice(1);
      imagesdup2 = imagesdup2.slice(1);
      imagesdup3 = imagesdup3.slice(1);
      imagesdup4 = imagesdup4.slice(1);
      imagesdup5 = imagesdup5.slice(1);
      if (imagesdup1.length === 0) {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", tick01);
        stage.addChild(rectBackground);
        stage.update();
      }
     }
  }


  let hit02 = new createjs.Shape();
  let label02 = new createjs.Text("POP!", "18px Arial", "#FFF");
  hit02.graphics.beginFill("#FFF").drawRect(0, 0, label02.getMeasuredWidth(), label02.getMeasuredHeight());
  label02.x = 100;
  label02.y = 0;
  label02.hitArea = hit02;

  clickStage.addChild(label02);
  clickStage.update();
  label02.addEventListener("click", handleClickfw02);
  clickStage.update();
  stage.update();


  function handleClickfw02() {

    let imagesdup1 = __WEBPACK_IMPORTED_MODULE_0__images__["b" /* fw02 */];
    let imagesdup2 = __WEBPACK_IMPORTED_MODULE_0__images__["b" /* fw02 */];
    let imagesdup3 = __WEBPACK_IMPORTED_MODULE_0__images__["b" /* fw02 */];
    let imagesdup4 = __WEBPACK_IMPORTED_MODULE_0__images__["b" /* fw02 */];
    let imagesdup5 = __WEBPACK_IMPORTED_MODULE_0__images__["b" /* fw02 */];
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .9,
        ycoord: y1 * .9,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .8,
        ycoord: y1 * .8,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .7,
        ycoord: y1 * .7,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .6,
        ycoord: y1 * .6,
        images: imagesdup5
      });
    }

    createjs.Ticker.addEventListener("tick", tick02);


    function tick02() {
      let bitmap01 = new createjs.Bitmap(imagesdup1[0]);
      let bitmap02 = new createjs.Bitmap(imagesdup2[0]);
      let bitmap03 = new createjs.Bitmap(imagesdup3[0]);
      let bitmap04 = new createjs.Bitmap(imagesdup4[0]);
      let bitmap05 = new createjs.Bitmap(imagesdup5[0]);
      bitmap01.x = x1;
      bitmap01.y = y1;
      bitmap01.width = 200;
      bitmap01.height = 200;
      bitmap02.x = x1 * .9;
      bitmap02.y = y1 * .9;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x1 * .8;
      bitmap03.y = y1 * .8;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x1 * .7;
      bitmap04.y = y1 * .7;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x1 * .6;
      bitmap05.y = y1 * .6;
      bitmap05.width = 200;
      bitmap05.height = 200;
      stage.addChild(bitmap01);
      stage.addChild(bitmap02);
      stage.addChild(bitmap03);
      stage.addChild(bitmap04);
      stage.addChild(bitmap05);
      stage.update();
      imagesdup1 = imagesdup1.slice(1);
      imagesdup2 = imagesdup2.slice(1);
      imagesdup3 = imagesdup3.slice(1);
      imagesdup4 = imagesdup4.slice(1);
      imagesdup5 = imagesdup5.slice(1);
      if (imagesdup1.length === 0) {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", tick02);
        stage.addChild(rectBackground);
        stage.update();
      }
     }
  }


  let hit03 = new createjs.Shape();
  let label03 = new createjs.Text("Fireball", "18px Arial", "#FFF");
  hit03.graphics.beginFill("#FFF").drawRect(0, 0, label03.getMeasuredWidth(), label03.getMeasuredHeight());
  label03.x = 200;
  label03.y = 0;
  label03.hitArea = hit03;

  clickStage.addChild(label03);
  clickStage.update();
  label03.addEventListener("click", handleClickfw03);
  clickStage.update();
  stage.update();

  function handleClickfw03() {

    let imagesdup1 = __WEBPACK_IMPORTED_MODULE_0__images__["c" /* fw03 */];
    let imagesdup2 = __WEBPACK_IMPORTED_MODULE_0__images__["c" /* fw03 */];
    let imagesdup3 = __WEBPACK_IMPORTED_MODULE_0__images__["c" /* fw03 */];
    let imagesdup4 = __WEBPACK_IMPORTED_MODULE_0__images__["c" /* fw03 */];
    let imagesdup5 = __WEBPACK_IMPORTED_MODULE_0__images__["c" /* fw03 */];
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .9,
        ycoord: y1 * .9,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .8,
        ycoord: y1 * .8,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .7,
        ycoord: y1 * .7,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .6,
        ycoord: y1 * .6,
        images: imagesdup5
      });
    }

    createjs.Ticker.addEventListener("tick", tick03);


    function tick03() {
      let bitmap01 = new createjs.Bitmap(imagesdup1[0]);
      let bitmap02 = new createjs.Bitmap(imagesdup2[0]);
      let bitmap03 = new createjs.Bitmap(imagesdup3[0]);
      let bitmap04 = new createjs.Bitmap(imagesdup4[0]);
      let bitmap05 = new createjs.Bitmap(imagesdup5[0]);
      bitmap01.x = x1;
      bitmap01.y = y1;
      bitmap01.width = 200;
      bitmap01.height = 200;
      bitmap02.x = x1 * .9;
      bitmap02.y = y1 * .9;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x1 * .8;
      bitmap03.y = y1 * .8;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x1 * .7;
      bitmap04.y = y1 * .7;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x1 * .6;
      bitmap05.y = y1 * .6;
      bitmap05.width = 200;
      bitmap05.height = 200;
      stage.addChild(bitmap01);
      stage.addChild(bitmap02);
      stage.addChild(bitmap03);
      stage.addChild(bitmap04);
      stage.addChild(bitmap05);
      stage.update();
      imagesdup1 = imagesdup1.slice(1);
      imagesdup2 = imagesdup2.slice(1);
      imagesdup3 = imagesdup3.slice(1);
      imagesdup4 = imagesdup4.slice(1);
      imagesdup5 = imagesdup5.slice(1);
      if (imagesdup1.length === 0) {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", tick03);
        stage.addChild(rectBackground);
        stage.update();
      }
     }
  }


  let hit04 = new createjs.Shape();
  let label04 = new createjs.Text("Burst", "18px Arial", "#FFF");
  hit04.graphics.beginFill("#FFF").drawRect(0, 0, label04.getMeasuredWidth(), label04.getMeasuredHeight());
  label04.x = 300;
  label04.y = 0;
  label04.hitArea = hit04;

  clickStage.addChild(label04);
  clickStage.update();
  label04.addEventListener("click", handleClickfw04);
  clickStage.update();
  stage.update();

  function handleClickfw04() {

    let imagesdup1 = __WEBPACK_IMPORTED_MODULE_0__images__["d" /* fw04 */];
    let imagesdup2 = __WEBPACK_IMPORTED_MODULE_0__images__["d" /* fw04 */];
    let imagesdup3 = __WEBPACK_IMPORTED_MODULE_0__images__["d" /* fw04 */];
    let imagesdup4 = __WEBPACK_IMPORTED_MODULE_0__images__["d" /* fw04 */];
    let imagesdup5 = __WEBPACK_IMPORTED_MODULE_0__images__["d" /* fw04 */];
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .9,
        ycoord: y1 * .9,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .8,
        ycoord: y1 * .8,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .7,
        ycoord: y1 * .7,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .6,
        ycoord: y1 * .6,
        images: imagesdup5
      });
    }

    createjs.Ticker.addEventListener("tick", tick04);


    function tick04() {
      let bitmap01 = new createjs.Bitmap(imagesdup1[0]);
      let bitmap02 = new createjs.Bitmap(imagesdup2[0]);
      let bitmap03 = new createjs.Bitmap(imagesdup3[0]);
      let bitmap04 = new createjs.Bitmap(imagesdup4[0]);
      let bitmap05 = new createjs.Bitmap(imagesdup5[0]);
      bitmap01.x = x1;
      bitmap01.y = y1;
      bitmap01.width = 200;
      bitmap01.height = 200;
      bitmap02.x = x1 * .9;
      bitmap02.y = y1 * .9;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x1 * .8;
      bitmap03.y = y1 * .8;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x1 * .7;
      bitmap04.y = y1 * .7;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x1 * .6;
      bitmap05.y = y1 * .6;
      bitmap05.width = 200;
      bitmap05.height = 200;
      stage.addChild(bitmap01);
      stage.addChild(bitmap02);
      stage.addChild(bitmap03);
      stage.addChild(bitmap04);
      stage.addChild(bitmap05);
      stage.update();
      imagesdup1 = imagesdup1.slice(1);
      imagesdup2 = imagesdup2.slice(1);
      imagesdup3 = imagesdup3.slice(1);
      imagesdup4 = imagesdup4.slice(1);
      imagesdup5 = imagesdup5.slice(1);
      if (imagesdup1.length === 0) {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", tick04);
        stage.addChild(rectBackground);
        stage.update();
      }
     }
  }


  let hit09 = new createjs.Shape();
  let label09 = new createjs.Text("Ruby Sky", "18px Arial", "#FFF");
  hit09.graphics.beginFill("#FFF").drawRect(0, 0, label09.getMeasuredWidth(), label09.getMeasuredHeight());
  label09.x = 400;
  label09.y = 0;
  label09.hitArea = hit09;

  clickStage.addChild(label09);
  clickStage.update();
  label09.addEventListener("click", handleClickfw09);
  clickStage.update();
  stage.update();

  function handleClickfw09() {

    let imagesdup1 = __WEBPACK_IMPORTED_MODULE_0__images__["f" /* fw09 */];
    let imagesdup2 = __WEBPACK_IMPORTED_MODULE_0__images__["f" /* fw09 */];
    let imagesdup3 = __WEBPACK_IMPORTED_MODULE_0__images__["f" /* fw09 */];
    let imagesdup4 = __WEBPACK_IMPORTED_MODULE_0__images__["f" /* fw09 */];
    let imagesdup5 = __WEBPACK_IMPORTED_MODULE_0__images__["f" /* fw09 */];
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .9,
        ycoord: y1 * .9,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .8,
        ycoord: y1 * .8,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .7,
        ycoord: y1 * .7,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .6,
        ycoord: y1 * .6,
        images: imagesdup5
      });
    }

    createjs.Ticker.addEventListener("tick", tick09);


    function tick09() {
      let bitmap01 = new createjs.Bitmap(imagesdup1[0]);
      let bitmap02 = new createjs.Bitmap(imagesdup2[0]);
      let bitmap03 = new createjs.Bitmap(imagesdup3[0]);
      let bitmap04 = new createjs.Bitmap(imagesdup4[0]);
      let bitmap05 = new createjs.Bitmap(imagesdup5[0]);
      bitmap01.x = x1;
      bitmap01.y = y1;
      bitmap01.width = 200;
      bitmap01.height = 200;
      bitmap02.x = x1 * .9;
      bitmap02.y = y1 * .9;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x1 * .8;
      bitmap03.y = y1 * .8;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x1 * .7;
      bitmap04.y = y1 * .7;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x1 * .6;
      bitmap05.y = y1 * .6;
      bitmap05.width = 200;
      bitmap05.height = 200;
      stage.addChild(bitmap01);
      stage.addChild(bitmap02);
      stage.addChild(bitmap03);
      stage.addChild(bitmap04);
      stage.addChild(bitmap05);
      stage.update();
      imagesdup1 = imagesdup1.slice(1);
      imagesdup2 = imagesdup2.slice(1);
      imagesdup3 = imagesdup3.slice(1);
      imagesdup4 = imagesdup4.slice(1);
      imagesdup5 = imagesdup5.slice(1);
      if (imagesdup1.length === 0) {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", tick09);
        stage.addChild(rectBackground);
        stage.update();
      }
     }
  }




  let hit08 = new createjs.Shape();
  let label08 = new createjs.Text("BANG!", "18px Arial", "#FFF");
  hit08.graphics.beginFill("#FFF").drawRect(0, 0, label08.getMeasuredWidth(), label08.getMeasuredHeight());
  label08.x = 520;
  label08.y = 0;

  label08.hitArea = hit08;

  clickStage.addChild(label08);
  clickStage.update();
  label08.addEventListener("click", handleClickfw08);
  clickStage.update();
  stage.update();

  function handleClickfw08() {

    let imagesdup1 = __WEBPACK_IMPORTED_MODULE_0__images__["e" /* fw08 */];
    let imagesdup2 = __WEBPACK_IMPORTED_MODULE_0__images__["e" /* fw08 */];
    let imagesdup3 = __WEBPACK_IMPORTED_MODULE_0__images__["e" /* fw08 */];
    let imagesdup4 = __WEBPACK_IMPORTED_MODULE_0__images__["e" /* fw08 */];
    let imagesdup5 = __WEBPACK_IMPORTED_MODULE_0__images__["e" /* fw08 */];
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .9,
        ycoord: y1 * .9,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .8,
        ycoord: y1 * .8,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .7,
        ycoord: y1 * .7,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .6,
        ycoord: y1 * .6,
        images: imagesdup5
      });
    }

    createjs.Ticker.addEventListener("tick", tick08);


    function tick08() {
      let bitmap01 = new createjs.Bitmap(imagesdup1[0]);
      let bitmap02 = new createjs.Bitmap(imagesdup2[0]);
      let bitmap03 = new createjs.Bitmap(imagesdup3[0]);
      let bitmap04 = new createjs.Bitmap(imagesdup4[0]);
      let bitmap05 = new createjs.Bitmap(imagesdup5[0]);
      bitmap01.x = x1;
      bitmap01.y = y1;
      bitmap01.width = 200;
      bitmap01.height = 200;
      bitmap02.x = x1 * .9;
      bitmap02.y = y1 * .9;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x1 * .8;
      bitmap03.y = y1 * .8;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x1 * .7;
      bitmap04.y = y1 * .7;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x1 * .6;
      bitmap05.y = y1 * .6;
      bitmap05.width = 200;
      bitmap05.height = 200;
      stage.addChild(bitmap01);
      stage.addChild(bitmap02);
      stage.addChild(bitmap03);
      stage.addChild(bitmap04);
      stage.addChild(bitmap05);
      stage.update();
      imagesdup1 = imagesdup1.slice(1);
      imagesdup2 = imagesdup2.slice(1);
      imagesdup3 = imagesdup3.slice(1);
      imagesdup4 = imagesdup4.slice(1);
      imagesdup5 = imagesdup5.slice(1);
      if (imagesdup1.length === 0) {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", tick08);
        stage.addChild(rectBackground);
        stage.update();
      }
     }
  }



  let hit11 = new createjs.Shape();
  let label11 = new createjs.Text("Nebula", "18px Arial", "#FFF");
  hit11.graphics.beginFill("#FFF").drawRect(0, 0, label11.getMeasuredWidth(), label11.getMeasuredHeight());
  label11.x = 615;
  label11.y = 0;
  label11.hitArea = hit11;

  clickStage.addChild(label11);
  clickStage.update();
  label11.addEventListener("click", handleClickfw11);
  clickStage.update();
  stage.update();

  function handleClickfw11() {

    let imagesdup1 = __WEBPACK_IMPORTED_MODULE_0__images__["g" /* fw11 */];
    let imagesdup2 = __WEBPACK_IMPORTED_MODULE_0__images__["g" /* fw11 */];
    let imagesdup3 = __WEBPACK_IMPORTED_MODULE_0__images__["g" /* fw11 */];
    let imagesdup4 = __WEBPACK_IMPORTED_MODULE_0__images__["g" /* fw11 */];
    let imagesdup5 = __WEBPACK_IMPORTED_MODULE_0__images__["g" /* fw11 */];
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .9,
        ycoord: y1 * .9,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .8,
        ycoord: y1 * .8,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .7,
        ycoord: y1 * .7,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x1 * .6,
        ycoord: y1 * .6,
        images: imagesdup5
      });
    }

    createjs.Ticker.addEventListener("tick", tick11);


    function tick11() {
      let bitmap01 = new createjs.Bitmap(imagesdup1[0]);
      let bitmap02 = new createjs.Bitmap(imagesdup2[0]);
      let bitmap03 = new createjs.Bitmap(imagesdup3[0]);
      let bitmap04 = new createjs.Bitmap(imagesdup4[0]);
      let bitmap05 = new createjs.Bitmap(imagesdup5[0]);
      bitmap01.x = x1;
      bitmap01.y = y1;
      bitmap01.width = 200;
      bitmap01.height = 200;
      bitmap02.x = x1 * .9;
      bitmap02.y = y1 * .9;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x1 * .8;
      bitmap03.y = y1 * .8;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x1 * .7;
      bitmap04.y = y1 * .7;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x1 * .6;
      bitmap05.y = y1 * .6;
      bitmap05.width = 200;
      bitmap05.height = 200;
      stage.addChild(bitmap01);
      stage.addChild(bitmap02);
      stage.addChild(bitmap03);
      stage.addChild(bitmap04);
      stage.addChild(bitmap05);
      stage.update();
      imagesdup1 = imagesdup1.slice(1);
      imagesdup2 = imagesdup2.slice(1);
      imagesdup3 = imagesdup3.slice(1);
      imagesdup4 = imagesdup4.slice(1);
      imagesdup5 = imagesdup5.slice(1);
      if (imagesdup1.length === 0) {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", tick11);
        stage.addChild(rectBackground);
        stage.update();
      }
     }
  }
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const fw01 = ["./firework_image/fw01/0.gif", "./firework_image/fw01/1.gif","./firework_image/fw01/2.gif",
  "./firework_image/fw01/3.gif", "./firework_image/fw01/4.gif", "./firework_image/fw01/5.gif",
  "./firework_image/fw01/6.gif", "./firework_image/fw01/7.gif", "./firework_image/fw01/8.gif",
  "./firework_image/fw01/9.gif", "./firework_image/fw01/10.gif","./firework_image/fw01/11.gif",
  "./firework_image/fw01/12.gif", "./firework_image/fw01/13.gif", "./firework_image/fw01/14.gif",
  "./firework_image/fw01/15.gif", "./firework_image/fw01/16.gif", "./firework_image/fw01/17.gif",
  "./firework_image/fw01/18.gif", "./firework_image/fw01/19.gif", "./firework_image/fw01/20.gif"];
/* harmony export (immutable) */ __webpack_exports__["a"] = fw01;


  const fw02 = ["./firework_image/fw02/0.gif", "./firework_image/fw02/1.gif","./firework_image/fw02/2.gif",
    "./firework_image/fw02/3.gif", "./firework_image/fw02/4.gif", "./firework_image/fw02/5.gif",
    "./firework_image/fw02/6.gif", "./firework_image/fw02/7.gif", "./firework_image/fw02/8.gif",
    "./firework_image/fw02/9.gif", "./firework_image/fw02/10.gif","./firework_image/fw02/11.gif",
    "./firework_image/fw02/12.gif", "./firework_image/fw02/13.gif", "./firework_image/fw02/14.gif",
    "./firework_image/fw02/15.gif", "./firework_image/fw02/16.gif", "./firework_image/fw02/17.gif",
    "./firework_image/fw02/18.gif", "./firework_image/fw02/19.gif", "./firework_image/fw02/20.gif",
    "./firework_image/fw02/21.gif", "./firework_image/fw02/22.gif", "./firework_image/fw02/23.gif",
    "./firework_image/fw02/24.gif", "./firework_image/fw02/25.gif", "./firework_image/fw02/26.gif",
    "./firework_image/fw02/27.gif", "./firework_image/fw02/28.gif", "./firework_image/fw02/29.gif",
    "./firework_image/fw02/30.gif", "./firework_image/fw02/31.gif", "./firework_image/fw02/32.gif",
    "./firework_image/fw02/33.gif"];
/* harmony export (immutable) */ __webpack_exports__["b"] = fw02;



  const fw03 = ["./firework_image/fw03/0.gif", "./firework_image/fw03/1.gif","./firework_image/fw03/2.gif",
    "./firework_image/fw03/3.gif", "./firework_image/fw03/4.gif", "./firework_image/fw03/5.gif",
    "./firework_image/fw03/6.gif", "./firework_image/fw03/7.gif", "./firework_image/fw03/8.gif",
    "./firework_image/fw03/9.gif", "./firework_image/fw03/10.gif","./firework_image/fw03/11.gif",
    "./firework_image/fw03/12.gif", "./firework_image/fw03/13.gif", "./firework_image/fw03/14.gif",
    "./firework_image/fw03/15.gif", "./firework_image/fw03/16.gif", "./firework_image/fw03/17.gif",
    "./firework_image/fw03/18.gif", "./firework_image/fw03/19.gif", "./firework_image/fw03/20.gif"];
/* harmony export (immutable) */ __webpack_exports__["c"] = fw03;



  const fw04 = ["./firework_image/fw04/0.gif", "./firework_image/fw04/1.gif","./firework_image/fw04/2.gif",
    "./firework_image/fw04/3.gif", "./firework_image/fw04/4.gif", "./firework_image/fw04/5.gif",
    "./firework_image/fw04/6.gif", "./firework_image/fw04/7.gif", "./firework_image/fw04/8.gif",
    "./firework_image/fw04/9.gif", "./firework_image/fw04/10.gif","./firework_image/fw04/11.gif",
    "./firework_image/fw04/12.gif", "./firework_image/fw04/13.gif", "./firework_image/fw04/14.gif",
    "./firework_image/fw04/15.gif", "./firework_image/fw04/16.gif", "./firework_image/fw04/17.gif",
    "./firework_image/fw04/18.gif", "./firework_image/fw04/19.gif", "./firework_image/fw04/20.gif"];
/* harmony export (immutable) */ __webpack_exports__["d"] = fw04;



    const fw09 = ["./firework_image/fw09/0.gif", "./firework_image/fw09/1.gif","./firework_image/fw09/2.gif",
      "./firework_image/fw09/3.gif", "./firework_image/fw09/4.gif", "./firework_image/fw09/5.gif",
      "./firework_image/fw09/6.gif", "./firework_image/fw09/7.gif", "./firework_image/fw09/8.gif",
      "./firework_image/fw09/9.gif", "./firework_image/fw09/10.gif","./firework_image/fw09/11.gif",
      "./firework_image/fw09/12.gif", "./firework_image/fw09/13.gif", "./firework_image/fw09/14.gif",
      "./firework_image/fw09/15.gif", "./firework_image/fw09/16.gif", "./firework_image/fw09/17.gif",
      "./firework_image/fw09/18.gif", "./firework_image/fw09/19.gif", "./firework_image/fw09/20.gif",
      "./firework_image/fw09/21.gif", "./firework_image/fw09/22.gif", "./firework_image/fw09/23.gif",
      "./firework_image/fw09/24.gif", "./firework_image/fw09/25.gif", "./firework_image/fw09/26.gif",
      "./firework_image/fw09/27.gif", "./firework_image/fw09/28.gif", "./firework_image/fw09/29.gif",
      "./firework_image/fw09/30.gif", "./firework_image/fw09/31.gif", "./firework_image/fw09/32.gif",
      "./firework_image/fw09/33.gif"];
/* harmony export (immutable) */ __webpack_exports__["f"] = fw09;



  const fw08 = ["./firework_image/fw08/0.gif", "./firework_image/fw08/1.gif","./firework_image/fw08/2.gif",
    "./firework_image/fw08/3.gif", "./firework_image/fw08/4.gif", "./firework_image/fw08/5.gif",
    "./firework_image/fw08/6.gif", "./firework_image/fw08/7.gif", "./firework_image/fw08/8.gif",
    "./firework_image/fw08/9.gif", "./firework_image/fw08/10.gif","./firework_image/fw08/11.gif",
    "./firework_image/fw08/12.gif", "./firework_image/fw08/13.gif", "./firework_image/fw08/14.gif",
    "./firework_image/fw08/15.gif", "./firework_image/fw08/16.gif", "./firework_image/fw08/17.gif",
    "./firework_image/fw08/18.gif", "./firework_image/fw08/19.gif", "./firework_image/fw08/20.gif",
    "./firework_image/fw08/21.gif", "./firework_image/fw08/22.gif", "./firework_image/fw08/23.gif",
    "./firework_image/fw08/24.gif", "./firework_image/fw08/25.gif", "./firework_image/fw08/26.gif"];
/* harmony export (immutable) */ __webpack_exports__["e"] = fw08;


    const fw11 = ["./firework_image/fw11/0.gif", "./firework_image/fw11/1.gif","./firework_image/fw11/2.gif",
      "./firework_image/fw11/3.gif", "./firework_image/fw11/4.gif", "./firework_image/fw11/5.gif",
      "./firework_image/fw11/6.gif", "./firework_image/fw11/7.gif", "./firework_image/fw11/8.gif",
      "./firework_image/fw11/9.gif", "./firework_image/fw11/10.gif","./firework_image/fw11/11.gif",
      "./firework_image/fw11/12.gif", "./firework_image/fw11/13.gif", "./firework_image/fw11/14.gif",
      "./firework_image/fw11/15.gif", "./firework_image/fw11/16.gif", "./firework_image/fw11/17.gif",
      "./firework_image/fw11/18.gif", "./firework_image/fw11/19.gif", "./firework_image/fw11/20.gif",
      "./firework_image/fw11/21.gif", "./firework_image/fw11/22.gif", "./firework_image/fw11/23.gif",
      "./firework_image/fw11/24.gif", "./firework_image/fw11/25.gif", "./firework_image/fw11/26.gif",
      "./firework_image/fw11/27.gif", "./firework_image/fw11/28.gif", "./firework_image/fw11/29.gif",
      "./firework_image/fw11/30.gif", "./firework_image/fw11/31.gif", "./firework_image/fw11/32.gif",
      "./firework_image/fw11/33.gif"];
/* harmony export (immutable) */ __webpack_exports__["g"] = fw11;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map