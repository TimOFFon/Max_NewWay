//=====================================================
//=====================================================
//          Задачи с codewars (Objects)
//=====================================================
//=====================================================




//=======================================================
//=======================================================
//                    первая
//=======================================================
//=======================================================
/*
https://www.codewars.com/kata/5aa1ca484a6b34f9a000011e/train/javascript

6 kyu

                            Object depth   (не решил)


Напишите функцию JavaScript, которая возвращает глубину 
объекта. Эта функция принимает один аргумент, 
который может быть любым типом данных.

Глубина объекта, скажем, obj, это количество вложенных 
объектов obj.

Предположим, что пустой объект имеет глубину 0, 
а непустой объект, но без вложенных объектов, 
имеет глубину 1.

---------------------------------------------------
var obj = {a: 1, b: {c: 2}};

имеет глубину 2, потому что это непустой объект, 
содержащий другой непустой объект.
---------------------------------------------------

var emptyObj = {};

имеет глубину 0, потому что он пуст
----------------------------------------------------

var obj = {a: 1, b: 2, c: 3};

имеет глубину 1
---------------------------------------------------

Массивы всегда должны возвращать глубину 0.

Будьте осторожны с null
*/
let obj0 = {a: 1, b: {c: 2}};
let obj1 = {};
let obj2 = {a: 1, b: 2, c: 3};
let obj3 = [];
let obj4 = {a: 1, b: {c: 2, f: {d: 3}}};
let objN = null;

function depth(obj) {
    var d = 0;
    
    if (obj === null ||
    Array.isArray(obj) ||
    typeof obj === 'object' && 
    Object.keys(obj).length === 0) {
        return 0;
    }
    
    let counter = function(obj) {
        d++;
        for(let key in obj) {
            if(obj[key] !== null &&  
                typeof obj[key] === 'object' && 
                Object.keys(obj[key]).length !== 0) {
                    counter(obj[key]);
            }
        }
  };
  counter(obj);
  return d;
}


//   console.log(depth(obj0));//2
//   console.log(depth(obj1));//0
//   console.log(depth(obj2));//1
//   console.log(depth(obj3));//0
//   console.log(depth(obj4));//3
//   console.log(depth(objN));//0
//====================================================
//------------- решения с кодварс ------------------
//====================================================
/*
function depth(obj) {
  var d = 0;
  if(obj === null) return 0
  if(Array.isArray(obj)) return 0
 
  if(typeof obj === 'object'){
    if(Object.keys(obj).length === 0) return 0
    
    const fn = (obj, depth) =>{
      if(depth > d){
        d = depth
      }
      
      for(let key in obj){
        if(obj[key] !== null &&  typeof obj[key] === 'object' && Object.keys(obj[key]).length !== 0){
          fn(obj[key], depth + 1 )
        }
      }
      
    }
    fn(obj,1)
  }
  return d;
}
*/





//=======================================================
//=======================================================
//                    вторая
//=======================================================
//=======================================================
/*
https://www.codewars.com/kata/596cf5b0e1665a2d02000007/train/javascript

                            Merged Objects.  (решил)

В этом ката вам будет предоставлен массив объектов 
a=[{obj1},{obj2},...]. Вы вернете объединенные объекты. 
Если ключ существует в одном или нескольких объектах, 
и поскольку у вас не может быть повторяющихся значений 
для одного ключа в вашем окончательном наборе, 
вы сохраняете самое последнее значение для этого ключа, 
как показано в примере ниже.

var a={1:'1',2:'2',3:'3'},
    b={3:'4',5:'6',6:'7',7:'8'},
    c={5:'9',8:'9',6:'12',23:'35'}
    o=[a,b,c];
var objConcat=(o)=> {
  return a.concat(b).concat(c) ?
//
должно вернуться следующее
{ '1': '1','2': '2','3': '4','5': '9','6': '12',
'7': '8','8': '9','23':'35' }

//
ключ 3 существует как в a, так и в b,
поэтому в окончательном результате выше мы 
сохраняем {3:'4'} потому что это последнее

// 
ключ 5 существует как в b, так и в c,
поэтому мы сохраняем {5:'9'} от c

// 
ключ 6 существует как в b, так и в c
поэтому мы сохраняем {6:'12'} от c
};
*/
var a={1:'1',2:'2',3:'3'},
    b={3:'4',5:'6',6:'7',7:'8'},
    c={5:'9',8:'9',6:'12',23:'35'}
    o=[a,b,c];

