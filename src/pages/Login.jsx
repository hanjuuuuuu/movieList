import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleEmailCheck = () => {
    // 이메일 유효성 검사
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      setEmailError("올바른 이메일 주소를 입력해주세요.");
      setIsSubmitDisabled(true);
    } else {
      setEmailError("");
      if (passwordError === "") {
        setIsSubmitDisabled(false);
      }
    }
  };

  const handlePasswordCheck = () => {
    // 비밀번호 유효성 검사: 영문, 숫자, 특수문자 포함 8자 이상
    const passwordPattern =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError(
        "비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다."
      );
      setIsSubmitDisabled(true);
    } else {
      setPasswordError("");
      if (emailError === "") {
        setIsSubmitDisabled(false); // 이메일과 비밀번호 모두 유효할 때 버튼 활성화
      }
    }
  };

  return (
    <LoginContainer>
      <Title>이메일과 비밀번호를 </Title>
      <Title>입력해주세요</Title>
      <Form>
        <FormGroup>
          <Label htmlFor="email">이메일 주소</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailCheck}
            required
          />
          <ErrorText>{emailError}</ErrorText>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            onBlur={handlePasswordCheck}
            required
          />
          <ErrorText>{passwordError}</ErrorText>
        </FormGroup>
        <SubmitButton type="submit" disabled={isSubmitDisabled}>
          확인
        </SubmitButton>
      </Form>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  margin: 10px;
`;

const Title = styled.h3`
  font-size: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  margin-top: 20px;
`;

const Input = styled.input`
  margin: 10px;
  padding: 15px;
  border: outset #f7f7f7;
  outline: none;
`;

const SubmitButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#dadada" : "#0D253F")};
  color: white;
  padding: 15px;
  border: none;
  border-radius: 10px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
