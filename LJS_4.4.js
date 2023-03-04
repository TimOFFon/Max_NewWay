//==========================================
//==========================================
//         Методы объекта "this"
//==========================================
//==========================================
// Пример создания метода объекта
{
    let obj = {
        key: 'Value'
    };

    obj.method = function() {
        console.log('Go!');
    };

    // obj.method(); // Go!
}

// Пример создания метода --------------------
{
    let obj = {};

    function anyMethod() {
        console.log("Go Again!");
    }

    obj.anyMethod = anyMethod;

    // obj.anyMethod(); // Go Again!
}

// Пример создания метода--------------------
{
    let obj = {
        objMethod: function() {
            console.log("I am Object Method");
        }
    };

    // obj.objMethod(); // I am Object Method
}

// Пример сокращенной записи -----------------
{
    let obj = {
        objMethod() {
            console.log('I am short Method');
        }
    };

    // obj.objMethod(); // I am short Method
}

// Пример использования "this" --------------
{
    let obj = {
        keyOne: 1,
        keyTwo: 2,

        objMethod() {
            console.log(this.keyOne);
        }
    };

    // obj.objMethod(); // 1
}

// Пример использования "this"---------------
{
    let objOne = {key: 'Value One fron objOne'};
    let objTwo = {key: 'Value Two from objTwo'};

    function actorMethod() {
        console.log(this.key);
    }

    objOne.method = actorMethod;
    objTwo.method = actorMethod;

    // objOne.method();// Value One fron objOne
    // objTwo.method();// Value Two from objTwo

    // можно вызывать через квадратные скобки

    // objOne['method']();// Value One fron objOne
    // objTwo['method']();// Value Two from objTwo
}

// Пример 'this' в стрелочной функции
{
    let obj = {
        key: 'I am value',
        anyMethod() {
            let arrow = () => console.log(this.key);
            arrow();
        }
    };

    // obj.anyMethod(); // I am value
}

//===============================================
//===============================================
//                  ЗАДАЧИ LJS4.4
//===============================================
//===============================================
/*
Использование "this" в литерале объекта

Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству 
объекта ref? Почему?
 */
{
    function makeUser() {
        return {
          name: "John",
          ref: this
        };
      }
      
    //   let user = makeUser();
      
    //   console.log( user.ref.name );
      /* FUCK UP.... (спросить на qa)
             Результат будет "John".
             1. Присваевается вызов функции
                которая возвращает объект,
                т.е. мы присваеваем объект
                переменной "user";

             2. а)Через точку мы инициируем 
                хост между переменной "user" 
                (которой мы присвоили объект)
                и "ref"

                в)"ref" содержит в значении "this"
                который вычисляется в момент вызова,
                в данный момент в объекте "user",
                но "this" не вызывается через
                точку и не возвращается методом,
                он содержит unefined от функции
                "makeUser"


                c) undefined.name = ОШИБКА

       */
}//------------------------------------------------

// Пример с работающей чтрочкой из задачи
{
    function makeUser() {
        return {
          name: "John",
          ref() {
            return this;
          }
        };
      }
      
    //   let user = makeUser();
      
    //   console.log( user.ref().name ); // John
}//---------------------------------------------

/*----------------------------------------------
Создайте калькулятор

Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.

sum() (суммировать) возвращает сумму сохранённых значений.

mul() (умножить) перемножает сохранённые значения и возвращает результат
*/
{
    let calculator = {
        value_1: 0,
        value_2: 0,
        sum: 0,
        mul: 0,
        read() {
            this.value_1 = +prompt('Введите первое значение', 0);
            alert(`Вы ввели ${this.value_1} в первое значение`);
            this.value_2 = +prompt('Введите второе значение', 0);
            alert(`Вы ввели ${this.value_2} в второе значение`);
        },
        sum() {
            this.sum = this.value_1 + this.value_2;
            alert(`Результат суммы ${this.sum}`);
            return this.sum;
        },

        mul() {
            this.mul = this.value_1 * this.value_2;
            alert(`Результат произаедения ${this.mul}`);
            return this.mul;
        }
      };

    //   calculator.read();
    //   calculator.sum();
    //   calculator.mul();
}

