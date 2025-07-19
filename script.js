window.onload = function () {
  const questionsData = [
    { q: "Kamu lebih suka kopi atau teh?", a: ["Kopi", "Teh"] },
    { q: "Malam minggu ideal: nonton atau jalan-jalan?", a: ["Nonton", "Jalan-jalan"] },
    { q: "Kamu tipe orang pendiam atau rame?", a: ["Pendiam", "Rame"] },
    { q: "Lebih suka kucing atau anjing?", a: ["Kucing", "Anjing"] },
    { q: "Lebih suka cuaca dingin atau panas?", a: ["Dingin", "Panas"] },
    { q: "Weekend lebih pilih rebahan atau keluar?", a: ["Rebahan", "Keluar"] }
  ]

  const questionsContainer = document.getElementById("questions")
  const submitBtn = document.getElementById("submitBtn")
  let answersCount = 0

  questionsData.forEach((item, index) => {
    const div = document.createElement("div")
    div.classList.add("question")
    div.innerHTML = `
      <p>${index + 1}. ${item.q}</p>
      <button onclick="selectAnswer(this)"> ${item.a[0]} </button>
      <button onclick="selectAnswer(this)"> ${item.a[1]} </button>
    `
    questionsContainer.appendChild(div)
  })

  window.selectAnswer = function (btn) {
    const parent = btn.parentElement
    const buttons = parent.querySelectorAll("button")
    buttons.forEach(b => b.disabled = true)
    btn.style.backgroundColor = "#c71585"
    answersCount++
    if (answersCount === questionsData.length) {
      submitBtn.classList.remove("hidden")
    }
  }

  window.showFinal = function () {
    document.getElementById("quiz").classList.add("hidden")
    document.getElementById("final").classList.remove("hidden")

    const noBtn = document.getElementById('noBtn')
    const yesBtn = document.getElementById('yesBtn')
    const result = document.getElementById('result')

    if (noBtn && yesBtn) {
      noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * window.innerWidth * 0.8
        const y = Math.random() * window.innerHeight * 0.8
        noBtn.style.position = 'absolute'
        noBtn.style.left = ${x}px
        noBtn.style.top = ${y}px
      })

      yesBtn.addEventListener('click', () => {
        result.classList.remove('hidden')
      })
    }
  }
}
