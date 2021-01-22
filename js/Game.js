/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.phraseArrObjs();
        this.activePhrase = null; // use start game method to set active phrase

    }

    /**
     * Returns an array of objects with phrases
     * @returns {Array} - Array of phrase objects
     */
    phraseArrObjs() {
        const phraseArr = [];
        const phrases = ['The cow jumped over the moon',
                        'Nothing worthwhile is easy',
                        'Negative ghost rider',
                        'His power far exceeds mine',
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
    startGame(){
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
        
        if (this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(letter);
        } else {
            this.removeLife();
        }
        

        console.log(key, letter);
        console.log(this.activePhrase.checkLetter(letter));
    }

    /**
     * Removes a life from scoreboard, replaces image in DOM
     * calls gameOver appropriately
     */
    removeLife() {
        this.missed ++;
    }

    /**
     * Checks to see if player has revealed all of the letters
     */
    checkForWin() {}

    /**
     * displays start screen overlay, changes h1 to display win or 
     * loss message
     */
}