let form = document.querySelector('#converter');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const SERVER = '';
	const API_KEY = 'ZVMpfi4rF6qnt7pykb1cF3BzpUAW5z5HWYuQ5v6f';

	let fromCurrency = document.querySelector('#base-currency').value;
	let toCurrency = document.querySelector('#new-currency').value;

	const URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&currencies=${toCurrency}&base_currency=${fromCurrency}`;

	fillFields(URL, toCurrency);
});

const fillFields = async(url, currency) => {
	const response = await fetch(url);
	const json = await response.json();

	let count = document.querySelector('#count').value;
	let result = document.querySelector('#result');

	result.innerHTML = count * json.data[currency];
}