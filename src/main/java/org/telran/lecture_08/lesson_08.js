/**
 * Класс, представляющий структуру данных очередь, реализованную на основе массива.
 * Элементы добавляются в конец (enqueue) и удаляются из начала (dequeue).
 */
class ArrayQueue {
    /**
     * Создает экземпляр ArrayQueue.
     * Инициализирует пустой массив для хранения элементов очереди.
     */
    constructor() {
        this.items = [];
    }

    /**
     * Добавляет элемент в конец очереди.
     * @param {*} element - Элемент, который нужно добавить в очередь.
     */
    enqueue(element) {
        this.items.push(element);
    }


    /**
     * Удаляет и возвращает элемент из начала очереди.
     * @returns {*} Удаленный элемент из очереди или null, если очередь пуста.
     */
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    /**
     * Возвращает первый элемент очереди без его удаления.
     * @returns {*} Первый элемент очереди или null, если очередь пуста.
     */
    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    /**
     * Возвращает последний элемент очереди без его удаления.
     * @returns {*} Последний элемент очереди или null, если очередь пуста.
     */
    rear() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length-1];
    }

    /**
     * Проверяет, пуста ли очередь.
     * @returns {boolean} True, если очередь пуста, иначе false.
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Возвращает количество элементов в очереди.
     * @returns {number} Количество элементов в очереди.
     */
    size() {
        return this.items.length;
    }

    /**
     * Очищает очередь, удаляя все элементы.
     */
    clear() {
        this.items = [];
    }

    /**
     * Выполняет указанную функцию для каждого элемента очереди.
     * @param {function} callback - Функция, которая будет вызвана для каждого элемента. Принимает элемент, индекс и массив.
     */
    forEach(callback) {
        for (let i = 0; i < length; i++) {
            callback(this.items[i]);
        }
    }
}
/*
const queue = new ArrayQueue();
queue.enqueue("Patient 1");
queue.enqueue("Patient 2");
queue.enqueue("Patient 3");

console.log("Call next = ", queue.dequeue());
console.log("Call next = ", queue.dequeue());
console.log("Call next = ", queue.dequeue());
*/


/**
 * Класс, представляющий узел односвязного списка.
 */
class Node {
    /**
     * Создает узел с указанными данными.
     * @param {*} data - Данные, которые будет содержать узел.
     */
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

const node1 = new Node("User 1");
console.log("node 1 = ",node1);

const node2 = new Node("User 2");
console.log("node 2 = ",node2);

node1.next = node2;

const node3 = new Node("User 3");
console.log("node 2 = ",node2);
node2.next = node3;

console.log(node1);

/**
 * Класс, представляющий структуру данных очередь, реализованную на основе односвязного списка.
 * Элементы добавляются в конец (enqueue) и удаляются из начала (dequeue).
 */
class LinkedListQueue {
    /**
     * Создает экземпляр LinkedListQueue.
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Добавляет элемент в конец очереди.
     * @param {*} data - Элемент, который нужно добавить в очередь.
     * @returns {boolean} True, если элемент успешно добавлен, иначе false (если очередь переполнена).
     */
    enqueue(data) {

        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this;
    }

    /**
     * Удаляет и возвращает элемент из начала очереди.
     * @returns {*} Удаленный элемент или null, если очередь пуста.
     */
    dequeue() {
        // TODO: Проверить, пуста ли очередь; если да, вывести в консоль "Очередь пуста" и вернуть null
        // TODO: Сохранить данные (data) из узла head
        // TODO: Переместить head на следующий узел (head.next)
        // TODO: Уменьшить размер очереди (size) на 1
        // TODO: Если очередь стала пустой (size === 0), установить tail в null
        // TODO: Вывести сообщение в консоль, что элемент удален, например: "Удален: <data>"
        // TODO: Вернуть сохраненные данные
    }

    /**
     * Проверяет, пуста ли очередь.
     * @returns {boolean} True, если очередь пуста, иначе false.
     */
    isEmpty() {
        // TODO: Вернуть true, если head равен null, иначе false
    }

    /**
     * Возвращает текущий размер очереди.
     * @returns {number} Количество элементов в очереди.
     */
    getSize() {
        // TODO: Вернуть текущий размер очереди (size)
    }

    /**
     * Очищает очередь, удаляя все элементы.
     */
    clear() {
        // TODO: Установить head в null
        // TODO: Установить tail в null
        // TODO: Установить size в 0
        // TODO: Вывести сообщение в консоль: "Очередь очищена"
    }

    /**
     * Выполняет указанную функцию для каждого элемента очереди.
     * @param {function} callback - Функция, которая будет вызвана для каждого элемента. Принимает данные элемента и индекс.
     */
    forEach(callback) {
        // TODO: Начать с узла head
        // TODO: Пройтись по всем узлам списка, пока текущий узел существует
        // TODO: Для каждого узла вызвать callback, передав данные узла (data) и текущий индекс
        // TODO: Перейти к следующему узлу и увеличить индекс
    }
}

/**
 * Класс RequestManager - очередь последовательной обработки запросов
 * Здесь вы реализуете механизм, который:
 * - принимает запросы и добавляет их в очередь
 * - выполняет запросы по одному
 * - возвращает Promise для каждого запроса
 */
class RequestManager {
    /**
     * Конструктор инициализирует очередь и состояние обработки
     */
    constructor() {
        // TODO: инициализируйте Очередь задач

        // Флаг, показывающий, выполняется ли сейчас процесс обработки
    }

    /**
     * Добавляет запрос в очередь и запускает обработку, если она ещё не началась
     * @param {string} url - URL запроса
     * @param {RequestInit} [options] - Дополнительные опции для fetch
     * @returns {Promise<any>} - Промис, который резолвится данными ответа
     */
    enqueueRequest(url, options) {
        // TODO:
        // 1. Вернуть новый Promise.
        // 2. Добавить объект задачи { url, options, resolve, reject } в очередь.
        // 3. Если isProcessing == false, вызвать processQueue().
    }

    /**
     * Последовательно выполняет запросы из очереди
     * Обработка должна выполняться до тех пор, пока очередь не станет пустой.
     * После окончания обработки нужно сбросить флаг isProcessing.
     * @returns {Promise<void>}
     */
    async processQueue() {
        // TODO:
        // 1. Установите флаг isProcessing = true.
        // 2. Пока очередь не пуста:
        //    - извлеките следующую задачу из очереди.
        //    - выполните fetch с переданными параметрами.
        //    - распарсьте JSON.
        //    - вызовите resolve(data) или reject(error).
        // 3. После окончания установите isProcessing = false.
    }
}
/*
const queue = new RequestManager();

for (let index = 0; index < 10; index++) {
    queue.enqueueRequest(`https://jsonplaceholder.typicode.com/todos/${index}`)
            .then(data => console.log(`Запрос ${index} результат:`, data))
            .catch(err => console.log(err));
        console.log("added to queue request with id " + index);
}*/
/*
for (let index = 0; index < 10; index++) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
            .then(data => data.json())
            .then(data => console.log(`Запрос ${index} результат:`, data))
            .catch(err => console.log(err));
        console.log("added to queue request with id " + index);
}*/