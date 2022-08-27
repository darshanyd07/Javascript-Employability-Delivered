let repeatedDigitArray = new Array();

function checkPalindrome(number) {
    let reverseNumber = number.toString().split("").reverse();
    if (number == reverseNumber.join("")) {
        return true;
    }
    else {
        return false;
    }
}

for(let i = 0 ; i <= 100 ; i++){
    if(i > 10 && checkPalindrome(i))
        repeatedDigitArray.push(i);
}

console.log("The Reapeated Number Array is : " + repeatedDigitArray);