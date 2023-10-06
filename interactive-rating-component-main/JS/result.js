const result = document.getElementById('result');
const valor = new URLSearchParams(window.location.search).get('valor')

result.innerHTML = `You selected ${valor} out of 5 `;