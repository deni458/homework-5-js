let names = ['Jocka', 'Mark', 'Nikola', 'Test', 'Test12', 'Lazar', 'Jovan'];

let i = 0;
while (i < names.length) {
    if (names[i].length % 2 === 0) {
        console.log(names[i]);
    }
    i++;
}
