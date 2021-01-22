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
                insertStr += `<li class="hide letter ${letter}">${letter}</li>`;
            } else {
                insertStr += `<li class="space"> </li>`;
            }
            document.querySelector('#phrase ul').innerHTML += insertStr;
        }
    }

    /**
     * Checks to see if letter selected by player matches a letter in phrase
     * @param {String} letter - Text content of clicked letter button
     * @return {Boolean} - T/F if letter is present in phrase
     */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
     * Reveals location of letters on the board that match players selection
     * @param {String} letter - Text content of clicked letter button
     */
    showMatchedLetter(letter) {
        //iterate over node list of letters (excludes spaces)
        for (let i of document.querySelectorAll('#phrase .letter')) {
            if (i.textContent === letter) {
                i.classList.remove('hide');
                i.classList.add('show');
            }
        }
    }
}
 