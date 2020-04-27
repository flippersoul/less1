

//переменная бюджета
var userBudget = 0;
//переменная для имени 
var shopName;
userBudget = prompt("Введите Ваш бюджет", "0");
shopName = prompt("Имя магазина", "Любое");
console.log("Ваш бюджет = ", userBudget, "Название Вашего магазина = ", shopName);

//Массив товаров
var shopGoods = [];

//объект mainList
var mainList = {
    userBudget,
    shopName,
    //объект сотрудников
    //объект в объекте
    employers:{
    name:"Шура",
    age: 23
    },
    shopGoods
};
    

//Цикл по выводу сообщения и ввода переменных в объект
let i = 0;
while (i < 3) { 
    mainList.shopGoods = prompt("Какой тип товаров будем продавать?", "Велики, например");
  i++;
  console.log(mainList.shopGoods);
}
  
console.log("Ваш бюджет на 1 день = ", userBudget, "Ваш бюджет на 30 дней = ", userBudget*5);
