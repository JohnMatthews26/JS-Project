
document.addEventListener('DOMContentLoaded', () => {
  let fw01 = ["./firework_image/fw01/0.gif", "./firework_image/fw01/1.gif","./firework_image/fw01/2.gif",
    "./firework_image/fw01/3.gif", "./firework_image/fw01/4.gif", "./firework_image/fw01/5.gif",
    "./firework_image/fw01/6.gif", "./firework_image/fw01/7.gif", "./firework_image/fw01/8.gif",
    "./firework_image/fw01/9.gif", "./firework_image/fw01/10.gif","./firework_image/fw01/11.gif",
    "./firework_image/fw01/12.gif", "./firework_image/fw01/13.gif", "./firework_image/fw01/14.gif",
    "./firework_image/fw01/15.gif", "./firework_image/fw01/16.gif", "./firework_image/fw01/17.gif",
    "./firework_image/fw01/18.gif", "./firework_image/fw01/19.gif", "./firework_image/fw01/20.gif"];

    let fw02 = ["./firework_image/fw02/0.gif", "./firework_image/fw02/1.gif","./firework_image/fw02/2.gif",
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


    let fw03 = ["./firework_image/fw03/0.gif", "./firework_image/fw03/1.gif","./firework_image/fw03/2.gif",
      "./firework_image/fw03/3.gif", "./firework_image/fw03/4.gif", "./firework_image/fw03/5.gif",
      "./firework_image/fw03/6.gif", "./firework_image/fw03/7.gif", "./firework_image/fw03/8.gif",
      "./firework_image/fw03/9.gif", "./firework_image/fw03/10.gif","./firework_image/fw03/11.gif",
      "./firework_image/fw03/12.gif", "./firework_image/fw03/13.gif", "./firework_image/fw03/14.gif",
      "./firework_image/fw03/15.gif", "./firework_image/fw03/16.gif", "./firework_image/fw03/17.gif",
      "./firework_image/fw03/18.gif", "./firework_image/fw03/19.gif", "./firework_image/fw03/20.gif"];


    let fw04 = ["./firework_image/fw04/0.gif", "./firework_image/fw04/1.gif","./firework_image/fw04/2.gif",
      "./firework_image/fw04/3.gif", "./firework_image/fw04/4.gif", "./firework_image/fw04/5.gif",
      "./firework_image/fw04/6.gif", "./firework_image/fw04/7.gif", "./firework_image/fw04/8.gif",
      "./firework_image/fw04/9.gif", "./firework_image/fw04/10.gif","./firework_image/fw04/11.gif",
      "./firework_image/fw04/12.gif", "./firework_image/fw04/13.gif", "./firework_image/fw04/14.gif",
      "./firework_image/fw04/15.gif", "./firework_image/fw04/16.gif", "./firework_image/fw04/17.gif",
      "./firework_image/fw04/18.gif", "./firework_image/fw04/19.gif", "./firework_image/fw04/20.gif"];


    let fw05 = ["./firework_image/fw05/0.gif", "./firework_image/fw05/1.gif","./firework_image/fw05/2.gif",
      "./firework_image/fw05/3.gif", "./firework_image/fw05/4.gif", "./firework_image/fw05/5.gif",
      "./firework_image/fw05/6.gif", "./firework_image/fw05/7.gif", "./firework_image/fw05/8.gif",
      "./firework_image/fw05/9.gif", "./firework_image/fw05/10.gif","./firework_image/fw05/11.gif",
      "./firework_image/fw05/12.gif", "./firework_image/fw05/13.gif", "./firework_image/fw05/14.gif",
      "./firework_image/fw05/15.gif", "./firework_image/fw05/16.gif", "./firework_image/fw05/17.gif",
      "./firework_image/fw05/18.gif", "./firework_image/fw05/19.gif", "./firework_image/fw05/20.gif"];


    let fw06 = ["./firework_image/fw06/0.gif", "./firework_image/fw06/1.gif","./firework_image/fw06/2.gif",
      "./firework_image/fw06/3.gif", "./firework_image/fw06/4.gif", "./firework_image/fw06/5.gif",
      "./firework_image/fw06/6.gif", "./firework_image/fw06/7.gif", "./firework_image/fw06/8.gif",
      "./firework_image/fw06/9.gif", "./firework_image/fw06/10.gif","./firework_image/fw06/11.gif",
      "./firework_image/fw06/12.gif", "./firework_image/fw06/13.gif", "./firework_image/fw06/14.gif",
      "./firework_image/fw06/15.gif", "./firework_image/fw06/16.gif", "./firework_image/fw06/17.gif",
      "./firework_image/fw06/18.gif", "./firework_image/fw06/19.gif", "./firework_image/fw06/20.gif"];


  let images = fw01;


  const stage = new createjs.Stage("demoCanvas");
  const clickrect = new createjs.Shape();


  let fw01bit = new createjs.Bitmap("./firework_image/fw01/6.gif");
  fw01bit.x = 0;
  fw01bit.y = 500;
  let hit01 = new createjs.Shape();
  hit01.graphics.beginFill("#000").drawRect(fw01bit.x, fw01bit.y, 100, 100);
  hit01.addEventListener("click", handleClickfw01);
  function handleClickfw01() {
    images = fw01;
  }

  let fw02bit = new createjs.Bitmap("./firework_image/fw02/6.gif");
  fw02bit.x = 100;
  fw02bit.y = 500;
  let hit02 = new createjs.Shape();
  hit02.graphics.beginFill("#000").drawRect(fw02bit.x, fw02bit.y, 100, 100);
  hit02.addEventListener("click", handleClickfw02);
  function handleClickfw02() {
    images = fw02;
  }

  let fw03bit = new createjs.Bitmap("./firework_image/fw03/6.gif");
  fw03bit.x = 200;
  fw03bit.y = 500;
  let hit03 = new createjs.Shape();
  hit03.graphics.beginFill("#000").drawRect(fw03bit.x, fw03bit.y, 100, 100);
  hit03.addEventListener("click", handleClickfw03);
  function handleClickfw03() {
    images = fw03;
  }

  let fw04bit = new createjs.Bitmap("./firework_image/fw04/6.gif");
  fw04bit.x = 300;
  fw04bit.y = 500;
  let hit04 = new createjs.Shape();
  hit04.graphics.beginFill("#000").drawRect(fw04bit.x, fw04bit.y, 100, 100);
  hit04.addEventListener("click", handleClickfw04);
  function handleClickfw04() {
    images = fw04;
  }

  let fw05bit = new createjs.Bitmap("./firework_image/fw05/6.gif");
  fw05bit.x = 400;
  fw05bit.y = 500;
  let hit05 = new createjs.Shape();
  hit05.graphics.beginFill("#000").drawRect(fw05bit.x, fw05bit.y, 100, 100);
  hit05.addEventListener("click", handleClickfw05);
  function handleClickfw05() {
    images = fw05;
  }

  let fw06bit = new createjs.Bitmap("./firework_image/fw06/6.gif");
  fw06bit.x = 500;
  fw06bit.y = 500;
  let hit06 = new createjs.Shape();
  hit06.graphics.beginFill("#000").drawRect(fw06bit.x, fw06bit.y, 100, 100);
  hit06.addEventListener("click", handleClickfw06);
  function handleClickfw06() {
    images = fw06;
  }
  stage.addChild(fw01bit, fw02bit, fw03bit, fw04bit, fw05bit, fw06bit);
  stage.addChild(hit01, hit02, hit03, hit04, hit05, hit06);
  stage.update();



  clickrect.graphics.beginFill("#000").drawRect(100, 0, 700, 500);
  stage.addChild(clickrect);
  stage.update();

  clickrect.addEventListener("click", handleClick);

  function handleClick() {
    let imagesdup = images;


   createjs.Ticker.addEventListener("tick", tick);

   function tick() {
     let bitmap = new createjs.Bitmap(imagesdup[0]);
     bitmap.x = 100;
     bitmap.y = 100;
     bitmap.width = 200;
     bitmap.height = 200;
     stage.addChild(bitmap);
     stage.update();
     imagesdup = imagesdup.slice(1);
     if (imagesdup.length === 0) {
       stage.removeAllChildren();
       createjs.Ticker.removeEventListener("tick", tick);
       stage.addChild(clickrect);
      //  stage.addChild(fw01bit, fw02bit, fw03bit, fw04bit, fw05bit, fw06bit);
       stage.update();
     }
    }
  }
});