function objConcat(arr){
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let  elemObj = arr[i]; 
        for(let key in elemObj) {
            obj[key] = elemObj[key];
        }
    }
    return obj;
}

// console.log(objConcat(o));
//==================================================
//                  10min
//==================================================
/* Решения с codewars
-------------------------------------------------------
function objConcat(objects) {
  return Object.assign({}, ...objects);
}
-----------------------------------------------------
function objConcat (objects) {
  return objects.reduce((acc, curr) => ({ ...acc, ...curr }), {})
}
--------------------------------------------------------
*/






//=======================================================
//=======================================================
//                    третья
//=======================================================
//=======================================================
/*
https://www.codewars.com/kata/560cd60f215a80dc00000049/train/javascript

                       Expressive Objects (не решенная)

Функция 

function evaluate(left, op, right)

с учетом двух операндов (левого и правого) 
и оператора (op) будет вычисляться и возвращаться 
результат.

Нпример:------------------------------------------

var left = {
    'multiply': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [5, 6, 7, 8, 9],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
};


Вы будете редуцировать каждый массив на основе его ключа.
Итак, вы начнете с add(ing) [1,2,3,4,5] => 15


Затем subtract(ing) [5, 6, 7, 8, 9] => -25 etc. 

После того, как все массивы будут редуцированны,
вы будете выполнять операцию с корневым ключом на всех
редуцированных массивах. 

Так что в этом случае вы будете вычислять каждое 
приведенный массив друг с другом. 
Порядок ВСЕГДА - значение ключа «добавить» первым,
затем «вычесть», затем «умножить» и, наконец,
'разделять'.

var right = {
    'subtract': {
        'add': [1, 2, 3, 4, 5], //15
        'subtract': [1, 2, 3, 4, 5],//-25
        'multiply': [1, 2, 3, 4, 5],//120
        'divide': [1, 2, 3, 4, 5]// 0.0083333333333333
    }
};
evaluate(left, 'add', right) === -467.0083333333333

*/
var op = 'add';

var left = {
    'multiply': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [5, 6, 7, 8, 9],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
};

var right = {
    'subtract': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [1, 2, 3, 4, 5],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
};

function evaluate(left, op, right) {
    function blackBox(obj) {
        let rootKey = Object.keys(obj);
        let insideKeys = obj[rootKey];
        let arrRes = [];
        let objResult = null;

    function mathCombain(key, arr) {
        let result = null;
        if(key === 'add') result = arr.reduce((acc, curr) => (acc) + (curr), 0);
        if(key === 'subtract') result = arr.reduce((acc, curr) => (acc) - (curr));
        if(key === 'multiply') result = arr.reduce((acc, curr) => (acc) * (curr));
        if(key === 'divide') result = arr.reduce((acc, curr) => (acc) / (curr));
        return result;
    }

    for(let key in insideKeys) {
        let elem = mathCombain(key, insideKeys[key])
        arrRes.push(elem);
    }

    let strKey = JSON.stringify(rootKey).match(/\w+/g);
      return objResult = mathCombain(strKey[0], arrRes);
    }
    
    let leftObj = blackBox(left);
    let rightObj = blackBox(right);
    
    function finishComp(L, O, R) {
        if(O === "add") return (L) + (R);
        if(O === "subtract") return (L) - (R);
        if(O === "multiply") return (L) * (R);
        if(O === "divide") return (L) / (R);
    }
    
    let finishResult = finishComp(leftObj, op, rightObj);

    return finishResult;
}
// evaluate(left, op, right);



//=======================================================
//=======================================================
//                    четвертая
//=======================================================
//=======================================================
/*
https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript

  (7)                    Numbers to Objects   (решил)

Вам будет предоставлен массив чисел.

Для каждого числа в массиве вам нужно будет создать 
объект.

Ключ объекта будет числом в виде строки. 
Значением будет соответствующий код символа в виде 
строки.

Возвращает массив результирующих объектов.

Все входные данные будут массивами чисел. 
Все коды символов являются допустимыми 
строчными буквами. 

Входной массив не будет пустым.
*/
let arr1 = [118,117,120];
let arr2 = [101,121,110,113,113,103];

function numObj(s){
    let arr = [];
  for (let i = 0; i < s.length; i++) {
    let elem = s[i];
    arr.push({[`${elem}`]: String.fromCharCode(elem)});
  }
  return arr;
}

