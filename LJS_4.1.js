//===========================================
//===========================================
//                 Objects
//===========================================
//===========================================

//----------- Создание---------------
{
    let obj = {};
    let obj1 = new Object();
}

//----------- Удаление св-ва ---------

{
    let obj = {
        'key one': 'vaue one',
        'key two': 'vaue two',
    };

    delete obj['key two'];
    // console.log(obj); // key one: "vaue one"
}

//-------- Константа изменияется -------

{ 
    const obj = {
        one_key: "one value",
        two_key: "two value",
    };

    // ОШИБКА (ПРИСВАИВАЕМ ДРУГОЕ ЗНАЧЕНИЕ)
    // obj = {
    //     another_key: 'another value',
    // };
    // console.log(obj); // Uncaught TypeError

    // ОШИБКИ НЕТ (ИЗМЕНЯЕМ СОДЕРЖИМОЕ)
    obj.one_key = 'another value one';
    obj.two_key = 'another value two';
    // console.log(obj);
    //{one_key: 'another value one', two_key: 'another value two'}
}

//------------ Квадратные скобки -----------

// ОШИБКА
{
    let obj = {};
    // obj.one key = true;
}
/*
   Правила наименования переменных - не иметь 
   пробелов, не начинаться с цифр, без 
   спец символов, кроме $ и _
*/

// ОШИБКИ НЕТ
{
    let obj = {};
    obj['one key'] = true;
}

// ДОСТУП ЧЕРЕЗ ПЕРЕМЕННУЮ
{
    let obj = {};
    let value = 'one key';
    obj[value] = true;
    // console.log(obj); // {one key: true}
}

// ВЫЧИСЛЯЕМЫЕ СВ-ВА
{
    let obj = {};
    // let value = prompt('Введи число', 5);
    // obj[value] = 'под ключем 5 эта строка';
    // console.log(obj);
    //{5: 'под ключем 5 эта строка'}
}

//--------- Ограничения на ИМЕНА ---------
{
    let obj = {};
    obj.__proto__ = 'value';
    // console.log(obj.__proto__);
    // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
}

//---------- Проверка наличия св-ва --------
{
    let obj = {};
    // console.log('key' in obj); // false
}

//----------- Цикл 'for..in' ------------------
{
    let obj = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
    };

    // for(let key in obj) {
    //     console.log(key);
    //     console.log(obj[key]);
    // }
    // 1 1 2 2 3 3 4 4
}

//------------ Упорядочивание св-в ----------
{
    let obj = {
        1: 'one',
        5: 'five',
        3: 'three',
    };

    // for(let key in obj) {
    //     console.log(key);
    // }
    // 1 3 5
}

{
    let obj = {
        '+1': 'one',
        '+5': 'five',
        '+3': 'three',
    };

    // for(let key in obj) {
    //     console.log(key);
    // }
    // +1 +5 +3
}

//============================================
//============================================
//                   ЗАДАЧИ
//============================================
//============================================
/*
Привет, object

Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/
{
    let obj = new Object();
    obj.name = 'John';
    obj.surname = 'Smith';
    obj.name = 'Pete';
    delete obj.name;
}

/*-----------------------------------------
Проверка на пустоту

Напишите функцию isEmpty(obj), которая 
возвращает true, если у объекта нет свойств, 
иначе false.
*/
{
    let obj = {};

    function isEmpty(obj) {
        for(let key in obj) {
            if(obj[key] in obj === 'true') {
                return false;
            } 
        }
        return true;
    }

    // console.log(isEmpty(obj)); // true
}

/*--------------------------------------------
Объекты-константы?

Можно ли изменить объект, объявленный с 
помощью const? Как вы думаете?
*/
{
    const user = {
        name: "John"
      };
      
      // это будет работать?
      user.name = "Pete";

      // Ошибки не будет
}

/*-----------------------------------------
Сумма свойств объекта

У нас есть объект, в котором хранятся зарплаты
 нашей команды:

Напишите код для суммирования всех зарплат 
и сохраните результат в переменной sum. 
Должно получиться 390.

Если объект salaries пуст, то результат 
должен быть 0.
 */
{
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      };

      let sum = 0;

      for(let key in salaries) {
        sum += salaries[key];
      }

    //   console.log(sum); // 390
}

/*--------------------------------------------
Умножаем все числовые свойства на 2

Создайте функцию multiplyNumeric(obj), которая 
все числовые свойства объекта obj на 2.

Обратите внимание, что multiplyNumeric не 
нужно ничего возвращать. Следует напрямую 
изменять объект.

P.S. Используйте typeof для проверки, что 
значение свойства числовое.
*/
{
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };

      function multiplyNumeric(obj) {
        for(let key in obj) {
            if(typeof obj[key] === 'number') {
                obj[key] *= 2;
            }
        }
      }

      multiplyNumeric(menu);

    //   console.log(menu);
      //{width: 400, height: 600, title: 'My menu'}
}