# Fireworks show

## Background


Fireworks Show is a one player game in which the player can create their own fireworks show. The game has two phases, the first phase consists of the player designing their fireworks show, and in the second phase the player gets to watch their fireworks show.

The user may test each firework out by clicking on the firework labels. The user may then record a fireworks show, and afterwards playback the show they created.


## Functionality & MVPs

The user has the ability to do the following:

-  Start, reset a show
-  Select a type of firework
-  Decide when each firework will go off
-  Record the fireworks
-  See the fireworks go off

This project also includes:

-  A production Readme
-  A side panel that describes how to play


## Technologies
  The following technologies are used:
  -  Vanilla JS for the logic of the fireworks
  -  Easel.js and HTML5 Canvas for display. Easel.js will be used to create the firework objects and works well with HTML5 Canvas to easily move objects on the canvas by altering the x and y coordinates.

  The code below is part of the logic used to create a firework object. Each element in the array represents a stage of a firework. A tick event listener that iterates through the array at a fast pace is added to the canvas when the user clicks on a firework. The function below is the resulting callback from the tick event listener.


  ```javascript
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


  ```
