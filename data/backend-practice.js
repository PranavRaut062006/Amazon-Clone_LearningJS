// XMLHttpRequest => This is a built-in class (provided by JavaScript)
const xhr = new XMLHttpRequest();

//this is waiting for response
xhr.addEventListener('load', () => {
   console.log(xhr.response);
});
xhr.open('GET','https://supersimplebackend.dev');  
// xhr.open('GET','https://supersimplebackend.dev/not-supported');  
//give two parameter1)what type of http msg2)Where to send this HTTP msg
// 'GET' means get some info from backend -> POST,PUT,DELETE
//URL -> Uniform Resource Locator    

// s after HTTP means secured HTTP 
xhr.send();  //sends this msg accross internet  



/*
different url different response 
like -> https://supersimplebackend.dev/hello

status Code -> starts with 4 (our problem) eg.400 , 404 . starts with 5(Backend problem) eg.500
starts with 2 means succeeeded eg.200 , 201 , 204 

list of all url paths supported is called backend API->Application programming interface(how we interact with something)
backend can respond with different types of data 1.text 2.HTML 3.Image
 */
