/*
	Вивчення JavaScript, об'єкти:
	- Створення
	- Властивості
	- Методи об'єктів
	node src/app/lessons/05/l-05.js
*/

'use strict';

console.log('\nLesson 05 - Start');

//
// Робота з об'єктами
//

// JavaScript спроектований за простою об'єктно-орієнтованою парадигмою:

// Об'єкт - це сукупність властивостей,
// що пов'язують ім'я та відповідне значення.

// Об'єкти в JavaScript, як і в багатьох інших мовах програмування,
// схожі на об'єкти реального життя. Тому їх легше зрозуміти,
// проводячи паралеллі з реальними об'єктами.

// Наприклад, чашка.

// Має властивості: колір, форма, вага, матеріал з якого вона зроблена і т.д.
// Так само, об'єкти JavaScript мають властивості, які визначають їх характеристики.

// Майже все в JavaScript є об'єктом.

// Всі примітивні типи (за винятком null) і undefined
// обробляються, як об'єкти. Вони можуть мати властивості,
// і у них є всі риси, притаманні об'єктам.

// Властивість може бути функцією, і в цьому випадку
// властивість зветься методом. На додаток до об'єктів, що визначені в браузері,
// ви можете визначити свої власні об'єкти.


//
// Object.assign()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// 

// Важливий метод Object.assign дозволяє копіювати перелічувані властивості від одного об'єкта до іншого.

// Використаємо його, щоб розширити для нашого використання існуючий об'єкт console.
// Для цього створимо новий об'єкт consoleUpdate і додамо до нього корисні методи типу "заголовок" та "розділювач"
// А потім додамо методи з consoleUpdate до console через Object.assign:

function augmentConsole(root) {
	const consoleUpdate = {
		h1: function (arg) {
			console.log(`\n\n=== ${arg} ===`);
		},
		s: function () {
			console.log('--------------------------------------');
		}
	};
	Object.assign(console, consoleUpdate);
}

augmentConsole(this);

// Перевіримо роботу розширеної консолі:
console.h1('Objects in JavaScript'); // Показати сепаратор
console.log('Creation and properties'); // Показати заголовок
console.s(); // Показати текст

// Визначимо новий об'єкт - дуже простий, він просто посилається на визначений вище.
// Його єдина мета - давати змогу писати коротший код:
// замість console.log тепер можна писати c.l і т.д.:

var c = {
	l: console.log,
	h: console.h1,
	s: console.s
};

// Перевіримо:
c.h('Objects\' properties'); // заголовок
c.l('Creation and properties'); // текст
c.s(); // Показати сепаратор

//
// Об'єкти і їх властивості
//

// У JavaScript об'єкт має асоційовані з ним властивості. Вони визначають його характеристики.

// Властивість можна розуміти як звичайну змінну,
// але закріплену за даним об'єктом.

// Отримати доступ до властивості об'єкта можна через оператор доступу "крапка":

console.log;

// Як і всі змінні JavaScript, ім'я об'єкта (яке теж може бути змінною) і ім'я властивості є чутливими до регістру.

// Ви визначаєте властивість, просто вказуючи її значення.
// Наприклад, створимо об'єкт myCar і визначимо його властивості make, model, і year:

var myCar = new Object();

myCar = {};

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

// Доступ до властивостей об'єктів JavaScript можна отримати через квадратні дужки.
// Об'єкти є асоціативними масивами, оскільки кожна властивість асоційована з ім'ям, через яке можна отримати до неї доступ.

// Отже, доступ до властивостей об'єкта myCar можна отримати і так:

myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

// Імена властивостей об'єкта можуть бути валідними рядками JavaScript,
// або тим, що можна перетворити на рядок, включаючи і порожній рядок.

// Як би там не було, доступ до імені властивості за невалідним
// JavaScript-ідентифікатором (наприклад ім'я властивості містить
// в собі прогалину і тире, або починається з цифри)
// може бути отриманий з використання квадратних дужок.

// Цей спосіб також корисний у разі, якщо імена властивостей
// визначаються динамічно в процесі виконання скрипта. Приклади:

