/**
 * АЛГОРИТМ БЫСТРОЙ СОРТИРОВКИ (QuickSort)
 *
 * Принцип работы:
 * 1. Выбирается опорный элемент (pivot)
 * 2. Остальные элементы распределяются в два массива:
 *    - Меньшие опорного (less)
 *    - Большие или равные опорному (greater)
 * 3. Рекурсивно сортируются обе части
 * 4. Объединяется результат: sorted(less) + pivot + sorted(greater)
 */


// [1, 2, 3, 4, 5, 6] => less = [1, 2, 3, 4, 5, 6] greater = []
//
// [1001, 20, 40, 43, 202, 13, 56, 345, 890, 33, 7] =>
// less = [] greater = [] pivot = 

/**
 * Разделяет массив на элементы меньше и больше/равные опорному.
 *
 * @param {Array} arr - Массив, который нужно разделить.
 * @returns {{ pivot: any, less: Array, greater: Array }}
 * Объект с полями: опорный элемент, массивы меньше и больше/равные.
 */

class PartiotionResult {
    constructor(pivot, lessArray, greaterArray) {
        this.pivot = pivot;
        this.less = lessArray;
        this.greater = greaterArray;
    }
}

// (prod) => prod.price;
// 10 => 10
export function partition(arr = [], extrFn = data => data) {
    const pivotIndex = Math.floor((arr.length - 1) / 2);
    const pivot = arr[pivotIndex];

    const lessArray = [];
    const greaterArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (pivotIndex === i) {
            continue;
        }
        //(prod) => prod.price
        if (extrFn(pivot) > extrFn(arr[i])) {
            lessArray.push(arr[i]);
        } else {
            greaterArray.push(arr[i]);
        }

    }

    //const result = new PartiotionResult(pivot, lessArray, greaterArray);

    return {
        pivot: pivot,
        less: lessArray,
        greater: greaterArray,
    };
}

//console.log("Result of working function partition = ",partition([1001, 20, 40, 43, 202, 48, 56, 345, 890, 33, 7]));

/**
 * Выполняет сортировку массива с помощью базового QuickSort.
 *
 * @param {Array} arr - Массив для сортировки.
 * @returns {Array} Отсортированный массив.
 */
export function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const partitionResult = partition(arr);

    const leftPart = quickSort(partitionResult.less);

    const rightPart = quickSort(partitionResult.greater);

    const result = leftPart.concat(partitionResult.pivot, rightPart);

    return result;
}


console.log("Result of work quick sort function = ", quickSort([45, 2, 7, 5, 10, 1, 3]));

/**
 * Обменивает два элемента массива местами.
 *
 * @param {any[]} arr - Массив, в котором производится обмен.
 * @param {number} i - Индекс первого элемента.
 * @param {number} j - Индекс второго элемента.
 */
export function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * Разделяет массив по алгоритму Хоара.
 *
 * @param {any[]} arr - Массив, который нужно разделить.
 * @param {number} low - Левая граница подмассива.
 * @param {number} high - Правая граница подмассива.
 
 * @returns {number} Индекс, разделяющий две части массива.
 */

//*  @param {(a: any, b: any) => number} compareFn - Функция сравнения, аналогичная той, что используется в Array.prototype.sort().
export function hoarePartition(arr, lowIndex, highIndex) {

    const pivotIndx = Math.floor((lowIndex + highIndex )/2);
    const pivot = arr[pivotIndx];

    let leftIndex = lowIndex;
    let rightIndex = highIndex;

    while (true) {

        
        while (arr[leftIndex] < pivot) {
            leftIndex++;
        }
        while (arr[rightIndex] > pivot) {
            rightIndex--;
        }       

        if (leftIndex >= rightIndex) {
            return rightIndex;
        }
        
        swap(arr, leftIndex, rightIndex);
        leftIndex++;
        rightIndex--;
    }
}

const arr = [10, 29, 15, 2, 30, 1];
console.log("Result of work hoare partition = ", hoarePartition(arr, 0, arr.length-1));
console.log("Result after partition = ", arr);

/**
 * Быстрая сортировка с использованием разбиения Хоара.
 *
 * @param {any[]} arr - Массив для сортировки.
 * @param {number} low - Левая граница.
 * @param {number} high - Правая граница.
 */
