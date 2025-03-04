// 1. 타입 별칭
type User = {
  id: number;
  name: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 0,
  name: '유저1',
  bio: 'hello',
  location: 'seoul',
};
let user1: User = {
  id: 1,
  name: '유저2',
  bio: 'hello2',
  location: 'incheon',
};
let user2: User = {
  id: 2,
  name: '유저3',
  bio: 'hello3',
  location: 'busan',
};
// 참고) 동일한 스코프에 동일한 이름의 타입 별칭을 선언하는 것은 불가능하다.
// type User = {}
function test() {
  type User = {}
};

// 2. 인덱스 시그니처
type CountryCodes = {
  // korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
  Brazil: 'bz',
};

type countryNumberCodes = {
  [type: string]: number;
}
let countryNumberCodes: countryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
}