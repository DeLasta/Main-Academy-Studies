//Задание 1

// Перепишите конструкцию if с использованием условного оператора '?':


// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

//Решение:

//let result = (a + b < 4) ? "Мало" : "Много";



//Задание 2:

// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.


// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }


//Решение:

let message = (login == "Employee") ? "Hello" :
(login == "Vice President") ? "Greetings sir" : 
(login == "") ? "No login" : "";