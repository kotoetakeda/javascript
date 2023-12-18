document.getElementById('heading').innerHTML = "Whats up";

let result;
let x = 3;
let y = 5;
document.getElementById('x').innerHTML = x;
document.getElementById('y').innerHTML = y;

function display(x, y, callback) {
    switch(callback) {
        case ('add'):
            result = add(x, y);
            break;
        case ('multiply'):
            result = multiply(x, y);
            break;
        default:
            result = NaN;
    }
    return result;
}
function add(x, y) {
    // let x1 = parseInt(document.getElementById(x).innerHTML, 10);
    // let y1 = parseInt(document.getElementById(y).innerHTML, 10);
    return x + y;
}

function multiply(x, y) {
    // let x1 = parseInt(document.getElementById(x).innerHTML, 10);
    // let y1 = parseInt(document.getElementById(y).innerHTML, 10);
    return x * y;
}