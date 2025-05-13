package org.telran.lecture_01_intro.practice;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Lesson1Test {

    @Test
    @DisplayName("Тестирование searchNumber")
    public void testSearchNumber() {
        // Тест для числа, присутствующего в массиве
        assertTrue(Lesson1.searchNumber(new int[]{1, 2, 3, 4, 5}, 3));

        // Тест для числа, отсутствующего в массиве
        assertFalse(Lesson1.searchNumber(new int[]{1, 2, 3, 4, 5}, 6));

        // Тест для пустого массива
        assertThrows(IllegalArgumentException.class, () -> Lesson1.searchNumber(new int[]{}, 1));
    }

    @Test
    @DisplayName("Тестирование findMax")
    public void testFindMax() {
        // Тест для обычного массива
        assertEquals(5, Lesson1.findMax(new int[]{1, 2, 3, 4, 5}));

        // Тест для массива с отрицательными числами
        assertEquals(-1, Lesson1.findMax(new int[]{-1, -2, -3, -4, -5}));

        // Тест для пустого массива
        assertThrows(IllegalArgumentException.class, () -> Lesson1.findMax(new int[]{}));
    }

    @Test
    @DisplayName("Тестирование findMin")
    public void testFindMin() {
        // Тест для обычного массива
        assertEquals(1, Lesson1.findMin(new int[]{1, 2, 3, 4, 5}));

        // Тест для массива с отрицательными числами
        assertEquals(-5, Lesson1.findMin(new int[]{-1, -2, -3, -4, -5}));

        // Тест для пустого массива
        assertThrows(IllegalArgumentException.class, () -> Lesson1.findMin(new int[]{}));
    }

    @Test
    @DisplayName("Тестирование countEvenNumbers")
    public void testCountEvenNumbers() {
        // Тест для массива с четными числами
        assertEquals(2, Lesson1.countEvenNumbers(new int[]{1, 2, 3, 4, 5}));

        // Тест для массива, где все числа четные
        assertEquals(5, Lesson1.countEvenNumbers(new int[]{2, 4, 6, 8, 10}));

        // Тест для пустого массива
        assertThrows(IllegalArgumentException.class, () -> Lesson1.countEvenNumbers(new int[]{}));
    }

    @Test
    @DisplayName("Тестирование sumOfArray")
    public void testSumOfArray() {
        // Тест для обычного массива
        assertEquals(15, Lesson1.sumOfArray(new int[]{1, 2, 3, 4, 5}));

        // Тест для массива с отрицательными числами
        assertEquals(-15, Lesson1.sumOfArray(new int[]{-1, -2, -3, -4, -5}));

        // Тест для пустого массива
        assertThrows(IllegalArgumentException.class, () -> Lesson1.sumOfArray(new int[]{}));
    }

    @Test
    @DisplayName("Тестирование averageOfArray")
    public void testAverageOfArray() {
        // Тест для обычного массива
        assertEquals(3.0, Lesson1.averageOfArray(new int[]{1, 2, 3, 4, 5}), 0.001);

        // Тест для другого обычного массива
        assertEquals(30.0, Lesson1.averageOfArray(new int[]{10, 20, 30, 40, 50}), 0.001);

        // Тест для пустого массива
        assertThrows(IllegalArgumentException.class, () -> Lesson1.averageOfArray(new int[]{}));
    }

    @Test
    @DisplayName("Тестирование hasDuplicates")
    public void testHasDuplicates() {
        // Тест для массива без дубликатов
        assertFalse(Lesson1.hasDuplicates(new int[]{1, 2, 3, 4, 5}));

        // Тест для массива с дубликатами
        assertTrue(Lesson1.hasDuplicates(new int[]{1, 2, 3, 4, 4}));

        // Тест для пустого массива
        assertThrows(IllegalArgumentException.class, () -> Lesson1.hasDuplicates(new int[]{}));
    }

    @Test
    @DisplayName("Тестирование findIndex")
    public void testFindIndex() {
        // Тест для числа, присутствующего в массиве
        assertEquals(2, Lesson1.findIndex(new int[]{1, 2, 3, 4, 5}, 3));

        // Тест для числа, отсутствующего в массиве
        assertEquals(-1, Lesson1.findIndex(new int[]{1, 2, 3, 4, 5}, 6));

        // Тест для пустого массива
        assertEquals(-1, Lesson1.findIndex(new int[]{}, 1));
    }

    @Test
    @DisplayName("Тестирование findSecondMax")
    public void testFindSecondMax() {
        // Тест для обычного массива
        assertEquals(4, Lesson1.findSecondMax(new int[]{1, 2, 3, 4, 5}));

        // Тест для массива с дубликатами максимальных значений
        assertEquals(4, Lesson1.findSecondMax(new int[]{5, 5, 4, 3, 2}));

        // Тест для массива, который слишком мал
        assertThrows(IllegalArgumentException.class, () -> Lesson1.findSecondMax(new int[]{1}));
    }

    @Test
    @DisplayName("Тестирование countOccurrences")
    public void testCountOccurrences() {
        // Тест для числа, присутствующего несколько раз в массиве
        assertEquals(3, Lesson1.countOccurrences(new int[]{1, 2, 3, 4, 5, 3, 3}, 3));

        // Тест для числа, отсутствующего в массиве
        assertEquals(0, Lesson1.countOccurrences(new int[]{1, 2, 3, 4, 5}, 6));

        // Тест для пустого массива
        assertThrows(IllegalArgumentException.class, () -> Lesson1.countOccurrences(new int[]{}, 1));
    }

    @Test
    @DisplayName("Тестирование isPrime")
    public void testIsPrime() {
        // Тест для простого числа
        assertTrue(Lesson1.isPrime(5));

        // Тест для непростого числа
        assertFalse(Lesson1.isPrime(4));

        // Тест для 1, которое не является простым числом
        assertFalse(Lesson1.isPrime(1));
    }

    @Test
    @DisplayName("Тестирование isPalindrome")
    public void testIsPalindrome() {
        // Простой палиндром
        assertTrue(Lesson1.isPalindrome("madam"));

        // Палиндром с четным количеством символов
        assertTrue(Lesson1.isPalindrome("abba"));

        // Строка, не являющаяся палиндромом
        assertFalse(Lesson1.isPalindrome("hello"));

        // Пустая строка — считается палиндромом
        assertTrue(Lesson1.isPalindrome(""));

        // null — считается палиндромом
        assertTrue(Lesson1.isPalindrome(null));

        // Один символ — всегда палиндром
        assertTrue(Lesson1.isPalindrome("a"));

        // TODO Содержит пробелы — не палиндром
        // TODO assertFalse(Lesson1.isPalindrome("a b a"));

        // С чувствительностью к регистру
        assertFalse(Lesson1.isPalindrome("Madam"));
    }

    @Test
    @DisplayName("Тестирование sumPositiveNegative")
    public void testSumPositiveNegative() {
        // Тест для массива с положительными и отрицательными числами
        Lesson1.sumPositiveNegative(new int[]{1, -2, 3, -4, 5});
        // Проверка вывода в консоль может быть добавлена при необходимости
    }

    @Test
    @DisplayName("Тестирование isSortedAscending")
    public void testIsSortedAscending() {
        // Тест для отсортированного массива
        assertTrue(Lesson1.isSortedAscending(new int[]{1, 2, 3, 4, 5}));

        // Тест для неотсортированного массива
        assertFalse(Lesson1.isSortedAscending(new int[]{5, 2, 3, 1, 4}));
    }

    @Test
    @DisplayName("Тестирование reverseArray")
    public void testReverseArray() {
        // Тест для массива
        assertArrayEquals(new int[]{5, 4, 3, 2, 1}, Lesson1.reverseArray(new int[]{1, 2, 3, 4, 5}));
    }

    @Test
    @DisplayName("Тестирование removeZeros")
    public void testRemoveZeros() {
        // Тест для массива с нулями
        assertArrayEquals(new int[]{1, 2, 3}, Lesson1.removeZeros(new int[]{1, 0, 2, 0, 3}));
    }
}

