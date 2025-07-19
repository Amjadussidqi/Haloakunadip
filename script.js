const puzzleContainer = document.getElementById('puzzle-container')
const questionContainer = document.getElementById('question-container')
const resultContainer = document.getElementById('result')
const form = document.getElementById('quiz-form')

const imageUrl = 'https://nadhif10524076.my.id/wp-content/uploads/2025/07/Gambar-WhatsApp-2025-07-19-pukul-13.08.05_1a49b34f-scaled.jpg' // Ganti dengan gambar tentang kalian
const correctAnswers = ['januari 2023', 'sushi', 'bali']

let pieces = []

function createPuzzle() {
  for (let i = 0; i < 9; i++) {
    const div = document.createElement('div')
    div.classList.add('puzzle-piece')
    div.style.backgroundImage = url(${imageUrl})
    div.style.backgroundPosition = -${(i % 3) * 100}px -${Math.floor(i / 3) * 100}px
    div.draggable = true
    div.dataset.index = i
    puzzleContainer.appendChild(div)
    pieces.push(div)
  }
  shufflePieces()
}

function shufflePieces() {
  for (let i = pieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    [pieces[i], pieces[j]] = [pieces[j], pieces[i]]
  }
  puzzleContainer.innerHTML = ''
  pieces.forEach(p => puzzleContainer.appendChild(p))
}

puzzleContainer.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', e.target.dataset.index)
})

puzzleContainer.addEventListener('dragover', e => {
  e.preventDefault()
})

puzzleContainer.addEventListener('drop', e => {
  e.preventDefault()
  const fromIndex = e.dataTransfer.getData('text/plain')
  const toElement = e.target.closest('.puzzle-piece')
  if (!toElement || fromIndex === toElement.dataset.index) return

  const fromElement = pieces.find(p => p.dataset.index === fromIndex)
  const toIndex = pieces.indexOf(toElement)
  const fromIdx = pieces.indexOf(fromElement)

  [pieces[toIndex], pieces[fromIdx]] = [pieces[fromIdx], pieces[toIndex]]
  puzzleContainer.innerHTML = ''
  pieces.forEach(p => puzzleContainer.appendChild(p))

  if (isSolved()) {
    setTimeout(() => {
      questionContainer.classList.remove('hidden')
    }, 500)
  }
})

function isSolved() {
  return pieces.every((piece, index) => piece.dataset.index == index)
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const answers = Array.from(form.elements)
    .filter(el => el.tagName === 'INPUT')
    .map(el => el.value.trim().toLowerCase())

  const isCorrect = answers.every((ans, i) => ans === correctAnswers[i])

  if (isCorrect) {
    questionContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')

    const qr = new QRious({
      element: document.getElementById('qr-code'),
      value: 'I love u',
      size: 200
    })
  } else {
    alert('Jawaban belum tepat semua. Coba lagi ya :)')
  }
})

createPuzzle()
