//==========================================
//==========================================
//      Копирование объектов и ссылки
//==========================================
//==========================================
/*
 При копировании переменной объекта 
 копируется ссылка, но сам объект не 
 дублируется.
*/
{
    let obj = {key: 'Value One'};
    let obj2 = obj;

    obj2.key = 'Value Two';

    // console.log(obj); // {key: 'Value Two'}
}

// Сравнение по ссылке ----------------------
{
    let obj = {};
    let obj2 = obj;

    // console.log(obj == obj2); // true
    // console.log(obj === obj2); // true
}
{
    let obj = {};
    let obj2 = {};

    // console.log(obj == obj2); // false
    // console.log(obj === obj2); // false
}

// Клонирование и объединение ---------------
{ // НЕ ГЛУБОКОЕ 'for..in'
    let obj = {
        key_1: "value 1",
        key_2: "value 2",
    };

    let objClone = {};

    for(let key in obj) {
        objClone[key] = obj[key];
    }

    // console.log(obj === objClone); // false
    // console.log(objClone);
    // {key_1: 'value 1', key_2: 'value 2'}
}
{ // НЕ ГЛУБОКОЕ Object.assign
    let obj = {
        key_1: "value 1",
        key_2: "value 2",
    }

    let obj2 = {
        a: 'letter a',
        b: 'letter b',
    }

    let objClone = {key_1: "zero",};

    Object.assign(objClone, obj, obj2);

    // console.log(objClone);
    //{key_1: 'value 1', key_2: 'value 2', a: 'letter a', b: 'letter b'}
}
{ // ГЛУБОКОЕ рекурсия
    let obj = {
        key_1: 1,
        key_2: 2,
        key_deep_1: {
            key_deep_A: 'a',
            key_deep_B: 'b',
        },
        key_3: ['1_k3', '2_k3'],
    };

    let objClone = {};

    function recurtionClone(source, clone) {
        for(let key in source) {
            if(source[key] instanceof Object &&
                Array.isArray(source[key]) === false) {
                    clone[key] = {};
                    clone[key] = recurtionClone(source[key], clone[key]);
                continue;
            }
            clone[key] = source[key];
        }
        return source;
    }

    recurtionClone(obj, objClone);

    // console.log(objClone);
    // {key_1: 1, key_2: 2, key_deep_1: {…}, key_3: Array(2)}
}

// Глубокое structuredClone()
// (новый глобальный метод)
{
    let obj = {
        key_1: 1,
        key_2: 2,
        key_deep_1: {
            key_deep_A: 'a',
            key_deep_B: 'b',
        },
        key_3: ['1_k3', '2_k3'],
    };

    let objClone = structuredClone(obj);
    // console.log(objClone);
    //{key_1: 1, key_2: 2, key_deep_1: {…}, key_3: Array(2)}
}

// Глубокое JSON.stringify
{
    let obj = {
        key_1: 1,
        key_2: 2,
        key_deep_1: {
            key_deep_A: 'a',
            key_deep_B: 'b',
        },
        key_3: ['1_k3', '2_k3'],
    };

    let objClone = JSON.parse(JSON.stringify(obj));
    // console.log(objClone);
    //{key_1: 1, key_2: 2, key_deep_1: {…}, key_3: Array(2)}
}