var myObj = new Object();
var str = 'myString';
var rand = Math.random();
var obj = {};

myObj.type = 'Dot syntax';
// Прогалина у імені:
myObj['date created'] = 'String with space';
myObj[str + rand] = 'String value';
myObj[rand] = 'Random Number';
myObj[obj] = 'Object'; // перетвориться на: myObj['[object Object]'] = 'Object';
myObj[''] = 'Even an empty string';

// Порівняймо:
console.h1('myObj[\'[object Object]\'] = Object'); // Заголовок
console.log(obj); // [object Object]  (!)
console.log(myObj.obj); // undefined  (!!)
console.log(myObj[obj]); // Object    (!!!)

// Ви також можете отримати доступ до властивості,
// скориставшись строковою змінною, в якій зберігається ім'я властивості:

var propertyName = 'make';
myCar[propertyName] = 'Ford'; // myCar['make'] = 'Ford'

// Можна користуватися квадратними дужками в конструкції
// for ... in, щоб виконати ітерацію (тобто перелічити)
// усі ті властивості об'єкта, для яких це дозволено.

// Наступна функція показує всі властивості об'єкта,
// коли ви передаєте в неї сам об'єкт і його ім'я як аргументи
// (параметри) функції:

console.h1('showPrrops');

function showProps(obj, objName) {
	var result = '';
	for (var propName in obj) {
		if (obj.hasOwnProperty(propName)) {
			result += objName + '.' + propName + ' = ' + obj[propName] + '\n';
		}
	}
	return result;
}
console.log(showProps(myCar, 'myCar'));

//
// Як перелічити усі властивості об'єкта?
//

// Починаючи зі стандарту ECMAScript 5,
// є три стандартних способи для переліку властивостей об'єкта:

// 1.
// Цикл for ... in — цей метод проходить всі властивості об'єкта
// (які дозволено перераховувати) і його ланцюга прототипів.

// 2.
// Object.keys(о) — Цей метод повертає масив з іменами всіх власних
// (тобто тих, що не знаходяться у ланцюзі прототипів) перелічуваних
// властивостей ("ключів", "keys") об'єкта o.

// 3.
// Object.getOwnPropertyNames(о) — Цей метод повертає масив
// з іменами всіх власних властивостей (перераховуваних чи ні) об'єкта o.

// До ECMAScript 5, не було стандартного способу для переліку всіх властивостей об'єкта.
// Результат досягався такими функціями, як наступна:

function listAllProperties(o) {
	var objectToInspect;
	var result = [];
	var spacerArray = new Array(4).join(' ');
	for (
		objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)
	) {
		result = result.concat(Object.getOwnPropertyNames(objectToInspect), spacerArray);
	}
	return result;
}

console.h1('listAllProperties: '); // Заголовок
console.log(listAllProperties(myCar)); // make,model,year,constructor,toString,toLocaleString,valueOf,hasOwnProperty, isPrototypeOf,propertyIsEnumerable,__defineGetter__,__lookupGetter__,__defineSetter__,__lookupSetter__,__proto__

// Це може бути корисним для знаходження "прихованих" властивостей
// (тих властивостей в ланцюзі прототипів, які не доступні через об'єкт,
// бо інша властивість має те ж саме ім'я раніше в ланцюжку прототипів).

// Список доступних властивостей можна легко зробити за допомогою
// видалення дублікатів в масиві.

//
// Створення об'єктів
//

// Об'єкти створюються шляхом виклику спеціальних функцій-конструкторів:

console.h1('Objects Creation');

var o = new Object(); // Важливо: на практиці, краще для цього використати літерал: o = {};
var now = new Date(); // А ось тут з літералом не вийде, тому констуктор є необхідним
var pattern = new RegExp('\\sjava\\s', 'i'); // а тут знову краще літерал: pattern = /\sjava\\s/i

// Створивши власний об'єкт, можна його як завгодно використовувати
// і встановлювати його властивості

