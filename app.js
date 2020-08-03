// console.log('test')
// console.log($)

$(() => {

    const rows = 10;
    const cols = 10;
    const squareSize = 50;

    const gameBoardContainer = document.getElementById("gameboard");

    for (i = 0; i < cols; i++) {
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
            let col = event.target.id.substring(2,3);
            //alert(`Clicked on row ${row}, col ${col}`)
            if (gameBoard[row][col] === 0) {
                event.target.style.background = '#bbb';
                gameBoard[row][col] = 3;
            } else if (gameBoard[row][col] === 1) {
                event.target.style.background = 'red';
                gameBoard[row][col] = 2;
                hitCount++;
                if (hitCount === 17) {
                    alert("All the enemy ships have been destroyed! You win!")
                }
            } else if (gameBoard[row][col] > 1) {
                alert("You've already attacked there, try another location!")
            }
        }
    }
    
    gameBoardContainer.addEventListener('click', attack, false);



})
