/**
 * Разделяет массив на две половины.
 * @param {Array} arr - Входной массив для разделения.
 * @returns {Array} - Массив, содержащий два подмассива [left, right].
 */
export function splitArray(arr) {
    // Алгоритмические шаги:
    // 1. Вычислить средний индекс массива.
    const midInd = Math.floor(arr.length/2);
    const arrLeft = arr.slice(0, midInd);
    const arrRight = arr.slice(midInd);
    return [arrLeft, arrRight];
}

console.log(splitArray([1, 2, 3, 4, 5, 6]));
// [1, 2, 3, 4] => [[1], [2], [3], [4]]

/**
 * Рекурсивно разделяет массив на вложенные подмассивы.
 * @param {Array} arr - Входной массив для разделения.
 * @returns {Array} - Вложенная структура массива подмассивов.
 */
export function recursiveSplit(arr) {
    // Алгоритмические шаги:
    // 1. Если длина массива равна 1 или меньше, вернуть массив.
    if (arr.length <= 1) {
        return arr;
    }
    const midIndex = Math.floor(arr.length/2);
    const leftArr = recursiveSplit(arr.slice(0, midIndex));
    const rightArr = recursiveSplit(arr.splice(midIndex));
    return [leftArr, rightArr];
}

console.log("call recursiveSplit = ",  recursiveSplit([1, 2, 3]));

/**
 * Объединяет два отсортированных массива в один отсортированный массив.
 * @param {Array} left - Левый отсортированный массив.
 * @param {Array} right - Правый отсортированный массив.
 * @returns {Array} - Новый отсортированный массив, содержащий все элементы из обоих входных массивов.
 */
export function merge(left, right, extractorFn = (num) => num) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (extractorFn(left[leftIndex]) < extractorFn(right[rightIndex])) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {            
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while(leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

console.log("result of work merge method = " +  merge([10, 13, 15, 60], [20, 30, 40]));

/**
 * Сортирует массив с использованием алгоритма сортировки слиянием.
 * @param {Array} arr - Входной массив для сортировки.
 * @returns {Array} - Новый отсортированный массив.
 */
export function mergeSort(arr, extractorFn) {
    if (arr.length <=1) {
        return arr;
    }

    const midIndex = Math.floor(arr.length/2);
    const leftArr = mergeSort(arr.slice(0, midIndex), extractorFn);
    const rightArr = mergeSort(arr.slice(midIndex), extractorFn);
    return merge(leftArr, rightArr, extractorFn);
}

/**
 * Сортирует массив с использованием сортировки слиянием и вспомогательного буфера.
 * @param {Array} arr - Входной массив для сортировки.
 * @returns {Array} - Отсортированный входной массив.
 */
export function mergeSort2(arr) {
    // Алгоритмические шаги:
    // 1. Создать копию входного массива в качестве вспомогательного буфера.
    // 2. Вызвать mergeSortRecursive с массивом, вспомогательным буфером, начальным индексом (0) и конечным индексом (длина массива).
    // 3. Вернуть отсортированный массив.
}

/**
 * Рекурсивно сортирует подмассив с использованием вспомогательного буфера.
 * @param {Array} arr - Массив для сортировки.
 * @param {Array} aux - Вспомогательный буферный массив.
 * @param {number} start - Начальный индекс подмассива.
 * @param {number} end - Конечный индекс подмассива (исключительно).
 */
export function mergeSortRecursive(arr, aux, start, end) {
    // Алгоритмические шаги:
    // 1. Если подмассив имеет 1 или меньше элементов, вернуть (сортировка не требуется).
    // 2. Вычислить средний индекс подмассива.
    // 3. Рекурсивно отсортировать левую половину (от начала до середины).
    // 4. Рекурсивно отсортировать правую половину (от середины до конца).
    // 5. Объединить отсортированные половины в исходный массив с использованием функции mergeAndSort.
}

/**
 * Объединяет два отсортированных подмассива с использованием вспомогательного буфера.
 * @param {Array} arr - Массив для хранения объединенного результата.
 * @param {Array} aux - Вспомогательный буфер, содержащий данные подмассива.
 * @param {number} start - Начальный индекс подмассива.
 * @param {number} mid - Средний индекс, разделяющий два подмассива.
 * @param {number} end - Конечный индекс подмассива (исключительно).
 */
export function mergeAndSort(arr, aux, start, mid, end) {
    // Алгоритмические шаги:
    // 1. Скопировать диапазон подмассива (от start до end) во вспомогательный буфер.
    // 2. Инициализировать индексы: i для левой половины (start), j для правой половины (mid), k для результирующего массива (start).
    // 3. Пока оба индекса i и j находятся в пределах своих половин:
    //    a. Сравнить элементы из вспомогательного буфера на индексах i и j.
    //    b. Поместить меньший элемент в исходный массив на индекс k и увеличить i или j и k.
    // 4. Скопировать оставшиеся элементы из левой половины (если есть) в исходный массив.
    // 5. (Элементы правой половины уже находятся на своих местах, поэтому дополнительное копирование не требуется.)
}

/**
 * Напишите функцию mergeAndFilter, которая принимает массив, функцию фильтрации и флаг для сортировки
 * по убыванию. Функция должна сначала отфильтровать массив, оставив только те элементы,
 * которые удовлетворяют условию фильтрации. Затем отфильтрованный массив должен быть отсортирован с использованием
 * алгоритма сортировки слиянием. Если флаг desc установлен в true, массив должен быть
 * отсортирован по убыванию, иначе — по возрастанию.
*/

/**
 * Фильтрует массив и сортирует отфильтрованные элементы с использованием алгоритма сортировки слиянием.
 * @param {Array} array - Входной массив для фильтрации и сортировки.
 * @param {Function} filter - Функция фильтрации элементов.
 * @param {boolean} [desc=false] - Флаг для сортировки по убыванию.
 * @returns {Array} - Новый отсортированный массив, содержащий только отфильтрованные элементы.
 */

// [20, 12, 34, 1, 4] => [4, 12, 20, 34]
// desc asc
export function mergeAndFilter(array, filter, extractorFn) {
    // Алгоритмические шаги:
    // 1. Инициализировать пустой массив для хранения отфильтрованных элементов.
    let result = [];
    // 2. Пройти по каждому элементу входного массива.
    for (const num of array) {
        if (filter(num)) {
            result.push(num);
        }
    }
    return mergeSort(result, extractorFn);
}

const users = [
    {id: 3, name: "User 1", enabled: true},
    {id: 20, name: "User 2", enabled: true},
    {id: 1, name: "User 3", enabled: false},
    {id: 2, name: "User 4", enabled: true},
];

console.log(mergeAndFilter(users, (user) => true, (user) => user.name));