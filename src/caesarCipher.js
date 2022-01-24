export default function caesarCipher(key, message) {
    const messageArray = message.split("");

    const encryptedMessageArray = messageArray.map((char) => {
        if (isLetter(char)) {
            return encryptLetter(key, char);
        } else if (isNumber(char)) {
            return encryptNumber(key, char);
        } else {
            return char;
        }
    });

    const encryptedMessage = encryptedMessageArray.join("");
    return encryptedMessage;
}

function encryptLetter(key, char) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // ensure shift value is within 0 - 26
    const shiftValue = Math.abs(key % 26);

    // check if letter is upper or lower case
    let charIsLower = char.charCodeAt(0) > 90 ? true : false;

    // ensure we are working with uppercase char
    const parsedChar = char.toUpperCase();

    // encrypt the letter
    const charIndex = alphabet.indexOf(parsedChar);
    const newCharIndex = (charIndex + shiftValue) % 26;
    let newChar = alphabet[newCharIndex];

    // make sure new char is lower case if old char was lower case
    newChar = charIsLower ? newChar.toLowerCase() : newChar;

    return newChar;
}

function encryptNumber(key, digit) {
    const digits = "0123456789";

    // ensure shift value is within 0 - 9
    const shiftValue = Math.abs(key % 10);

    // encrypt the digit
    const digitIndex = digits.indexOf(digit);
    const newDigitIndex = (digitIndex + shiftValue) % 10;
    const newDigit = digits[newDigitIndex];

    return newDigit;
}

function isLetter(char) {
    return /[a-zA-Z]/.test(char);
}

function isNumber(num) {
    return /[0-9]/.test(num);
}
