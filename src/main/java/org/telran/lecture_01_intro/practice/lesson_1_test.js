import {
  searchNumber, findMax, findMin, countEvenNumbers,
  sumOfArray, averageOfArray, hasDuplicates, findIndex,
  findSecondMax, countOccurrences, isPrime, isPalindrome,
  sumPositiveNegative, isSortedAscending, reverseArray, removeZeros
} from './lesson_1.js';
import { logTestCase,logTestCaseWithException } from '../../utils/common_util.js';

// searchNumber
function testSearchNumber() {
  console.log("🔍 Тестирование searchNumber:");
  logTestCase("Массив [1,2,3,4,5], число 3", searchNumber([1, 2, 3, 4, 5], 3), true);
  logTestCase("Массив [1,2,3,4,5], число 6", searchNumber([1, 2, 3, 4, 5], 6), false);
  logTestCaseWithException("Пустой массив", () => searchNumber([]), "Массив пуст");
  console.log();
}

// findMax
function testFindMax() {
  console.log("📈 Тестирование findMax:");
  logTestCase("Массив [1,2,3,4,5], число 5", findMax([1, 2, 3, 4, 5]), 5);
  logTestCase("Массив [-1,-2,-3,-4,-5], число -1", findMax([-1, -2, -3, -4, -5]), -1);
  logTestCaseWithException("Пустой массив", () => findMax([]), "Массив пуст");
  console.log();
}

// findMin
function testFindMin() {
  console.log("📉 Тестирование findMin:");
  logTestCase("Массив [1,2,3,4,5], число 1", findMin([1, 2, 3, 4, 5]), 1);
  logTestCase("Массив [-1,-2,-3,-4,-5], число -5", findMin([-1, -2, -3, -4, -5]), -5);
  logTestCaseWithException("Пустой массив", () => findMin([]), "Массив пуст");
  console.log();
}

// countEvenNumbers
function testCountEvenNumbers() {
  console.log("🧮 Тестирование countEvenNumbers:");
  logTestCase("Массив [1,2,3,4,5], число 2", countEvenNumbers([1, 2, 3, 4, 5]), 2);
  logTestCase("Массив [2,4,6,8,10], число 5", countEvenNumbers([2, 4, 6, 8, 10]), 5);
  logTestCaseWithException("Пустой массив", () => countEvenNumbers([]), "Массив пуст");
  console.log();
}

// sumOfArray
function testSumOfArray() {
  console.log("➕ Тестирование sumOfArray:");
  logTestCase("Массив [1,2,3,4,5], число 15", sumOfArray([1, 2, 3, 4, 5]), 15);
  logTestCase("Массив [-1,-2,-3,-4,-5], число -15", sumOfArray([-1, -2, -3, -4, -5]), -15);
  logTestCaseWithException("Пустой массив", () => sumOfArray([]), "Массив пуст");
  console.log();
}

// averageOfArray
function testAverageOfArray() {
  console.log("📊 Тестирование averageOfArray:");
  logTestCase("Массив [1,2,3,4,5], число 3", averageOfArray([1, 2, 3, 4, 5]), 3);
  logTestCase("Массив [10,20,30,40,50], число 30", averageOfArray([10, 20, 30, 40, 50]), 30);
  logTestCaseWithException("Пустой массив", () => averageOfArray([]), "Массив пуст");
  console.log();
}

// hasDuplicates
function testHasDuplicates() {
  console.log("🔁 Тестирование hasDuplicates:");
  logTestCase("Массив [1,2,3,4,5], дубликаты нет", hasDuplicates([1, 2, 3, 4, 5]), false);
  logTestCase("Массив [1,2,3,4,4], дубликаты есть", hasDuplicates([1, 2, 3, 4, 4]), true);
  logTestCaseWithException("Пустой массив", () => hasDuplicates([]), "Массив пуст");
  console.log();
}

