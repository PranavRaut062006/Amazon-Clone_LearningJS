// this var can use outside cart.js
export const cart = [
   // adding some default values to make work easy leter remove them
   {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
   },
   {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1
   }
];  


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