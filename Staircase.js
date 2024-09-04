function staircase(n) {
    // Write your code here
    for (let i = 0; i < n; i++) {
        let simbolo = '';

        for (let j = 0; j < n - i - 1; j++) {
            simbolo += ' ';
        }
        for (let k = 0; k <= i; k++) {
            simbolo += '#';
        }
        console.log(simbolo);
    }
}
