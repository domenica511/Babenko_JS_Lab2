
console.log("Задача 3: Функція, яка повертає довжину масиву.");

function getArrayLength(arr) {
    if (!arr) {
        console.log("Помилка: масив не передано у функцію.");
        return;
    }
    console.log("Результат: довжина масиву =", arr.length);
}

const arrInput = prompt("Введіть елементи масиву через кому (або залиште порожнім):");
if (arrInput) {
    const array = arrInput.split(",").map(item => item.trim());
    console.log("Введений масив:", array);
    getArrayLength(array);
} else {
    getArrayLength(undefined);
}
