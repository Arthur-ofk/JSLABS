//  Обчислення площі прямокутника за довжиною та шириною
function computeAreaOfARectangle(length, width) {
    return length * width;
  }
  
  console.log(computeAreaOfARectangle(4, 5)); // Приклад виклику для довжини 4 та ширини 5
  
  // Розрахунок площі кола за його радіусом
  function computeAreaOfACircle(radius) {
    return Math.PI * radius * radius;
  }
  
  console.log(computeAreaOfACircle(5)); // Приклад виклику для радіусу 5
  
  //  Піднесення числа до заданої експоненти
  function computePower(number, exponent) {
    return Math.pow(number, exponent);
  }
  
  console.log(computePower(2, 3)); // Приклад виклику для числа 2 та експоненти 3
  
  //  Обчислення квадратного кореня числа
  function computeSquareRoot(number) {
    return Math.sqrt(number);
  }
  
  console.log(computeSquareRoot(25)); // Приклад виклику для числа 25
  
  // Обчислення суми букв у трьох словах
  function getLengthOfThreeWords(word1, word2, word3) {
    return word1.length + word2.length + word3.length;
  }
  
  console.log(getLengthOfThreeWords("apple", "banana", "cherry")); // Приклад виклику для слів "apple", "banana", "cherry"
  
  //  Об'єднання двох масивів
  function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(joinArrays([1, 2, 3], [4, 5, 6])); // Приклад виклику для масивів [1, 2, 3] та [4, 5, 6]
  
  //  Обчислення добутку елементів масиву за заданим ключем об'єкта
  function getProductOfAllElementsAtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key].length === 0) {
      return 0;
    }
    
    return obj[key].reduce((acc, curr) => acc * curr, 1);
  }
  
  const sampleObj = { values: [2, 3, 4] };
  console.log(getProductOfAllElementsAtProperty(sampleObj, 'values')); // Приклад виклику з об'єктом та ключем
  
  //  Сума цифр числа
  function sumDigits(number) {
    const digits = Math.abs(number).toString().split('').map(Number);
    return digits.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sumDigits(123)); // Приклад виклику для числа 123
  
  //  Пошук найкоротшого слова серед чисел та слів
  function findShortestWordAmongMixedElements(arr) {
    const words = arr.filter(item => typeof item === 'string');
    if (words.length === 0) return '';
    return words.reduce((shortest, current) => current.length < shortest.length ? current : shortest, words[0]);
  }
  
  console.log(findShortestWordAmongMixedElements([4, 'two', 2, "three"])); // Приклад виклику для масиву [4, 'two', 2, "three"]
  
  //  Пошук найменшого числа серед чисел та слів
  function findSmallestNumberAmongMixedElements(arr) {
    const numbers = arr.filter(item => typeof item === 'number');
    if (numbers.length === 0) return '';
    return Math.min(...numbers);
  }
  
  console.log(findSmallestNumberAmongMixedElements([4, 'two', 2, "three"])); // Приклад виклику для масиву [4, 'two', 2, "three"]
  
  //  Обчислення залишку ділення
  function modulo(dividend, divisor) {
    if (divisor === 0) return NaN;
    return dividend - Math.floor(dividend / divisor) * divisor;
  }
  
  console.log(modulo(10, 3)); // Приклад виклику для ділення 10 на 3
  
  //  Перевертання кожного фрагменту з п символів у рядку
  function reverseEveryOtherSubstring(str, p) {
    let result = '';
    for (let i = 0; i < str.length; i += p) {
      const substring = str.slice(i, i + p);
      if (i / p % 2 === 0) {
        result += substring;
      } else {
        result += substring.split('').reverse().join('');
      }
    }
    return result;
  }
  
  console.log(reverseEveryOtherSubstring("abcdefg", 2)); // Приклад виклику для рядка "abcdefg" та числа p = 2
  
  //  Знаходження єдиного парного або непарного числа
  function findUniqueEvenOrOddNumber(arr) {
    const evens = arr.filter(num => num % 2 === 0);
    const odds = arr.filter(num => num % 2 !== 0);
    return evens.length === 1 ? evens[0] : odds[0];
  }
  
  console.log(findUniqueEvenOrOddNumber([1, 2, 3, 4, 5])); // Приклад виклику для масиву [1, 2, 3, 4, 5]
  
  //  Пошук пари чисел, що дає задану суму
  function findPairWithSum(arr, sum) {
    const pairs = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === sum) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
    return pairs;
  }
  
  console.log(findPairWithSum([1, 2, 3, 4, 5], 7)); // Приклад виклику для масиву [1, 2, 3, 4, 5] та суми 7
  
  //  Перевірка на дзеркальність двох рядків
  function areStringsMirrorImages(str1, str2) {
    return str1 === str2.split('').reverse().join('');
  }
  
  console.log(areStringsMirrorImages("hello", "olleh")); // Приклад виклику для рядків "hello" та "olleh"
  
  // Реалізація бінарного пошуку
  function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1; // Якщо елемент не знайдено
  }
  
  const sortedArray = [1, 3, 5, 7, 9];
  console.log(binarySearch(sortedArray, 5)); // Приклад виклику для відсортованого масиву та шуканого числа 5
  
  //  Перевірка, чи є рядок ізограмою
  function isIsogram(str) {
    const letters = {};
    for (const char of str.toLowerCase()) {
      if (letters[char]) {
        return false;
      }
      letters[char] = true;
    }
    return true;
  }
  
  console.log(isIsogram("hello")); // Приклад виклику для рядка "hello"
  
  //  Перевірка, чи є рядок паліндромом
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  console.log(isPalindrome("madam")); // Приклад виклику для рядка "madam"