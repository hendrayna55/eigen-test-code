const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];

// fungsi untuk membaca input oleh query
const countOccurrences = (input, query) => {
    return query.map(q => {
        // filtering word
        return input.filter(word => word === q).length;
    });
};

const output = countOccurrences(input, query);
console.log(output);