//import {cart as Mycart} from '../data/cart.js';  // can change the name
import {cart , addToCart} from '../data/cart.js';  // take the cart var from cart.js 
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';


let productsHTML = '';
//products variable is comming from data/products.js
products.forEach((product)=> {
   productsHTML += ` 
      <div class="product-container">
         <div class="product-image-container">
         <img class="product-image"
            src="${product.image}">
         </div>

         <div class="product-name limit-text-to-2-lines">
            ${product.name}
         </div>

         <div class="product-rating-container">
         <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
         <div class="product-rating-count link-primary">
            ${product.rating.count}
         </div>
         </div>

         <div class="product-price">
         $${formatCurrency(product.priceCents / 100)}  
         </div>

         <div class="product-quantity-container">
         <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
         </select>
         </div>

         <div class="product-spacer"></div>

         <div class="added-to-cart">
         <img src="images/icons/checkmark.png">
         Added
         </div>

         <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
         Add to Cart
         </button>
      </div>
   `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity(){
   let cartQuantity = 0;
   cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
   });

   document.querySelector('.js-cart-quantity')
      .innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
   .forEach((button) => {
      button.addEventListener('click', () => {
         const productId = button.dataset.productId;  // data-product-name conveted to dataset.productName

         addToCart(productId);
         updateCartQuantity();           
      });
   });

// .toFixed(2) means show 2 decimal places after.

//Data attribute -> 
   /*
   just another HTML attribute
   allows us to attach any info to an element   
   data-product-name is example of data attribute
   */

//dataset property gives all the data attributes that are attached -> here kabab case is converted to Camel case 

/*
use of scripts can cause to naming conflicts 
the cart is used in the cart.js so we can't use in other file 
for solving that we use modules -
   It contains a variable in that file 
*/

// Some more about modules
/*
   import * as cartModules from '../data/cart.js';
   cartModules.cart 
   cartModules.addToCart(id);
*/