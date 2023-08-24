interface Develop {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Develop | Person {
  return { name: "Tony", age: 33, skill: "Iron Making" };
}
var tony = introduce();
console.log(tony.skill);

if ((tony as Develop).skill) {
  var skill = (tony as Develop).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Develop | Person): target is Develop {
  return (target as Develop).skill !== undefined;
}

if(isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}