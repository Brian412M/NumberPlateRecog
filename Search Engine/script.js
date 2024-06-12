const searcher = () => {
    const searchbox = document.getElementById("search").value.trim().toUpperCase(); // Normalize search query
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const productName = product.querySelector('.product-details h2');
        if (productName) {
            const productNameText = productName.textContent.trim().toUpperCase(); // Normalize product name
            if (productNameText.includes(searchbox)) { // Check for substring match
                product.style.display = "";
            } else {
                product.style.display = "none";
            }
        }
    });
}
