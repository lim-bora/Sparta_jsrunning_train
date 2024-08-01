var name = "yuno"; //전역

function myName(){
    var name = "yuno2";  //지역
    function a(){
        console.log(name);
    }
    return a();
}

myName(); //1. yuno2 
//myName 함수안에서 재할당되서,,?

function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test(); //2. 2