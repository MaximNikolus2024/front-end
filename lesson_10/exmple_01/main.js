

function doubleNumber(n) {
    n
};

function squareNumber(n = 1) {
    res = n * n
    return res;
}

function stringArg(name) {
    return "Привет!" + name;

};
console.log(stringArg("Maxim"));

const  firstFunct = (text) => { 
    const numberOfSymbols = text.length;
    return  text.length;
}
console.log(firstFunct);