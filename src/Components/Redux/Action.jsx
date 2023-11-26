//액션은 상태 변경을 발생시키는 객체이다.
// 액션 타입 정의
export const SET_USERNAME = "SET_USERNAME";
export const SET_PASSWORD = "SET_PASSWORD";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

// 액션 생성자 함수 정의
export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});
