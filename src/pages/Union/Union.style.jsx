import styled from "styled-components";

export const ContentsTextBold = styled.a`
  font-family: "Pretendard-Semi-Bold";
  color: rgba(175, 149, 122, 1);
`;

export const ContentsTextBox1 = styled.div``;

export const ContentsTextBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Regular";
  font-size: 24.16px;
  gap: 32.8px;
`;

export const LineBold = styled.div`
  width: 887px;
  border-top: 1.98px solid black; /* 두꺼운 선 */
`;

export const LineLight = styled.div`
  width: 887px;
  border-top: 0.95px solid black; /* 두꺼운 선 */
`;

export const MainContentsWrapper = styled.div`
    flex-grow: 1; /* 남은 공간을 차지 */
    overflow-y: auto; /* 세로 스크롤 활성화 */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1417px;
`;

export const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%; /* 전체 너비의 70%를 차지하게 설정 */
  margin: 46px;
  gap: 91px;
`;

export const MainHeaderSlide = styled.div`
  display: flex;
  width: 100%;
  height: 636px;
`;

export const MainheaderImg = styled.img`
  width: 100%;
  height: 636px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
    min-height: 100vh; /* 화면 전체 높이를 차지 */
`;

export const TextLight = styled.a`
  font-family: "Pretendard-Light";
  font-size: 34.51px;
`;

export const TextBold = styled.a`
  font-family: "Pretendard-Semi-Bold";
  font-size: 34.51px;
  color: rgba(35, 68, 61, 1);
`;

export const TextLogo = styled.p`
  font-family: "Hakgyoansim-Dunggeunmiso-B";
  font-size: 34.51px;
  color: rgba(35, 68, 61, 1);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div``;

export const StyledImage = styled.img`
    width: 100px;
`;