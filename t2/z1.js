alert(`Урок розпочато`)

let tovar = prompt(`Ціна товару?`);
let garanty = prompt(`ваш ich bin`);
let dostavka = prompt(`ваш вік`);
let name = `Петро`;
let name2 = `Airods 2`;
let name4 = 1;
let suma1 = 60;
let suma = tovar*dostavka+garanty*dostavka+suma1;



console.log(`Вітаю, ${name}! Ваше замовлення ${name2}

 за ціною ${tovar}грн у кількості ${garanty} штук 
 Гарантія на ${name4}рік вартістю- ${garanty}грн
 у кількості ${dostavka} штук
 
 Вартість доставки ${suma1}
 
 прийнято та буде оброблено протягом 24 години
 
 Загальна вартість замовлення ${suma}
 `);
