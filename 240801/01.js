class Person{
    constructor(a,b){
        this.name = a;
        this.age = b;
    }

    info(){
        console.log(`이름 ${this.name} 나이는 ${this.age}`) 
    }
}
let bora = new Person('임보라','29');
console.log(bora) //1. Person { name: '임보라', age: '29' }



let jung = new Person('yuno','20'); //Person { name: 'yuno', age: '20' }

jung.info() //2. 이름 yuno 나이는 20


class Stuent extends Person{ //person의 자식클래스 
    constructor(a,b,study){
        super(a, b); //초기화
        this.study = study; //추가 
    }
}

let student1 = new Stuent('준현','12000','javascript');
console.log(student1); //{ name: '준현', age: '12000', study: 'javascript' }

class Tutee extends Person{
    constructor(a,b,study){
        super(a, b); //초기화
        this.study = study; //추가 
    }

    info(){
        console.log(`저의 이름은 ${this.name} 나이는 ${this.age} 현재 ${this.study}를 학습하고 있습니다`);
    }
}
const tuttee = new Tutee('보라','29','javascript')
tuttee.info() //저의 이름은 보라 나이는 29 현재 javascript를 학습하고 있습니다

const result = Student.prototype instanceof Person;
console.log(result); //?

const result2 = tuttee instanceof Student;
console.log(result2);   //?