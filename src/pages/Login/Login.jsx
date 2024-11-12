import { useEffect, useState } from "react";
import {
  IdInput,
  IdInputbox,
  LoginBtn,
  LoginCheckBoxContainer,
  LoginFormContainer,
  LoginWrapper,
  MaintainLoginCheck,
  MaintainLoginCheckBox,
  Mes,
  PwdInput,
  PwdInputbox,
  SignUpMent,
  StyledLink,
  WelcomTitle,
} from "./Login.style";

import { useCookies } from "react-cookie";
import { postData } from "../../services/api";

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [rememberId, setRememberId] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["rememberedId"]);
  const [loading, setLoading] = useState("");
  const [mes, setMes] = useState(false);

  useEffect(() => {
    if (id == "" || password == "") {
      setBtn(false);
    } else {
      setBtn(true);
    }
  }, [id, password]);
  //페이지 로드 시 쿠키에서 아이디 불러오기
  useEffect(() => {
    if (cookies.rememberedId) {
      setId(cookies.rememberedId);
      setRememberId(true);
    }
  }, [cookies]);
  //비어있지 않아야 로그인 버튼이 동작
  const handleButtonClick = () => {
    if (btn) {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    setLoading(true);

    try {
      const body = {
        loginId: id,
        password: password,
      };

      const response = await postData("/api/users/login", body);

      console.log(response);
      if (response.status === 200) {
        // 로그인 성공 시 아이디 기억하기 설정
        if (rememberId) {
          setCookie("rememberedId", id, {
            path: "/",
            maxAge: 7 * 24 * 60 * 60,
          }); // 쿠키 유효기간 7일
        } else {
          removeCookie("rememberedId");
        }

        const accessToken = response.data.accessToken;
        localStorage.setItem("accessToken", accessToken); // 저장

        setTimeout(() => {
          window.location.href = "/"; // 새로고침하면서 홈 화면으로 이동
        }, 700);
      } else {
        console.log("응답 200 xx");
        alert("로그인에 실패하였습니다."); // 응답이 200이 아닌 경우 표시
      }
    } catch (error) {
      setLoading(false);
      console.error("로그인 오류:", error); // 오류 로그 확인
      if (error.response && error.response.status == 400) {
        setMes(true);
      } else {
        alert("로그인에 실패하였습니다."); //임의 표시
      }
    }
  };

  return (
    <LoginWrapper>
      <WelcomTitle>
        <p>
          Welcome to <a>camcoder !</a>
        </p>
        <p>캠코더의 다양한 서비스 이용을 위해 로그인을 해주세요.</p>
      </WelcomTitle>
      <LoginFormContainer>
        <IdInputbox>
          <IdInput
            type="text"
            placeholder="Enter Your Id"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          ></IdInput>
        </IdInputbox>
        {mes ? (
          <Mes>
            등록되지 않은 아이디이거나,<br></br>아이디 또는 비밀번호를 잘못
            입력하였습니다.
          </Mes>
        ) : null}
        <PwdInputbox>
          <PwdInput
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></PwdInput>
        </PwdInputbox>
        <LoginCheckBoxContainer>
          <MaintainLoginCheckBox>
            <MaintainLoginCheck></MaintainLoginCheck>
            <p>로그인 유지</p>
          </MaintainLoginCheckBox>
        </LoginCheckBoxContainer>
      </LoginFormContainer>
      <LoginBtn onClick={() => handleButtonClick()}>
        {loading ? "Loading..." : "로그인"}
      </LoginBtn>
      <SignUpMent>
        첫 방문이신가요?{" "}
        <StyledLink to={`/signUp`}>회원가입하러가기</StyledLink>
      </SignUpMent>
    </LoginWrapper>
  );
};
