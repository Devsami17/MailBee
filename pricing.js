const rangeSlider = document.getElementById("priceRange");
const selectedAmount = document.getElementById("selectedAmount");
const pricingAmount = document.getElementById("pricing-amount");
const pricingAmount2 = document.getElementById("pricing-amount-2");
const rangeTicksContainer = document.querySelector(".range-ticks");

const amounts = ['100', '200', '500', '1,000', '2,000', '5,000', '10,000', '15,000', '20,000', '50,000', '100,000', '200,000'];
const prices = [5.00, 10.00, 50.10, 22.50, 40.00, 75.00, 150.00, 220.10, 290.80, 650.00, 700.20, 1400.00];

rangeTicksContainer.innerHTML = "";
rangeSlider.setAttribute("max", amounts.length - 1);
amounts.forEach((e, t) => {
    let s = document.createElement("div");
    s.className = "range-tick-label";
    s.textContent = `${e}`;
    s.style.left = `${t / (amounts.length - 1) * 100}%`;
    rangeTicksContainer.appendChild(s);
});

const updatePricingDisplay = (index, multiplier = 1) => {
    const adjustedPrice = prices[index] * multiplier;
    pricingAmount.innerHTML = `$${adjustedPrice.toFixed(2)}`;
    pricingAmount2.innerHTML = `${amounts[index]}`;
};

const updateSliderDisplay = (index) => {
    selectedAmount.textContent = `Sent ${amounts[index]} Emails`;
    const percentage = index / (amounts.length - 1) * 100;
    rangeSlider.style.background = `linear-gradient(to right, #F9E00B 0%, #F9E00B ${percentage}%, #6a90b159 ${percentage}%, #6a90b159 100%)`;
};

rangeSlider.addEventListener("input", function() {
    const index = parseInt(rangeSlider.value);
    updateSliderDisplay(index);
    

    updatePricingDisplay(index, selectedPackageIndex === 1 ? 1.5 : selectedPackageIndex === 2 ? 1.9 : 1);
});

const initialIndex = 0; 
updateSliderDisplay(initialIndex);
updatePricingDisplay(initialIndex);

const buttons = document.querySelectorAll('.pricing-card button');
let selectedPackageIndex = 0; 

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => {
            btn.classList.remove('active');
            btn.querySelector('span').textContent = 'Select';
        });

        this.classList.add('active');
        this.querySelector('span').textContent = 'Selected';

        if (index === 0) {
          
            selectedPackageIndex = 0;
        } else if (index === 1) {
            
            selectedPackageIndex = 1;
        } else if (index === 2) {
           
            selectedPackageIndex = 2;
        }

        const currentIndex = parseInt(rangeSlider.value);
        updatePricingDisplay(currentIndex, selectedPackageIndex === 1 ? 1.5 : selectedPackageIndex === 2 ? 1.9 : 1);
    });
});
