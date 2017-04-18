//-------------------------------------------------TimeOut----------------------------------------------

// function consoleTime() {
//     console.log('some text after 500ms')
// }
//
// setTimeout (consoleTime, 2000);

// //-----------------------
// var index = 10;
// function countDown() {
// 	console.clear();
// 	if (index--){
// 		console.log(index);
// 		setTimeout(countDown, 1000);
// 	} else {
// 		console.log('Boom!');
// 	}
// }
// countDown();

// // -----------------------
// setInterval(function () {
// 	console.log('interval')
// }, 500);

// // -----------------------
// var text = 'some string';
// var timer = setInterval(function () {
// 	console.clear();
// 	if (text) {
// 		console.log(text);
// 		text = text.substr(0, text.length - 1);
// 	} else {
// 		console.log('The End');
// 		clearInterval(timer);
// 	}
// }, 500);

// -----------------------------------------НАСЛЕДОВАНИЕ-----------------------------

// function Human(name, age) {
// 	this.name = name || 'name undefined';
// 	this.age = age || 18;
// 	this.canThink = true;
// 	this.skils = ['HTML', 'CSS', 'JavaScript'];
// 	this.getSkils = function () {
// 		return {allSkils: this.skils}
//     }
// }
//
// function Man(name, age) {
// 	this.canRubitDrova = true;
// 	this.canVaritBorsh = false;
// 	Human.call(this, name, age);
// }
//
// function Wooman(name, age) {
//     this.canRubitDrova = false;
//     this.canVaritBorsh = true;
//     Human.call(this, name, age);
//     var originalFunc = this.getSkils;
//     this.getSkils = function () {
// 		var originalResult = originalFunc.call(this);
// 		originalResult['allSkils'].push('PHP');
// 		return originalResult;
//     }
// }
//
// var man1 = new Man('Mel', 28);
//
// var wooman1 = new Wooman('Lel', 26);

//-----------------------Прототипное наследование-------Proto

// function Human(name, age) {
//     this.name = name || 'name undefined';
//     this.age = age || 18;
//     this.canThink = true;
//     this.skils = ['HTML', 'CSS', 'JavaScript'];
// }
//
// Human.prototype.getSkils = function () {
// 	return this.skils;
// };
//
// function Man(name, age) {
// 	this.canRubitDrova = true;
// 	this.canVaritBorsh = false;
// 	Human.call(this, name, age);
// }
//
// Man.prototype = Object.create(Human.prototype);
// Man.prototype.constructor = Man;
//
// var human1 = new Human('Vel', 28);
// var man1 = new Man('Mel', 29);
// // var wooman1 = new Wooman('Lel', 26);


//----------------------------------------Calculater--------------------------------

function Calc() {

}

Calc.prototype.init = function () {

	this.hello();

	var firstVal = prompt('Введите первое число', 0),
    	secondVal = prompt('Введите второе число', 0),
   		operator = prompt('Введите оператор', '+');
    this.result = 0;
    this.canCalc = false;

    this.validaty(firstVal, secondVal, operator);

    this.canCalc ? this.calculate() : alert('Вы ввели не числа');
};

Calc.prototype.hello = function () {
	alert('Привет, я старенький калькулятор');
};

Calc.prototype.methods = {
	'-': function (arg1, arg2) {return arg1 - arg2},
    '+': function (arg1, arg2) {return arg1 + arg2},
    '*': function (arg1, arg2) {return arg1 * arg2},
    '/': function (arg1, arg2) {return arg1 / arg2}
};

Calc.prototype.validaty = function (first, second, operator) {
	if (!isNaN(first) && !isNaN(second)) {
		this.firstVal = +first;
		this.secondVal = +second;
		this.operator = operator;
		this.canCalc = true;
	} else {
		this.canCalc = false;
	}
};

Calc.prototype.calculate = function () {
	if(this.methods[this.operator])	{
		this.result = this.methods[this.operator](this.firstVal, this.secondVal);
		alert(`Ваш результат: ${this.result}`)
	} else {
		alert('Вы выбрали не существующий оператор');
	}
	return this.result
};

// класс наследник создать CalcEngenear
// создать два новых функционала в объекте methods (число пи, возведение в квадрат)
// создать в CalcEngenear метод при помощи которого можно добавлять новый функционал

function CalcEngenear() {

}
CalcEngenear.prototype = Object.create(Calc.prototype);
CalcEngenear.prototype.constructor = CalcEngenear;

CalcEngenear.prototype.addNewMethods = function () {
    this.methods = {
        '**': function (arg1) {return arg1 * arg1},
        'pi': function (arg1) {return arg1 * 3.14}
    }
};


var calc = new Calc();
var calcEngen = new CalcEngenear();
calcEngen.addNewMethods();