
function calculateTotal() {
    const bestPrice = 1299;
    const extraMemoryCost = parseFloat(document.getElementById('extra-memory-price').innerText);
    const extraStoragePrice = parseFloat(document.getElementById('extra-storage-price').innerText);
    const deliveryCharge = parseFloat(document.getElementById('delivery-charge').innerText);
    const totalPrice = bestPrice + extraMemoryCost + extraStoragePrice + deliveryCharge;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total-payment').innerText = totalPrice;
}
function memoryPriceUpdate(memoryPrice) {
    document.getElementById('extra-memory-price').innerText = memoryPrice;
    calculateTotal();
}
function storagePriceUpdate(storagePrice) {
    document.getElementById('extra-storage-price').innerText = storagePrice;
    calculateTotal();
}
function deliveryChargeUpdate(charge) {
    document.getElementById('delivery-charge').innerText = charge;
    calculateTotal();
}
function promoCodeDiscount(promoCode) {
    const promoText = document.getElementById('promo-code');
    if (promoCode == 'stevekaku') {
        const totalPriceShow = document.getElementById('total-price');
        const totalPrice = parseFloat(totalPriceShow.innerText);
        const updatedPrice = totalPrice - totalPrice * 0.2;
        document.getElementById('total-payment').innerText = updatedPrice;
        promoText.value = '';
    }
    else {
        promoText.value = '';
    }
}
document.getElementById('memory-8gb-button').addEventListener('click', function () {
    memoryPriceUpdate('0');
    document.getElementById('memory-8gb-button').style.backgroundColor = '#9ccc65';
    document.getElementById('memory-16gb-button').style.backgroundColor = '';
});
document.getElementById('memory-16gb-button').addEventListener('click', function () {
    memoryPriceUpdate('180');
    document.getElementById('memory-8gb-button').style.backgroundColor = '';
    document.getElementById('memory-16gb-button').style.backgroundColor = '#9ccc65';
});
document.getElementById('storage-256gb-button').addEventListener('click', function () {
    storagePriceUpdate('0');
    document.getElementById('storage-256gb-button').style.backgroundColor = '#9ccc65';
    document.getElementById('storage-512gb-button').style.backgroundColor = '';
    document.getElementById('storage-1tb-button').style.backgroundColor = '';
});
document.getElementById('storage-512gb-button').addEventListener('click', function () {
    storagePriceUpdate('100');
    document.getElementById('storage-256gb-button').style.backgroundColor = '';
    document.getElementById('storage-512gb-button').style.backgroundColor = '#9ccc65';
    document.getElementById('storage-1tb-button').style.backgroundColor = '';
});
document.getElementById('storage-1tb-button').addEventListener('click', function () {
    storagePriceUpdate('180');
    document.getElementById('storage-256gb-button').style.backgroundColor = '';
    document.getElementById('storage-512gb-button').style.backgroundColor = '';
    document.getElementById('storage-1tb-button').style.backgroundColor = '#9ccc65';
});
document.getElementById('delivery-charge-free').addEventListener('click', function () {
    deliveryChargeUpdate('0');
    document.getElementById('delivery-charge-free').style.backgroundColor = '#9ccc65';
    document.getElementById('delivery-charge-20Dollar').style.backgroundColor = '';
});
document.getElementById('delivery-charge-20Dollar').addEventListener('click', function () {
    deliveryChargeUpdate('20');
    document.getElementById('delivery-charge-free').style.backgroundColor = '';
    document.getElementById('delivery-charge-20Dollar').style.backgroundColor = '#9ccc65';
});
document.getElementById('promo-button').addEventListener('click', function () {
    const promoCodeText = document.getElementById('promo-code').value;
    promoCodeDiscount(promoCodeText);
});