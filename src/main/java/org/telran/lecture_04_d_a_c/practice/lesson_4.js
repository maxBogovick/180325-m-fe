/**
 * Выполняет бинарный поиск заданного значения в отсортированном массиве.
 * 
 * @param {number[]} arr - Отсортированный массив чисел.
 * @param {number} target - Значение, которое нужно найти.
 * @returns {number} Индекс найденного значения или -1, если не найдено.
 */
export function binarySearch(arr, target) {
    // Вызов рекурсивной функции бинарного поиска
}

/**
 * Рекурсивно выполняет бинарный поиск по массиву.
 * 
 * @param {number[]} arr - Отсортированный массив чисел.
 * @param {number} target - Искомое значение.
 * @param {number} low - Нижняя граница поиска.
 * @param {number} high - Верхняя граница поиска.
 * @returns {number} Индекс найденного значения или -1.
 */
function binarySearchRecursive(arr, target, low, high) {
    // Базовый случай: если границы поиска неверны, вернуть -1

    // Найти середину массива

    // Если значение по середине равно target, вернуть индекс

    // Если значение по середине больше target, рекурсивно искать в левой половине

    // Иначе — рекурсивно искать в правой половине
}

const daysWithEvents = [
        { day: 1, events: ["meeting"] },
        { day: 2, events: ["party"] },
        { day: 3, events: [] },
        { day: 4, events: ["meeting", "party"] },
        { day: 5, events: ["workshop", "party", "concert"] },
    ];

/**
 * Проверяет, есть ли события в конкретный день в отсортированном по дням массиве объектов.
 * 
 * @param {{day: number, events: string[]}[]} days - Массив объектов с полями day и events.
 * @param {number} day - День, для которого нужно проверить наличие событий.
 * @returns {boolean} true, если события есть; иначе — false.
 */
export function hasAnyEvents(days, day) {

    /**
     * Ищет индекс объекта с нужным днём с помощью бинарного поиска.
     * 
     * @param {number} low - Нижняя граница поиска.
     * @param {number} high - Верхняя граница поиска.
     * @returns {number} Индекс найденного дня или -1.
     */
    function searchDay(low, high) {
        // Базовый случай: если границы некорректны, вернуть -1

        // Найти середину массива

        // Сравнить день в середине с искомым:
        // - если равны, вернуть mid
        // - если текущий день больше, искать в левой половине
        // - иначе — в правой
    }

    // Вызовем searchDay и сохраним индекс найденного дня

    // Проверим, есть ли события в найденном дне
    // Если день не найден или events пуст, вернуть false
    // Иначе — вернуть true
}


// Пример тестов:
// console.log(hasAnyEvents(days, 2));
// console.log(hasAnyEvents(days, 3));
// console.log(hasAnyEvents(days, 5));
// console.log(hasAnyEvents(days, 10));
