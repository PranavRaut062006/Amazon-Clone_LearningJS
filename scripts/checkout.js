import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
//import '../data/cart-oop.js';  // another syntax we can run all codes in the file 

//import '../data/cart-class.js';  // another syntax we can run all codes in the file 

// import '../data/backend-practice.js';

import { loadProducts } from "../data/products.js";

loadProducts(() => {
   renderOrderSummary();
   renderPaymentSummary();
});