// FASTEST:
// REDUCE()
function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc);
}

// NEXT FASTEST: USING A FOR..OF LOOP IN ES6
function reverseString(text) {
    let result = "";
    for (let char of text) {
        result = char + result
    }
    return result;
}

// RECURSIVE METHOD
function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}

//  SLOWEST: CHAINING BUILT-IN METHODS USING ES6
function reverseString(text) {
    return [...text].reverse().join('');
}



