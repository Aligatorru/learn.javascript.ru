// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

const ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no()
};

ask(
    "Yo soglasni",
    function () { alert("Вы согласились."); },
    function () { alert("Вы отменили выполнение."); }
)