// console.log(numObj(arr1)); 
//0: {118: 'v'}
//1: {117: 'u'}
//2: {120: 'x'}
// console.log(numObj(arr2));
//0: {101: 'e'}
//1: {121: 'y'}
//2: {110: 'n'}
//3: {113: 'q'}
//4: {113: 'q'}
//5: {103: 'g'}
//================================================
//                решение с codewars
//===============================================
/*
function numObj(s){
  return s.map(n => {
    return { [n]: String.fromCharCode(n) };
  });
}
*/





//=======================================================
//=======================================================
//                    пятая
//=======================================================
//=======================================================
/*
https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript

(7)                  Combine objects   (решил)

Ваша задача — написать функцию, которая принимает два 
или более объектов и возвращает новый объект, 
объединяющий все входные объекты.

Все свойства входного объекта будут иметь только 
числовые значения. Объекты объединяются вместе, 
так что значения совпадающих ключей складываются вместе.

Например:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }

combine(objA, objB) /
/ Returns { a: 13, b: 20, c: 36, d: 3 }

Функция объединения должна быть добросовестной, 
поэтому не должна изменять входные объекты.
*/

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

function combine(...arg) {
    let arr = arg;
    let obj = {};

    function methodSum(old, fresh) {
        if(old) return +old + +fresh;
        return fresh;
    }

    for (let i = 0; i < arr.length; i++) {
        let elemObj = arr[i];
        for(let key in elemObj) {
            obj[key] = methodSum(obj[key], elemObj[key]);
        }
    }
    return obj;
}

// console.log(combine(objA, objB));
// //{a: 13, b: 20, c: 36, d: 3}
// console.log(combine(objA, objB, objC, objD));
// //{a: 18, b: 20, c: 39, d: 14, e: 8}
// console.log(combine({}, {}, objC, {}));
// //{a: 5, d: 11, e: 8}

//==================================================
//               решение с codewars
//==================================================
/*
const combine = (...params) => 
params.reduce((a, b) => {
  for (const x in b) 
  { a[x] = x in a ? a[x] + b[x] : b[x] };
  return a;
 }, {});
 ------------------------------------------------------
 function combine() {
  var obj = {}

  for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
          obj[key] = obj[key] ? 
          obj[key] + arguments[i][key]: arguments[i][key]
        }
  }

  return obj;
}
------------------------------------------------------
function combine(...arg) {
  return arg.reduce( (result,obj) => {
    Object.keys(obj).forEach( key => result[key] = (result[key] || 0) + obj[key] );
    return result;
  }, {} );
}
*/




//=======================================================
//=======================================================
//                    шестая
//=======================================================
//=======================================================
/*
https://www.codewars.com/kata/59418db3f5c394eca80000ef/train/javascript

                        Walk the Object Path  (не решил)


    Реализуйте метод find, который принимает объект с 
    двумя параметрами и путь. 
    Путь будет представлять собой строку свойств, 
    разделенных точками, которую мы будем использовать 
    для обхода нашего объекта, чтобы найти целевое 
    значение.

Обязательно обрабатывайте передаваемые индексы массива. 
Например, если у нас есть объект: 
{люди: ['Джон', 'Дэйв', 'Лиза'] } и путь — «люди.1», 
целевое значение — «Дэйв», что является строкой 
в позиции 1. внутри массива людей.

Также этот метод должен обрабатывать недопустимые пути.
 Если у нас есть объект {user: {name: 'Dan' } } и путь 
 'user.wallet.money', мы должны вернуть 
 значение undefined. 
 
 Действительные пути являются исключительными для 
 свойств объекта, которые не унаследованы, 
 другими словами, 
 они специфичны для этого объекта и не требуют 
 поиска в цепочке прототипов.
*/

let object = { 
    user: { 
        name: { 
          first: 'John', 
          last: 'Snow' 
        }
    } 
  };

  let object2 = {
    user: {name: 'Dan' } 
  };

  let path = 'user.name.first';

  let path2 = 'user.wallet.money';


function find(object, path) {
    let arrWord = path.split(/[''.]/g);
    let result = object;

    function construct(key) {
        return [key];
    }
 
    for (let i = 0; i < arrWord.length; i++) {
        let key = arrWord[i];
        result = result?.[construct(key)];
    }
    
    if(object.hasOwnProperty(result)) {
        return result;
    }
    return result;
}

// console.log(find(object, path));
// console.log(find(object2, path2));
// console.log(object['first']);
// console.log(object['user']['name']['first']);
// console.log(object('user'));
// console.log(Object.prototype.hasOwnProperty(object, 'first'));