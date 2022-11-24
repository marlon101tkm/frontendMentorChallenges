

function loadQuote() {
    const quote = document.getElementById('quote');
    const number = document.getElementById('number');
    return fetch('https://api.adviceslip.com/advice')
        .then(data => data.json())
        .then(json => {
            quote.textContent = `"${json.slip.advice}"`;
            number.textContent = `Advice # ${json.slip.id}`;

        })
        .catch(err => console.log('Erro:', err))
}

loadQuote();