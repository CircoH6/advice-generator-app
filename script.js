const adviceId = document.getElementById('advice_id')
const adviceText = document.getElementById('advice_text')
const diceBtn = document.querySelector('.advice_dice')

async function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceId.textContent = `ADVICE #${data.slip.id}`
        adviceText.textContent = `"${data.slip.advice}"`
    })
    .catch(error => {
        console.error('erreur lors de la récupération des données : ', error)
        adviceText.textContent = 'Une erreur est survenue lors de la récupération des données. Veuillez rééssayer à nouveau plus tard'
    })
}


diceBtn.addEventListener("click",getAdvice);
window.onload = getAdvice;