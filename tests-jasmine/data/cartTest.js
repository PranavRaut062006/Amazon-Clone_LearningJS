import {addToCart, cart , loadFromStorage} from '../../data/cart.js';

describe('test suite: addToCart' , () => {
   it('adds an existing product to the cart' , () => {
      spyOn(localStorage, 'setItem');

      spyOn(localStorage , 'getItem').and.callFake(() => {
         return JSON.stringify([{
            productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity : 1,
            deliveryOptionId : '1'
         }]);
      });
      loadFromStorage();  

      addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart[0].productId).toEqual ('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(2);
   });
   it('adds a new product in cart' , () => {
      spyOn(localStorage, 'setItem');

      spyOn(localStorage , 'getItem').and.callFake(() => {
         //what we want to do with fake item
         return JSON.stringify([]);
      });
      loadFromStorage();   

      addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(1);
   });
});

// For removing a flaky test - (test that some times pass and sometimes fails even we don't change the code)
//we use Mocks (feature of jasmine) 
// mock -> lets us replace a method with a fake version 
// then we can make fake version to anything we want

/**
 spyOn() creates a mock 
 gives a object so we can use property and , callFake() 
 */