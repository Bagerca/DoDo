document.addEventListener('DOMContentLoaded', () => {
    // Полный список пицц с их ID, названием, доплатой и URL изображения
    const pizzas = [
        { id: 'teriyaki', name: "Терияки", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/019afab403ed7001a6263185d978f3f5.jpg' },
        { id: 'margarita', name: "Маргарита", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/0198bf3d788b78d491891a6da5e94bf1.jpg' },
        { id: 'pepperoni-fresh', name: "Пепперони фреш", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.jpg' },
        { id: 'pepperoni', name: "Пепперони", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/0198bf39dda97082912be8d1f3f2b233.jpg' },
        { id: 'spicy-sausages', name: "Пикантные колбаски", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/0198bf25089a74d08e08629b41ed39ee.jpg' },
        { id: 'double-chicken', name: "Двойной цыпленок", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/019af8f736ee71108d0c53fe3bc4520e.jpg' },
        { id: 'garlic-chicken', name: "Чесночный цыпленок", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/019afacd7dc1725980e8c7166f7ccc04.jpg' },
        { id: 'ham-and-cheese', name: "Ветчина и сыр", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/019af8decaba71d690d4ed9a8962a498.jpg' },
        { id: 'cheesy', name: "Сырная", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/019afa507ae371e8a6b99101e25132cc.jpg' },
        { id: 'ham-and-mushrooms', name: "Ветчина и грибы", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/0198c659b357718f9c77ad0dc392dadf.jpg' },
        { id: 'four-seasons', name: "Четыре сезона", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/0198bf47733e787a98ed55d13e9a2251.jpg' },
        { id: 'burger-pizza', name: "Бургер-пицца", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.jpg' },
        { id: 'beef-with-horseradish', name: "Говядина с хреном", basePrice: 0, image: 'https://media.dodostatic.net/image/r:292x292/019bea4e1f1b794299fe61d1e0941f9f.jpg' },
        { id: 'hawaiian', name: "Гавайская", basePrice: 40, image: 'https://media.dodostatic.net/image/r:292x292/019af8ec51e075d5adcee62506bca8df.jpg' },
        { id: 'four-cheeses', name: "Четыре сыра", basePrice: 50, image: 'https://media.dodostatic.net/image/r:292x292/019afad6a04c7375972fcad00a40a77c.jpg' },
        { id: 'veggie-mushrooms', name: "Овощи и грибы", basePrice: 70, image: 'https://media.dodostatic.net/image/r:292x292/0198bf29e76179b88bdbf2ec5527bba3.jpg' },
        { id: 'julienne', name: "Жюльен", basePrice: 100, image: 'https://media.dodostatic.net/image/r:292x292/019af90cee6b718886e11633d45f34ae.jpg' },
        { id: 'arriva', name: "Аррива!", basePrice: 110, image: 'https://media.dodostatic.net/image/r:292x292/0198bf2e5d2973a4bf5ec61161496f91.jpg' },
        { id: 'meat-mix', name: "Мясной микс", basePrice: 110, image: 'https://media.dodostatic.net/image/r:292x292/019bfc26d13e710094be830c3c55ccc2.jpg' },
        { id: 'double-pepperoni', name: "Двойная пепперони", basePrice: 110, image: 'https://media.dodostatic.net/image/r:292x292/0198bf315122735a8b45cf8539df53f8.jpg' },
        { id: 'cheesy-chicken', name: "Сырный цыпленок", basePrice: 120, image: 'https://media.dodostatic.net/image/r:292x292/019afa5d91b3731f88f7226c11fbf6ae.jpg' },
        { id: 'pesto', name: "Песто", basePrice: 130, image: 'https://media.dodostatic.net/image/r:292x292/019afa1ae8ee7242af6827b5c5cfc135.jpg' },
        { id: 'masala', name: "Масала", basePrice: 130, image: 'https://media.dodostatic.net/image/r:292x292/019c7679d60378acbf8b69ac7bf6ee27.jpg' },
        { id: 'chicken-ranch', name: "Цыпленок ранч", basePrice: 130, image: 'https://media.dodostatic.net/image/r:292x292/019afac4642c73b9aacf4f1e57090844.jpg' },
        { id: 'dodo-mix', name: "Додо микс", basePrice: 180, image: 'https://media.dodostatic.net/image/r:292x292/019af902eb3a72ebb8f303b74be0e639.jpg' },
        { id: 'pizza-horseradish', name: "Пицца с хреном", basePrice: 180, image: 'https://media.dodostatic.net/image/r:292x292/019afa231b757067b865b896dbab2388.jpg' },
        { id: 'carbonara', name: "Карбонара", basePrice: 180, image: 'https://media.dodostatic.net/image/r:292x292/019af91d7024718db8c72911daa3a40c.jpg' },
        { id: 'chicken-bbq', name: "Цыпленок барбекю", basePrice: 210, image: 'https://media.dodostatic.net/image/r:292x292/0198bf2cc87a79baa946c53b634615f4.jpg' },
        { id: 'diablo', name: "Диабло", basePrice: 210, image: 'https://media.dodostatic.net/image/r:292x292/0198bf439a007604880d0231be87cd3e.jpg' },
        { id: 'shrimp-chili', name: "Креветки со сладким чили", basePrice: 250, image: 'https://media.dodostatic.net/image/r:292x292/019af924249c7908869f18a2063cf4c7.jpg' },
        { id: 'meat-feast', name: "Мясная", basePrice: 280, image: 'https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.jpg' },
        { id: 'shrimp-pesto', name: "Креветка и песто", basePrice: 330, image: 'https://media.dodostatic.net/image/r:292x292/0198bf4d218b75d4a3e667fc2f6d7643.jpg' },
        { id: 'dodo-pizza', name: "Додо", basePrice: 370, image: 'https://media.dodostatic.net/image/r:292x292/019ac604bad37209b1ec496bbdd98560.jpg' },
    ];
    
    // Начальный набор пицц (как на сайте Додо)
    const defaultCombo = [
        'teriyaki', 'teriyaki', 'teriyaki', 'margarita', 'pepperoni-fresh', 
        'pepperoni', 'spicy-sausages', 'teriyaki', 'teriyaki', 'teriyaki'
    ];

    const slotContainer = document.getElementById('combo-slots');
    const totalDisplay = document.getElementById('total-price');
    const baseComboPrice = 4989;
    const sizeSurcharge = 200; // Условная доплата за 35 см, т.к. в коде её нет.

    function updatePrice() {
        let currentTotal = baseComboPrice;
        document.querySelectorAll('.slot').forEach(slot => {
            const pizzaSelect = slot.querySelector('.pizza-select');
            const sizeSelect = slot.querySelector('.size-select');
            
            currentTotal += parseInt(pizzaSelect.value, 10);
            currentTotal += parseInt(sizeSelect.value, 10);
        });
        totalDisplay.innerText = `${currentTotal.toLocaleString('ru-RU')} ₽`;
    }
    
    function generateOptions(selectedId) {
        return pizzas.map(p => 
            `<option value="${p.basePrice}" data-pizza-id="${p.id}" ${p.id === selectedId ? 'selected' : ''}>
                ${p.name} ${p.basePrice > 0 ? `(+${p.basePrice} ₽)` : ''}
            </option>`
        ).join('');
    }
    
    function createSlot(pizzaId, index) {
        const defaultPizza = pizzas.find(p => p.id === pizzaId);
        const slot = document.createElement('div');
        slot.className = 'slot';
        slot.dataset.slotIndex = index;
        
        slot.innerHTML = `
            <img class="slot-image" src="${defaultPizza.image}" alt="${defaultPizza.name}">
            <div class="slot-info">
                <div class="name">${defaultPizza.name}</div>
                <div class="description">30 см, традиционное тесто</div>
                <div class="slot-controls">
                    <select class="pizza-select">
                        ${generateOptions(pizzaId)}
                    </select>
                    <select class="size-select">
                        <option value="0">30 см</option>
                        <option value="${sizeSurcharge}">35 см (+${sizeSurcharge} ₽)</option>
                    </select>
                </div>
            </div>
        `;
        
        slot.querySelector('.pizza-select').addEventListener('change', handlePizzaChange);
        slot.querySelector('.size-select').addEventListener('change', updatePrice);
        
        return slot;
    }

    function handlePizzaChange(event) {
        const select = event.target;
        const selectedOption = select.options[select.selectedIndex];
        const pizzaId = selectedOption.dataset.pizzaId;
        const pizza = pizzas.find(p => p.id === pizzaId);
        
        const slot = select.closest('.slot');
        slot.querySelector('.slot-image').src = pizza.image;
        slot.querySelector('.name').innerText = pizza.name;
        
        updatePrice();
    }
    
    // Инициализация
    defaultCombo.forEach((pizzaId, index) => {
        const slot = createSlot(pizzaId, index);
        slotContainer.appendChild(slot);
    });

    updatePrice();
});
