export default function reverseString(string) {
    const stringArray = string.split("");
    const reversedStringArray = stringArray.reverse();
    const reversedString = reversedStringArray.join("");

    return reversedString;
}
