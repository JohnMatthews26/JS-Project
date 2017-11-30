import { fw01, fw02, fw03, fw04, fw08, fw09, fw11 } from './images';

document.addEventListener('DOMContentLoaded', () => {






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
    } else if (endTime === ""){
      endTime = Date.now();
    } else {

      startTime = "";
      endTime = "";
      showTime = Date.now();
      playShow();
    }
  }

  function textOutput() {
    if (startTime === "") {
      return ("Start Recording");

    } else if (endTime === ""){
      return ("Stop Recording");
    } else {
      return ("Play My Show");
    }
  }



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


    let imagesdup1 = fw01;
    let imagesdup2 = fw01;
    let imagesdup3 = fw01;
    let imagesdup4 = fw01;
    let imagesdup5 = fw01;
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    let x2 = Math.random() * 600;
    let y2 = Math.random() * 400;
    let x3 = Math.random() * 600;
    let y3 = Math.random() * 400;
    let x4 = Math.random() * 600;
    let y4 = Math.random() * 400;
    let x5 = Math.random() * 600;
    let y5 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x2,
        ycoord: y2,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x3,
        ycoord: y3,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x4,
        ycoord: y4,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x5,
        ycoord: y5,
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
      bitmap02.x = x2;
      bitmap02.y = y2;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x3;
      bitmap03.y = y3;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x4;
      bitmap04.y = y4;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x5;
      bitmap05.y = y5;
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

    let imagesdup1 = fw02;
    let imagesdup2 = fw02;
    let imagesdup3 = fw02;
    let imagesdup4 = fw02;
    let imagesdup5 = fw02;
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    let x2 = Math.random() * 600;
    let y2 = Math.random() * 400;
    let x3 = Math.random() * 600;
    let y3 = Math.random() * 400;
    let x4 = Math.random() * 600;
    let y4 = Math.random() * 400;
    let x5 = Math.random() * 600;
    let y5 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x2,
        ycoord: y2,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x3,
        ycoord: y3,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x4,
        ycoord: y4,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x5,
        ycoord: y5,
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
      bitmap02.x = x2;
      bitmap02.y = y2;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x3;
      bitmap03.y = y3;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x4;
      bitmap04.y = y4;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x5;
      bitmap05.y = y5;
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

    let imagesdup1 = fw03;
    let imagesdup2 = fw03;
    let imagesdup3 = fw03;
    let imagesdup4 = fw03;
    let imagesdup5 = fw03;
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    let x2 = Math.random() * 600;
    let y2 = Math.random() * 400;
    let x3 = Math.random() * 600;
    let y3 = Math.random() * 400;
    let x4 = Math.random() * 600;
    let y4 = Math.random() * 400;
    let x5 = Math.random() * 600;
    let y5 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x2,
        ycoord: y2,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x3,
        ycoord: y3,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x4,
        ycoord: y4,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x5,
        ycoord: y5,
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
      bitmap02.x = x2;
      bitmap02.y = y2;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x3;
      bitmap03.y = y3;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x4;
      bitmap04.y = y4;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x5;
      bitmap05.y = y5;
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

    let imagesdup1 = fw04;
    let imagesdup2 = fw04;
    let imagesdup3 = fw04;
    let imagesdup4 = fw04;
    let imagesdup5 = fw04;
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    let x2 = Math.random() * 600;
    let y2 = Math.random() * 400;
    let x3 = Math.random() * 600;
    let y3 = Math.random() * 400;
    let x4 = Math.random() * 600;
    let y4 = Math.random() * 400;
    let x5 = Math.random() * 600;
    let y5 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x2,
        ycoord: y2,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x3,
        ycoord: y3,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x4,
        ycoord: y4,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x5,
        ycoord: y5,
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
      bitmap02.x = x2;
      bitmap02.y = y2;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x3;
      bitmap03.y = y3;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x4;
      bitmap04.y = y4;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x5;
      bitmap05.y = y5;
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

    let imagesdup1 = fw09;
    let imagesdup2 = fw09;
    let imagesdup3 = fw09;
    let imagesdup4 = fw09;
    let imagesdup5 = fw09;
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    let x2 = Math.random() * 600;
    let y2 = Math.random() * 400;
    let x3 = Math.random() * 600;
    let y3 = Math.random() * 400;
    let x4 = Math.random() * 600;
    let y4 = Math.random() * 400;
    let x5 = Math.random() * 600;
    let y5 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x2,
        ycoord: y2,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x3,
        ycoord: y3,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x4,
        ycoord: y4,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x5,
        ycoord: y5,
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
      bitmap02.x = x2;
      bitmap02.y = y2;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x3;
      bitmap03.y = y3;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x4;
      bitmap04.y = y4;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x5;
      bitmap05.y = y5;
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

    let imagesdup1 = fw08;
    let imagesdup2 = fw08;
    let imagesdup3 = fw08;
    let imagesdup4 = fw08;
    let imagesdup5 = fw08;
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    let x2 = Math.random() * 600;
    let y2 = Math.random() * 400;
    let x3 = Math.random() * 600;
    let y3 = Math.random() * 400;
    let x4 = Math.random() * 600;
    let y4 = Math.random() * 400;
    let x5 = Math.random() * 600;
    let y5 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x2,
        ycoord: y2,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x3,
        ycoord: y3,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x4,
        ycoord: y4,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x5,
        ycoord: y5,
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
      bitmap02.x = x2;
      bitmap02.y = y2;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x3;
      bitmap03.y = y3;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x4;
      bitmap04.y = y4;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x5;
      bitmap05.y = y5;
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

    let imagesdup1 = fw11;
    let imagesdup2 = fw11;
    let imagesdup3 = fw11;
    let imagesdup4 = fw11;
    let imagesdup5 = fw11;
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 400;
    let x2 = Math.random() * 600;
    let y2 = Math.random() * 400;
    let x3 = Math.random() * 600;
    let y3 = Math.random() * 400;
    let x4 = Math.random() * 600;
    let y4 = Math.random() * 400;
    let x5 = Math.random() * 600;
    let y5 = Math.random() * 400;
    if (startTime !== "") {
      showArr.push({
        time: (Date.now() - startTime),
        xcoord: x1,
        ycoord: y1,
        images: imagesdup1
      },
      {
        time: (Date.now() - startTime),
        xcoord: x2,
        ycoord: y2,
        images: imagesdup2
      },
      {
        time: (Date.now() - startTime),
        xcoord: x3,
        ycoord: y3,
        images: imagesdup3
      },
      {
        time: (Date.now() - startTime),
        xcoord: x4,
        ycoord: y4,
        images: imagesdup4
      },
      {
        time: (Date.now() - startTime),
        xcoord: x5,
        ycoord: y5,
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
      bitmap02.x = x2;
      bitmap02.y = y2;
      bitmap02.width = 200;
      bitmap02.height = 200;
      bitmap03.x = x3;
      bitmap03.y = y3;
      bitmap03.width = 200;
      bitmap03.height = 200;
      bitmap04.x = x4;
      bitmap04.y = y4;
      bitmap04.width = 200;
      bitmap04.height = 200;
      bitmap05.x = x5;
      bitmap05.y = y5;
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
