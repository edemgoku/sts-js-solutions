// 1.
let firstName = "Gideon";
let lastName = "Goku";
let country = "Ghana";
let city = "Accra";
let age = 28;
let isMarried = false;
let year = 2025;

console.log(typeof firstName);  
console.log(typeof age);        
console.log(typeof isMarried);  
console.log(typeof year);      

// 2. 
console.log(typeof '10' === typeof 10);
console.log(Number('10') === 10); 

// 3.
console.log(parseInt('9.8') === 10); 
console.log(Math.round(parseFloat('9.8')) === 10); 

// 4. 
console.log(1);
console.log("Hello");
console.log([]); 

// 5. 
console.log(0);
console.log("");
console.log(null);

// 6. 
console.log(4 > 3);    
console.log(4 >= 3);   
console.log(4 < 3);    
console.log(4 <= 3);   
console.log(4 == 4);   
console.log(4 === 4);  
console.log(4 != 4);   
console.log(4 !== 4);  
console.log(4 != '4'); 
console.log(4 == '4'); 
console.log(4 === '4');

// 7. 
console.log("python".length !== "jargon".length); 

// 8. 
console.log(4 > 3 && 10 < 12);  
console.log(4 > 3 && 10 > 12);  
console.log(4 > 3 || 10 < 12);  
console.log(4 > 3 || 10 > 12);  
console.log(!(4 > 3));          
console.log(!(4 < 3));          
console.log(!(false));          
console.log(!(4 > 3 && 10 < 12));  
console.log(!(4 > 3 && 10 > 12));  
console.log(!(4 === '4'));       

// 9. 
console.log("dragon".includes("on") && "python".includes("on")); 

// 10. 
const now = new Date();
console.log(now.getFullYear());  
console.log(now.getMonth() + 1); 
console.log(now.getDate());      
console.log(now.getDay());       
console.log(now.getHours());     
console.log(now.getMinutes());   
console.log(Math.floor(now.getTime() / 1000)); 