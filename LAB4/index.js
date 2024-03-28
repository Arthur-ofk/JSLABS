function findMinLengthOfThreeWords(word1, word2, word3) {
    var minLength = Math.min(word1.length, word2.length, word3.length);
    console.log("Мінімальна довжина серед трьох слів:", minLength);
    return minLength;
}

console.log(findMinLengthOfThreeWords("apple", "banana", "orange"));

function filterOddElements(arr) {
    var filtered = arr.filter(function(num) {
        return num % 2 !== 0;
    });
    console.log("Масив з непарними числами:", filtered);
    return filtered;
}

console.log(filterOddElements([1, 2, 3, 4, 5]));

function getLengthOfShortestElement(arr) {
    if (arr.length === 0) return 0;
    var shortest = arr.reduce(function(acc, curr) {
        return curr.length < acc.length ? curr : acc;
    });
    console.log("Довжина найкоротшого слова:", shortest.length);
    return shortest.length;
}

console.log(getLengthOfShortestElement(["apple", "banana", "orange"]));

function joinArrayOfArrays(arr) {
    var flatArray = [].concat.apply([], arr);
    console.log("Плоский масив з усіма елементами:", flatArray);
    return flatArray;
}

console.log(joinArrayOfArrays([[1, 2], [3, 4], [5, 6]]));

function findSmallestNumberAmongMixedElements(arr) {
    var numbers = arr.filter(function(item) {
        return typeof item === 'number';
    });
    if (numbers.length === 0) return 0;
    var smallest = Math.min(...numbers);
    console.log("Найменше число у масиві:", smallest);
    return smallest;
}

console.log(findSmallestNumberAmongMixedElements([1, 'apple', 3, 'banana', 5]));

function computeSummationToN(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    console.log("Сума чисел від 0 до", n, ":", sum);
    return sum;
}

console.log(computeSummationToN(5));

function convertScoreToGrade(score) {
    if (score < 0 || score > 100) return 'INVALID SCORE';
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

console.log(convertScoreToGrade(85));

function getLongestOfThreeWords(word1, word2, word3) {
    var longest = "";
    if (word1.length >= word2.length && word1.length >= word3.length) {
        longest = word1;
    } else if (word2.length >= word1.length && word2.length >= word3.length) {
        longest = word2;
    } else {
        longest = word3;
    }
    console.log("Найдовше слово серед трьох:", longest);
    return longest;
}

console.log(getLongestOfThreeWords("apple", "banana", "orange"));

function multiply(a, b) {
    var product = 0;
    for (var i = 0; i < Math.abs(b); i++) {
        product += Math.abs(a);
    }
    if (a < 0 && b < 0 || a > 0 && b > 0) {
        console.log("Добуток чисел:", product);
        return product;
    } else {
        console.log("Добуток чисел:", -product);
        return -product;
    }
}

console.log(multiply(3, -4));

function computeSumBetween(num1, num2) {
    if (num2 < num1) {
        console.log("Сума між числами:", 0);
        return 0;
    }
    var sum = 0;
    for (var i = num1; i <= num2; i++) {
        sum += i;
    }
    console.log("Сума між числами:", sum);
    return sum;
}

console.log(computeSumBetween(1, 4));