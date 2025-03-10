/* 
  * Unknown 타입
  - 타입 계층도의 최상단에 위치
  - TS에 존재하는 모든 타입들의 super타입
  - unknown 타입이라는 집합 안에 많은 타입들이 다 포함
  → unknown 타입을 집합으로는 전체 집합 이라고 볼 수 있다. 
*/

function unknownExam() {
  // unknown은 모든 타입의 super type이기 때문에 모든 값을 다 넣을 수 있다.
  /*
    예) number 타입의 값을 unknown 타입의 변수에 넣는 것
    - number타입을 unknown타입으로 취급 → upcasting(업캐스팅)
    - upcasting은 모두 다 허용이 된다.
    → Unknown타입같은 모든 타입의 super type에는 모든 타입이 다 upcasting할 수 있기 때문에 모든 값을 집어넣을 수 있다.
  */
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  let f: unknown = {};
  let g: unknown = () => { };

  /* 
    * 반대로 unknown타입의 변수는 어떤 타입의 변수에도 들어갈 수 없다.
    - downcasting이기 때문에 반대로는 불가능
  */
  let unknownVar: unknown;
  // let num: number = unknownVar; // error
  // let str: string = unknownVar; // error
  // let bool: boolean = unknownVar; // error
  // let nul: null = unknownVar; // error
  // let unde: undefined = unknownVar; // error
  // let obj: object = unknownVar; // error
  // let func: object = unknownVar; // error
}

/* 
  * never 타입
  - 불가능, 모순을 의미하는 타입
  - 타입 계층도에서 가장 아래에 위치 → 모든 집합의 부분 집합(공집합 : 아무것도 없는 집합)
*/

function neverExam() {
  
  function neverFunc(): never {
    // neverFunc함수가 반환하는 값의 종류는 공집합이다. → 반환할 수 있는 값의 종류가 아무것도 없다라고 설정
    while(true) {}
  }

  // 다른 타입의 변수를 만들고 never타입의 값 할당 가능 → never타입은 모든 타입의 서브타입이기 때문(upcasting이기 때문)
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  /* 
    * 반대로 never타입의 변수는 어떤 타입의 변수에도 들어갈 수 없다.
    - downcasting이기 때문에 반대로는 불가능
  */
  // let never1: never = 10; // error
  // let never2: never = "hello"; // error
  // let never3: never = true; // error
}

/* 
  * void 타입
  - 모든 타입의 수퍼타입인 unknown이나 모든 타입의 서브타입인 never와는 다르게 중간에 존재
  - void 타입은 undefined의 수퍼타입
  → void타입의 변수에는 undefined의 값을 넣을 수 있다. (upcasting)
  → 
*/

function voidExam() {
  // 함수의 반환 값 타입을 void로 설정하면 return undefined를 반환해도 문제가 되지 않음.
  // → 반환값 타입을 void로 했지만 실제 반환은 undefined이기 때문
  // → let voidVar: void = undefined와 같은 내용
  function voidFunc(): void {
    console.log("Hello");
    return undefined;
  }

  let voidVar: void = undefined; 
}

/* 
  * any 타입
  - unknown타입의 서브타입으로 배치되어있지만 치트키 같은 존재
  - any타입은 타입계층도를 무시한다.
  → 모든 타입의 수퍼타입으로 위치 가능
  → (never를 제외한)모든 타입의 서브타입으로 위치 가능
*/

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // any타입의 변수에 unknown타입의 값을 넣을 수 있다.
  undefinedVar = anyVar;

  // never타입은 공집합 이기 때문에 never타입의 변수에는 그 어떤 타입도 다운캐스팅 할 수 없다.
  // neverVar = anyVar; // error

  let num: number = anyVar; // any → number (다운캐스팅)
  let str: string = anyVar; // any → string (다운캐스팅)
  let bool: boolean = anyVar; // any → boolean (다운캐스팅)

  anyVar = num;
  anyVar = str;
  anyVar = bool;
}