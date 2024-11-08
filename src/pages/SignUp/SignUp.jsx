import {
  Button,
  CamcoderLogo,
  CheckContainer,
  CheckField,
  Checkbox,
  DropdownContainer,
  DropdownHeader,
  DropdownListContainer,
  DropdownListItem,
  IconWrapper,
  IdInputContainer,
  Input,
  InputCheck,
  InputContainer,
  InputEmail,
  InputEmailBox,
  InputEmailCheckButton,
  InputEmailContainer,
  InputEmailField,
  InputField,
  InputNameField,
  InputUniversityField,
  Label,
  Line,
  NameInputContainer,
  PasswordCheckContainer,
  PasswordInputContainer,
  SignUpContents,
  SignUpForm,
  SignUpHeader,
  SignUpSection,
  SignUpTitle,
  Warn,
} from "./SignUp.style.jsx";

import { FaCheck } from "react-icons/fa6";
import logo from "../../assets/icon/Signup/Group2609363.png";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");

  const [userIdMessage, setUserIdMessage] =
    useState("영문/숫자 포함 6자리 이상");
  const [passwordMessage, setPasswordMessage] =
    useState("영문/숫자 포함 8자리 이상");
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordCheckMessage, setPasswordCheckMessage] =
    useState("비밀번호를 확인하세요");

  const [isCheckUserId, setIsCheckUserId] = useState(false);
  const [isCheckName, setIsCheckName] = useState(false);
  const [isCheckPassword, setIsCheckPassword] = useState(false);
  const [isCheckEqualPassword, setIsCheckEqualPassword] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  const options = ["동덕여대", "서울여대", "한국외대"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("선택하세요");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const checkId = (value) => {
    // 영문과 숫자를 포함하고 8자 이상
    const regExp = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    setUserId(value);

    if (value.trim() === "") {
      setUserIdMessage("아이디를 입력하세요.");
      setIsCheckUserId(false);
    } else if (value.length < 6) {
      setUserIdMessage("최소 6자리 이상 입력해주세요.");
      setIsCheckUserId(false);
    } else if (!regExp.test(value)) {
      setUserIdMessage("아이디는 영문과 숫자를 포함해야 합니다.");
      setIsCheckUserId(false);
    } else {
      setUserIdMessage("");
      setIsCheckUserId(true);
    }
  };

  const isEqualPassword = (value) => {
    setPasswordCheck(value);
    if (value.trim() === "") {
      setPasswordCheckMessage("비밀번호를 다시 입력해주세요.");
      setIsCheckEqualPassword(true);
    } else if (value.trim() === password) {
      setIsCheckEqualPassword(true);
      setPasswordCheckMessage("비밀번호가 맞습니다.");
    } else {
      setIsCheckEqualPassword(false);
      setPasswordCheckMessage("비밀번호가 틀립니다.");
    }
  };

  //이메일 유효성 검사
  const checkEmail = (value) => {
    //영어 소문자, 숫자, @와 .을 포함
    const regExp = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/;
    setEmail(value);

    if (value.trim() === "") {
      setEmailMessage("이메일을 입력해주세요.");
      setEmailCheck(false);
    } else if (!regExp.test(value)) {
      setEmailMessage("유효하지 않은 이메일 형식입니다.");
      setEmailCheck(false);
    } else {
      setEmailMessage("");
      setEmailCheck(true);
    }
  };

  const checkPassword = (value) => {
    //비밀번호 유효성 검사
    //영문과 숫자를 포함하고 8자 이상
    const regExp = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    setPassword(value);

    if (value.trim() === "") {
      setPasswordMessage("비밀번호를 입력해주세요.");
      setIsCheckPassword(false);
    } else if (value.length < 8) {
      setPasswordMessage("최소 8자리 이상 입력해주세요.");
      setIsCheckPassword(false);
    } else if (!regExp.test(value)) {
      setPasswordMessage("비밀번호는 영문과 숫자를 포함해야 합니다.");
      setIsCheckPassword(false);
    } else {
      setPasswordMessage("");
      setIsCheckPassword(true);
    }
  };

  const checkName = (value) => {
    setName(value);
    if (value.trim === "" || value.length < 1) {
      setNameMessage("이름을 입력해주세요.");
      setIsCheckName(false);
    } else {
      setNameMessage("");
      setIsCheckName(true);
    }
  };

  return (
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
            <IdInputContainer>
              <InputContainer>
                <Input
                  type="text"
                  placeholder="아이디 입력"
                  value={userId}
                  onChange={(e) => checkId(e.target.value.trim())}
                  isCompleted={isCheckUserId}
                />
                <IconWrapper isCompleted={isCheckUserId}>
                  <FaCheck />
                </IconWrapper>
              </InputContainer>
              <Warn>{userIdMessage}</Warn>
            </IdInputContainer>
            <PasswordInputContainer>
              <InputContainer>
                <Input
                  type="password"
                  placeholder="비밀번호 입력"
                  value={password}
                  onChange={(e) => checkPassword(e.target.value.trim())}
                  isCompleted={isCheckPassword}
                />
                <IconWrapper isCompleted={isCheckPassword}>
                  <FaCheck />
                </IconWrapper>
              </InputContainer>
              <Warn>{passwordMessage}</Warn>
            </PasswordInputContainer>
            <PasswordCheckContainer>
              <InputContainer>
                <InputCheck
                  type="password"
                  placeholder="비밀번호 입력"
                  value={passwordCheck}
                  onChange={(e) => isEqualPassword(e.target.value.trim())}
                  isCompleted={isCheckEqualPassword}
                />
                <IconWrapper isCompleted={isCheckPassword}>
                  <FaCheck />
                </IconWrapper>
              </InputContainer>
              <Warn>{passwordCheckMessage}</Warn>
            </PasswordCheckContainer>
          </InputField>

          <InputNameField>
            <Label>2. 이름을 설정해주세요.</Label>
            <NameInputContainer>
              <InputContainer>
                <Input
                  type="text"
                  placeholder="이름 입력"
                  value={name}
                  onChange={(e) => checkName(e.target.value.trim())}
                  isCompleted={isCheckName}
                />
                <IconWrapper isCompleted={isCheckName}>
                  <FaCheck />
                </IconWrapper>
              </InputContainer>
              <Warn>{nameMessage}</Warn>
            </NameInputContainer>
          </InputNameField>
          <InputEmailField>
            <Label>3. 이메일을 입력해주세요.</Label>
            <InputEmailContainer>
              <InputEmailBox>
                <InputEmail
                  type="email"
                  placeholder="이메일 입력 ex) sklookie_mnm@naver.com"
                  value={email}
                  onChange={(e) => checkEmail(e.target.value.trim())}
                  isCompleted={emailCheck}
                ></InputEmail>
                <IconWrapper isCompleted={isCheckName}>
                  <FaCheck />
                </IconWrapper>
              </InputEmailBox>

              <InputEmailCheckButton>확인</InputEmailCheckButton>
            </InputEmailContainer>
            <Warn>{emailMessage}</Warn>
          </InputEmailField>
          <InputUniversityField>
            <Label>4. 소속대학을 선택하세요.</Label>
            <DropdownContainer>
              <DropdownHeader
                onClick={toggleDropdown}
                isSelected={selectedOption !== "선택하세요"}
              >
                {selectedOption}
              </DropdownHeader>
              {isOpen && (
                <DropdownListContainer>
                  {options.map((option) => (
                    <DropdownListItem
                      key={option}
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                    </DropdownListItem>
                  ))}
                </DropdownListContainer>
              )}
            </DropdownContainer>
          </InputUniversityField>
          <CheckContainer>
            <Label>5. 회원유형을 선택하세요</Label>
            <CheckField>
              <Checkbox /> 일반 대학생 <Checkbox /> 팀 MNM
              <Checkbox /> 운영진
            </CheckField>
          </CheckContainer>
          <Button>캠코더 가입하기</Button>
        </SignUpForm>
      </SignUpContents>
    </SignUpSection>
  );
};

export default SignUp;
