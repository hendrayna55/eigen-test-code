const sentence = "Saya sangat senang mengerjakan soal algoritma";

const longest = (string) => {
    // Pecah kalimat menjadi array kata satu per satu
    const words = string.split(" ");

    // declare Variabel untuk menyimpan kata terpanjang
    let longestWord = "";

    // Iterasi semua kata
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
};

console.log(longest(sentence)); // Output: "mengerjakan"