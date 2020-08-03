// console.log('test')
// console.log($)

$(() => {

    $intro = $('<div class="intro">').prependTo('body')
    $headline = $('<h1>').text('Battleship').prependTo($intro)
    $info = $('<p>').text('Click a place on the board where you wish to attack. Each board has 5 boats:').appendTo($intro)
    $ships = $('<ul class="ships">').appendTo($intro)
    $Ship1 = $('<li class = ship>').text('Carrier - length (5)').appendTo($ships)
    $Ship2 = $('<li class = ship>').text('Battleship - length (4)').appendTo($ships) 
    $Ship3 = $('<li class = ship>').text('Destroyer - length (3)').appendTo($ships) 
    $Ship4 = $('<li class = ship>').text('Submarine - length (3)').appendTo($ships) 
    $Ship5 = $('<li class = ship>').text('Patrol Boat - length (2)').appendTo($ships)
    $info2 = $('<p>').text('The first player to sink all of the enemy ships wins!').appendTo($intro)  
    $hr = $('<hr/>').appendTo($intro)
    $boards = $('<div class="boards">').appendTo('body')
    $player1 = $('<h2>').text('Player 1').prependTo($boards).css('text-align', 'center');
    $player2 = $('<h2>').text('Player 2').appendTo('.boards').css('text-align', 'center');
    // $gameBoardContainer = $('<div id="gameboard">').appendTo($boards)

    const rows = 10;
    const columns = 10;
    const squareSize = 50;

    const gameBoardContainer = document.getElementById("gameboard");

    for (i = 0; i < columns; i++) {
        for (j = 0; j < rows; j++) {

            let square = document.createElement("div");
            gameBoardContainer.appendChild(square);

            square.id = 's' + j + i;

            let topPosition = j * squareSize;
            let leftPosition = i * squareSize;

            square.style.top = topPosition + 'px';
            square.style.left = leftPosition + 'px';
        }
    }


    let hitCount = 0;

    let gameBoard = [
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
    ]

    
    const attack = (event) => {
        if (event.target !== event.currentTarget) {
            let row = event.target.id.substring(1,2);
            let column = event.target.id.substring(2,3);
    
            if (gameBoard[row][column] === 0) {
                event.target.style.background = 'blue';
                gameBoard[row][column] = 3;
            } else if (gameBoard[row][column] === 1) {
                event.target.style.background = 'red';
                gameBoard[row][column] = 2;
                hitCount++;
                if (hitCount === 17) {
                    alert("All the enemy ships have been destroyed! Player 1 wins!")
                }
            } else if (gameBoard[row][column] > 1) {
                alert("You've already attacked there, try another location!")
            }
        }
    }


    const rows2 = 10;
    const columns2 = 10;
    const squareSize2 = 50;

    const gameBoardContainer2 = document.getElementById("gameboard2");

    for (k = 0; k < columns2; k++) {
        for (l = 0; l < rows2; l++) {

            let square2 = document.createElement("div");
            gameBoardContainer2.appendChild(square2);

            square2.id = 's' + l + k;

            let topPosition2 = l * squareSize2;
            let leftPosition2 = k * squareSize2;

            square2.style.top = topPosition2 + 'px';
            square2.style.left = leftPosition2 + 'px';
        }
    }

    let hitCount2 = 0;

    let gameBoard2 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    
    const attack2 = (event) => {
        if (event.target !== event.currentTarget) {
            let row2 = event.target.id.substring(1,2);
            let column2 = event.target.id.substring(2,3);
    
            if (gameBoard2[row2][column2] === 0) {
                event.target.style.background = 'blue';
                gameBoard2[row2][column2] = 3;
            } else if (gameBoard2[row2][column2] === 1) {
                event.target.style.background = 'red';
                gameBoard2[row2][column2] = 2;
                hitCount2++;
                if (hitCount2 === 17) {
                    alert("All the enemy ships have been destroyed! Player 2 wins!")
                }
            } else if (gameBoard2[row2][column2] > 1) {
                alert("You've already attacked there, try another location!")
            }
        }
    }
    
    
    gameBoardContainer.addEventListener('click', attack);
    
    gameBoardContainer2.addEventListener('click', attack2);
})
