//3.얕은 , 깊은 복사

const student = {
    name: "yuno",
    age: "30",
    skill: ["javascript"],
    address: {
      city: "seoul"
    }
  };
  
  const shallowCopy = student; 
  
  const deepCopy = JSON.parse(JSON.stringify(student));

  console.log(shallowCopy === student); //true
  
  console.log(shallowCopy.address === student.address); //true
  
  console.log(deepCopy === student); //false

  console.log(deepCopy.address === student.address); //false
  
  
   
  //2.
  const student2 = {
    name: "yuno",
    age: "30",
    skill: ["js"],
    address: {
    city: "busan"
    }
  };
  // 동일한 student로 진행합니다. 
  // 얕은 복사한 객체에 배열요소 변경 javascript -> js으로 변경해주세요 
  // 깊은 복사 객체의 주소 속성을 변경하세요 (예: city를 "busan"으로 변경)
   
    const copy = student2; //얕은복사
    const deep = JSON.parse(JSON.stringify(student2)); //깊은복사
  // 결과 확인 
  console.log(student2); 
  console.log(copy); 
  console.log(deep);
  
