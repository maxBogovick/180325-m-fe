/**
 * Класс, представляющий структуру данных стек, реализованную на основе массива.
 * Элементы добавляются и удаляются с вершины стека (LIFO - Last In, First Out).
 */


class ArrayStack {
    /**
     * Создает экземпляр ArrayStack.
     * Инициализирует пустой массив для хранения элементов стека.
     */
    constructor() {
        this.array = [];
    }

    /**
     * Добавляет элемент на вершину стека.
     * @param {*} element - Элемент, который нужно добавить в стек.
     */
    push(element) {
        this.array.push(element);
    }

    /**
     * Удаляет и возвращает верхний элемент стека.
     * @returns {*} Удаленный элемент или null, если стек пуст.
     */
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const removedData = this.array.pop();
        return removedData;
    }

    /**
     * Возвращает верхний элемент стека без его удаления.
     * @returns {*} Верхний элемент стека или null, если стек пуст.
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.array[this.array.length - 1];
    }

    /**
     * Проверяет, пуст ли стек.
     * @returns {boolean} True, если стек пуст, иначе false.
     */
    isEmpty() {
        return this.array.length === 0;
    }

    /**
     * Возвращает текущий размер стека.
     * @returns {number} Количество элементов в стеке.
     */
    size() {
        return this.array.length;
    }

    /**
     * Очищает стек, удаляя все элементы.
     */
    clear() {
        this.array = [];
    }

    /**
     * Выполняет указанную функцию для каждого элемента стека, начиная с вершины.
     * @param {function} callback - Функция, которая будет вызвана для каждого элемента. Принимает элемент и индекс (от вершины).
     */
    // !false ==== true
    // !true === false
    forEach(callback) {
        if (this.isEmpty()) {
            return;
        }
        for (let i = this.array.length - 1; i >= 0; i--) {
            const data = this.array[i];
            callback(data);
        }
    }
}

const stack = new ArrayStack();
stack.push(1);
stack.push(2);
stack.push(3);

function printToConsole(data) {
    console.log("Value = " + data);
}

function multiplyAndPrintToConsole(data) {
    data = data * data;
    console.log("Value = " + data);
}

const anotherArray = [];

function copyToArray(data) {
    anotherArray.push(data);
}

console.log("another array before = ", anotherArray);
//stack.forEach(copyToArray); 

//stack.forEach(data => copyToArray(data));


stack.forEach(data => {
    console.log(data);
});

stack.forEach(data => {
    anotherArray.push(data);
})

//console.log("another array after = ", anotherArray);


console.log(stack.pop());

/**
 * Класс для управления историей навигации с помощью стека.
 * Сохраняет историю посещенных страниц и позволяет возвращаться назад.
 */
class NavigationHistory {
    /**
     * Создает экземпляр NavigationHistory.
     * @param {ArrayStack} stack - Экземпляр стека для хранения истории.
     */
    constructor(stack) {
        /**
         * Приватное поле, в котором хранится стек истории.
         * Здесь будут сохраняться названия страниц.
         * @private
         * @type {ArrayStack}
         */
        this.stack = stack;
    }

    /**
     * Переход на новую страницу.
     * Добавляет страницу в стек и выводит информацию о текущем состоянии истории.
     * 
     * @param {string} page - Название или URL страницы.
     */
    navigateTo(page) {
        // 1. Выведите в консоль сообщение о переходе на указанную страницу.
        // 2. Добавьте страницу в стек истории.
        // 3. Выведите в консоль текущее состояние истории (this.stack.items).
    }

    /**
     * Возврат на предыдущую страницу.
     * Удаляет текущую страницу из стека и возвращает предыдущую страницу.
     * Если история пуста, сообщает об этом.
     * 
     * @returns {string|null} Название предыдущей страницы или null, если история пуста.
     */
    goBack() {
        // 1. Извлеките (удалите) текущую страницу из стека.
        // 2. Если возвращенное значение пустое (null или undefined), 
        //    выведите сообщение "История пуста, некуда возвращаться!" и верните null.
        // 3. Получите (но не удаляйте) предыдущую страницу с помощью метода peek().
        // 4. Если предыдущая страница существует, выведите в консоль сообщение о возврате на неё.
        // 5. Если предыдущей страницы нет, выведите сообщение о возврате на главную страницу.
        // 6. Верните название предыдущей страницы или строку "Главная", если стек пуст.
    }
}



