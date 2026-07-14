let people = 2;
let tipPct = 18;

function calculate() {
    const bill = parseFloat(document.getElementById('bill').value) || 0;
    const tip = bill * tipPct / 100;
    const total = bill + tip;
    const ppBill = bill / people;
    const ppTip = tip / people;
    const ppTotal = total / people;

    document.getElementById('tip-amount').textContent = fmt(tip);
    document.getElementById('total-bill').textContent = fmt(total);
    document.getElementById('pp-bill').textContent = fmt(ppBill);
    document.getElementById('pp-tip').textContent = fmt(ppTip);
    document.getElementById('pp-total').textContent = fmt(ppTotal);
    document.getElementById('br-bill').textContent = fmt(bill);
    document.getElementById('br-tip').textContent = fmt(tip);
    document.getElementById('br-total').textContent = fmt(total);
    document.getElementById('br-pct').textContent = tipPct;
    document.getElementById('br-people').textContent = people + (people === 1 ? ' person' : ' people');
}

function setTip(pct) {
    tipPct = pct;
    document.getElementById('tip-pct').value = pct;
    document.getElementById('tip-slider').value = pct;
    document.querySelectorAll('.tip-pct-btn').forEach(b => b.classList.toggle('active', parseInt(b.textContent) === pct));
    calculate();
}

function syncTipFromInput() {
    tipPct = parseFloat(document.getElementById('tip-pct').value) || 0;
    document.getElementById('tip-slider').value = Math.min(tipPct, 50);
    document.querySelectorAll('.tip-pct-btn').forEach(b => b.classList.remove('active'));
    calculate();
}

function syncTipFromSlider() {
    tipPct = parseInt(document.getElementById('tip-slider').value);
    document.getElementById('tip-pct').value = tipPct;
    document.querySelectorAll('.tip-pct-btn').forEach(b => b.classList.toggle('active', parseInt(b.textContent) === tipPct));
    calculate();
}

function changePeople(delta) {
    people = Math.max(1, Math.min(50, people + delta));
    document.getElementById('people-count').textContent = people;
    calculate();
}

function setRating(btn) {
    document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function fmt(n) {
    return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Init
window.addEventListener('load', calculate);
