// any : 어떤 타입이던지
// 특정 변수의 타입을 우리가 확실히 모를 때 사용
let anyVar: any = 10;
// if) anyVar라는 변수가 범용적으로 사용되어야 한다고 가정
// 1. 나중에 anyVar 변수에 문자열도 들어가야하는 상황일 때
// anyVar = "hello";
// anyVar = true;
// anyVar = {};
// anyVar = () => { };

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
// any와 비슷
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => { };

// 모든 값을 저장할 순 있지만 반대로 할당 할 순 없다.
// num = unknownVar;
// unknownVar.toUpperCase();
// unknownVar.toFixed();
// 덧셈, 뺄셈, 곱셉, 나눗셈 등의 연산 자체도 Unknown 타입에서는 쓸 수 없다.

// 자바스크립트에서 Unknown 현재 변수가 number type임을 확실히 밝혀주저야 했을 때
if (typeof unknownVar === 'number') {
  num = unknownVar; // unknown type의 변수를 number타입으로 정제하여 사용할 수 있다. → 타입 정제 or 타입 좁히기
}

// 결론
// 1. any와 unknown type은 값을 다 할당 받을 수는 있다.
// 2. any Type은 반대로 할당 할 수 도 있다.
// 3. unknown type은 반대로 할당 할 수 없다.
// 4. 변수에 저장할 값의 타입이 확실하지 않을 때에는 Any타입보다는 조금 더 안전한 unknown 타입을 사용하자.