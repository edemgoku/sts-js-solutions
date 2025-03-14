let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let day = String(now.getDate()).padStart(2, '0');
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
