const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) { //API_URL
    // 3초 뒤 
    setTimeout(() => {
        //url 이 API_URL과 같다면 성공
        url === API_URL ? console.log('성공') : console.log('실패');
        //아닐 경우 실패로 처리
    }, 3000);
}

getData(API_URL)
.then((result) => console.log(result))
.catch((e) => console.log(e));

// getData(API_URL), getData(WRONG_URL) 
//각각 성공과 실패에 대한 처리를 코드작성해주세요.