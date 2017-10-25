var a = prompt('Enter the first number'),
    b = prompt('Enter the second number'),
    value;

value = (a * a) - (2 * a * b) + (b * b);

console.log('The value is: ' + value);

if (value > 0) {
    console.log('wynik dodatni');
} else if (value < 0) {
    console.log('wynik ujemny');
} else {
    console.log('wynik równy zero');
}