var point = new Object();
point.x = 2.3;
point.y = -1.2;
point.toString = function (point) {
	// return '[Point: {x: ' + this.x + ', y: ' + this.y + '}]';
	return '[Point: ' + JSON.stringify(this, null, ' ') + ']';
};

console.log(point);

// JavaScript визначається синтаксис об'єктних літералів,
// що дозволяє створювати об'єкти і вказувати їх властивості.
// Об'єктний літерал (також відомий як Ініціалізатор об'єкта)
// є списком розділених комами пар «властивість / значення», укладений у фігурні дужки.

// Усередині пар роль роздільника грає двокрапка.
// Таким чином, об'єкт point з попереднього прикладу також може бути створений
// і ініційований наступним рядком:

var point = {
	x: 2.3,
	y: -1.2
};

// Об'єктні літерали можуть бути вкладеними.

var rectangle = {
	upperLeft: {
		x: 2,
		y: 2
	},
	upperRight: {
		x: 2,
		y: 2
	},
	topRight: {
		x: 2,
		y: 2
	},
	topLeft: {
		x: 2,
		y: 2
	}
};

// Значеннями властивостей в об'єктних літералах не обов'язково повинні
// бути константи - це можуть бути довільні JavaScript-вирази.

var square = {
	'upperLeft': {
		x: point.x,
		y: point.y
	}
};

// Зазвичай для доступу до значень властивостей об'єкта використовується оператор. (крапка).
// Значення в лівій частині оператора має бути посиланням на об'єкт,
// до властивостей якого потрібно отримати доступ. Зазвичай це просто ім'я змінної,
// що містить посилання на об'єкт, але це може бути будь-яким припустимим в
// JavaScript виразом, що є об'єктом. Значення в правій частині оператора
// має бути ім'ям властивості. Це повинен бути ідентифікатор, а не рядок або вираз.

// Властивості об'єкта працюють як змінні: у них можна зберігати значення і зчитувати їх.

//
// Object.prototype
//

// Атрибути властивостей Object.prototype
// Writable: no
// Enumerable: no
// Configurable: no

// Всі об'єкти в JavaScript є нащадками Object;
// всі об'єкти успадковують властивості і методи від Object.prototype,
// хоча вони можуть бути перекриті.

// Наприклад, прототипи інших конструкторів перевизначають властивість
// 'constructor' і забезпечують свої власні методи toString().
// Зміни в прототипові об'єкта Object поширюються на всі об'єкти,
// якщо тільки властивості і методи, пов'язані з цими змінами,
// не перекриваються далі по ланцюжку прототипів.

//
// Властивості Object.prototype
//

// Object.prototype.constructor — визначає функцію, яка створює прототип об'єкта.

// Повертає посилання на об'єкт функції, яка створила прототип екземпляра.
// Зверніть увагу, що значення цієї властивості є посилання на саму функцію, а не на рядок,
// що містить ім'я функції. Це — значення тільки для читання для примітивних значень,
// таких як 1, true і "тест".

// Всі об'єкти успадковують властивість конструктора з їхніх прототипів:

var o = {};
console.log(o.constructor === Object); // true

var a = [];
console.log(a.constructor === Array); // true

var n = new Number(3); // Не робіть так
console.log(n.constructor === Number); // true

//
// Приклад: відображення конструктора об'єкта
//

// У наступному прикладі створюється конструктор Tree,
// і об'єкт цього типу, theTree. Потім приклад показує властивість
// конструктора для об'єкта theTree.

console.h1('Tree constructor'); // просто заголовок

function Tree(name) {
	this.name = name;
}

var theTree = new Tree('Redwood');

console.log('theTree.constructor is ' + theTree.constructor);

console.log('theTree.constructor === Tree: ' + (theTree.constructor === Tree));

// Цей приклад показує у консолі наступне:

// theTree.constructor is
// function Tree(name) {
// this.name = name;
// }

// FIXME Змінити конструктор Tree так, щоб він виводив у консоль повідомлення про назву створюваного дерева.

//
// Робота з об'єктами
//

//
// Загальні методи об'єктів у JavaScript
//

