/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.phraseArrObjs();
        this.activePhrase = null;

    }

    /**
     * Returns an array of objects with phrases
     * @returns {Array} - Array of phrase objects
     */
    phraseArrObjs() {
        const phraseArr = [];
        const phrases = ['Just keep swimming',
                        'Over nine thousand',
                        'Negative ghost rider',
                        'Milk was a bad choice',
                        'What goes around is all around'];
        
        for (let phrase of phrases) {
            phraseArr.push(new Phrase(phrase));
        }
        return phraseArr;
    }

    /**
     * @returns {object} One of the phrase objects from this.phrase
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
     * Calls getRandomPhase, hides overlay, displays gameboard
     */
    startGame() {
        this.activePhrase = this.getRandomPhrase();
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase.addPhraseToDisplay(); 
    }

    /**
     * Checks if button clicked by player matches letter in phrase
     * and calls appropriate methods (checkLetter, removeLife(), showMatchedLetter()
     * and checkForWin())
     * @param {HTMLButtonElement} key - Button element targeted by user (e.target)
     */
    handleInteraction(key) {
        const letter = key.textContent;
        key.disabled = true;
        console.log(key)

        if (key.type === 'submit') { 
            // key.type === 'submit' -- Branch added to ensure button click is on button
            if (this.activePhrase.checkLetter(letter)) {
                key.classList.add('chosen');
                this.activePhrase.showMatchedLetter(letter);
            } else {
                key.classList.add('wrong');
                this.removeLife();
            }
        }
        if (this.checkForWin()) {
            this.gameOver(true);
        }
        if (this.missed > 4) {
            this.gameOver(false);
        }
    }
 
    /**
     * Removes a life from scoreboard, replaces image in DOM
     * calls gameOver appropriately
     */
    removeLife() {
        this.missed++;

        const activeHeart = document.querySelector('[src="images/liveHeart.png"]');
        activeHeart.setAttribute('src', 'images/lostHeart.png');
        
    }

    /**
     * Checks to see if player has revealed all of the letters
     */
    checkForWin() {
        const letterElements = document.querySelectorAll('#phrase .letter');
        return [...letterElements].every(letter => letter.classList.contains('show'));  
    }


    /**
     * displays start screen overlay, changes h1 to display win or 
     * loss message
     * @param {Boolean} bool - T/F if player has won
     */
    gameOver(bool) {
        const gameOverMessage = document.querySelector('#game-over-message');
        const overlayDiv = document.querySelector('#overlay');

        if (bool) {
            gameOverMessage.innerHTML = 'You won!';
            overlayDiv.classList.remove('start');
            overlayDiv.classList.remove('lose');
            overlayDiv.classList.add('win');
            overlayDiv.style.display = 'block'; 
        } else {
            gameOverMessage.innerHTML = 'Boo! You Lost. Try again?';
            overlayDiv.classList.remove('start');
            overlayDiv.classList.remove('win');
            overlayDiv.classList.add('lose');
            overlayDiv.style.display = 'block';
        }

        //remove phrase by reassigning ul html to empty string
        const phraseList = document.querySelectorAll('#phrase ul li');
        [...phraseList].forEach(li => li.remove());
        
        

        //re-enable buttons and clear wrong and chosen classes
        const keyboardButtons = document.querySelectorAll('.key');
        [...keyboardButtons].forEach(button => {
            button.disabled = false
            button.classList.remove('wrong');
            button.classList.remove('chosen');
        });

        //reset hearts
        const hearts = document.querySelectorAll('[src="images/lostHeart.png"]');
        [...hearts].forEach(heart => heart.setAttribute('src', 'images/liveHeart.png'));
        
        //reset missed
        this.missed = 0;
    }
}    