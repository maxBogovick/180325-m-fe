/**
 * Выполняет бинарный поиск заданного значения в отсортированном массиве.
 * 
 * @param {number[]} arr - Отсортированный массив чисел.
 * @param {number} target - Значение, которое нужно найти.
 * @returns {number} Индекс найденного значения или -1, если не найдено.
 */
export function binarySearch(arr, target, extractorFn) {
    return binarySearchRecursive(arr, target, 0, arr.length-1, extractorFn);
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
// arr = [10, 26, 29, 40, 49, 50, 67, 79, 82, 100] 
// arrStr = ["one", "two", "three", "four", "five"] arrStr[4] => "five";
// step 1 = target = 40, start = 0, end = 9;
// step 2 = target 40, startIndex = 0, endIndex = 3
// step 3 = target 40, startIndex = 2, endIndex = 3
// steo 4 = target 40, startIndex = 3, endIndex = 3
function binarySearchRecursive(arr, target, startIndex, endIndex, extractorFn) {
    // Базовый случай: если границы поиска неверны, вернуть -1
    if (startIndex > endIndex) {
        return -1;
    }

    // Найти середину массива
    // step 1 - middle = 4, (end = 9 start = 0);
    // step 2 middleIndex = 1
    // step 3 middleIndex = 2
    //step 4 middleIndx = 3;
    const middleIndex  = Math.floor((endIndex + startIndex)/2); // индекс середины массива 4

    // step 1 = arr[4] === 40 NOT
    // step 2 - arr[1] === 40 NOT
    // step 3 = arr[2] === 40 NOT
    // step 4 = arr[3] == 40 YESSSS

    // {day:3, events:[]} === 3
    if (extractorFn(arr[middleIndex]) === target) {
        return middleIndex;
    }
    // step 1 = arr[4] < 40 NOT!!!!
    // ste 2 - arr[1] < 40 YES
    // step 3 29 < 40 YES!!!!
     if (extractorFn(arr[middleIndex]) < target) {
        // step 2 binarySearchRecursive(arr, 40, 2, 3)
        // step 3 binarySearchRecursive(arr, 40, 3, 3)
        return binarySearchRecursive(arr, target, middleIndex + 1, endIndex, extractorFn);
     }
     // step 1 - 49 > 40 ???? 
     if (extractorFn(arr[middleIndex]) > target) {
        // step 1 -> binarySearchRecursive(arr, 40, 0, 3)
        return binarySearchRecursive(arr, target, startIndex, middleIndex -1, extractorFn);
     }
}

//console.log("Поиск числа 50 в массиве = " + binarySearch([1, 2, 4, 5, 20, 50, 200], 50));
//console.log("Поиск числа 100 в массиве = " + binarySearch([1, 2, 4, 5, 20, 50, 200], 100));
//console.log("Поиск числа 2 в массиве = " + binarySearch([1, 2, 4, 5, 20, 50, 200], 2));

const daysWithEvents = [
        { day: 1, events: ["meeting"] },
        { day: 2, events: ["party"] },
        { day: 3, events: [] },
        { day: 4, events: ["meeting", "party"] },
        { day: 5, events: ["workshop", "party", "concert"] },
    ];


//console.log("Search 3 day = " + binarySearch(daysWithEvents, 3, (dayItem) => dayItem.day));
console.log("Поиск числа 2 в массиве = " + binarySearch([1, 2, 4, 5, 20, 50, 200], 2, (numItem) => numItem));

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
