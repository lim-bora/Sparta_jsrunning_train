//5. forEach로 변환해보기

//해당 문제를 forEach로 변경하여 풀어주세요

//1. 
let arr =  [10, 20, 30] 
let result = [];

arr.forEach(i => {
    result.push(i * 10);
}); 
console.log(result); //[ 100, 200, 300 ]


//2. 
let arr2 =  [10, 22, 33]

// 5의 배수를 찾아 반환하세요
let result2 = arr2.filter((i)=>i %  5 === 0);
console.log(result2) //[ 10 ]
