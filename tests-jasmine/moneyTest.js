// SAME AS THE MONEYTEST.JS CREATED BEFORE BUT THIS TIME CREATED WITH HELP OF JASMINE
import {formatCurrency} from '../scripts/utils/money.js';

// provided by jasmine we give it name of test suite , it() is also provided by jasmine 
describe('test suite: formatCurrency' , () => {
   it('convert cents to dollars' , () => {
      expect(formatCurrency(2095)).toEqual('20.95');  // compare val , 
   });
   it('work with zero' , () => {
      expect(formatCurrency(0)).toEqual('0.00');
   });
   it('round up to nearest cent' , () => {
      expect(formatCurrency(2000.5)).toEqual('20.01');
   });
}); 




