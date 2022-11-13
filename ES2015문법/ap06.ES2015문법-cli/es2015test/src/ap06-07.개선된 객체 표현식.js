/*

    개선된 객체 표현식에 대해서 알아본다.
      개선된 객체 프러퍼티 표현식
      개선된 객체 메서드 표현식
*/

// ES2015

const name = '홍길동';
const age = 20;

let p2 = {
  name,
  age,
  powerYell() {
    let yell = this.name.toUpperCase();
    console.log(`${yell} ${yell}!!!`);
  },
  setAge(mph) {
    this.age = mph;
    console.log('나이:', mph);
  },
};

p2.powerYell;
p2.setAge(30);