/*----------------------------------------------
Цепь вызовов

У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep();
*/
{
    let ladder = {
        step: 0,
        up() {
           this.step++;
           return this;
        },
        down() {
          this.step--;
          return this;
        },
        showStep: function() { // показывает текущую ступеньку
          alert( this.step );
          return this;
        }
      };

    // ladder.up().up().down().showStep().down().showStep();
}



//=============================================
//=============================================
//                    MDN "this"
//=============================================
//=============================================
// Пример this в глобальной видимости----------
{
    // console.log(this === window); // true

    // a = 37;
    // console.log(window.a); // 37

    // this.b = 'MDN';
    // console.log(window.b); // MDN
    // console.log(b); // MDN
}//--------------------------------------------

/*
   В пределах функции значение this зависит от 
   того каким образом вызвана функция.
*/

// Пример вызова с не устоновленным в функции-------
// this, в НЕ СТРОГОМ режиме
{
    function f1() {
        return this;
    }

    // console.log(f1() === window); // true
}//-----------------------------------------------

// Пример вызова с не устоновленным в функции-------
// this, В СТРОГОМ режиме
{
    function f2() {
        'use strict';
        return this;
    }

    // console.log(f2() === window); // false
    // console.log(f2() === undefined); // true
}//------------------------------------------------

// Пример вызова с неустоновленном в функции this
// НО вызванной как метод!
{
    function f3() {
        'use strict';
        return this;
    }

    // console.log(window.f2() === window); // true
    // console.log(window.f2() === undefined); // false
}//---------------------------------------------------

/*----------------------------------------------------
   Для того чтобы установить this в определённое 
   значение, используется call() и apllly()
*/
{
    let obj = {a: 'Custom'};

    a = 'Global';

    function whatsThis() {
        return console.log(this.a); 
    }

    // whatsThis(); // Global
    // whatsThis.call(obj); // Custom
    // whatsThis.apply(obj); // Custom
}//--------------------------------------------------

// Пример с аргументами в call() и apply()
{
    function add(c, d) {
        return console.log(this.a + this.b + c + d);
    }

    let obj = {a: 1, b: 3};

    // add.call(obj, 5, 7); // 16
    // 1-й аргумент это объект
    //2-3-й агрументы это аргумунты для передачи 
    //      в функцию к которой привязан call

    //apply отличается от call, тем что агрументы
    //в него передаются массивом
    // add.apply(obj, [10, 20]); // 34
}//--------------------------------------------------

// Пример с bind ------------------------------------
{
    function zero() {
        return this.a;
    }

    let one = zero.bind({a: 'забаиндили'});
    // console.log(one()); // забаиндили

    let two = one.bind({a: 'перебаиндили'}); // не сработает
    // console.log(two()); // забаиндили

    three = {
        a: 777, 
        zero: zero, 
        one: one,
        two: two
    }

    // console.log(three.a); // 777
    // console.log(three.zero()); // 777
    // console.log(three.one()); // забаиндили
    // console.log(three.two()); // забаиндили

}//--------------------------------------------------



//==================================================
//==================================================
//         MDN "this" в стрелочной функции 
//==================================================
//==================================================

/*
    В стрелочных функциях "this" привязан к окружению,
    в котором была создана функция.
    В глобальной области "this" будет указывать на 
    глобальный объект.
*/
//Пример -------------------------------------------
{
    globalObject = this;

    // let arrowFun = (() => this);

    // console.log(arrowFun() === globalObject); // true
}//-------------------------------------------------

//Пример вызова стрел.функции (с this) как метод объекта
{ 
    let arrowFun = (() => this);

    let obj = {arrowFun: arrowFun};

    // console.log(obj.arrowFun() === globalObject); // true
}//----------------------------------------------------

//Попытка установить this с помощью call-------------
{
    let arrowFun = (() => this);

    let obj = {arrowFun: arrowFun};

    // console.log(arrowFun.call(obj) === globalObject); // true
}// то же самое с bind -------------------------------

/*==================================================
   То же самое с this созданных в других функциях,
   их область видимости будет привязанно к окружению
===================================================*/

//Пример областью this стрел.функции в другой функции
{
    let obj = {
        method: function() {
            let x = (()=> this);
            return x;
        }
    }
}





