const result = document.getElementById('result');
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const valor = params.get('valor');

result.innerHTML = `You selected ${valor} out of 5 `;