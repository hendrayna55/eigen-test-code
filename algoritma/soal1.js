const string = "NEGIE1";

// Memisahkan huruf dan angka
let letter = string.match(/[A-Za-z]/g);
let digits = string.match(/\d+/g);

// Reverse letter
let reversedLetter = letter.reverse().join("");

// Gabungkan kembali huruf yang direverse dengan digit di akhir
let result = reversedLetter + (digits ? digits.join("") : "");

console.log(result);
