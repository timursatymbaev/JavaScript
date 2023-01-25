const colors = ['red', 'blue', 'purple', 'black', 'grey', 'purple']
const changeBtn = document.getElementById('change-btn')
const colorIndex = () => Math.floor(Math.random() * colors.length)

changeBtn.addEventListener('click', () => document.body.style.backgroundColor = colors[colorIndex()])
