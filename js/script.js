var a = prompt('Enter the first number');
var b = prompt('Enter the second number');
var value;

value = (a * a) - (2 * a * b) + (b * b);

console.log('The value is: ' + value);

if (value == 0) {
    console.log('wynik równy zero');
} else {
    value > 0 ? console.log('wynik dodatni') : console.log('wynik ujemny');
}
