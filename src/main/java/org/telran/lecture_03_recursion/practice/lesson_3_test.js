import {
  sumToN, factorial, countOccurrences, fibonacci, findMax, flattenArray, power, 
  reverseString, sumDigits, countNestedElements
} from './lesson_3.js';
import { logTestCase, logTestCaseWithException } from '../../utils/common_util.js';

// Тестирование sumToN
function testSumToN() {
    console.log("🔢 Тестирование sumToN:");
    logTestCase("Сумма от 1 до 5", sumToN(5), 15);
    logTestCase("Сумма от 1 до 1", sumToN(1), 1);
    logTestCase("Сумма от 1 до 0", sumToN(0), 0);
    logTestCase("Сумма от 1 до 10", sumToN(10), 55);
    console.log();
}

// Тестирование factorial
function testFactorial() {
    console.log("✖️ Тестирование factorial:");
    logTestCase("Факториал 0", factorial(0), 1);
    logTestCase("Факториал 1", factorial(1), 1);
    logTestCase("Факториал 5", factorial(5), 120);
    logTestCase("Факториал 4", factorial(4), 24);
    console.log();
}

// Тестирование reverseString
function testReverseString() {
    console.log("🔄 Тестирование reverseString:");
    logTestCase("Строка 'hello'", reverseString("hello"), "olleh");
    logTestCase("Строка 'a'", reverseString("a"), "a");
    logTestCase("Строка ''", reverseString(""), "");
    logTestCase("Строка 'recursion'", reverseString("recursion"), "noisrucer");
    console.log();
}

// Тестирование fibonacci
function testFibonacci() {
    console.log("🌀 Тестирование fibonacci:");
    logTestCase("Фибоначчи 0", fibonacci(0), 0);
    logTestCase("Фибоначчи 1", fibonacci(1), 1);
    logTestCase("Фибоначчи 5", fibonacci(5), 5);
    logTestCase("Фибоначчи 8", fibonacci(8), 21);
    logTestCase("Фибоначчи 10", fibonacci(10), 55);
    console.log();
}

// Тестирование countNestedElements
function testCountNestedElements() {
    console.log("📊 Тестирование countNestedElements:");
    logTestCase("Массив [1, [2, 3], [4, [5, 6]], 7]", countNestedElements([1, [2, 3], [4, [5, 6]], 7]), 7);
    logTestCase("Массив [1, 2, 3]", countNestedElements([1, 2, 3]), 3);
    logTestCase("Массив [[1, 2], [3, 4]]", countNestedElements([[1, 2], [3, 4]]), 4);
    logTestCase("Пустой массив", countNestedElements([]), 0);
    console.log();
}

// Тестирование flattenArray
function testFlattenArray() {
    console.log("📋 Тестирование flattenArray:");
    logTestCase("Массив [1, [2, [3, 4]], 5]", flattenArray([1, [2, [3, 4]], 5]), [1, 2, 3, 4, 5]);
    logTestCase("Массив [1, 2, 3]", flattenArray([1, 2, 3]), [1, 2, 3]);
    logTestCase("Массив [[1, 2], [3, 4]]", flattenArray([[1, 2], [3, 4]]), [1, 2, 3, 4]);
    logTestCase("Пустой массив", flattenArray([]), []);
    console.log();
}

// Тестирование countOccurrences
function testCountOccurrences() {
    console.log("🔍 Тестирование countOccurrences:");
    logTestCase("Символ 'l' в строке 'hello'", countOccurrences("hello", "l"), 2);
    logTestCase("Символ 'a' в строке 'banana'", countOccurrences("banana", "a"), 3);
    logTestCase("Символ 'x' в строке 'hello'", countOccurrences("hello", "x"), 0);
    logTestCase("Символ 'o' в пустой строке", countOccurrences("", "o"), 0);
    console.log();
}

// Тестирование sumDigits
function testSumDigits() {
    console.log("🔢 Тестирование sumDigits:");
    logTestCase("Число 123", sumDigits(123), 6);
    logTestCase("Число 9", sumDigits(9), 9);
    logTestCase("Число 999", sumDigits(999), 27);
    logTestCase("Число 1000", sumDigits(1000), 1);
    console.log();
}

// Тестирование findMax
function testFindMax() {
    console.log("📈 Тестирование findMax:");
    logTestCase("Массив [1, 5, 3, 9, 2]", findMax([1, 5, 3, 9, 2]), 9);
    logTestCase("Массив [10]", findMax([10]), 10);
    logTestCase("Массив [-1, -5, -3]", findMax([-1, -5, -3]), -1);
    logTestCase("Массив [7, 7, 7]", findMax([7, 7, 7]), 7);
    console.log();
}

// Тестирование power
function testPower() {
    console.log("⚡ Тестирование power:");
    logTestCase("2 в степени 3", power(2, 3), 8);
    logTestCase("5 в степени 0", power(5, 0), 1);
    logTestCase("3 в степени 4", power(3, 4), 81);
    logTestCase("10 в степени 2", power(10, 2), 100);
    console.log();
}

// Запуск всех тестов
function runAllTests() {
    console.log("🚀 Запуск тестов рекурсивных функций\n");
    
    testSumToN();
    testFactorial();
    testReverseString();
    testFibonacci();
    testCountNestedElements();
    testFlattenArray();
    testCountOccurrences();
    testSumDigits();
    testFindMax();
    testPower();
    
    console.log("🎯 Тестирование завершено!");
}

runAllTests();