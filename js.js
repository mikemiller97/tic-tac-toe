let gameBoard = (function(){
    const square1 = document.querySelector('#square1').textContent;
    const square2 = document.querySelector('#square2').textContent;
    const square3 = document.querySelector('#square3').textContent;
    const square4 = document.querySelector('#square4').textContent;
    const square5 = document.querySelector('#square5').textContent;
    const square6 = document.querySelector('#square6').textContent;
    const square7 = document.querySelector('#square7').textContent;
    const square8 = document.querySelector('#square8').textContent;
    const square9 = document.querySelector('#square9').textContent;

    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const button = document.getElementById('btn');
    const reset = document. getElementById('reset');
    
    let p1Name = "";
    let p2Name = "";

    button.addEventListener('click', setName); 
    reset.addEventListener('click', resetGame);
    
    function setName() {
        localStorage.setItem("oneName", p1.value);
        localStorage.setItem("twoName", p2.value);

        p1Name = localStorage.getItem("oneName");
        p2Name = localStorage.getItem("twoName");
    }

    function resetGame() {
        _gameOver();
        for (let i = 0; i < squareList.length; i++) {
            squareList[i].addEventListener('click', _playerMove);
            squareList[i].addEventListener('click', _checkVictory);
            squareList[i].innerText = "";
            result.innerText = "";
            turnCount = 0;
        }
    }

    function p1Victory() {
        p1Name == "" ? result.textContent = "Player 1 wins!" : result.textContent = p1Name + " wins!"
    }

    function p2Victory() {
        p1Name == "" ? result.textContent = "Player 2 wins!" : result.textContent = p2Name + " wins!"    
    }


    let squareNodeList = document.querySelectorAll(".square");
    let squareList = Array.from(squareNodeList);
    let result = document.querySelector(".result");

    let gameBoard = [square1, square2, square3, square4, square5, square6
    ,square7, square8, square9];

    const player1 = "X";
    const player2 = "O";
    let turnCount = 0;
    
    for (let i = 0; i < squareList.length; i++) {
        squareList[i].addEventListener('click', _playerMove);
        squareList[i].addEventListener('click', _checkVictory);
        squareList[i].addEventListener('click', _gameOver);
    }

    function _playerMove() {
        if (this.innerText == '') {
            turnCount % 2 == 0 ? this.innerText = player1
            : this.innerText = player2;
            turnCount++;
        }
    }

    function _checkVictory() {
        if (squareList[0].innerText == player1 
            && squareList[1].innerText ==  player1 
            && squareList[2].innerText == player1) {
            p1Victory();
        }

        if (squareList[0].innerText == player2 
            && squareList[1].innerText ==  player2 
            && squareList[2].innerText == player2) {
           p2Victory();
        }

        if (squareList[3].innerText == player1 
            && squareList[4].innerText ==  player1 
            && squareList[5].innerText == player1) {
            p1Victory();
        }

        if (squareList[3].innerText == player2 
            && squareList[4].innerText ==  player2 
            && squareList[5].innerText == player2) {
           p2Victory();
        }

        if (squareList[6].innerText == player1 
            && squareList[7].innerText ==  player1 
            && squareList[8].innerText == player1) {
            p1Victory();
        }

        if (squareList[6].innerText == player2 
            && squareList[7].innerText ==  player2 
            && squareList[8].innerText == player2) {
           p2Victory();
        }

        if (squareList[0].innerText == player1 
            && squareList[3].innerText ==  player1 
            && squareList[6].innerText == player1) {
            p1Victory();
        }
        
        if (squareList[1].innerText == player1 
            && squareList[4].innerText ==  player1 
            && squareList[7].innerText == player1) {
            p1Victory();
        }

        if (squareList[2].innerText == player1 
            && squareList[5].innerText ==  player1 
            && squareList[8].innerText == player1) {
            p1Victory();
        }

        if (squareList[0].innerText == player2
            && squareList[3].innerText ==  player2 
            && squareList[6].innerText == player2) {
           p2Victory();
        }

        if (squareList[1].innerText == player2
            && squareList[4].innerText ==  player2 
            && squareList[7].innerText == player2) {
           p2Victory();
        }

        if (squareList[2].innerText == player2
            && squareList[5].innerText ==  player2 
            && squareList[8].innerText == player2) {
           p2Victory();
        }

        if (squareList[0].innerText == player1 
            && squareList[4].innerText ==  player1 
            && squareList[8].innerText == player1) {
            p1Victory();
        }

        if (squareList[0].innerText == player2 
            && squareList[4].innerText ==  player2 
            && squareList[8].innerText == player2) {
           p2Victory();
        }

        if (squareList[2].innerText == player1 
            && squareList[4].innerText ==  player1 
            && squareList[6].innerText == player1) {
            p1Victory();
        }

        if (squareList[2].innerText == player2 
            && squareList[4].innerText ==  player2 
            && squareList[6].innerText == player2) {
           p2Victory();
        }

        for (let i = 0; i < 9; i++) {
            if (squareList[i].innerText === "") {
                break;
            }
            if (i == 8 && result.innerText == "") {
                result.innerText = "Tie!"
            }
        }
    }

    function _gameOver() {
        if (result.innerText == "Player 1 wins!"
        || result.innerText == p1Name + " wins!"
        || result.innerText == p2Name + " wins!"
        || result.innerText == "Player 2 wins!") {
            {
                for (let i = 0; i < squareList.length; i++) {
                    squareList[i].removeEventListener('click', _playerMove);
                    squareList[i].removeEventListener('click', _checkVictory);
                }
            }
        }
    }

    return {
        gameBoard,
    }
})();