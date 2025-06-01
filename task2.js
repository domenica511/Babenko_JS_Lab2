
console.log("Задача 2: Обчислити факторіал заданого числа рекурсивно.");

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

const input2 = prompt("Введіть число для обчислення факторіала:");
const number = parseInt(input2);
console.log("Введені дані:", number);

if (isNaN(number) || number < 0) {
    console.log("Помилка: потрібно ввести невід'ємне ціле число.");
} else {
    const result = factorial(number);
    console.log("Результат: факторіал =", result);
}
