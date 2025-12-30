import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
//import '../data/cart-oop.js';  // another syntax we can run all codes in the file 

//import '../data/cart-class.js';  // another syntax we can run all codes in the file 

// import '../data/backend-practice.js';

import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

Promise.all([
      new Promise((resolve) => {
      loadProducts(() => {
         resolve('value1');  //lets us control when to go the next step
      });
   }),
      new Promise((resolve) => {
         loadCart(() => {
            resolve();
         });
      })

]).then((values) => {
   console.log(values);
   renderOrderSummary();
   renderPaymentSummary();
});

/*
new Promise((resolve) => {
   loadProducts(() => {
      resolve('value1');  //lets us control when to go the next step
   });

}).then((value) => {
   console.log(value);
   // renderOrderSummary();
   // renderPaymentSummary();
   return new Promise((resolve) => {
      loadCart(() => {
         resolve();
      });
   });
   
}).then(() => {
   renderOrderSummary();
   renderPaymentSummary();
});
*/

/* 
loadProducts(() => {
   loadCart(() => {
      renderOrderSummary();
      renderPaymentSummary();
   });
});
*/ 

/*
multiple callback cause lot nesting so we use promises
Promises 
   -better way to handle asynchrounous code 
   -similar to done() function 
   -let us wait for some code to finish before going to the next step
   -Promise creates seperate thread

   -Promise.all() lets us run multiple promises at the same time -> we give it array of promises
*/