// Всі об'єкти в JavaScript успадковують властивості і методи класу Object.
// При цьому спеціалізовані класи об'єктів, як, наприклад,
// ті, що створюються за допомогою конструкторів Date() або RegExp(),
// визначають власні властивості і методи, але всі об'єкти незалежно від
// свого походження крім усього іншого підтримують властивості і методи,
// визначені класом Object.

//
// Властивість constructor
//

//
// У JavaScript будь-який об'єкт має властивість constructor,
// що посилається на функцію-конструктор,
// використану для ініціалізації об'єкту.

// Наприклад, якщо об'єкт d створюється за допомогою конструктора Date(),
// то властивість d.constructor посилається на функцію Date

var d = new Date();
d.constructor === Date; // true

//
// Метод toString()
//

// Метод toString() не вимагає аргументів; він повертає рядок, яким-небудь чином
// представляє тип та / або значення об'єкта, для якого він викликається.
// Інтерпретатор JavaScript викликає цей метод об'єкта у всіх тих випадках,
// коли йому потрібно перетворити об'єкт в рядок. Наприклад, це відбувається,
// коли використовується оператор + для конкатенації рядка з об'єктом, або при
// передачі об'єкта такому методу, як alert ()

console.log(d);

d.toString = function () {
	return d.getFullYear() + ', ' + d.getMonth();
}

console.log(d);

//
// Метод valueOf()
//

// Метод valueOf() багато в чому нагадує метод toString(), але викликається,
// коли інтерпретатору JavaScript потрібно перетворити об'єкт в значення
// якого-небудь елементарного типу, відмінного від рядка, - зазвичай в число.

// Інтерпретатор JavaScript викликає цей метод автоматично, якщо об'єкт
// використовується в контексті значення елементарного типу.
// За замовчуванням метод valueOf() не виконує нічого, що представляло б інтерес,
// але деякі вбудовані категорії об'єктів перевизначають метод valueOf()
// (наприклад, Date.valueOf()).

console.log('d.valueOf = ' + d.valueOf());

//
// Метод hasOwnProperty()
//

// Метод hasOwnProperty() повертає true, якщо об'єкт має вказану властивість,
// і вона не є успадкованою. В іншому випадку він повертає false.

d.toMyString = function () {
	return 'it\'s my string';
}

console.log(d.hasOwnProperty('toString')); // false
console.log(d.hasOwnProperty('toMyString')); // true
console.log(d.hasOwnProperty('toHisString')); // false

//
// Метод propertyIsEnumerable()
//

// Метод propertyIsEnumerable() повертає true, якщо об'єкт має вказану властивість,
// і вона може бути використана у переліку циклом for...in. В іншому випадку метод
// повертає false.

d.isEstimate = true;

console.log('--');
console.log(d.propertyIsEnumerable('isEstimate')); // true властивість існує і є перелічуваною
console.log(d.propertyIsEnumerable('x')); // false: властивість не існує
console.log(d.propertyIsEnumerable('valueOf')); // false: властивість не є перелічуваною, хоча і існує

for (var propertyName in d) {
	console.log('Property ' + propertyName + ' = ' + d[propertyName]);
}

// Зверніть увагу: всі властивості об'єкта, визначені користувачем,
// можуть бути використані у переліку циклом for...in

//
// Метод isPrototypeOf()
//

//
// Метод isPrototypeOf() повертає true, якщо об'єкт, якому належить метод,
// є прототипом об'єкта, який передається методу в якості аргументу.
// В іншому випадку метод повертає false.

var o = {};

console.log(Object.prototype.isPrototypeOf(o)); // true: o.constructor == Object

console.log(Object.isPrototypeOf(o)); // false

console.log(o.isPrototypeOf(Object.prototype)); // false

console.log(Function.prototype.isPrototypeOf(Object)); // true: Object.constructor == Function




<<<<<<< HEAD
console.h1('Lesson 05 - End');
=======
// Об'єкти JSON відрізняються від звичайних JavaScript-об'єктів більш строгими
// вимогами до рядків - вони повинні бути саме в подвійних лапках.