export function quickSortHoare(arr, low, high) {

    if (low < high) {
        console.log("Low index = " + low);
        console.log(" highIndex = " + high);
        const pivotIndex = hoarePartition(arr, low, high);
        console.log("Pivot = " + pivotIndex);

        quickSortHoare(arr, low, pivotIndex);
        quickSortHoare(arr, pivotIndex+1, high);
    }
}

const arr2 = [10, 29, 15, 2, 30, 1];
quickSortHoare(arr2, 0, arr2.length-1);
console.log("Result after sort = ", arr2);

/**
 * Быстро находит k-й наименьший элемент в массиве, используя QuickSelect.
 *
 * @param {any[]} arr - Массив, в котором происходит поиск.
 * @param {number} k - Индекс (0-based) нужного наименьшего элемента.
 * @param {number} [low=0] - Левая граница подмассива.
 * @param {number} [high=arr.length - 1] - Правая граница подмассива.
 * @param {(a: any, b: any) => number} compareFn - Функция сравнения.
 * @returns {any} k-й наименьший элемент в массиве.
 */
export function quickSelect(arr, k, low = 0, high = arr.length - 1, compareFn) {
    // 1. Базовый случай: если подмассив состоит из одного элемента, верни его.
    // 2. Раздели массив с помощью hoarePartition.
    // 3. Если k ≤ индекс разделения, рекурсивно вызови quickSelect на левой части.
    //    Иначе — на правой части.
}



// =================================================================
// ПРИМЕР: Нахождение топ-N самых популярных статей
// =================================================================
const articles = [
    { title: "Статья A", views: 1500 },
    { title: "Статья B", views: 900 },
    { title: "Статья C", views: 4500 },
    { title: "Статья D", views: 500 },
    { title: "Статья E", views: 3100 },
    { title: "Статья F", views: 1800 },
    { title: "Статья G", views: 4000 },
];

/**
 * Находит топ-N самых популярных статей по количеству просмотров.
 * 
 * Алгоритм:
 * 1. Если количество статей больше N:
 *    - Используем QuickSelect для нахождения пороговой статьи (threshold).
 *    - Отбираем статьи, у которых просмотров ≥ threshold.
 *    - Сортируем отобранные статьи.
 * 2. Если статей меньше или равно N:
 *    - Сортируем весь массив по убыванию просмотров.
 *
 * @param {Array<Object>} articles - Массив статей, каждая из которых содержит поле `views`.
 * @param {number} [topN=5] - Количество статей с наибольшим количеством просмотров.
 * @returns {Array<Object>} Массив топ-N самых просматриваемых статей.
 */
export function finderTopNArticles(articles, topN = 5) {
    // 1. Скопировать массив, чтобы не изменять оригинал

    // 2. Определить функцию сравнения по просмотрам

    // 3. Если статей больше N:
    //    3.1 Найти индекс (длину - N)
    //    3.2 Получить пороговую статью через quickSelect
    //    3.3 Определить пороговое значение просмотров
    //    3.4 Отфильтровать статьи, у которых просмотры ≥ порога
    //    3.5 Отсортировать результат и вернуть

    // 4. Если статей меньше или равно N:
    //    4.1 Отсортировать весь массив по убыванию просмотров и вернуть
}



// =================================================================
// ПРИМЕР: Разделение товаров по цене
// =================================================================

const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Mouse', price: 25, category: 'Electronics' },
    { name: 'Keyboard', price: 80, category: 'Electronics' },
    { name: 'Monitor', price: 300, category: 'Electronics' },
    { name: 'Headphones', price: 150, category: 'Electronics' },
    { name: 'Webcam', price: 90, category: 'Electronics' },
    { name: 'Speaker', price: 200, category: 'Electronics' }
];



//console.log("Result of work partiotion function by products = ", partition(products, prod => prod.price));

// =================================================================
// ПРИМЕР: Нахождение топ-N самых больших файлов
// =================================================================

const files = [
    { name: 'app.js', size: 245000, type: 'javascript' },
    { name: 'styles.css', size: 85000, type: 'css' },
    { name: 'vendor.js', size: 1200000, type: 'javascript' },
    { name: 'image1.jpg', size: 450000, type: 'image' },
    { name: 'font.woff2', size: 25000, type: 'font' },
    { name: 'data.json', size: 150000, type: 'data' },
    { name: 'bundle.js', size: 800000, type: 'javascript' }
];