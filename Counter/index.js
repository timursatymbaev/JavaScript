const incBtn = document.getElementById('inc-btn')
const decBtn = document.getElementById('dec-btn')

updateValue = (operation) => {
    let value = document.getElementById('value')
    let result = Number(value.innerText) + operation
    value.innerText = result
}

incBtn.addEventListener('click', () => updateValue(1))
decBtn.addEventListener('click', () => updateValue(-1))