// Як перевірити JSON на правильність
// Можна завжди перевірити валідність JSON на сервісі JSONLint. Наприклад,
// ось зразки валідного JSON:

// JSON як об'єкт:
// {
//      "a": "a"
// }

// JSON як масив:
[
    2,
    3,
    5,
    7
]

[
    "a",
    "b",
    "c",
    "d"
]

// Вкладені об'єкти та масиви:
[
    "a",
    "b",
    [
        1,
        2,
        3
    ],
    {
        "key 1": "value 1",
        "key 2": "value 2"
    }
]

// Приклад невалідного JSON:

// Невалідний, тому що не починається з символа об'єкту {} або масиву []
// 1

// JSON як об'єкт - але невалідний, тому що ключ 1 не взятий у лапки:
// {
//     1: "one"
// }


//
// Методи JSON.stringify і JSON.parse
//

// Метод JSON.stringify (value, props, space) перетворює значення value в JSON-рядок.
// Це називається серіалізацією об'єкту і використовується для того, щоб передавати об'єкти,
// зберігаючи їх структуру.

// Підтримується у всіх браузерах, включаючи IE8+. Для старіших IE є бібліотека JSON-js,
// що додає аналогічну функціональність.

// У другому параметрі props методу JSON.stringify можна вказати масив властивостей,
// що підлягають серіалізації.

// Третій параметр - space, використвується для форматування рядка.

// Якщо space є числом, то рівні вкладеності в JSON показуються вказаною кількістю прогалин,
// а якщо рядком - то вставляється цей рядок.

var user = {
	name: 'Taras',
	surname:'S',
	job: 'Poet'
};

console.log( JSON.stringify(user) );
// Дасть:
// "{"name":"Taras","surname":"S","job":"Poet"}"

console.log( JSON.stringify(user, ['name']) );

// Дасть:
// "{"name":"Taras"}"

var userString = JSON.stringify(user, ['name'], 4);

console.log( userString ); // наглядно серіалізовані вибрані властивості об'єкту:

// Дасть:
// "{
//     "name": "Taras"
// }"

//
// Метод JSON.parse (str, replacer) читає об'єкт-значення з рядка str.
//

// Це називається "десеріалізація" і використовується для того, щоб відновлювати
// значення і структуру (!) об'єкту з рядка.

var objAgain = JSON.parse(userString);

console.logObj = function ( objectToLog ) {
	for ( var propName in objectToLog ) {
		console.log('prop: ' + propName + ' = ' + objectToLog[propName] );
	}
};

console.logObj(objAgain);

//
// DOM та BOM
//

//
// Об'єктна модель документу (DOM) - Document Object Model
// Доступна через document. Дає доступ до вмісту сторінки.
//

// Об'єктна модель браузера (BOM)
// BOM - це об'єкти для роботи з чим завгодно, крім документа. Доступ до фреймів,
// запити до сервера, функції alert / confirm / prompt - все це BOM.

// SOM - Shell Object Model
// Core: {
// 	Print: 'function (argument) {
// 		[native code]
// 	}',
// 	Exit: null
// }

// navigator: платформа і браузер

// Об'єкт navigator містить загальну інформацію про браузері і операційну систему.

// navigator.userAgent - містить інформацію про браузер.
// navigator.platform - містить інформацію про платформу, дозволяє розрізняти
// Windows / Linux / Mac і т.п.

//
// screen
//

//
// Об'єкт screen містить загальну інформацію про екран, включаючи його дозвіл,
// кольоровість і т.п. Воно може бути корисно для визначення, що код виконується
// на мобільному пристрої з маленьким дозволом. Поточне дозвіл екрана відвідувача
// по горизонталі / вертикалі знаходиться в screen.width / screen.height.
//

//
// location
//

var locObj = {
  "hash": "",
  "search": "?espv=2&ie=UTF-8",
  "pathname": "/_/chrome/newtab",
  "port": "",
  "hostname": "www.google.com.ua",
  "host": "www.google.com.ua",
  "protocol": "https:",
  "origin": "https://www.google.com.ua",
  "href": "https://www.google.com.ua/_/chrome/newtab?espv=2&ie=UTF-8",
  "ancestorOrigins": {}
};

