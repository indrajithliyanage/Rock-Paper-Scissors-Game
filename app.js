let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_para = document.querySelector('.result > p');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', function (event) {
    userInput('rock');
})
paper.addEventListener('click', function () {
    userInput('paper');
})
scissors.addEventListener('click', function () {
    userInput('scissors');
})

function userInput(userChoice) {
    let computerChoice = computerInput();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        default:
            visualOutput('draw', userChoice, computerChoice);
            break;
    }
}

function computerInput() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    visualOutput('win', userChoice, computerChoice);

}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    visualOutput('loose', userChoice, computerChoice);
}

function visualOutput(status, userChoice, computerChoice) {
    let element = `#${userChoice} > img`;
    document.querySelector(element).classList.add(status);
    setTimeout(() => {
        document.querySelector(element).classList.remove(status);
    }, 700);
    switch (status) {
        case 'win':
            result_para.innerHTML = `${userChoice}<sup>user</sup> beats ${computerChoice}<sup>comp</sup><br>you win!`;
            break;
        case 'loose':
            result_para.innerHTML = `${computerChoice}<sup>comp</sup> beats ${userChoice}<sup>user</sup><br>you loose!`;
            break;
        default:
            result_para.innerHTML = `${userChoice}<sup>user</sup> ${computerChoice}<sup>comp</sup><br>it's a draw!`;
            break;
    }
}