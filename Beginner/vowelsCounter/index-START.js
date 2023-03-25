/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// FASTER: built-in: match with RegEx
function vowelsCounter(text) {
    let matchingInstances = text.match(/[aeiou]/gi)

    return matchingInstances ? matchingInstances.length : 0
}

// iterative:
function vowelsCounter(text) {
    const vowels = ["a", "e", "i", "o", "u"]

    let counter = 0;

    for (let char of text.toLowerCase()) {
        if (vowels.includes(char)) {
            counter++
        }
    }

    return counter
}


module.exports = vowelsCounter;
