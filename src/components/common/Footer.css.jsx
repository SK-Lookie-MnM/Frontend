import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 295px;
  background-color: rgba(48, 53, 53, 1);
  padding: 20px 0; /* 패딩을 추가해 Footer의 상하 여백을 확보 */
  gap: 26px;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5); /* 두꺼운 선 */
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* 아이템들을 오른쪽에 정렬 */
  gap: 47px; /* 아이템들 간의 간격 조정 */
  align-items: center; /* 수직 가운데 정렬 */
  width: 100%; /* 부모 요소의 전체 넓이를 차지하도록 설정 */
`;

export const CamcoderLogo = styled.img`
  height: 107px;
  width: 92px;
`;

export const Insta = styled.img`
  height: 25px;
  width: 25px;
`;

export const Email = styled.img`
  height: 25px;
  width: 25px;
`;

export const Clip = styled.img`
  height: 25px;
  width: 25px;
`;

export const SK_LOOKIE_MNM = styled.p`
  font: Pretendard;
  font-size: 15px;
  color: rgba(255, 255, 255, 1);
`;
