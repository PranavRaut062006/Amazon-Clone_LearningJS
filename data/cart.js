// this var can use outside cart.js
export let cart;
//use JSON.parse() for convert back 

loadFromStorage();

export function loadFromStorage() {
   cart = JSON.parse(localStorage.getItem('cart')); 
   if(!cart) {
   cart = [
   // adding some default values to make work easy leter remove them
         {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId : '1'
         },{
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId : '2'
         }
      ]; 
   }
}
 

function saveToStorage() {
   //localStorage only takes strings so convert wih JSON.stringify
   localStorage.setItem('cart' , JSON.stringify(cart));
}

export function addToCart(productId){
   // check the product is already there or not (for that loop)
   let matchingItem;
   cart.forEach((cartItem) => {
      if(productId === cartItem.productId) {
         matchingItem = cartItem;
      }
   });
   
   if(matchingItem) {
      matchingItem.quantity+=1;
   } else {
      cart.push({
         productId : productId,
         quantity : 1,
         deliveryOptionId : '1'
      });
   }

   saveToStorage();
}

//function for removing product from cart
export function removeFromCart(productId)  {
//create new array,loop through cart add each product in new array except from productId
   const newCart = [];
   cart.forEach((cartItem) => {
      if(cartItem.productId !== productId){
         newCart.push(cartItem);
      }
   });

   cart = newCart;
   saveToStorage();
}

export function updateDeliveryOption(productId , deliveryOptionId) {
   let matchingItem;
   cart.forEach((cartItem) => {
      if(productId === cartItem.productId) {
         matchingItem = cartItem;
      }
   });

   matchingItem.deliveryOptionId = deliveryOptionId;

   saveToStorage();
}