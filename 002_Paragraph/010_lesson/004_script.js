// Перепишите 'if' в '?'
// важность: 5
// Перепишите конструкцию if с использованием условного оператора '?':

let a = prompt('Введи число a');
let b = prompt('Введи число b');

let result;
a=+a;
b=+b;
result = (a + b < 4) ? 'Мало' : 'Много';

alert(result);
