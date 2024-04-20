import React, { useState } from 'react';
const CurrencyConverter = () => {
const [amount, setAmount] = useState(0);
const [fromCurrency, setFromCurrency] = useState('USD');
const [toCurrency, setToCurrency] = useState('INR');
const [convertedAmount, setConvertedAmount] = useState(0);
const exchangeRates = {
'USD': { 'INR': 73.33, 'EUR': 0.85 },
'INR': { 'USD': 0.0136, 'EUR': 0.0116 },
'EUR': { 'USD': 1.18, 'INR': 86.37 }
};
const handleAmountChange = (e) => {
setAmount(e.target.value);
};
const handleFromCurrencyChange = (e) => {
setFromCurrency(e.target.value);
};
const handleToCurrencyChange = (e) => {
setToCurrency(e.target.value);
};
const convertCurrency = () => {
const rate = exchangeRates[fromCurrency][toCurrency];
const converted = amount * rate;
setConvertedAmount(converted);
};
return (
<div>

Amount: <input type="number" value={amount}
onChange={handleAmountChange} /><br />
From Currency:
<select value={fromCurrency} onChange={handleFromCurrencyChange}>
{Object.keys(exchangeRates).map(currency => (
<option key={currency} value={currency}>{currency}</option>
))}
</select><br />
To Currency:
<select value={toCurrency} onChange={handleToCurrencyChange}>
{Object.keys(exchangeRates[fromCurrency]).map(currency => (
<option key={currency} value={currency}>{currency}</option>
))}
</select><br />
Converted Amount: {convertedAmount}<br />
<button onClick={convertCurrency}>Convert</button>
</div>
);
};
export default CurrencyConverter;