const createBtn = document.getElementById('create-btn')
const message = document.getElementById('message')
const messageInput = document.getElementById('messageInput')

createBtn.addEventListener('click', () => {
    message.innerText = messageInput.value
    messageInput.value = ''
})
