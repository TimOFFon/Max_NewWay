//===================================================
//===================================================
//          Конструктор, оператор "new"
//===================================================
//===================================================
/*
     new - оператор функции-конструктора для создания
           множества однотипных объектов
*/

/*
    Функция-конструктор  - технически обычная функция
                           но есть два соглашения:

        1. Имя функции-конструктора с большой буквы.

        2. Должна выполнятся только оператором new
*/
// Пример -----------------------------------------
{
    function User(name) {
        this.name = name;
        this.isAdmin = false;
    }

    let user = new User('Jack');

    // console.log(user.name); // Jack
    // console.log(user.isAdmin); // false
}//------------------------------------------------

//================================================
//================================================
//          Проверка на вызов в режиме
//          конструктора: new.target
//================================================
//================================================
// Пример
{
    function User() {
        console.log(new.target);
    }

    // User(); // undefined
    // new User(); // ƒ User()
}//------------------------------------------------



//=================================================
//=================================================
//                   MDN "new"
//=================================================
//=================================================
// Создание
/*  
    1. Написать функцию, которая задаст тип объекта

    2. Создать экземпляр объекта, используя new

 */

// Ход выполнения
/*

1. Создается новый объект наследующий fun.prototype

2. Вызывается конструктор, с указанными аргументами
   и this, привязанным к созданному объекту.
   Если арг. не указаны, вызывается без арг.

3. Результатом выражения new яв-ся объект, возвра-
   щённый конструктором.
*/

// Добавление св-ва к ранее определённому типу
{
    function Car() {}
    let car1 = new Car();

    // console.log(car1.color); // undefined

    Car.prototype.color = null;
    // console.log(car1.color); // null

    car1.color = "black";
    // console.log(car1.color); // black
}//-----------------------------------------------

//Пример Типов объекта и экземпляров
{
    // созд. типа
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // созд экземп.
    let mycar = new Car('Volga', '24.10', 1987);
    let elenascar = new Car('Tesla', 'Model 3', 2023);
    

    // Объект в качестве св-ва ---------------------
    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    let iam = new Person('Timofey', 42, 'M');
    let elena = new Person('Elena', 35, 'F');

    Car.prototype.owner = null;
    mycar.owner = iam;
    elenascar.owner = elena;

    // console.log(mycar.owner.name); // Timofey
    // console.log(elenascar.owner.age); // 35
}//--------------------------------------------------



//===================================================
//===================================================
//                  Задачи LJS 4.5
//===================================================
//===================================================
/*    
              Две функции - один объект

   Возможно ли создать функции A и B, 
    чтобы new A() == new B()?
*/
{
    let obj = {};

    function A() {
        return obj;
    }
    function B() {
        return obj;
    }

    let a = new A();
    let b = new B();

    // console.log( a == b ); // true
}//-------------------------------------------------

/*
      Создайте калькулятор при помощи конструктора, 
      new Calculator

      Создайте функцию-конструктор Calculator, 
      которая создаёт объекты с тремя методами:4

      read() запрашивает два значения при помощи prompt 
      и сохраняет их значение в свойствах объекта.

      sum() возвращает сумму этих свойств.

      mul() возвращает произведение этих свойств.

      let calculator = new Calculator();
      calculator.read();

      alert( "Sum=" + calculator.sum() );
      alert( "Mul=" + calculator.mul() );

*/
{
    function Calculator() {
        this.read = function() {
            this.value_1 = +prompt('введи первое значение', 0);
            alert(`значение-1 ${this.value_1}`);
            this.value_2 = +prompt('введи второе значение', 0);
            alert(`значение-2 ${this.value_2}`);
        };

        this.sum = function() {
            return alert(this.value_1 + this.value_2);
        };

        this.mul = function() {
            return alert(this.value_1 * this.value_2);
        };
    }

    let calc = new Calculator();
    // calc.read();// 2, 5
    // calc.sum();// 7
    // calc.mul()// 10
}//----------------------------------------------------


/*
      Создайте new Accumulator

Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. 
Начальное значение устанавливается в аргументе 
конструктора startingValue.

Метод read() должен использовать prompt для считывания 
нового числа и прибавления его к value.

Другими словами, свойство value представляет собой 
сумму всех введённых пользователем значений, 
с учётом начального значения startingValue
*/
{
    function Accumulator(startingValue) {
        this.value = +startingValue || 0;
        this.read = function() {
            this.value += +prompt('Введи число', 0);
        };
    }

    // let accumulator = new Accumulator(100);
    // accumulator.read(); // 5
    // accumulator.read(); // 5
    // accumulator.read(); // 5

    // alert(accumulator.value); // 115
}