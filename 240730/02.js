const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) { //API_URL
    return new Promise((resolve)=>{
        setTimeout(() => {
            url === API_URL ? console.log('성공') : console.log('실패');
        }, 3000);
    })
}

async function solution(url) {
    try {
        const result = await getData(url);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
solution(API_URL), solution(WRONG_URL) 

