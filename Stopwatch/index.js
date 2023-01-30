let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
const startBtn = document.getElementById('start-btn')
const stopBtn = document.getElementById('stop-btn')
const resetBtn = document.getElementById('reset-btn')

let interval
let timeSec = 0
let timeMin = 0

startBtn.addEventListener('click', () => {
    interval = setInterval(() => {
        timeSec++
        seconds.textContent = timeSec
        if (timeSec === 60) {
            timeSec = 0
            minutes.textContent = ++timeMin
            seconds.textContent = '00'
        }
    }, 1000)
})

stopBtn.addEventListener('click', () => clearInterval(interval))

resetBtn.addEventListener('click', () => {
    timeSec = 0
    timeMin = 0
    seconds.textContent = '00'
    minutes.textContent = '00'
})
