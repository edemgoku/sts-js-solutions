// 1. 
let base = prompt("Enter base: 20 ");
let height = prompt("Enter height: 10 ");
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

// 2. 
let a = prompt("Enter side a:5 ");
let b = prompt("Enter side b:4");
let c = prompt("Enter side c:3 ");
let perimeter = parseFloat(a) + parseFloat(b) + parseFloat(c);
console.log(`The perimeter of the triangle is ${perimeter}`);

// 3. 
let length = prompt("Enter length: ");
let width = prompt("Enter width: ");
console.log(`Area: ${length * width}`);
console.log(`Perimeter: ${2 * (parseFloat(length) + parseFloat(width))}`);

// 4. 
let radius = prompt("Enter radius: ");
console.log(`Area: ${3.14 * radius * radius}`);
console.log(`Circumference: ${2 * 3.14 * radius}`);

// 5. 
let slope = 2;
console.log(`Slope: ${slope}`);

// 6. 
let slope2 = (10 - 2) / (6 - 2);
console.log(`Slope: ${slope2}`);

// 7. 
console.log(slope === slope2); // Check if both slopes are equal

// 8. 
let x1 = -3; 
console.log(`When x = ${x1}, y is 0`);

// 9. 
let hours = prompt("Enter hours: ");
let rate = prompt("Enter rate per hour: ");
console.log(`Your weekly earning is ${hours * rate}`);

// 10. 
let firstName = "Asabeneh";
let lastName = "Yetayeh";
if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName}, is longer than your family name, ${lastName}`);
}

// 11. 
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);

// 12. 
let birthYear = prompt("Enter birth year: ");
let age = new Date().getFullYear() - birthYear;
if (age >= 18) {
  console.log(`You are ${age}. You are old enough to drive.`);
} else {
  console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
}

// 13. 
let yearsLived = prompt("Enter number of years you lived: ");
console.log(`You lived ${yearsLived * 365 * 24 * 60 * 60} seconds.`);

// 14. 
console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`);
console.log(`${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
