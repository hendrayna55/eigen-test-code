const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];

// 
const diagonalDifference = (matrix) => {
    let n = matrix.length;
    let diagonal1 = 0;
    let diagonal2 = 0;

    for (let i = 0; i < n; i++) {
        diagonal1 += matrix[i][i];             // dari kiri atas ke kanan bawah
        diagonal2 += matrix[i][n - 1 - i];      // dari kanan atas ke kiri bawah
    }

    return Math.abs(diagonal1 - diagonal2);
};

console.log(diagonalDifference(matrix));