let cart = [];
let products = [
        { id: 1, name: 'HP 15s Ryzen Laptop', category: 'electronics', price: 50000, rating: 4.5, image: 'https://m.media-amazon.com/images/I/51Vl3NXlzbL._SL1000_.jpg' },
        { id: 2, name: 'Istyle Can Plain Round Neck Rib Knit Regular Top for Women', category: 'clothing', price: 2700, rating: 3.0, image: 'https://m.media-amazon.com/images/I/51LOI3P+sfL._SX679_.jpg' },
        { id: 3, name: 'The Secret by Rhonda Byrne in English New Edition ', category: 'books', price: 20.99, rating: 5.0, image: 'https://m.media-amazon.com/images/I/81dHGPmjVhL._SL1500_.jpg' },
        { id: 4, name: 'iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Ultramarine', category: 'electronics', price: 93100, rating: 5.0, image: 'https://m.media-amazon.com/images/I/31lr3Ij6iBL._SY445_SX342_QL70_FMwebp_.jpg' },
        { id: 5, name: 'Apple iPad Air 13″ (M2): Liquid Retina Display, 128GB, Landscape 12MP Front Camera / 12MP Back Camera, Wi-Fi 6E, Touch ID, All-Day Battery Life — Space Grey', category: 'electronics', price: 1500000, rating: 4.0, image: 'https://m.media-amazon.com/images/I/71Lcaat+UUL._SX679_.jpg' },
        { id: 6, name: 'Symbol Premium Men"s Wrinkle-Resistant Regular Fit Cotton Formal Shirt', category: 'clothing', price: 30.31, rating: 4.0, image: 'https://m.media-amazon.com/images/I/81Be4hgx1gL._SX569_.jpg' },
        { id: 7, name: 'Apple Macbook 12 Inch', category: 'electronics', price: 100000, rating: 5.0, image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/TX/FH/WC/7808107/12-inch-macbook-computer-laptops-1000x1000.jpg' },
        { id: 8, name: 'Casual Wear Full Sleeve Top for Women, Top for Girls', category: 'clothing', price: 1900, rating: 4.0, image: 'https://images-eu.ssl-images-amazon.com/images/I/31XZ17+7RRL._AC_UL165_SR165,165_.jpg' },
        { id: 9, name: 'Blueprint for Billions : Mastering India’s Equity Market', category: 'books', price: 1000, rating: 4.0, image: 'https://m.media-amazon.com/images/I/61nb-A4JQQL._SY466_.jpg'},
        { id: 10, name: 'Chain Jhumki Earrings', category: 'jewellery', price: 1999, rating: 4.5, image: 'https://m.media-amazon.com/images/I/610E9ZJf8hL._SY625_.jpg'},
        { id: 11, name: 'Louis Philippe Men Solid Classic Fit Shirt', category: 'clothing', price: 2999, rating: 4.5, image: 'https://m.media-amazon.com/images/I/51CU9SGMDIL._SY741_.jpg'},
        { id: 12, name: 'Cruise 1 Ton 3 Star Inverter Split AC with 7-Stage Air Filtration', category: 'electronics', price: 44900, rating: 3.5, image: 'https://m.media-amazon.com/images/I/51QrNY6zUBL._SX679_.jpg'},
        { id: 13, name: 'Kohler Emile Pull Down Kitchen Tap', category: 'home', price: 14040, rating: 4.5, image: 'https://m.media-amazon.com/images/I/71t2ghHNzNL._SX679_.jpg'},
        { id: 14, name: 'Elite Spin Mop', category: 'home', price: 2158, rating: 3.5, image: 'https://m.media-amazon.com/images/I/41WsjgHYTEL._SX300_SY300_QL70_FMwebp_.jpg'},
        { id: 15, name: 'WiFi CCTV Security Camera', category: 'electronics', price: 3990, rating: 4.5, image: 'https://m.media-amazon.com/images/I/31emgKPtZSL._SX300_SY300_QL70_FMwebp_.jpg'},
        { id: 16, name: 'Stick Fast Bathroom Shelf', category: 'home', price: 1999, rating: 4.5, image: 'https://m.media-amazon.com/images/I/51AUrWLdHQL._SX300_SY300_QL70_FMwebp_.jpg'},
        { id: 17, name: 'Merlion Office Chair', category: 'home', price: 26999, rating: 4.5, image: 'https://m.media-amazon.com/images/I/61qEhDtYkRL._SX679_.jpg'},
        { id: 18, name: 'SleepyCat Latex Mattress', category: 'home', price: 22999, rating: 5.0, image: 'https://m.media-amazon.com/images/I/91JoitHYR4L._SX679_.jpg'},
        { id: 19, name: 'Logitech Pebble 2 Combo, Wireless Keyboard and Mouse', category: 'electronics', price: 5995, rating: 4.5, image: 'https://m.media-amazon.com/images/I/31FNpMpo2hL._SX300_SY300_QL70_FMwebp_.jpg'},
        {id:20,name:'Mens Lightweight Classic Clogs',category:'footwear',price:499,rating:3.5,image:'https://m.media-amazon.com/images/I/61n0JhRQ+JL._SY695_.jpg'},
        {id:21,name:'SPARX Mens Sm 439 Sneaker',category:'footwear',price:849,rating:4.0,image:'https://m.media-amazon.com/images/I/5149DvbNzIL._SY695_.jpg'},
        {id:22,name:'American Tourister Trolley Bag',category:'travel',price:4849,rating:4.5,image:'https://m.media-amazon.com/images/I/51InbU2hR-L._SX679_.jpg'},
        {id:23,name:'ZENEME Rhodium-Plated with Silver-Toned White Cubic Zirconia & American Diamond studded Necklace and Drop Earrings Jewellery Set for women',category:'jewellery',price:3699,rating:5.0,image:'https://m.media-amazon.com/images/I/71w8bbKVX-L._AC_UL480_FMwebp_QL65_.jpg'},
        {id:24,name:'Travel Organizer 7 in 1 Travel Laundry Cosmetics Luggage Packing Organizers Set Makeup Bags Organizer Packing Cubes with Shoe Bag for travel, Nylon (Pink)',category:'travel',price:999,rating:4.5,image:'https://m.media-amazon.com/images/I/71nogu-vZuL._SX679_.jpg'},
        {id:25,name:'Jewels Gold Plated Traditional Stone Pearl Choker Necklace Jewellery Set For Women/Girls',category:'jewellery',price:3000,rating:4.5,image:'https://m.media-amazon.com/images/I/81ux7P0aOwL._SY625_.jpg'},
        {id:26,name:'MONJAY 7pcs Set Travel Organizer Packing Cubes',category:'travel',price:2000,rating:4.5,image:'https://m.media-amazon.com/images/I/6166zWbwG6L._SX679_.jpg'},
        {id:27,name:'Shining Diva Fashion Italian Designer Platinum Plated Crystal Butterfly Earrings Chain Pendant Necklace Combo Jewellery Set for Women and Girls (Blue)',category:'jewellery',price:6000,rating:4.5,image:'https://m.media-amazon.com/images/I/51HTyfRbS9L._SY625_.jpg'},
        {id:28,name:'Wolpin Set of 17 Pcs Travel Organizer Packing Bags',category:'travel',price:1500,rating:3.5,image:'https://m.media-amazon.com/images/I/51k4W1m7Y5L._SX679_.jpg'},
        {id:29,name:'ZAVERI PEARLS Gold Tone Pearls Flower Ethnic Adjustable Finger Ring For Women-',category:'jewellery',price:1330,rating:4.5,image:'https://m.media-amazon.com/images/I/61sJDJaZbbL._SY695_.jpg'},
        {id:30,name:'5 Pack Vacuum Bags for Travel with Hand Pump ',category:'travel',price:1400,rating:4.5,image:'https://m.media-amazon.com/images/I/81+00UFCZ6L._SX679_.jpg'}
    ];
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
});
function renderProducts(filteredProducts) {
    const container = document.getElementById("productContainer");
    container.innerHTML = "";
    filteredProducts.forEach(product => {
        container.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">₹${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="buy-now" onclick="buyNow(${product.id})">Buy Now</button>
            </div>
        `;
    });
}
function applyFilters() {
    let category = document.getElementById("categoryFilter").value;
    let minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
    let maxPrice = parseFloat(document.getElementById("maxPrice").value) || Infinity;

    let filteredProducts = products.filter(product => 
        (category === "" || product.category === category) &&
        product.price >= minPrice &&
        product.price <= maxPrice
    );
    renderProducts(filteredProducts);
}
function searchProducts() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    renderProducts(filteredProducts);
}
function addToCart(id) {
    let product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}
function buyNow(id) {
    alert("Thank You for Buying! Please visit again! 😊");
}
function toggleCart() {
    document.getElementById("cartModal").style.display = "block";
    updateCart();
}
function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}
function updateCart() {
    document.getElementById("cartCount").textContent = cart.length;
}
function checkout() {
    alert("Thank You for buying!");
}