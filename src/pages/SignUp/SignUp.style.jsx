import styled from "styled-components";

export const SignUpSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpContents = styled.div`
  display: flex;
  width: 1131px;
  padding: 0px 166px;
  justify-content: center;
  flex-direction: column;
`;

export const SignUpHeader = styled.div`
  display: flex;
  padding: 55px 55px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 52px;
`;
export const SignUpForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0; /* 내부 패딩 */
  border-radius: 12.93px;
  background: lightgray;
  gap: 40px;
`;

export const CamcoderLogo = styled.img`
  width: 120.76px;
  height: 140.51px;
`;

export const SignUpTitle = styled.div``;

export const Line = styled.div`
  width: 1131px;
  border-bottom: 3px solid rgba(65, 79, 58, 1); /* 두꺼운 선 */
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column; /* 수직 배치 */
  align-items: center;
  justify-content: center;
  width: 790px;
  gap: 20px; /* 라벨과 인풋 사이 간격 */
`;

export const Label = styled.div`
  font: Pretendard;
  font-size: 25px;
  weight: 500;
  width: 100%;
  text-align: left; /* 텍스트를 왼쪽 정렬 */
`;

export const Input = styled.input`
  width: 100%;
  max-width: 790px;
  height: 40px;
  border-radius: 12.98px;
  border: 1.95px;
  padding: 5px 10px;
`;

export const Button = styled.button`
  width: 225.42px;
  height: 61.48px;
  border-radius: 8.75px;
`;

export const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 790px;
  gap: 20px;
`;
export const CheckField = styled.div`
  width: 100%;
  display: flex;
  align-items: center; /* 체크박스와 텍스트가 수평으로 중앙 정렬되도록 설정 */
  gap: 10px; /* 체크박스와 텍스트 사이의 간격 */
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 0.84px solid rgba(0, 0, 0, 1); /* 테두리 색상 */
  background-color: white;
  appearance: none; /* 기본 체크박스 스타일 제거 */
  cursor: pointer;

  &:checked {
    background-color: #65bd83; /* 체크되었을 때 배경색 */
    border: 2px solid #65bd83; /* 체크되었을 때 테두리 색 */
    position: relative;
  }

  &:checked::after {
    content: "✔"; /* 체크 표시 */
    color: white;
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 5px;
  }
`;
