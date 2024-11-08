import styled from "styled-components";
import { Link } from "react-router-dom";
import CheckIcon from "../../assets/icon/Signup/Group.svg";

export const LoginWrapper = styled.div`
  display: flex;
  width: 590px;
  height: 502.92px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 38px;
  margin-top: 120px;
  margin-bottom: 177px;
`;
export const WelcomTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Hakgyoansim-Dunggeunmiso-B";
  font-size: 40px;
  gap: 30px;
  p: nth-child(2) {
    font-family: "Pretendard-Regular";
    font-size: 20px;
    color: rgba(139, 139, 139, 1);
  }
  a {
    color: rgba(35, 68, 61, 1);
  }
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Mes = styled.div`
  display: flex;
  width: 384px;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Spacing-1, 4px);
  color: #ff616a;
`;
export const IdInputbox = styled.div`
  display: flex;
  align-items: center;
  width: 597px;
  height: 116px;
  margin-top: 12.5px;
`;
export const IdInput = styled.input`
  display: flex;
  width: 100%;
  height: 66px;
  align-items: center;
  justify-content: center;
  border-radius: 72px;
  background-color: rgba(235, 235, 235, 1);
  border: 0.8px solid rgba(139, 139, 139, 1); /* 원하는 두께, 스타일, 색상 */
  padding: 30px;
  font-family: "Pretendard-Regular"; /* placeholder 글꼴 설정 */
  font-size: 22px;

  &::placeholder {
    font-family: "Pretendard-Regular"; /* placeholder 글꼴 설정 */
    font-size: 22px;
    color: rgba(167, 164, 164, 1);
  }
`;

export const PwdInputbox = styled.div`
  display: flex;
  align-items: center;
  width: 597px;
  height: 116px;
  margin-top: -12.5px;
`;

export const PwdInput = styled.input`
  width: 100%;
  height: 66px;
  border-radius: 72px;
  justify-content: center;
  background-color: rgba(235, 235, 235, 1);
  border: 0.8px solid rgba(139, 139, 139, 1); /* 원하는 두께, 스타일, 색상 */
  padding: 30px;
  font-family: "Pretendard-Regular"; /* placeholder 글꼴 설정 */
  font-size: 22px;

  &::placeholder {
    font-family: "Pretendard-Regular"; /* placeholder 글꼴 설정 */
    font-size: 22px;
    color: rgba(167, 164, 164, 1);
  }
`;
export const LoginCheckBoxContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const MaintainLoginCheckBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  position: absolute;
  left: 20px; // 오른쪽 끝에서 10px 간격으로 위치

  p: nth-child(2) {
    font-family: "Pretendard-Regular";
    font-size: 17px;
  }
`;
export const MaintainLoginCheck = styled.input.attrs({ type: "checkbox" })`
  appearance: none; /* 기본 체크박스 스타일 제거 */
  width: 25.34px;
  height: 25.34px;
  border-radius: 3.96px;
  border: 1.58px solid rgba(179, 179, 179, 1); /* 테두리 색상 */
  cursor: pointer;
  &:checked {
    background-color: #23443d; /* 체크되었을 때 배경색 */
    border: 2px solid #23443d; /* 체크되었을 때 테두리 색 */
    position: relative;
  }

  &:checked::after {
    content: url(${CheckIcon});
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18.07px;
    height: 13px;
    background-size: contain;
    background-repeat: no-repeat;
    transform: translate(-50%, -50%);
    z-index: 1; /* 드롭다운보다 낮게 설정 */
  }
`;

export const LoginBtn = styled.div`
  display: flex;
  border-radius: 72px;
  width: 597px;
  height: 57px;
  padding: 28px;
  margin-top: 18px;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-Bold";
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(35, 68, 61, 1);
`;
export const SignUpMent = styled.div`
  display: flex;
  font-family: "Pretendard-Light";
  font-size: 18px;
  gap: 5px;
`;

export const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 1); /* 링크 색상 */
  text-decoration: none; /* 기본 밑줄 제거 */
  position: relative; /* 가상 요소의 기준이 될 위치 설정 */

  /* 밑줄 추가 */
  &::after {
    content: ""; /* 비어있는 가상 요소 */
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px; /* 텍스트와 밑줄 간격 */
    height: 1.38px; /* 밑줄 두께 */
    background-color: rgba(0, 0, 0, 1); /* 밑줄 색상 */
  }
  &:hover {
    color: #0056b3; /* 호버 시 색상 변경 */
  }
  &:hover::after {
    background-color: #0056b3; /* 호버 시 밑줄 색상 변경 */
  }
`;
