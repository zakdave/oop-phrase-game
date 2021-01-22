/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    
    }

    /**
     * Adds letter placeholders to display when game starts.
     */
    addPhraseToDisplay() {
        for (let letter of this.phrase) {
            let insertStr = ``;
            if (/\w/.test(letter)) {
                insertStr += `<li class="hide letter ${letter}">Z</li>`;
            } else {
                insertStr += `<li class="space"> </li>`;
            }
            document.querySelector('#phrase ul').innerHTML += insertStr;
        }
    }

    /**
     * checks to see if letter selected by player matches a letter in phrase
     */
    checkLetter() {}

    /**
     * Reveals location of letters on the board that match players selection
     */
    showMatchedLetter() {}

}
 