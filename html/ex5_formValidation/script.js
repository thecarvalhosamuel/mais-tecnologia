const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  formControl.className = 'form-control error'
  small.innerText = message
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

// function writeToFile(passForm) {
//   const nameValue = nameInput.value
//   const emailValue = emailInput.value
//   const messageValue = messageInput.value

//   const dataToSave =
//     '\rName: ' +
//     nameValue +
//     ' \r\n ' +
//     'Email: ' +
//     emailValue +
//     ' \r\n ' +
//     'Message: ' +
//     messageValue +
//     ' \r\n ' +
//     '--------------------' +
//     ' \r\n '

//   console.log(dataToSave)
//   const textToBlob = new Blob([dataToSave], {
//     type: 'text/plain;charset=utf-8"',
//   })
//   const textToSaveAsURL = window.URL.createObjectURL(textToBlob)
//   console.log(textToSaveAsURL)
// }

function checkFormData() {
  const nameValue = nameInput.value
  const emailValue = emailInput.value
  const messageValue = messageInput.value

  if (nameValue.trim().length === 0) {
    setErrorFor(nameInput, 'Nome de usuário é obrigatório.')
  }

  const isEmailValid = validateEmail(emailValue)

  if (emailValue.trim().length === 0) {
    setErrorFor(emailInput, 'O email não pode ser vazio.')
    return
  }
  if (!isEmailValid) {
    setErrorFor(emailInput, 'O email passado não é um email válido.')
  }

  if (messageValue.trim().length === 0) {
    setErrorFor(messageInput, 'A mensagem não pode ser enviada vazia.')
  }

  writeToFile()
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkFormData()
})
