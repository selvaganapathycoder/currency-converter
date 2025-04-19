const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');
const darkToggle = document.getElementById('darkToggle');

const rates = {
  USD: { USD: 1, INR: 83, EUR: 0.91 },
  INR: { USD: 0.012, INR: 1, EUR: 0.011 },
  EUR: { USD: 1.1, INR: 90, EUR: 1 }
};

convertBtn.addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;

  if (!amount || amount <= 0) {
    result.textContent = "Enter a valid amount";
    return;
  }

  const converted = (amount * rates[from][to]).toFixed(2);
  result.textContent = `${amount} ${from} = ${converted} ${to}`;
});


darkToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
