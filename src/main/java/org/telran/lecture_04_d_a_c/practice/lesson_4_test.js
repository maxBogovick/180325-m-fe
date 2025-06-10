import { binarySearch, hasAnyEvents } from './lesson_4.js';
import { logTestCase } from '../../utils/common_util.js';

// Тестирование binary_search
function testBinarySearch() {
    console.log("🔎 Тестирование binary_search:");

    logTestCase("Массив [1, 2, 3, 4, 5], поиск 3", binary_search([1, 2, 3, 4, 5], 3), 2);
    logTestCase("Массив [1, 2, 3, 4, 5], поиск 1", binary_search([1, 2, 3, 4, 5], 1), 0);
    logTestCase("Массив [1, 2, 3, 4, 5], поиск 5", binary_search([1, 2, 3, 4, 5], 5), 4);
    logTestCase("Массив [1, 2, 3, 4, 5], поиск 6", binary_search([1, 2, 3, 4, 5], 6), -1);
    logTestCase("Массив [], поиск 1", binary_search([], 1), -1);

    console.log();
}

// Тестирование hasAnyEvents
function testHasAnyEvents() {
    console.log("📅 Тестирование hasAnyEvents:");

    const days = [
        { day: 1, events: ["meeting"] },
        { day: 2, events: ["party"] },
        { day: 3, events: [] },
        { day: 4, events: ["meeting", "party"] },
        { day: 5, events: ["workshop", "party", "concert"] },
    ];

    logTestCase("День 2, есть событие", hasAnyEvents(days, 2), true);
    logTestCase("День 3, нет событий", hasAnyEvents(days, 3), false);
    logTestCase("День 5, несколько событий", hasAnyEvents(days, 5), true);
    logTestCase("День 10, не существует", hasAnyEvents(days, 10), false);
    logTestCase("День 1, одно событие", hasAnyEvents(days, 1), true);

    console.log();
}

// Запуск всех тестов
function runAllTests() {
    console.log("🚀 Запуск тестов поиска\n");

    //testBinarySearch();
    testHasAnyEvents();

    console.log("✅ Тестирование завершено!");
}

runAllTests();
