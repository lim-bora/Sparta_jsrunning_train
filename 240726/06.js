//6. 메소드 체이닝
//주어진 학생 객체 배열에서 각 학생의 평균 점수를 계산한 후, 
//평균이 80점 이상인 학생의 이름만 필터링하여 출력해주세요. 
//가능하다면 메소드 체이닝으로 풀어주세요

//1.
const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] },
 
];

const calc = (scores) => { // 평균점수 계산 함수
    let total = scores.reduce((total, current)=> total + current, 0); //합계
    return total / scores.length;  //평균
};

// 평균이 80점 이상
const filterScore = students.filter((student) => calc(student.scores) >= 80);
filterScore.forEach(student => 
    console.log([student.name])
);



//2.
// 요소에 2를 곱하고, 
// 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]
const numbers = [5, 10, 15, 20, 25];
const result = numbers.map(num => num * 2).filter(num => num <= 30);

console.log(result);