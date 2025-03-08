// void → 공허 → 아무것도 없다. 즉, 아무것도 없음을 의미하는 타입

// 1. "hello"를 반환하는 func1
function func1(): string {
  return "hello";
  /* 
    참고) TS에서는 함수의 반환값에도 타입을 정의할 수 있다. 
    → 함수의 매개변수를 작성하는 소괄호() 뒤에 타입 주석을 쓰면 된다.
  */
}

// func2는 func1와 달리 hello를 반환하지 않고 출력 → 이럴때 반환값의 타입을 뭐라 써야할까? → 이럴 때 void를 사용
function func2(): void {
  console.log("hello");
}

// 변수의 타입으로도 void를 정의할 수 있다.
let a: void;
// void 타입으로 정의한 변수에는 어떠한 값도 담을 수 없다. → 오직 undefined만 담을 수 있다.
// a = 10;
// a = "typescript";
// a = {};
a = undefined; // 오직 undefined만 담을 수 있다.
// 단, tsconfig.json에서 "strictNullChecks": false로 하면 null도 담을 수 있다. → 이 옵션이 꺼지면 null이 어느 타입의 변수에도 들어갈 수 있게 되기 때문
// a = null;

// JavaScript에서 값이 없음을 나타내려면 undefined나 null을 쓰면 됐었는데 왜 굳이 void 타입을 추가한걸까?
// func2(): undefined 로 설정하게 되면 오류가 발생하기 때문
// why 오류가 날까? 함수의 반환값 타입을 undefined로 정의하면 진짜로 함수에게 undefined이라는 값을 반환하게 만들어야 한다. 2. 또는 undefined을 반환하지 않더라도
function func3(): undefined {
  return; // 이런식으로라도 써야 한다.
}

// 마찬가지로 함수의 반환값 타입을 null로 정의하게 되면 진짜로 null을 반환해야 하기 때문에 return문을 또 써줘야 한다.
function func4(): null {
  return null;
}
// 그렇기 때문에 return문을 사용하고 싶지 않은 함수의 반환값 타입으로 void 를 사용하는 것이다.

// never : 존재하지 않는, 불가능한 타입

// 무한 루프를 도는 함수의 반환값 타입은 무엇으로 정의해야 할까?
function func5(): never {
  while (true) {}
}
// 반환값이 없으니 void를 써야할까? func2()처럼 함수가 정상적으로 종료는 되지만 반환되는 값이 없어서 void를 쓰는 것이다.
// func5()이 경우는 함수 자체가 정상적으로 종료되지도 않고, 반환을 할 수도 없는 상태 → 함수의 반환값이 있는거 자체가 모순이다 라고 하는 경우에 never를 사용
// 에를 들어 func6()와 같이 JS에서 프로그램 실행 도중 error를 던져줄 수 있었다.
// 실행되면 바로 프로그램이 중지 될 것이기 때문에 반환값 타입으로 never가 적합
function func6(): never {
  throw new Error();
}

// 변수의 타입으로 정의 가능
let b: never;
// 변수의 타입으로 never를 정의하면 어떤 값도 담을 수 없다.
// b = 1;
// b = "hello";
// b = {};
// but, undefined를 담을 수 있엇던 void와 달리 never는 담을 수 없다.
// b = undefined;
// null도 담을 수가 없지만 void 타입은 "strictNullChecks": false면 담을 수 있었는데 never는 false여도 담을 수가 없다.
// b = null;

// anv 타입의 값도 never타입의 변수에는 절대 담을 수가 없다.
let anyVar: any;
// b = anyVar;