let names = ['Jocka', 'Mark', 'Nikola', 'Test', 'Test12', 'Lazar', 'Jovan'];

let evenNames = 0;

let i = 0;
while (i < names.length) {
    if (names[i].length % 2 === 0) {
        evenNames = names[i];
        console.log(evenNames);
    }
    i++;
}