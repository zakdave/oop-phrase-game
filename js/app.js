/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game;
const startButton = document.querySelector('#btn__reset');
const keyboardButtonDisplay = document.querySelector('#qwerty');

/**
 * Event listener for start button of game, calls start game
 */
startButton.addEventListener('click', e => {
    if (e.target === startButton) {
        game.startGame();
    }
});

/**
 * Event listener for on screen keyboard
 */
keyboardButtonDisplay.addEventListener('click', e => {
    const target = e.target;
    game.handleInteraction(target);
    console.log(target);
    console.log(target.textContent);
});
