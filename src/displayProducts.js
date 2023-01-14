import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (products, element) => {
    //display products
    element.innerHTML = products.map((product) => {
        const { id, name, image, price } = product;
        return `<article article class="product" >
          <div class="product-container">
            <img class="product-img img"
             src="${image}" 
             alt="${name}">
            <div class="product-icons">
              <a class="product-icon" href="product.html?id=${id}">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}" type="button">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">9.99 €</h4>
          </footer>
        </article >`;
    }).join('');
};

export default display;
