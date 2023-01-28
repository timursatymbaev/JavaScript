window.onload = function () {
    Particles.init({
        selector: '.background',
        connectParticles: true,
    })
}

let flashcards = []

document.getElementById('flashcard-form').addEventListener('submit', (event) => {
    event.preventDefault()

    let question = document.getElementById('question').value
    let answer = document.getElementById('answer').value

    let successAlert = document.getElementById('success-alert')
    let errorAlert = document.getElementById('error-alert')

    if (question !== '' && answer !== '') {
        let flashcard = { question: question, answer: answer }
        flashcards.push(flashcard)
        successAlert.style.display = 'block'
        errorAlert.style.display = 'none'
        let counter = document.getElementById('counter')
        let result = parseInt(counter.innerText) + 1
        counter.innerText = result
    } else {
        successAlert.style.display = 'none'
        errorAlert.style.display = 'block'
    }

    document.getElementById('question').value = ''
    document.getElementById('answer').value = ''
})

// Counter to keep track of current flashcard
let currentIndex = 0

// Function to display current flashcard
function showFlashcard() {
    let flashcard = flashcards[currentIndex]
    document.getElementById('flashcard-question').innerHTML = `Question is: ${flashcard.question}`
}

// Event listener for "Start reviewing" button
document.getElementById('start-reviewing').addEventListener('click', () => {
    if (flashcards.length > 0) {
        showFlashcard()
    } else {
        alert('You need to create some flashcards first! Close modal and create some.')
    }
})

// Event listener for "Show answer" button
document.getElementById('show-answer').addEventListener('click', () => {
    let flashcard = flashcards[currentIndex]
    document.getElementById('flashcard-question').innerHTML = `Answer is: ${flashcard.answer}`
})

// Event listener for "Next question" button
document.getElementById('next-button').addEventListener('click', () => {
    if (currentIndex === flashcards.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    showFlashcard()
})
