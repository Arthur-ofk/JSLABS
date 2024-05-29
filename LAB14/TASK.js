// 1
function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    }
}

upperCase('regexp');
upperCase('RegExp');

// 2
function checkEmail(email) {
    const regex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    console.log(regex.test(email));
}

checkEmail("Qmail2@gmail.com");

// 3
const text = "cdbBdbsbz";
const pattern = /d(b+)d/gi;
const result = text.match(pattern);
console.log(result);

// 4
const str = "Java Script";
const replaced = str.replace(/(\w+)\s(\w+)/, '$2, $1');
console.log(replaced);

// 5
function validateCreditCard(cardNumber) {
    const regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    console.log(regex.test(cardNumber));
}

validateCreditCard('9999-9999-9999-9999');

// 6
function checkEmailAdvanced(email) {
    const regex = /^[A-Za-z0-9](?:[A-Za-z0-9._-]*[A-Za-z0-9])?@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    console.log(regex.test(email) ? 'Email is correct!' : 'Email is not correct!');
}

checkEmailAdvanced('my_mail@gmail.com');
checkEmailAdvanced('#my_mail@gmail.com');
checkEmailAdvanced('my_ma--il@gmail.com');

// 7
function checkLogin(login) {
    const regex = /\d+(\.\d+)?/g;
    const numbers = login.match(regex);
    const isValidLength = login.length >= 2 && login.length <= 10;
    const isValidStart = !/^\d/.test(login);

    console.log(`Login is valid: ${isValidLength && isValidStart}`);
    console.log(`Numbers found: ${numbers}`);
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');