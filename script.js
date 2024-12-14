document.addEventListener('DOMContentLoaded', function() {
    const plusButton = document.getElementById('plus-button');
    const minusButton = document.getElementById('minus-button');
    const plusButtonone = document.getElementById('plus-buttonone');
    const minusButtonone = document.getElementById('minus-buttonone');
    const countElement = document.getElementById('count');
    const countElementone = document.getElementById('countone');
    const addToCartButton = document.getElementById('addcart');
    const addToCartButtonone = document.getElementById('addcartone');
    const cartCountElement = document.getElementById('cart-count');
    const cart = document.getElementById('carticon');
    const cartcontent = document.querySelector('.hidden');
    const itemincart = document.querySelector('.hiddenhide');
    const itemPriceElement = document.getElementById('item-price');
    const hamburger = document.querySelector('.menu');
    const hamburgercontent = document.querySelector('.hiddenone');
    const cross = document.querySelector('.close');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const imgElement = document.querySelector('.img');
    const deletecart = document.querySelector('.delete');
    const profilecontent = document.querySelector('.profile')
    const profilecontentone = document.querySelector('.profilecontenthidden')

    const pricePerItem = 125.00; // Price of each item
    let count = 0;
    let cartCount = 0;
    let currentImageIndex = 0;

    const images = [
        'image-product-1.jpg',
        'image-product-2.jpg',
        'image-product-3.jpg',
        'image-product-4.jpg'
    ];

    /* profilecontent.addEventListener('click',function(){
        profilecontentone.classList.toggle('profilecontenthidden');
        profilecontentone.classList.toggle('notprofilecontenthidden');
    });*/

    // Update the displayed price in the cart
    function updateCartPrice() {
        const totalPrice = pricePerItem * cartCount;
        if (cartCount > 0) {
            itemPriceElement.innerHTML = `$${pricePerItem.toFixed(2)} x ${cartCount}  <b>$${totalPrice.toFixed(2)}</b>`;
        }
    }

    plusButton.addEventListener('click', function() {
        count++;
        countElement.innerHTML = `<b>${count}</b>`;
    });

    minusButton.addEventListener('click', function() {
        if (count > 0) {
            count--;
            countElement.innerHTML = `<b>${count}</b>`;
        }
    });

    addToCartButton.addEventListener('click', function() {
        if (count > 0) { // Only add to cart if count is greater than 0
            cartCount += count;
            cartCountElement.textContent = cartCount;
            count = 0;
            countElement.innerHTML = `<b>${count}</b>`;
            itemincart.classList.remove('hiddenhide');
            itemincart.classList.add('nothiddenhide');
            updateCartPrice();
        }
    });

    plusButtonone.addEventListener('click', function() {
        count++;
        countElementone.innerHTML = `<b>${count}</b>`;
    });

    minusButtonone.addEventListener('click', function() {
        if (count > 0) {
            count--;
            countElementone.innerHTML = `<b>${count}</b>`;
        }
    });

    addToCartButtonone.addEventListener('click', function() {
        if (count > 0) { // Only add to cart if count is greater than 0
            cartCount += count;
            cartCountElement.textContent = cartCount;
            count = 0;
            countElementone.innerHTML = `<b>${count}</b>`;
            itemincart.classList.remove('hiddenhide');
            itemincart.classList.add('nothiddenhide');
            updateCartPrice();
        }
    });

    cart.addEventListener("click", () => {
        cartcontent.classList.toggle('hidden');
        cartcontent.classList.toggle('nothidden');
    });

    deletecart.addEventListener('click', function() {
        itemincart.classList.remove('nothiddenhide');
        itemincart.classList.add('hiddenhide');
        cartCount = 0;
        cartCountElement.textContent = cartCount;
        itemPriceElement.innerHTML = ''; // Clear the price display when cart is empty
    });

    hamburger.addEventListener("click", () => {
        hamburgercontent.classList.toggle('hiddenone');
        hamburgercontent.classList.toggle('nothiddenone');
    });

    cross.addEventListener("click", () => {
        hamburgercontent.classList.add('hiddenone');
        hamburgercontent.classList.remove('nothiddenone');
    });

    next.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgElement.src = images[currentImageIndex];
    });

    prev.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        imgElement.src = images[currentImageIndex];
    });

    const defaultImage = document.getElementById('image-default');
    const displayedImage = document.getElementById('displayed-image');
    displayedImage.src = defaultImage.src;

    document.querySelectorAll('.imghidden img').forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            const imgSrc = this.src;
            displayedImage.src = imgSrc;
            displayedImage.style.display = 'block';
        });
    });
});
