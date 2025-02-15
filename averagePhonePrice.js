function avgPrice(data) {
    if (data.length === 0) return 0; // Handle empty array case

    let totalPrice = 0;
    for (const phone of data) {
        totalPrice += phone.price;
    }
    return totalPrice / data.length;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

console.log(avgPrice(phones)); // Outputs the correct average price
