// Название JavaScript
// важность: 2
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let answer = prompt('Какое «официальное» название JavaScript?', "ECMAScript");

if (answer=="ECMAScript") {
    alert("Верно!");
}
else {
    alert("Не знаете? ECMAScript!");
}
