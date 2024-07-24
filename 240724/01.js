//1. 빈칸 채우기 문제
//아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

//01
let uninitialized;
console.log(uninitialized);
//Undefined
//변수에 값이 아직 할당되지 않았다

//02
const apple = "사과";
// apple = "바나나";
// const는 상수라서 값을 변경할 수 없다. let이면 변경가능하다.

//03
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 19
//인덱스는 0부터 시작한다.

//04
let mySchedule = "";
console.log(mySchedule || false); //false
// "" 는 falsy 값이라서 false
console.log(!!mySchedule); // false
// ! 는 해당하는 불리언값을 반대로, !!는 한번 더 반대로 변경하는거라 값을 원래대로이기 때문에 false

