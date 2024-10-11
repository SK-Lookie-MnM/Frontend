import {
  Button,
  CamcoderLogo,
  CheckContainer,
  CheckField,
  Checkbox,
  Input,
  InputField,
  Label,
  Line,
  SignUpContents,
  SignUpForm,
  SignUpHeader,
  SignUpSection,
  SignUpTitle,
} from "./SignUp.style";

import logo from "../../assets/icon/Signup/Group 2609363.png";

const SignUp = () => {
  return (
    <div>
      <SignUpSection>
        <SignUpContents>
          <SignUpHeader>
            <CamcoderLogo src={logo} alt="MNM Logo"></CamcoderLogo>
            <SignUpTitle>
              <b>회원가입</b>
              <p></p>캠코더에 오신걸 환영합니다.
            </SignUpTitle>
            <Line></Line>
          </SignUpHeader>
          <SignUpForm>
            <InputField>
              <Label>1. 사용하실 아이디와 비밀번호를 설정해주세요.</Label>
              <Input type="text" placeholder="아이디 입력" />
              <Input type="password" placeholder="비밀번호 입력" />
            </InputField>
            <InputField>
              <Label>2. 이름을 설정해주세요.</Label>
              <Input type="text" placeholder="이름 입력" />
            </InputField>
            <InputField>
              <Label>3. 소속대학을 선택하세요.</Label>
              <Input type="text" placeholder="회원유형" />
            </InputField>
            <CheckContainer>
              <Label>4. 회원유형을 선택하세요</Label>
              <CheckField>
                <Checkbox /> 일반 대학생 <Checkbox /> 팀 MNM
                <Checkbox /> 운영진
              </CheckField>
            </CheckContainer>
            <Button>캠코더 가입하기</Button>
          </SignUpForm>
        </SignUpContents>
      </SignUpSection>
    </div>
  );
};

export default SignUp;
