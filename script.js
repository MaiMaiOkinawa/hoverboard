const container = document.getElementById('container');
const colors = ['#f8ff1c', '#50ffaf', "#9c7bff", "#ff00f6",'#9723c9']
const squares = 500;

for (let i = 0; i < squares; i++) {
  // Create elements
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  // Add the elements to the container
  container.appendChild(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  // Set the bg to the original color
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  // This gives the random number between 0 to 4
  return colors[Math.floor(Math.random() * colors.length)]
}