/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// Built-in:
function reverseString(text) {
    // return text.split('').reverse().join('');
    return [...text].reverse().join('');
}


// // For-Loop:
function reverseString(text) {
    let res = ''

    for (let char of text) {
        res = char + res
    }
    return res;
}

// // Recursive: 
function reverseString(text) {
    if (text === '') {
        return ''
    } else {
        return reverseString(text.slice(1)) + text[0]
    }
}

// Reduce:
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}




module.exports = reverseString