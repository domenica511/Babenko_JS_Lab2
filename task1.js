
console.log("Задача 1: Знайти суму останніх 5 додатніх елементів масиву.");

const input1 = prompt("Введіть кількість елементів масиву (N):");
const N = parseInt(input1);
console.log("Введені дані: N =", N);

if (isNaN(N) || N <= 0) {
    console.log("Помилка: N має бути додатнім цілим числом.");
} else {
    const arr = [];
    for (let i = 0; i < N; i++) {
        const num = parseInt(prompt("Введіть елемент #" + (i + 1)));
        arr.push(num);
    }
    console.log("Масив:", arr);

    const positives = arr.filter(n => n > 0);
    const lastFive = positives.slice(-5);
    const sum = lastFive.reduce((a, b) => a + b, 0);

    console.log("Результат: сума останніх 5 додатних =", sum);
}
