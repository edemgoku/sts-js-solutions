let challenge = '30 Days Of JavaScript';

console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase());

console.log(challenge.toLowerCase());

console.log(challenge.substring(3));

console.log(challenge.slice(3));

console.log(challenge.includes('Script'));

console.log(challenge.split());

console.log(challenge.split(' ')); 

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', ')); 

console.log(challenge.replace('JavaScript', 'Python'));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(challenge.indexOf('J')));

console.log(challenge.indexOf('a'));

console.log(challenge.lastIndexOf('a'));

let sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.indexOf('because')); 

console.log(sentence.lastIndexOf('because'));

console.log(sentence.search('because'));

let trimmedString = ' 30 Days Of JavaScript ';
console.log(trimmedString.trim()); 

console.log(challenge.startsWith('30')); 

console.log(challenge.endsWith('JavaScript')); 

console.log(challenge.match(/a/g));

console.log('30 Days Of'.concat(' JavaScript')); 

console.log(challenge.repeat(2));