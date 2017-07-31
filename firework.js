
document.addEventListener('DOMContentLoaded', () => {

  const stage = new createjs.Stage("demoCanvas");


  let line = new createjs.Shape();
  line.graphics.setStrokeStyle(3);
  line.graphics.beginStroke("red");
  line.graphics.beginFill("red").moveTo(100, 100).lineTo(200, 250);
  stage.addChild(line);
  stage.update();

  let circle = new createjs.Shape();
  circle.graphics.beginFill("red").drawCircle(100, 100, 50);
  stage.addChild(circle);
  stage.update();


});
