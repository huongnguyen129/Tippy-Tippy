document.addEventListener('DOMContentLoaded', function() {
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const calculateButton = document.getElementById('calculateButton');
    const tipAmountElement = document.getElementById('tipAmount');
    const totalAmountElement = document.getElementById('totalAmount');
    const funFactElement = document.getElementById('funFact');
    const tipButtons = document.querySelectorAll('.tip-btn');

    const tipFacts = [
        "Tipping is nearly compulsory in restaurants in USA!",
        "In China, with a culture of keeping your face and politeness, your tip might be returned!",
        "In Japan, tipping is supposed to be rude and make people feel confused!"
    ];

    tipButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            tipButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            tipPercentageInput.value = this.dataset.tip;
        });
    });

    calculateButton.addEventListener('click', function() {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);
        
        if (isNaN(billAmount) || billAmount <= 0) {
            alert("Please enter a number >0.");
            return;
        }
        
        const tipAmount = billAmount * (tipPercentage / 100);
        const totalAmount = billAmount + tipAmount;

        tipAmountElement.textContent = `$${tipAmount.toFixed(2)}`;
        totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;

        const randomFact = tipFacts[Math.floor(Math.random() * tipFacts.length)];
        funFactElement.textContent = `Fun Fact: ${randomFact}`;
        funFactElement.classList.remove('hidden');
    });
});
