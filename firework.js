//
// document.addEventListener('DOMContentLoaded', () => {
//
//   const stage = new createjs.Stage("demoCanvas");
//
//
//
//   let line = new createjs.Shape();
//   line.graphics.setStrokeStyle(3);
//   line.graphics.beginStroke("red");
//   line.graphics.beginFill("red").moveTo(100, 100).lineTo(200, 250);
//   stage.addChild(line);
//   stage.update();
//
//   let circle = new createjs.Shape();
//   circle.graphics.beginFill("red").drawCircle(100, 100, 50);
//   stage.addChild(circle);
//   stage.update();
//
// });
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
  clickrect.graphics.beginFill("#000").drawRect(0, 0, 900, 600);
  stage.addChild(clickrect);
  stage.update();

  clickrect.addEventListener("click", handleClick);
  function handleClick() {
    if (images.length === 0) {
      images = fw01;
    }

   createjs.Ticker.addEventListener("tick", tick);
   function tick() {
     let bitmap = new createjs.Bitmap(images[0]);
     bitmap.x = 100;
     bitmap.y = 100;
     bitmap.width = 200;
     bitmap.height = 200;
     stage.addChild(bitmap);
     stage.update();
     images = images.slice(1);
     if (images.length === 0) {
       stage.removeAllChildren();
       stage.addChild(clickrect);
       stage.update();
     }
    }
  }
});