console.logObj(locObj);

// Об'єкт location надає інформацію про поточний URL і дозволяє JavaScript
// перенаправити відвідувача на інший URL. Значним цієї властивості є об'єкт типу
// Location.

//
// frames
//

// Колекція, що містить фрейми і іфрейми. Можна звертатися до них як за номером,
// так і по імені. У frames містяться window-об'єкти дочірніх фреймів.

//
// history
//

// Об'єкт history дозволяє міняти URL без перезавантаження сторінки
// (в межах того ж домена) за допомогою History API, а також перенаправляти
// відвідувача назад-вперед по історії.

// Об'єкт history не надає можливості читати історію відвідувань.
// Можна відправити відвідувача назад викликом history.back() або вперед
// викликом history.forward(), але самі адреси браузер не дає з міркувань безпеки.

//
// Функції
//

function name(a, b){
	/* code */
	var abc = 'abc';
	name.counter++;
	console.log('function name counter = ' +  name.counter);
	return abc;
}

// var name = new Function('a, b', '/* code */');

name.counter = 0;

console.log(name.counter);

name();

console.log(name());
console.log(name());
console.log(name());
console.log(name());

// Анонімні функції



// Відірване від оголошення
f = function( argument) { } // функція-вираз


// інструкція функції
// var a;
// function separator () {
// 	Core.Print('------------------');
// }

// функція-вираз
var separator = function() {
 	Core.Print('------------------');
}

var arr = [ function(){
	Core.Print('0000000000000000000000');
}];

separator();

arr[0]();

//
// Замикання
//

function counter () {
	var count = 0;
	var internalFunction = function() {
		console.log( count++ );
	}
	return internalFunction;
}

// Замикання - у цей момент:
var iterator = counter();

iterator();
iterator();
iterator();
iterator();
iterator();
iterator();

// Callback - функція

function loadData( success, fail ) {
	// var result = true;
	// AJAX.load('http://gl.org/userData', success, fail);

	// AJAX load:
	var result = true;
	if ( result === true ) {
		success('LOADED DATA');
	} else {
		fail('LOAD ERROR');
	}
}

///

loadData( function ( response ) {
	console.log('load successful: ' + response );
}, function( error) {
	console.log('load failed: ' + error );
});




console.h1('Lesson 9 - End');
>>>>>>> 647f0880e526e5dd2a55b1ea5bf0aaa3c7fc0c4c

//
// Домашня робота:
//

console.h1('Lesson 05 - Homework');

// Працюємо над студентом:

var student = {
	name: 'Orest',
	surname: 'Lyty',
	email: 'luty@igov.org.ua',
	address: 'Lviv',
	birthdayDate: new Date(1966, 8, 24),
	getInfo: function () {
		return this.name + ' ' + this.surname + ' ' + this.adress + ' ' + this.birthdayDate.toDateString();
	}
};

console.h1('Task 05.01');

// Points: 1
// Вище визначено об'єкт 'student'. Знайди серед його властивостей ту,
// для надання початкового значення якої використано конструктор.
// Запиши її назву у нову глобальну змінну 'createdByConstructor'.
// TODO: пиши свій код тут:

let createdByConstructor;
function isConstrucorInObj (obj){
	for (let name in obj){
		if (constructor.prototype.isPrototypeOf(obj[name])){
			return name;
		}
	}
}
createdByConstructor = isConstrucorInObj(student);
if (createdByConstructor && createdByConstructor === 'birthdayDate') {
	console.log('\n\tThanks! This task is done');
} else {
	console.log('\n\tPlease implement this task');
}

console.h1('Task 05.02');

