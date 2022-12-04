/*
 (구조) 분해 할당에 대해서 알아본다.


*/

// 배열에 있는 요소를 개별 변수로 만들기. (ES5에서)
const points = [20, 30, 40];
const x1 = points[0];
const y1 = points[1];
const z1 = points[2];
console.log(x1, y1, z1); // 20 30 40

const [x2, y2, z2] = points; // const [x2, y2, z2] = [20, 30, 40];
console.log(x2, y2, z2); // 20 30 40

// 두 번째 값 무시하기
const [x3, , z3] = points; // [20, 30, 40];
console.log(x3, z3); // 20 40

// 두 번째, 세 번째 값 무시하기
const [x4, , , w4] = points; // [20, 30, 40];
console.log(x4, w4); // 20 undefined

/*
  객체 분해 할당 연산자 사용법을 실습한다.
*/

const car = {
  type: 't',
  color: 'S',
  model: 2021,
};

// ES5에서의 객체 분해 할당
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1); // t S 2021

// ES2015 에서의 객체 분해 할당. {} 사용해서
//const { type, color, model, gear } = car;
//console.log(type, color, model, gear); // t S 2021 undefined
const { type, color, model, gear } = { type: 't', color: 'S', model: 2021 };
console.log(type, color, model, gear); // t S 2021 undefined

const { type: type2, color: color2, model: model2, gear: gear2 } = { type: 't', color: 'S', model: 2021 };
console.log(type2, color2, model2, gear2); // t S 2021 undefined
