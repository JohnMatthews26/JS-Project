# 2d Fireworks show

## Background

2d Fireworks Show is a one player game in which the player can create their own fireworks show. The game will have two phases, the first phase consists of the player designing their fireworks show, and in the second phase the player gets to watch their fireworks show.

In the first phase, the user will first select a type of firework, which will affect the pattern the firework displays upon exploding. The user can then select a color scheme for the firework and decide on the height at which it will go off. After the user is finished making their fireworks, they may choose the order at which the fireworks will go off.


## Functionality & MVPs

The user has the ability to do the following:

-  Start, reset, and edit a game
-  Select a type of firework
-  Decide when each firework will go off
-  Select the height of each firework
-  Color scheme of each firework
-  See fireworks go off

This project also includes:

-  A production Readme
-  A modal that describes how to play


## Wireframes

This app is a single page app with a game screen, How To Play button that opens a modal, and a button to start a game/reset/edit the game.

![alt text](http://res.cloudinary.com/roscoe/image/upload/v1501444952/soccer_wireframe_kcp129.png)

## Technologies
  My initial plan for technologies is the following:
  -  Vanilla JS and jquery for the logic of the fireworks
  -  Easel.js and HTML5 Canvas for display. Easel.js will be used to create the firework objects and works well with HTML5 Canvas to easily move objects on the canvas by altering the x and y coordinates.
  -  Webpack

  I plan on having the following files in my project:

  - ```firework.js``` This file will use Easel.js to dictate the appearance of the fireworks, and will be responsible for creating firework objects.
  - ```game.js``` This file will import the firework objects, and contains the logic to the fireworks show. This includes timing of fireworks, order in which they will go off, starting a new game, etc.
  - ```fireworks.html``` Will be responsible for rendering the images to the page via the canvas tag.


# Timeline

#### Day 1
  Day 1 will be dedicated to working on setting up the skeleton of the project, and beginning work on ```firework.js``` with Easel.js.

#### Day 2
  Continuing to work on the fireworks objects with Easel.js. Hopefully, be able to successfully create a simple firework by the end of day 2.

#### Day 3
  Work on adding functionality of fireworks such as: color, timing, etc. If finished with individual fireworks begin work on ```game.js```.

#### Day 4
  Work on ```game.js``` to be able to create a game and edit a fireworks show. Create the How to Play modal.

## Bonus Features

  - Add special effects to fireworks.
