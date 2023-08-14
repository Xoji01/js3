//Тем кто дз уже сделал, есть еще одна работа не обязательная но желательно. 

// Нужно место пробела поставить -
let str = "HTML JavaScript Python"
let at = / /g
let sstr = str.replace(at,'-')
console.log(sstr)


// Сделать только первую букву строки большим
let ste = "string not starting with capital";  
let sta = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
console.log( ste[0].toUpperCase() + ste.slice(1)) 
console.log( sta[0].toUpperCase() + sta.toLowerCase())
// // Сравнить строки если они одинаковые, то
// в консоли показать good иначе bad

// Пример:
// 'string' === 'StRiNg' // true
// 'ABCDe' === 'AbcdW' // false
let aw = 'aaa'
let aq = 'Aaa'
console.log(aw == aq) 
console.log(aw.toLowerCase== aq.toLowerCase)


