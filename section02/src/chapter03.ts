// 객체
// 1. object로 정의
let user: object = {
  id: 1,
  name: '유저1',
}
// 객체의 타입을 object로 정의하면 문제가 있음 → user.id와 같은 점 표기법으로 객체의 특정 프로퍼티에 접근하려고 하면 오류가 발생한다.
// user.id;

// 2. 객체 리터럴 타입으로 정의
let user1: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: '유저1',
}
user1.id;

// 예) 강아지 객체
// let dog: {
//   name: string;
//   color: string;
// } = {
//   name: '멍멍이',
//   color: 'brown',
// }

// 3. optional property
user1 = {
  name: '유저2',
}

// 4. readonly property
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
}
// config.apiKey = "hacked";