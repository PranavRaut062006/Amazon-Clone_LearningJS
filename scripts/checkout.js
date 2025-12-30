import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
//import '../data/cart-oop.js';  // another syntax we can run all codes in the file 

//import '../data/cart-class.js';  // another syntax we can run all codes in the file 

// import '../data/backend-practice.js';

import { loadProducts , loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//async makes function return a promise
async function loadPage(){

   await loadProductsFetch();  // await let's us write asynchronous code like normal code
   // we can only use await if we are in async function

   const value = await new Promise((resolve) => {
         loadCart(() => {
            resolve('value3');
         });
      });

   renderOrderSummary();
   renderPaymentSummary();
   //return 'value2'; // this get converted to resolve 'value2
}
loadPage();

/*
Promise.all([
   //    new Promise((resolve) => {
   //    loadProducts(() => {
   //       resolve('value1');  //lets us control when to go the next step
   //    });
   // })
   loadProductsFetch()
   ,
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
*/

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

/*
   fetch is a better way to make HTTP requests

   async await = even better way to handle asynchronous code 
   await - let's wait for a promise to finish
*/