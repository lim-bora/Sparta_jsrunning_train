const obj1 = {
    value :20,
    getValue(){
        let num = 20;
        return num;
    }
  }
  const result = obj1.getValue();
  console.log(result) ; //  출력값 20

//2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
const obj2 ={
    method : function(){
        console.log('첫번째 this : ',this);

        const innerMethod = () =>{
            setTimeout(function(){
                console.log('두번째 this : ' , this); 
            });
        }
        innerMethod();
    }
}

obj2.method();//모르겠어요ㅕ..