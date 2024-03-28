function str_del()
{
    selection = window.getSelection().toString();
    console.log(selection);
    var str = document.getElementById("elem").textContent;
    var start = str.indexOf(selection);
    var end = start+  selection.length;
    var result = str.slice(0,start) + str.slice(end);
    console.log(result);
    document.getElementById("elem").textContent = result;
}
function getProperty(obj, property) {
    return obj[property];
}
function addProperty(obj, property, value) {
    obj[property] = value;
    return true;
}
function removeProperty(obj, property) {
    if (obj.hasOwnProperty(property)) {
        delete obj[property];
        return true;
    } else {
        return false;
    }
}
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
function getLengthOfWord(word) {
    return word.length;
}
function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
}
function isEven(num) {
    return num % 2 === 0;
}
function isGreaterThan(num1, num2) {
    return num1 > num2;
}
function isSameLength(word1, word2) {
    return word1.length === word2.length;
}
function isEvenAndGreaterThanTen(num) {
    return isEven(num) && num > 10;
}
function computeAreaOfATriangle(base, height) {
    return 0.5 * base * height;
}