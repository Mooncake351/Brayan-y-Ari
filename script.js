const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estás segura niña?',
  'Piénsalo bien',
  'La pasaremos muy bien niña',
  'Ya poes Ari',
  'Mira el otro botón',
  'Piénsalo muy bien',
  'Es tu última oportunidad chikibaby',
  'Quiero darte algo especial ese día',
  'Será nuestro primer 29',
  'Di que sí please
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
