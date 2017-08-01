
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

let firework1 = (color1, color2, color3, size = (100, 100, 50)) => {
  let center = new createjs.Shape();
  center.graphics.beginFill(color1).drawCircle(size);
  let arc = new createjs.Shape();
  arc.graphics.beginFill(color2).drawArc(100, 100, 50, 90, 270)

};
