/* 
  * 기본 타입간의 호환성
  - 특정 타입을 다른 타입으로 취급해도 괜찮은지 판단
*/
let num1: number = 10; // number type
let num2: 10 = 10; // number literal type
// * number literal type을 number type변수에 할당 (O)
// number type이 number literal type 보다 super type이기 때문 → upCasting
num1 = num2;
// * number literal type변수에 number type변수를 할당 (X)
// num2 = num1;

/* 
  * 객체 타입간의 호환성
  - 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가? 를 판단
*/
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "우리우리",
  color: "white",
  breed: "풍산",
};

// * Animal: SuperType, Dog: SubType
// why? 구조적 타입 시스템
// 추가 프로퍼티가 없는 조건이 더 적은 타입이 SuperType이 된다.
animal = dog; // 업캐스팅
// dog = animal; // 다운캐스팅
/* 
  * 객체타입들은 프로퍼티를 기준으로 관계를 가진다. 
  → Dog타입은 Animal타입의 프로퍼티를 다 갖고있고 추가프토퍼티(breed프토퍼티)까지 갖고 있다.
*/

// * 연습
type Book = {
  name: string;
  price: number;
}

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 38000,
  skill: "react.js",
};
book = programmingBook; // 업캐스팅
// programmingBook = book; // 다운캐스팅

/* 
  * 초과 프로퍼티 검사
  - TS의 특수한 기능
  - 변수를 초기화할 때, 초기화 하는 값으로 객체 리터럴을 사용하면 발동하는 검사
  - 객체 타입 변수를 초기화할 때 객체 리터럴을 사용하면 초과 프로퍼티(실제 타입에서는 정의해놓지 않은 프로퍼티)를 작성하면 안되도록 막는 검사
  - 객체 타입의 변수를 초기화할 때는 객체 리터럴을 사용할거면
  1. 주석처리
  2. 삭제
  → 객체 타입에 정의된 프로퍼티만 넣을 수 있도록 해야한다.
*/
let book2: Book = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 38000,
  // skill: "react.js",
}

let book3: Book = programmingBook;
// 함수의 매개변수에도 객체 리터럴을 이용해야할 때 변수에 저장해 두었다가 인수로 변수를 전달하자
function func(book: Book) { }
func({
  name: '한 입 크기로 잘라먹는 리액트',
  price: 38000,
  // skill: "react.js",
});
func(programmingBook);