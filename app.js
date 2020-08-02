// console.log('test')
// console.log($)

$(() => {
    const rows = 10;
    const cols = 10;
    const squareSize = 50;

    const $gameBoardContainer = document.getElementById('gameboard');

    for(let i=0; i < cols; i++) {
        for (let j=0; j < rows; j++) {
            let $square = $('<div>');
            $gameBoardContainer.append($square);
            $square.attr('id', '"s" + j + i');

            let topPosition = j * squareSize;
            let leftPosition = i * squareSize;

            $square.css('top', 'topPosition + "px"')
            $square.css('left', 'leftPosition + "px"')
        }
    }

    let hitCount = 0;

    let gameBoard = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ]

    $gameBoardContainer.onabort('click', attack)

    const attack = (event) => {
        if (event.target !== event.currentTarget) {
            let row = event.target.id.substring(1,2);
            let col = event.target.id.substring(2,3);
            if (gameBoard[row][col] === 0) {
                event.target.css('background-color', '#bbb');
                gameBoard[row][col] = 3;
            } else if (gameBoard[row][col] === 1) {
                event.target.css('background-color', 'red');
                gameBoard[row][col] = 2;
                hitCount++;
                if (hitCount === 17) {
                    alert('You sunk all the enemy ships! You win!');
                }
            } else if (gameBoard[row][col] > 1) {
                alert('You already tried there, go again!')
            }
        }
    }

})