// Points: 1
// TODO: пиши код тут:
console.log('\n\tPlease implement this task and few tests to check it');
let answersObj = {};
// 05.02.1 Який з цих прикладів є невірним зразком створення та ініціалізації змінної:
// 1. var a;
// 2. var b = 10;
// 3. const c = "20";
// 4. d = function(){}; // 4 is incorrect
console.log("05.02.1: incorrect example - 4. d = function(){};");
answersObj[1] = 4;
// 
// 
// 05.02.2 Створи змінні наступних типів. Для тих типів, де це неможливо, напиши коментар "Типу не існує"
// 
// 1. string
let str1 = "";
// 2. char //типу не існує
// 3. int //типу не існує
// 4. float //типу не існує
// 5. boolean 
let Boo = true;
// 6. interface //типу не існує
// 7. undefined
let undf;
answersObj[2] = [2, 3, 4];
// 
// 
// 05.02.3 Знайди тут оператор строгого порівняння та випишіть його:
// 
// 1. 'use strict'
// 2. ==
// 3. &&
// 4. ===
console.log("05.02.3: ===");
// 5. EQ
answersObj[3] = 4;
// 
// 
// 05.02.4 Який з цих виразів є помилковим?
// 
// 1. x * y == z
// 2. x + y = z
console.log('05.02.4: incorrect expression 2. x + y = z');
// 3. x = y + (z = i / (k = m * n))
answersObj[4] = 2;
// 
// 
// 05.02.5 Який з цих операторів означає "логічне АБО"?
// 
// 1. ||
// 2. OR
// 3. |
console.log('05.02.5: answer 1. ||');
answersObj[5] = 1;
// 
// 
// 05.02.6 Який з цих операторів означає "логічне ТА"?
// 
// 1. AND
// 2. and
// 3. &&
// 4. &
console.log('05.02.6: answer 3. &&');
answersObj[6] = 3;
// 
// 
// 05.02.7 Чи правда, що оператор ‘typeof’ використовується для:
// 
// 1. Отримання назви типу?
// 2. Отримання посилання на констуктор?
console.log('05.02.7: answer 1. yes, 2 - no');
answersObj[7] = {1: 'yes',
				2: 'no'};
// 
// 
// 05.02.8 Які з цих прикладів є невірним використанням оператора умовного присвоєння?
// 
// 1. var y = x := z | m;
// 2. var y = x : z ? m;
// 3. var y = x ? z : m;
// 
// 
console.log('05.02.8: answer 1, 2');
answersObj[8] = [1, 2];
// 
// 05.02.9 Де тут — правильний функціональний вираз?
// 
// 1. (function w(){})()
// 2. var function x(){}
// 3. var z = new Function('argument', '// TODO')
// 4. var y = function(){}
console.log('05.02.9: answer 4 var y = function(){}');
answersObj[9] = 4;
// 
// 
// 
// 05.02.10 Де конкатенація рядків зроблена з помилкою?
// 
// 1. "str1" + "str2"
// 2. "str1" ~ "str2"
// 3. "str1".concat("str2")
// 3. String.concat("str1", "str2")
console.log('05.02.10: answer 2 "str1" ~ "str2"');
answersObj[10] = 2;
let corrAnswers = {
	1 : 4,
	2 : [2, 3, 4],
	3 : 4,
	4 : 2,
	5 : 1,
	6 : 3,
	7 : {1: 'yes', 2: 'no'},
	8 : [1, 2],
	9 : 4,
	10 : 2
}
function HWVerify (correct_answers, student_answers){
	if (student_answers&&correct_answers){
		for (let name in student_answers){
			if (student_answers.name === correct_answers.name){
				console.log('Task 05.02.'+name+' completed correct.');
			}
			else {
				console.log('Please perform task 05.02.'+name);
			}
		}
	}
	else {console.log('Please prowide inputs with stedent\'s answers and verifications.');}
}
HWVerify(corrAnswers, answersObj);
console.h1('Task 05.03');

// Points: 2
// Знайди у файлові даного уроку перший коментар, що починається з "// FIXME" і виконай його,
// записавши результуючий код тут.

// TODO: пиши код тут:
console.log('\n\tPlease implement this task');
Tree = function (name) {
	this.name = name;
	console.log('The Tree with name '+name+' was created.');
}

var newTree = new Tree('Blackwood');


console.h1('Lesson 05 - Homework End');