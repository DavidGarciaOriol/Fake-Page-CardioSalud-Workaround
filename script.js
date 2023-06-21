
const productButtons = document.querySelectorAll('.product-button');

productButtons.forEach(button => {
    
    button.addEventListener('click', function() {

    const productData = JSON.parse(button.dataset.product);

    // Actualizar el contenido de la página del producto con los datos correspondientes
    const productImage = document.querySelector('.product img');
    const productName = document.querySelector('.product h2');
    const productDescription = document.querySelector('.product p');

    productImage.src = productData.image;
    productImage.alt = productData.name;
    productName.textContent = productData.name;
    productDescription.textContent = productData.description;
    const productId = button.productData.id

    

    window.location.href = `producto.html?id=${productId}`;
    });
});