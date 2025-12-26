export const cart = [];  // this var can use outside cart.js


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
         quantity : 1
      });
   }
}