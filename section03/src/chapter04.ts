/* 
  * 대수 타입
  - 여러개의 타입을 합성해서 새롭게 만들어낸 타입
  - 합집합 타입, 교집합 타입
*/

// 1. 합집합 타입(Union Type, OR)
let a: string | number; // 예) string number Union Type 이라고도 부른다.
a = 1;
a = "hello";

// 예) boolean 타입도 포함해 3가지 타입의 합집합을 정의하고 싶을땐
// let a: string | number | boolean;
// a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// 1-1) 객체 타입을 이용한 Union Type
// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// }

type Union1 = Dog | Person; // 타입 별칭으로도 Union 타입을 만들 수 있다.
// Dog타입에 포함되지만 Person타입에 포함X
let union1: Union1 = {
  name: "",
  color: "",
}
// Person타입에 포함O, Dog타입에 포함X
let union2: Union1 = {
  name: "",
  language: "",
}
// person, Dog타입에 포함
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
}
// Dog, Person타입에 포함X
// let union4: Union1 = {
//   name: "",
// }
// error : Dog와 Person이 공통적으로 갖고 있는 name이라는 프로퍼티만 넣은 객체는 허용이 안됨


// 2. 교집합 타입(Intersection Type, AND)
let variable: number & string; // → number타입과 string타입의 교집합 = never타입(불가능한 타입, 공집합)
// 여러 개의 타입 간에 교집합 타입을 만들 수 있는 타입
// 웬만하면 기본 타입들을 가지고 Intersection Type을 만들면 웬만하면 Never Type이다.
// why? 기본타입들 중에서는 서로 공유하거나 겹치는 값들이 없기 때문
// 따라서, Intersection Type은 객체 타입에서 많이 사용된다.
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
}

type Intersection = Dog & Person;
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
}
// property가 하나라도 빠지면 이 타입에 포함되지 않는다.
// let intersection2: Intersection = {
//   name: "",
//   color: "",
//   // error 
// }