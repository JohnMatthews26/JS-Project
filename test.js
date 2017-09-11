import {fw01, fw02, fw03, fw04, fw08, fw09, fw11} from './images';
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

  let imagesdup = showArr[0].images;
  let x = showArr[0].xcoord;
  let y = showArr[0].ycoord;



  function playShow(){

    if (showArr.empty) {
      return;
    } else if ((Date.now() - showTime) - showArr[0].time <= 1000 || (Date.now() - showTime) - showArr[0].time >= -1000) {
        createjs.Ticker.addEventListener("tick", showTick);
    } else {
      playShow();
    }







    function showTick() {
      let bitmapImage = new createjs.Bitmap(imagesdup[0]);
      bitmapImage.x = x;
      bitmapImage.y = y;
      bitmapImage.width = 200;
      bitmapImage.height = 200;
      stage.addChild(bitmapImage);
      stage.update();
      showArr = showArr.slice(1);
      imagesdup = imagesdup.slice(1);
      if (imagesdup.length === 0) {
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


    let imagesdup = fw01;
    let x = Math.random() * 600;
    let y = Math.random() * 400;

    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x,
        ycoord: y,
        images: imagesdup
      });
    }

    createjs.Ticker.addEventListener("tick", tick01);


    function tick01() {
      let bitmap01 = new createjs.Bitmap(imagesdup[0]);
      bitmap01.x = x;
      bitmap01.y = y;
      bitmap01.width = 200;
      bitmap01.height = 200;
      stage.addChild(bitmap01);
      stage.update();
      imagesdup = imagesdup.slice(1);
      if (imagesdup.length === 0) {
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

    let imagesdup = fw02;
    let x = Math.random() * 600;
    let y = Math.random() * 400;

    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x,
        ycoord: y,
        images: imagesdup
      });
    }
    createjs.Ticker.addEventListener("tick", tick02);


    function tick02() {
      let bitmap02 = new createjs.Bitmap(imagesdup[0]);
      bitmap02.x = x;
      bitmap02.y = y;
      bitmap02.width = 200;
      bitmap02.height = 200;
      stage.addChild(bitmap02);
      stage.update();
      imagesdup = imagesdup.slice(1);
      if (imagesdup.length === 0) {
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

    let imagesdup = fw03;
    let x = Math.random() * 600;
    let y = Math.random() * 400;

    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x,
        ycoord: y,
        images: imagesdup
      });
    }
    createjs.Ticker.addEventListener("tick", tick03);


    function tick03() {
      let bitmap03 = new createjs.Bitmap(imagesdup[0]);
      bitmap03.x = x;
      bitmap03.y = y;
      bitmap03.width = 200;
      bitmap03.height = 200;
      stage.addChild(bitmap03);
      stage.update();
      imagesdup = imagesdup.slice(1);
      if (imagesdup.length === 0) {
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

    let imagesdup = fw04;
    let x = Math.random() * 600;
    let y = Math.random() * 400;

    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x,
        ycoord: y,
        images: imagesdup
      });
    }
    createjs.Ticker.addEventListener("tick", tick04);


    function tick04() {
      let bitmap04 = new createjs.Bitmap(imagesdup[0]);
      bitmap04.x = x;
      bitmap04.y = y;
      bitmap04.width = 200;
      bitmap04.height = 200;
      stage.addChild(bitmap04);
      stage.update();
      imagesdup = imagesdup.slice(1);
      if (imagesdup.length === 0) {
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

    let imagesdup = fw09;
    let x = Math.random() * 600;
    let y = Math.random() * 400;

    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x,
        ycoord: y,
        images: imagesdup
      });
    }
    createjs.Ticker.addEventListener("tick", tick09);


    function tick09() {
      let bitmap09 = new createjs.Bitmap(imagesdup[0]);
      bitmap09.x = x;
      bitmap09.y = y;
      bitmap09.width = 200;
      bitmap09.height = 200;
      stage.addChild(bitmap09);
      stage.update();
      imagesdup = imagesdup.slice(1);
      if (imagesdup.length === 0) {
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

    let imagesdup = fw08;
    let x = Math.random() * 600;
    let y = Math.random() * 400;

    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x,
        ycoord: y,
        images: imagesdup
      });
    }
    createjs.Ticker.addEventListener("tick", tick08);


    function tick08() {
      let bitmap08 = new createjs.Bitmap(imagesdup[0]);
      bitmap08.x = x;
      bitmap08.y = y;
      bitmap08.width = 200;
      bitmap08.height = 200;
      stage.addChild(bitmap08);
      stage.update();
      imagesdup = imagesdup.slice(1);
      if (imagesdup.length === 0) {
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

    let imagesdup = fw11;
    let x = Math.random() * 600;
    let y = Math.random() * 400;

    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x,
        ycoord: y,
        images: imagesdup
      });
    }
    createjs.Ticker.addEventListener("tick", tick11);


    function tick11() {
      let bitmap11 = new createjs.Bitmap(imagesdup[0]);
      bitmap11.x = x;
      bitmap11.y = y;
      bitmap11.width = 200;
      bitmap11.height = 200;
      stage.addChild(bitmap11);
      stage.update();
      imagesdup = imagesdup.slice(1);
      if (imagesdup.length === 0) {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", tick11);
        stage.addChild(rectBackground);
        stage.update();
      }
     }
  }
});
