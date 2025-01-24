const products = [
    { id: 1, name: 'HP 15s Ryzen Laptop', category: 'electronics', price: 489.63, rating: 4.5, image: 'https://m.media-amazon.com/images/I/51Vl3NXlzbL._SL1000_.jpg' },
    { id: 2, name: 'Istyle Can Plain Round Neck Rib Knit Regular Top for Women', category: 'clothing', price: 27.90, rating: 3.0, image: 'https://m.media-amazon.com/images/I/51LOI3P+sfL._SX679_.jpg' },
    { id: 3, name: 'The Secret by Rhonda Byrne in English New Edition ', category: 'books', price: 20.99, rating: 5.0, image: 'https://m.media-amazon.com/images/I/81dHGPmjVhL._SL1500_.jpg' },
    { id: 4, name: 'iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Ultramarine', category: 'electronics', price: 931.72, rating: 5.0, image: 'https://m.media-amazon.com/images/I/31lr3Ij6iBL._SY445_SX342_QL70_FMwebp_.jpg' },
    { id: 5, name: 'Apple iPad Air 13″ (M2): Liquid Retina Display, 128GB, Landscape 12MP Front Camera / 12MP Back Camera, Wi-Fi 6E, Touch ID, All-Day Battery Life — Space Grey', category: 'electronics', price: 940.72, rating: 4.0, image: 'https://m.media-amazon.com/images/I/71Lcaat+UUL._SX679_.jpg' },
    { id: 6, name: 'Symbol Premium Men"s Wrinkle-Resistant Regular Fit Cotton Formal Shirt', category: 'clothing', price: 30.31, rating: 4.0, image: 'https://m.media-amazon.com/images/I/81Be4hgx1gL._SX569_.jpg' },
    { id: 7, name: 'Apple Macbook 12 Inch', category: 'electronics', price: 1148.56, rating: 5.0, image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/TX/FH/WC/7808107/12-inch-macbook-computer-laptops-1000x1000.jpg' },
    { id: 8, name: 'Casual Wear Full Sleeve Top for Women, Top for Girls', category: 'clothing', price: 19.99, rating: 4.0, image: 'https://images-eu.ssl-images-amazon.com/images/I/31XZ17+7RRL._AC_UL165_SR165,165_.jpg' },
    { id: 9, name: 'Blueprint for Billions : Mastering India’s Equity Market', category: 'books', price: 15.99, rating: 4.0, image: 'https://m.media-amazon.com/images/I/61nb-A4JQQL._SY466_.jpg'}

];
function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
    const minRating = parseFloat(document.getElementById('ratingFilter').value);
    const sortBy = document.getElementById('sortBy').value;
    let filtered = products.filter(product => 
        (!category || product.category === category) &&
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.rating >= minRating
    );
    filtered.sort((a, b) => {
        switch(sortBy) {
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'rating-desc':
                return b.rating - a.rating;
        }
    });
    renderProducts(filtered);
}
function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-rating">Rating: ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</p>
            </div>
        </div>
    `).join('');
}
renderProducts(products);