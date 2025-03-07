// enum 타입
// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// JS에는 없고 TS에만 제공되는 새로운 타입
/*
  예)
  유저의 권한을 설정할 때 숫자로 배정하는 방법을 많이 사용한다.
  숫자로 각각의 권한을 설정한 다음 개발하다보면 까먹을 수 있다.
*/
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
  // 숫자를 직접 할당하지 않아도 자동으로 맨 위부터 0이 할당된다.
}
enum Role1 {
  ADMIN,
  USER,
  GUEST,
  // 숫자를 직접 할당하지 않아도 자동으로 맨 위부터 0이 할당된다.
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "유저1",
  // role: 0, // 0 : 관리자
  role: Role.ADMIN,
  Language: Language.korean,
}
const user2 = {
  name: "유저2",
  // role: 1, // 1 : 일반 유저
  role: Role.USER,
  Language: Language.english,
}
const user3 = {
  name: "유저3",
  // role: 2, // 2 : 게스트
  role: Role.GUEST,
  Language: Language.korean,
}

console.log(user1, user2, user3);