// findIndex
function testFindIndex() {
  console.log("📍 Тестирование findIndex:");
  logTestCase("Массив [1,2,3,4,5], число 3, индекс 2", findIndex([1, 2, 3, 4, 5], 3), 2);
  logTestCase("Массив [1,2,3,4,5], число 6, не найдено", findIndex([1, 2, 3, 4, 5], 6), -1);
  logTestCase("Пустой массив, число 1, не найдено", findIndex([], 1), -1);
  console.log();
}

// findSecondMax
function testFindSecondMax() {
  console.log("🥈 Тестирование findSecondMax:");
  logTestCase("Массив [1,2,3,4,5], число 4", findSecondMax([1, 2, 3, 4, 5]), 4);
  logTestCase("Массив [5,4,3,2], число 4", findSecondMax([5, 4, 3, 2]), 4);
  logTestCaseWithException("Массив [1], массив мал", () => findSecondMax([1]), "Массив слишком мал");
  console.log();
}

// countOccurrences
function testCountOccurrences() {
  console.log("🔢 Тестирование countOccurrences:");
  logTestCase("Массив [1,2,3,4,5,3,3], число 3, количество 3", countOccurrences([1, 2, 3, 4, 5, 3, 3], 3), 3);
  logTestCase("Массив [1,2,3,4,5], число 6, количество 0", countOccurrences([1, 2, 3, 4, 5], 6), 0);
  logTestCaseWithException("Пустой массив, число 1, пуст", () => countOccurrences([], 1), "Массив пуст");
  console.log();
}

// isPrime
function testIsPrime() {
  console.log("🧪 Тестирование isPrime:");
  logTestCase("Число 5", isPrime(5), true);
  logTestCase("Число 4", isPrime(4), false);
  logTestCase("Число 1", isPrime(1), false);
  console.log();
}

function testIsPalindrome() {
    console.log("🔍 Тестирование isPalindrome:");

    // Тест для строки, которая является палиндромом
    logTestCase("Строка 'madam'", isPalindrome("madam"), true);

    // Тест для строки, которая не является палиндромом
    logTestCase("Строка 'hello'", isPalindrome("hello"), false);

    // Тест для пустой строки
    logTestCase("Пустая строка", isPalindrome(""), true);

    // Тест для строки с одним символом
    logTestCase("Строка 'a'", isPalindrome("a"), true);

    // Тест для строки с пробелами и знаками препинания
    logTestCase("Строка 'A man, a plan, a canal: Panama'", isPalindrome("A man, a plan, a canal: Panama"), false);

    // Тест для строки с разными регистрами
    logTestCase("Строка 'Madam'", isPalindrome("Madam"), false);

    console.log();
}

function testIsSortedAscending() {
    console.log("🔍 Тестирование isSortedAscending:");

    // Тест для отсортированного массива
    logTestCase("Массив [1, 2, 3, 4, 5]", isSortedAscending([1, 2, 3, 4, 5]), true);

    // Тест для неотсортированного массива
    logTestCase("Массив [5, 2, 3, 1, 4]", isSortedAscending([5, 2, 3, 1, 4]), false);

    console.log();
}

function testReverseArray() {
    console.log("🔍 Тестирование reverseArray:");

    // Тест для массива
    logTestCase("Массив [1, 2, 3, 4, 5]", JSON.stringify(reverseArray([1, 2, 3, 4, 5])), JSON.stringify([5, 4, 3, 2, 1]));

    console.log();
}

function testRemoveZeros() {
    console.log("🔍 Тестирование removeZeros:");

    // Тест для массива с нулями
    logTestCase("Массив [1, 0, 2, 0, 3]", JSON.stringify(removeZeros([1, 0, 2, 0, 3])), JSON.stringify([1, 2, 3]));

    console.log();
}

// Запуск всех тестов
testSearchNumber();
testFindMax();
testFindMin();
testCountEvenNumbers();
testSumOfArray();
testAverageOfArray();
testHasDuplicates();
testFindIndex();
testFindSecondMax();
testCountOccurrences();
testIsPrime();
testIsPalindrome();
testIsSortedAscending();
testReverseArray();
testRemoveZeros();