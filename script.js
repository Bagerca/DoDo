const pizzas = [
    { name: "Терияки", basePrice: 0 },
    { name: "Маргарита", basePrice: 0 },
    { name: "Пепперони", basePrice: 0 },
    { name: "Гавайская", basePrice: 40 },
    { name: "Четыре сыра", basePrice: 50 },
    { name: "Мясная", basePrice: 280 },
    { name: "Додо", basePrice: 370 }
];

const slotContainer = document.getElementById('combo-slots');
const totalDisplay = document.getElementById('total-price');

// Генерируем 10 слотов
for (let i = 0; i < 10; i++) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.innerHTML = `
        <img src="https://media.dodostatic.net/image/r:292x292/019afab403ed7001a6263185d978f3f5.jpg" alt="pizza">
        <div class="controls">
            <select class="pizza-select" onchange="updatePrice()">
                ${pizzas.map(p => `<option value="${p.basePrice}">${p.name} (+${p.basePrice}₽)</option>`).join('')}
            </select>
            <select class="size-select" onchange="updatePrice()">
                <option value="0">30 см</option>
                <option value="150">35 см (+150₽)</option>
            </select>
        </div>
    `;
    slotContainer.appendChild(slot);
}

function updatePrice() {
    let total = 4989; // Базовая цена комбо
    document.querySelectorAll('.slot').forEach(slot => {
        total += parseInt(slot.querySelector('.pizza-select').value);
        total += parseInt(slot.querySelector('.size-select').value);
    });
    totalDisplay.innerText = total.toLocaleString();
}
