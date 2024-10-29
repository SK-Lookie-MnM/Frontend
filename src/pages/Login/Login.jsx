import {
  IdInput,
  IdInputbox,
  LoginBtn,
  LoginCheckBoxContainer,
  LoginFormContainer,
  LoginWrapper,
  MaintainLoginCheck,
  MaintainLoginCheckBox,
  PwdInput,
  PwdInputbox,
  SignUpMent,
  WelcomTitle,
} from "./Login.style";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <LoginWrapper>
      <WelcomTitle>
        <p>Welcome to camcoder</p>
        <p>캠코더의 다양한 서비스 이용을 위해 로그인을 해주세요.</p>
      </WelcomTitle>
      <LoginFormContainer>
        <IdInputbox>
          <IdInput placeholder="Enter Your Id"></IdInput>
        </IdInputbox>
        <PwdInputbox>
          <PwdInput placeholder="Enter Your Password"></PwdInput>
        </PwdInputbox>
        <LoginCheckBoxContainer>
          <MaintainLoginCheckBox>
            <MaintainLoginCheck></MaintainLoginCheck>
            <p>로그인 유지</p>
          </MaintainLoginCheckBox>
        </LoginCheckBoxContainer>
      </LoginFormContainer>
      <LoginBtn>Login</LoginBtn>
      <SignUpMent>
        첫 방문이신가요? <Link to={`/singup`}>회원가입 하러가기</Link>
      </SignUpMent>
    </LoginWrapper>
  );
};
