//스토어는 애플리케이션의 전체 상태를 저장하고 관리한다.
import { createStore } from "redux";
import loginReducer from "./Reducer";

// 액션 타입 정의
// const SET_ID = "SET_ID";
// const SET_PASSWORD = "SET_PASSWORD";

// // 초기 상태 정의
// const initialState = {
//   id: "",
//   password: "",
// };

// // 리듀서 정의
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_ID:
//       return { ...state, id: action.payload };
//     case SET_PASSWORD:
//       return { ...state, password: action.payload };
//     default:
//       return state;
//   }
// };

// 스토어 생성
const store = createStore(loginReducer);

export default store;
