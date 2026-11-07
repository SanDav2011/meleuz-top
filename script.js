const rates = {
  usdt: {sell: 91.5, buy: 93.2},
  usdc: {sell: 91.4, buy: 93.1},
  btc: {sell: 5850000, buy: 6020000}
};

const tabs = document.querySelectorAll('.tab');
const asset = document.getElementById('asset');
const amount = document.getElementById('amount');
const rate = document.getElementById('rate');
const result = document.getElementById('result');
let mode = 'sell';

function update() {
  const key = asset.value;
  const value = parseFloat(amount.value) || 0;
  const currentRate = rates[key][mode];
  rate.textContent = `1 ${key.toUpperCase()} ≈ ${currentRate.toLocaleString('ru-RU')} ₽`;
  result.textContent = `${(value * currentRate).toLocaleString('ru-RU', {maximumFractionDigits: 2})} ₽`;
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('active'));
    tab.classList.add('active');
    mode = tab.dataset.mode;
    update();
  });
});

asset.addEventListener('change', update);
amount.addEventListener('input', update);

const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();
update();