/**
 * Проверка правильности скобочной последовательности.
 * Полезно для валидации кода или парсинга выражений.
 * @param {string} code - Строка кода для проверки.
 * @returns {boolean} true, если все скобки корректно закрыты.
 */
function checkBrackets(code) {
    // Создайте новый стек для хранения открывающихся скобок
    // Объект для сопоставления открывающихся и закрывающихся скобок

    // Пройдитесь по каждому символу строки
    // Если символ — открывающаяся скобка:
    //   Добавьте ее в стек
    // Если символ — закрывающаяся скобка:
    //   Извлеките последнюю открывающуюся скобку из стека
    //   Если стек пуст или скобки не совпадают:
    //       Верните false (ошибка)

    // Если после прохода по строке стек пуст:
    //   Верните true (все скобки закрыты корректно)
    // Иначе:
    //   Верните false (остались незакрытые скобки)
}

// Тестирование примеров

/*
console.log("\n=== Пример 2: Проверка скобок ===");
console.log(checkBrackets("function() { return [1, 2, 3]; }")); // true
console.log(checkBrackets("function() { return [1, 2, 3; }")); // false
console.log(checkBrackets("({[]})")); // true
console.log(checkBrackets("({[})")); // false
*/

/**
 * Класс, представляющий текстовый редактор с поддержкой операций вставки текста, отмены (undo) и повтора (redo).
 * Использует два стека для хранения состояний для операций отмены и повтора.
 */
class TextEditor {
    /**
     * Создает экземпляр TextEditor.
     * Инициализирует пустое содержимое и стеки для операций undo и redo.
     */
    constructor() {
        // TODO: Инициализировать пустую строку для хранения содержимого (content)
        // TODO: Инициализировать стек для операций отмены (undoStack) с использованием класса Stack
        // TODO: Инициализировать стек для операций повтора (redoStack) с использованием класса Stack
    }

    /**
     * Выполняет команду, сохраняя текущее состояние в стеке undo.
     * @param {function} command - Функция, представляющая команду для выполнения (например, вставка текста).
     */
    executeCommand(command) {
        // TODO: Сохранить текущее состояние (объект с полем content) в undoStack
        // TODO: Очистить redoStack
        // TODO: Выполнить переданную команду
    }

    /**
     * Вставляет текст в конец текущего содержимого.
     * @param {string} text - Текст для вставки.
     */
    insertText(text) {
        // TODO: Вызвать executeCommand, передав функцию, которая добавляет text к текущему содержимому (content)
    }

    /**
     * Отменяет последнюю операцию, восстанавливая предыдущее состояние.
     * @returns {boolean} True, если отмена успешна, иначе false (если стек undo пуст).
     */
    undo() {
        // TODO: Проверить, пуст ли undoStack; если да, вернуть false
        // TODO: Сохранить текущее состояние (объект с полем content) в redoStack
        // TODO: Извлечь предыдущее состояние из undoStack
        // TODO: Установить содержимое (content) равным содержимому извлеченного состояния
        // TODO: Вернуть true
    }

    /**
     * Повторяет последнюю отмененную операцию, восстанавливая следующее состояние.
     * @returns {boolean} True, если повтор успешен, иначе false (если стек redo пуст).
     */
    redo() {
        // TODO: Проверить, пуст ли redoStack; если да, вернуть false
        // TODO: Сохранить текущее состояние (объект с полем content) в undoStack
        // TODO: Извлечь следующее состояние из redoStack
        // TODO: Установить содержимое (content) равным содержимому извлеченного состояния
        // TODO: Вернуть true
    }

    /**
     * Возвращает текущее содержимое редактора.
     * @returns {string} Текущее содержимое редактора.
     */
    getContent() {
        // TODO: Вернуть текущее содержимое (content)
    }
}