function price(product, money) {
    const extraProduct = document.getElementById(product);
    extraProduct.innerText = money;
    totalPrice();
}

function totalPrice() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const extraMemoryCost = document.getElementById('extra-memory-cost')
    const extraMemoryTotal = parseInt(extraMemoryCost.innerText);
    const extraStroageCost = document.getElementById('extra-stroage-cost');
    const extraStorageTotal = parseInt(extraStroageCost.innerText);
    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryTotal = parseInt(deliveryCharge.innerText);
    const total = bestPriceTotal + extraMemoryTotal + extraStorageTotal + deliveryTotal;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;
    const displayPrice = document.getElementById('display-price');
    displayPrice.innerText = total;
}
function discountCondition() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const extraMemoryCost = document.getElementById('extra-memory-cost')
    const extraMemoryTotal = parseInt(extraMemoryCost.innerText);
    const extraStroageCost = document.getElementById('extra-stroage-cost');
    const extraStorageTotal = parseInt(extraStroageCost.innerText);
    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryTotal = parseInt(deliveryCharge.innerText);
    const total = bestPriceTotal + extraMemoryTotal + extraStorageTotal + deliveryTotal;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;
    const displayPrice = document.getElementById('display-price');
    const discount = document.getElementById('pomo-code-input');
    const discountCode = discount.value;
    if (discountCode == 'stevekaku') {
        const discount = total * (20 / 100);
        displayPrice.innerText = total - discount;
    }
    else {
        displayPrice.innerText = total;
    }
}
// memory button click handler start
// 8GB Unified Memory button 
document.getElementById('8gb-memory').addEventListener('click', function () {
    price('extra-memory-cost', 0);
})
// 16GB Unified Memory button 
document.getElementById('16gb-memory').addEventListener('click', function () {
    price('extra-memory-cost', 180);
})
// memory button click handler end


// Storage button click handler start
// 256GB SSD Storage
document.getElementById('256gb-storage').addEventListener('click', function () {
    price('extra-stroage-cost', 0);
})
//512GB SSD Storage
document.getElementById('512gb-storage').addEventListener('click', function () {
    price('extra-stroage-cost', 100);
})
//1Tb SSD Storage
document.getElementById('1tb-storage').addEventListener('click', function () {
    price('extra-stroage-cost', 180);
})
// Storage button click handler End

//delivery option click handler start
// free delivary 
document.getElementById('free-delivery').addEventListener('click', function () {
    price('delivery-charge', 0);
})
// paid delivary 
document.getElementById('paid-delivery').addEventListener('click', function () {
    price('delivery-charge', 20);
})

// submit 
document.getElementById('apply-button').addEventListener('click', function () {
    const discount = document.getElementById('pomo-code-input');
    const discountCode = discount.value;
    if (discountCode == 'stevekaku') {
        discountCondition()
        discount.value = '';
    }
})
