let title = prompt("Как называется ваш проект?");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);

console.log("Мой проект называется" + " = " + title);
console.log("Мне нужен" + " = " + screens);
console.log("Это будет стоить" + " = " + " " + "$" + screenPrice);
console.log(adaptive);
console.log("это будет стоить" + "=" + "$" + servicePrice1);
console.log("это будет стоить" + "=" + "$" + servicePrice2);
console.log(fullPrice);
console.log("Полная цена " + "$" + fullPrice);
console.log("Цена со скидкой" + " " + Math.floor(servicePercentPrice));

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else console.log("Что то пошло не так");

// switch (fullPrice) {
//   case fullPrice > 30000:
//     console.log("Даем скидку в 10%");
//     break;
//   case fullPrice > 15000:
//     console.log("Даем скидку в 5%");
//     break;
//   case fullPrice < 15000:
//     console.log("Скидка не предусмотрена");
//     break;
//   default:
//     console.log("Что то пошло не так");
//     break;
// }
