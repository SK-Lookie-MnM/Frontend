import styled from "styled-components";
import CheckIcon from "../../assets/icon/Signup/Group.svg";

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
  gap: 40px;
`;

export const CamcoderLogo = styled.img`
  width: 120.76px;
  height: 140.51px;
`;

export const SignUpTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

export const IdInputContainer = styled.div`
  display: flex;
  width: 790px;
  flex-direction: column; /* 수직 배치 */
  gap: 10px; /* warn 메세지와 인풋 사이 간격 */
`;

export const PasswordInputContainer = styled.div`
  display: flex;
  width: 790px;
  flex-direction: column; /* 수직 배치 */
  gap: 10px; /* 라벨과 인풋 사이 간격 */
`;
export const NameInputContainer = styled.div`
  display: flex;
  width: 790px;
  flex-direction: column; /* 수직 배치 */
  gap: 10px; /* 라벨과 인풋 사이 간격 */
`;

export const Warn = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 10px;
  text-align: left; /* 텍스트를 왼쪽 정렬 */
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
  border: 2px solid ${(props) => (props.isCompleted ? "green" : "gray")};
  padding: 5px 40px 5px 10px; // 오른쪽 패딩을 추가하여 아이콘 위치 공간 확보
  color: ${(props) => (props.isCompleted ? "green" : "black")};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px; // 오른쪽 끝에서 10px 간격으로 위치
  transform: translateY(-50%);
  color: ${(props) => (props.isCompleted ? "green" : "gray")};
`;

export const Button = styled.button`
  width: 225.42px;
  height: 61.48px;
  border-radius: 8.75px;
  background-color: #23443d;
  color: #ffffff;
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

export const RadioButton = styled.input.attrs({
  type: "radio",
  name: "memberType",
})`
  width: 28.57px;
  height: 28.57px;
  border-radius: 100%;
  border: 0.84px solid rgba(0, 0, 0, 1); /* 테두리 색상 */
  background-color: white;
  appearance: none; /* 기본 체크박스 스타일 제거 */
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

export const CheckOption = styled.p`
  font: Pretendard;
  font-size: 22.6px;
`;

export const SelectBox = styled.select`
  appearance: none; // 기본 브라우저 스타일 제거
  width: 100%;
  padding: 15px 15px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &:hover {
    background-color: #e9e9e9;
  }

  /* 화살표 추가 */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='gray'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
`;

export const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;
`;

export const DropdownHeader = styled.div`
  padding: 15px;
  font-size: 16px;
  background-color: #f9f9f9;
  border: 2px solid ${(props) => (props.isSelected ? "green" : "gray")};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition:
    border-color 0.3s ease,
    color 0.3s ease; /* 색상 전환 효과 추가 */
  text-align: left;
  color: ${(props) =>
    props.isSelected ? "green" : "gray"}; /* 텍스트 색상 변경 */

  &:hover {
    border-color: ${(props) => (props.isSelected ? "green" : "gray")};
  }
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0 0 8px 8px;
  overflow: hidden;
`;

export const DropdownListItem = styled.div`
  padding: 10px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;
