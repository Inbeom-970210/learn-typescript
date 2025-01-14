// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage("hello");
// logMessage(100);

var seho: string | number | boolean;    // 타입 가드(필터)
function logMessage(value: string | number) {
    if(typeof value === "number") {
        value.toLocaleString();
    }
    if(typeof value === "string") {
        value.toString();
    }
    throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeone(someone: Developer | Person) {  // 공통 속성만 접근 가능
//     someone.name;
//     // someone.skill
//     // someone.age
// }
// askSomeone({name: "디벨로퍼", skill: "웹 개발"});
// askSomeone({name: "캡틴", age: 100});

function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.skill
    someone.age
}
askSomeone({name: "디벨로퍼", skill: "웹 개발", age: 34});

// var seho: string | number | boolean;
// var capt: string & number & boolean;