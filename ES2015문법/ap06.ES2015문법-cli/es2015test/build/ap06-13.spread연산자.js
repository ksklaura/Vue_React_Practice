"use strict";

var _console;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/*

    스프레드 사용법을 학습한다.

    ES 5에서는
    arguments 매개변수는 유사 배열 객체다.
        length 프로퍼티가 있다.
        Array  메서드를 사용할 수 없다.
        arrow function에서는 arguments는 사용할 수 없다.

    ES2015 에서는
    rest 매개변수는 배열이다.
        rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
        함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.

    Spread 연산자는 ... 이다.
        이터러블(iterable) 객체를 "개별" 요소로 분리
        이터러블(iterable) 객체에는 Array, String, Map, Set 등이 있다.
        iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블

*/

var cities = ['서울', '부산', '제주'];

// 배열 요소를 변수로 만드시오. x, y, z
var x = cities[0];
var y = cities[1];
var z = cities[2];

// 출력
console.log(cities[0], cities[1], cities[2]);
console.log(x, y, z);
(_console = console).log.apply(_console, cities);
var east = ['U', 'K', 'T'];
var west = ['N', 'C', 'G'];
// const countries = ["U", "K", "T", "N", "C", "G"];
console.log(east.concat(west));
var countries = [].concat(east, west); // ... = spread 연산자
console.log(countries);

// 객체에서의 spread연산자 사용법 익히기
var car1 = {
  type: 't1',
  color: 'S1',
  model: 2017
};
var car2 = {
  type: 't2',
  color: 'S2',
  model: 2019
};
var type = car1.type;
console.log(type); // t1

// {type} = { ...car1, ...car2 }
var func = function func(_ref) {
  var type = _ref.type;
  console.log(type); // t2
};

func(_objectSpread(_objectSpread({}, car1), car2));

// spread연산자를 이용하여 새로운 객체를 만드는 방법을 실습하기
// ==> 불변객체의 복제 후 할당

var morning = {
  breatfast: '미역국',
  lunch: '삼치구이'
};
var dinner = '스테이크';
var meals = _objectSpread(_objectSpread({}, morning), {}, {
  dinner: dinner // dinner: dinner
});

console.log(meals); // { breatfast: '미역국', lunch: '삼치구이', dinner: '스테이크' }