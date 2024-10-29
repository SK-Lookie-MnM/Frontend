import styled from "styled-components";

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
  }
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IdInputbox = styled.div`
  display: flex;
  align-items: center;
  width: 597px;
  height: 116px;
  margin-top: 12.5px;
`;
export const IdInput = styled.input`
  width: 100%;
  height: 66px;
  border-radius: 72px;

  background-color: rgba(235, 235, 235, 1);
  border: 0.8px solid rgba(139, 139, 139, 1); /* 원하는 두께, 스타일, 색상 */
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
  background-color: rgba(235, 235, 235, 1);
  border: 0.8px solid rgba(139, 139, 139, 1); /* 원하는 두께, 스타일, 색상 */
`;
export const LoginCheckBoxContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const MaintainLoginCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: absolute;
  left: 20px; // 오른쪽 끝에서 10px 간격으로 위치

  p: nth-child(2) {
    font-family: "Pretendard-Regular";
    font-size: 17px;
  }
`;
export const MaintainLoginCheck = styled.input.attrs({ type: "checkbox" })``;

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
`;
