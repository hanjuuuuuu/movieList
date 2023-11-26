import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  setUsername,
  setPassword,
  loginSuccess,
} from "../Components/Redux/Action";

const ApiLogin = ({
  username,
  password,
  setUsername,
  setPassword,
  loginSuccess,
}) => {
  const handleLoginClick = async () => {
    if (!username || !password) {
      alert("아이디와 비밀번호를 입력하세요!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000", {
        id: username,
        password: password,
      });
      if (response.status === 200) {
        loginSuccess();
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      console.error("api 호출 에러", error);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="username">아이디:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLoginClick}>로그인</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
  };
};

const mapDispatchToProps = {
  setUsername,
  setPassword,
  loginSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiLogin);
