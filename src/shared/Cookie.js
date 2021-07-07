//쿠키는 name:value 형식으로 저장할 수 있습니다.
//쿠키의 유효기간도 설정하기 위해 exp(몇일 후에 삭제할 것인지)를 받아옵니다.
const setCookie = (name, value, exp = 5) => {
    let date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
};
