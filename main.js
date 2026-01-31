/* jshint esversion: 6 */
/*
 * #1
 *
 * Створіть об'єкт userObj, що описує людину.
 *
 * Наступні поля обов'язкові:
 * firstName - будь-яке ім'я, рядок
 * lastName - будь-яке прізвище, рядок
 * age - будь-який вік, число
 */

let userObj = {
    firstName: 'Yevhenii',
    lastName: 'Shevchenko',
    age: 26
};
console.log(userObj);
console.table(userObj);
console.log(userObj.firstName);

/*
 * #2
 *
 * Для об'єкта з п.1 створіть метод fullName(), що повертає коректне повне ім'я, яке є конкатенацією firstName та lastName через пробіл.

 * Наприклад:
 * userObj.firstName ← 'John'
 * userObj.lastName  ← 'Smith'
 * userObj.fullName() → 'John Smith'.
 */

let userObj2 = {
    firstName: 'Yevhenii',
    lastName: 'Shevchenko',
    age: 26,
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(userObj2.fullName()); 

/*
 * #3
 *
 * Функція defUpperStr('My text') повертає текст, перетворений у верхній регістр, тобто: defUpperStr('My text') → 'MY TEXT'.
 *
 * Якщо функція викликається без параметра defUpperStr(), вона не повинна повертати undefined, у цьому випадку потрібно повернути рядок тексту за замовчуванням у верхньому регістрі, тобто defUpperStr() → 'DEFAULT TEXT'.
 *
 * При виконанні завдання не використовуйте оператор if, потрібен розв'язок із логічним оператором ||.
 */

function defUpperStr(myText) {
    let ressult = myText || 'default text';
    return ressult.toUpperCase();
}
 console.log(defUpperStr('My text')); 
 console.log(defUpperStr());            

 function defUpperStr2(myText) {
    if (myText) {
        return myText.toUpperCase();
    }
    else {
        return 'DEFAULT TEXT';
    }
 }
 console.log(defUpperStr2('My Text'));
 console.log(defUpperStr2());

/*
 * #4
 *
 * Створіть функцію evenFn(n), яка приймає параметром число - кількість ітерацій циклу, тобто for 0..n.
 * Функція повинна повернути масив, що складається тільки з парних значень, які генеруються в циклі.
 *
 * Причому:
 * 0 не повинен потрапляти до результуючого масиву,
 * цикл має працювати до n включно,
 * дозволено тільки оператор for.
 *
 * Наприклад:
 * evenFn(10) → [2, 4, 6, 8, 10]
 * evenFn(15) → [2, 4, 6, 8, 10, 12, 14]
 * evenFn(20) → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */

function evenFn(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

function evenFn2(n) {
    let arr2 =[];
    for (let i = 2; i <= n; i += 2) {
        arr2.push(i);
    }
    return arr2;
}
console.log(evenFn2(10));
console.log(evenFn2(15));
console.log(evenFn2(20));

/*
 * #5
 *
 * Створіть функцію weekFn(n), яка приймає номер дня тижня, а повертає його назву.
 * Якщо вводиться рядок, будь-яке дробове число або число поза діапазоном 1...7 - функція повинна повернути null.
 *
 * Наприклад:
 * 1   → 'Понеділок'
 * 2   → 'Вівторок'
 * ...
 * 7   → 'Неділя'
 * 9   → null
 * 1.5 → null
 * '2' → null
 * У реалізації функції обов'язково мають бути використані оператори switch / case / default.
 */

function weekFn(n) {
    let day = '';
    switch (n){
        case 1: day = "Monday";
        break;
        case 2: day = "Thuesday";
        break;
        case 3: day = "Wednesday";
        break;
        case 4: day = "Thursday";
        break;
        case 5: day = "Friday";
        break;
        case 6: day = "Saturday";
        break;
        case 7: day = "Sunday";
        break;
        default: return null;
    }
    return day;
}
console.log(weekFn(1));   
console.log(weekFn(3));   
console.log(weekFn(7));   
console.log(weekFn(9));   
console.log(weekFn(1.5)); 
console.log(weekFn('2')); 

function weekFn2(n) {
    switch (n) {
        case 1: return "Monday";
        case 2: return "Thuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return null;
    }
}
console.log(weekFn2(2));   
console.log(weekFn2(4));   
console.log(weekFn2(6)); 
console.log(weekFn2(9));  
console.log(weekFn2(1.5));
console.log(weekFn2('2'));

/*
 * #6
 *
 * створіть функцію ageClassification(n), яка буде як параметр приймати будь-які числа і повертатиме рядок згідно з такими умовами, n:
 * менше 0   - null (зверніть увагу, що це саме null, а не рядок)
 * 0..24     - 'Дитинство'
 * 24+...44  - 'Молодість'
 * 44+..65   - 'Зрілість'
 * 65+..75   - 'Старість'
 * 75+..90   - 'Довголіття'
 * 90+..122  - 'Рекорд'
 * понад 122 - null (зверніть увагу, що це саме null, а не рядок)
 *
 * При виконанні завдання допускається використовувати тільки тернарний оператор ?.
 * Використання операторів if, switch - заборонено.
 */

function ageClassification(n) {
    return n <= 0 ? null :
    n <= 24 ? 'Childhood' :
    n <= 44 ? 'Youth' :
    n <= 65 ? 'Adulthood' :
    n <= 75 ? 'Old Age' :
    n <= 90 ? 'Longevity' :
    n <= 122 ? 'Record Age' :
    null; 
}
console.log('    -1 :', ageClassification(-1)); 
console.log('     0 :', ageClassification(0));
console.log('     1 :', ageClassification(1));
console.log('    24 :', ageClassification(24)); 
console.log(' 24.01 :', ageClassification(24.01)); 
console.log('    44 :', ageClassification(44)); 
console.log(' 44.01 :', ageClassification(44.01)); 
console.log('    65 :', ageClassification(65)); 
console.log('  65.1 :', ageClassification(65.1)); 
console.log('    75 :', ageClassification(75)); 
console.log(' 75.01 :', ageClassification(75.01)); 
console.log('    90 :', ageClassification(90)); 
console.log(' 90.01 :', ageClassification(90.01)); 
console.log('   122 :', ageClassification(122)); 
console.log('122.01 :', ageClassification(122.01)); 
console.log('   150 :', ageClassification(150)); 


 /*Блок тестирования, везде должны быть true:*/
 console.log('    -1 :', ageClassification(-1) === null); 
 console.log('     0 :', ageClassification(0) === null); 
 console.log('     1 :', ageClassification(1) === 'Childhood'); 
 console.log('    24 :', ageClassification(24) === 'Childhood'); 
 console.log(' 24.01 :', ageClassification(24.01) === 'Youth'); 
 console.log('    44 :', ageClassification(44) === 'Youth'); 
 console.log(' 44.01 :', ageClassification(44.01) === 'Adulthood'); 
 console.log('    65 :', ageClassification(65) === 'Adulthood'); 
 console.log('  65.1 :', ageClassification(65.1) === 'Old Age'); 
 console.log('    75 :', ageClassification(75) === 'Old Age'); 
 console.log(' 75.01 :', ageClassification(75.01) === 'Longevity'); 
 console.log('    90 :', ageClassification(90) === 'Longevity'); 
 console.log(' 90.01 :', ageClassification(90.01) === 'Record Age'); 
 console.log('   122 :', ageClassification(122) === 'Record Age'); 
 console.log('122.01 :', ageClassification(122.01) === null); 
 console.log('   150 :', ageClassification(150) === null); 


/*
 * #7
 *
 * Створіть функцію oddFn(n), яка приймає параметром число - кількість ітерацій циклу.
 * Функція повинна повернути масив, що складається тільки з непарних значень, які генеруються в циклі.
 *
 * Причому:
 * 0 не повинен потрапляти в результуючий масив,
 * цикл має працювати до n включно,
 * дозволено тільки оператор while.
 *
 * Наприклад:
 * oddFn(10) → [1, 3, 5, 7, 9]
 * oddFn(15) → [1, 3, 5, 7, 9, 11, 13, 15]
 * oddFn(20) → [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
 */

function oddFn(n) {
    let arr3 = [];
    let i = 1;
    while (i <= n) {
        if (i % 2 !== 0) {
            arr3.push(i);
        }
        i++;   
    }
    return arr3;
}
console.log(oddFn(10)); 
console.log(oddFn(15)); 
console.log(oddFn(20));

function oddFn2(n) {
    let arr4 = [];
    let i = 1;
    while (i <= n) {
        arr4.push(i);
        i += 2;
    }
    return arr4;
}
console.log(oddFn(12)); 
console.log(oddFn(18)); 
console.log(oddFn(22));

/*
 * #8
 *
 * Створіть основну функцію mainFunc(a, b, callback), яка приймає три параметри:
 * a - число,
 * b - число,
 * callback - функція зворотнього виклику, що обробляє параметри a і b.
 *
 * Реалізуйте перевірку: якщо третім параметром передається не функція, потрібно повернути false.
 */

// function mainFunc(a, b, cb) { }

/*
 * Реалізуйте callback функції (cbRandom, cbPow, cbAdd) до основної функції (mainFunc), що повертатимуть відповідні результати обчислень.
 * Використовуйте Math для піднесення до ступеня (Math.pow) та генерації випадкових чисел (Math.floor, Math.random).
 */

// cbRandom(a, b) - обчислює і повертає довільне ціле число в діапазоні між a і b включно.
// function cbRandom(min, max) { }

// cbPow(a, b) - обчислює і повертає результат піднесення числа a у ступінь b.
// function cbPow(num, pow) { }

// cbAdd(a, b) - обчислює і повертає суму двох чисел a і b.
// function cbAdd(a, b) { }

/*
 * mainFunc() повинна повертати результат роботи переданої їй поворотної функції, наприклад:
 * mainFunc(2, 5, cbRandom) → випадково від 2 до 5 включно
 * mainFunc(10, 30, cbRandom) → випадково 10..30 включно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */

function mainFunc(a, b, callback) {
    if (typeof callback !== 'function') {
        return false;
    }
    return callback(a, b);
}

function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);  
}

function cbPow(num, pow) {
    return Math.pow(num, pow);
}

function cbAdd(a, b) {
    return a + b;
}
console.log(mainFunc(2, 5, cbRandom)); 
console.log(mainFunc(2, 5, cbPow)); 
console.log(mainFunc(2, 5, cbAdd)); 
console.log(mainFunc(2, 5, 'not a func'));