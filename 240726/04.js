//4. 배열 API 활용


//1.
//배열 API map 활용
var arr = [10, 20, 30]
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
let result = arr.map((i) => i * 10 );
console.log(result); //[ 100, 200, 300 ]


//2.
//배열 API filter 활용
var arr2 = [10, 22, 33]
// 5의 배수를 찾아 반환해주세요
let result2 = arr2.filter((i)=>i %  5 === 0);
console.log(result2) //[ 10 ]


//3.
const numbers = [5, 10, 15, 20, 25];
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
let result3 = numbers.filter((i)=> i > 15);
console.log(result3) //[ 20, 25 ]


//4.
var arr4 = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요
let result4 = arr4.filter((i)=> i.length > 4);
console.log(result4) //[ 'banana', 'mango', 'strawberry', 'orange', 'cherry' ]
 
//5.
var arr5 = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요
let result5 = arr5.filter((i)=> i.length % 2 !== 0);
console.log(result5); //[ 'mango' ]


//6.
var arr6 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// 오름차순으로 정렬하여 출력해주세요
arr6.sort((a, b) => a - b)
console.log(arr6); //[ 1, 1, 2, 3, 3, 4, 5, 5, 6, 9 ]


//7.
var student =[
      {name:"이재상", age: 25 },
      {name:"정윤오", age: 30 },
      {name:"김준현", age: 12312}
];
// age를 이용하여 내림차순으로 정렬하고 출력해주세요
let result7 = student.sort( (a, b) => b.age - a.age );
console.log('7번',result7); //[ { name: '김준현', age: 12312 }, { name: '정윤오', age: 30 }, { name: '이재상', age: 25 } ] 

//8.
var student2 =[
      {id : 1, name:"이재상"},
      {id : 2, name:null},
      {id : 3, name:"김준현"}
];
// 객체 배렬에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요
let result8 = student2.some((i)=> i.name === null);
console.log('8번',result8); //true



//9.
var arr9 = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.
let result9 = arr9.filter((i)=> i.length > 5);
console.log(result9); //[ 'banana', 'strawberry', 'orange' ]


//10.
var arr10 = ["banana", "kiwi", "mango"];
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요
arr10.splice(2, 0, "apple"); //["banana", "kiwi", "apple", "mango"]

//11.
var arr11 = [1, 5, -3, 10, 0, 8];
arr11.some((i)=> i < 0 ) ;; //true
// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요

//12.
var arr12 = [1, 5, -3, 10, 0, 8];
let result12 = arr12.every((i)=> i < 0 ) ;; 
console.log(result12); //false
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요