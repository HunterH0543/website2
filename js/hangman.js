const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementByid('wrong-letters')
const playAgainBtn = document.getElementByID('play-again')
const popup = document.getElementById('popup-container')
const notification = document.getElementById ('notification-container')
const finalMessage = document.getElementById('final-message')
const figureParts = document.querySelectorAll('.figure-part')

const word = ['application', 'programming', 'interface', 'wizard']

let selectedIndex = Math.floor(word.length * Math.random())
let selectedWord = word[SelectedIndex]

const correctLetters = []
const wrongLetters = []

function displayWord() {
    wordEl.innerHTML = `${selectedWord.split('').map(letter => ``)}}`
    <span class ="letter">
    $(correctLetters.includes(letter) ? letter : ''}
    </span>
}


displayWord()