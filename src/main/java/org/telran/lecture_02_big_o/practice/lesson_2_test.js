import {
  getValueByIndex, calcLogarithm, factorial, fibonacci, bubbleSort, insertionSort
} from './lesson_2.js';
import { logTestCase, logTestCaseWithException } from '../../utils/common_util.js';

// getValueByIndex
function testGetValueByIndex() {
  console.log("🔍 Тестирование getValueByIndex:");
  logTestCase("Массив [10, 20, 30], индекс 1", getValueByIndex([10, 20, 30], 1), 20);
  logTestCase("Массив ['a', 'b', 'c'], индекс 0", getValueByIndex(['a', 'b', 'c'], 0), 'a');
  console.log();
}

// calcLogarithm
function testCalcLog() {
  console.log("📏 Тестирование calcLogarithm:");
  logTestCase("Число 16", calcLogarithm(16), 4);
  logTestCase("Число 8", calcLogarithm(8), 3);
  logTestCase("Число 256", calcLogarithm(256), 8);
  logTestCase("Число 1", calcLogarithm(1), 0);
  console.log();
}

// factorial
function testFactorial() {
  console.log("✖️ Тестирование factorial:");
  logTestCase("Число 0", factorial(0), 1);
  logTestCase("Число 1", factorial(1), 1);
  logTestCase("Число 5", factorial(5), 120);
  logTestCase("Число -1", factorial(-1), "Факториал определён только для неотрицательных чисел");
  console.log();
}

// fibonacci
function testFibonacci() {
  console.log("🔢 Тестирование fibonacci:");
  logTestCase("Число 0", fibonacci(0), 0);
  logTestCase("Число 1", fibonacci(1), 1);
  logTestCase("Число 5", fibonacci(5), 5);
  logTestCase("Число 10", fibonacci(10), 55);
  logTestCase("Число -1", fibonacci(-1), "Число должно быть неотрицательным");
  console.log();
}

// bubbleSort
function testBubbleSort() {
  console.log("📈 Тестирование bubbleSort:");
  logTestCase("Массив [5, 3, 8, 4, 2]", bubbleSort([5, 3, 8, 4, 2]), [2, 3, 4, 5, 8]);
  logTestCase("Массив [1, 2, 3, 4, 5]", bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  logTestCase("Пустой массив", bubbleSort([]), []);
  console.log();
}

// insertionSort
function testInsertionSort() {
  console.log("📉 Тестирование insertionSort:");
  logTestCase("Массив [5, 3, 8, 4, 2]", insertionSort([5, 3, 8, 4, 2]), [2, 3, 4, 5, 8]);
  logTestCase("Массив [1, 2, 3, 4, 5]", insertionSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  logTestCase("Пустой массив", insertionSort([]), []);
  console.log();
}

// Запуск тестов
testGetValueByIndex();
testCalcLog();
testFactorial();
testFibonacci();
testBubbleSort();
testInsertionSort();
