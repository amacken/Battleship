# Battleship
My version of the classic game, Battleship.

My name is Alex and I love to play games, such as Battleship!

Rules of the project:

Game must have:
be a two player game (either against the computer or against another player)

A win state - a way for the player to win the game
Beating the other player can be considered a win state
High score can be considered a win state

A lose state - a way for the player to lose the game

A way to keep playing if the game is not over

Multiple rounds to play - a round must begin, end, and there must be a way to check if the game should continue or the overall game is won or lost




This game was built using HTML, CSS, JavaScript and jQuery.

Here is a link to play for yourself: https://amacken.github.io/Battleship/


Approach and technologies used:
Originally I was going to build a single gameboard with buttons that players could alternate clicking to find the hidden ships, but then I decided it would be a better game if I built two different boards that players could play against each other head-to-head. To accomplish this, I built two grids using a for loop in JavaScript and then CSS to space them apart the way I wanted.  I then created a function that checked if the box the player clicked on was either empty ocean or a ship that could be attacked using 0s and 1s. Depending on what was there, the box then changed color to either blue for ocean or red if a ship was hit. This function was also keeping track of the hit count total so that once all of the ships had been sunk, an alert would pop up announcing who the winner was.



Unsolved problems and future updates:
My original plan was for the ships' placement on the board to be randomized but I ran into issues getting that to work. I had to hardcode the placement of the ships for now, but I would like to look into this option later.

Another goal I would like to come back to is giving the players the option to place the ships on the board themselves rather than have them pre-loaded. I wasn't sure how to accomplish this yet but would like to come back to it when I have more time to experiment.

I would also like to make the game mobile and tablet friendly in the future.
