import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    background: linear-gradient(to bottom, white, #C9CFC3);
    width: 100%;
    font-family: "Pretendard-Regular";
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    text-align: center;
    color: #23443D;
    line-height: 35px;
    margin-bottom: 3rem;
    margin-top: 5rem;
`;

export const MapContainer = styled.div`
    width: 50%;
    height: 300px;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
`;

export const InfoContainer = styled.div`
    width: 50%;
  padding: 10px;
    background-color: rgba(240, 245, 245, 0); /* 완전히 투명한 배경 */
  border-radius: 5px;
    font-size: 21.53px;
`;


export const UnivItem = styled.div`
    display: flex;
    width: 80%;
    margin-bottom: 30px;
    background-color: rgba(240, 245, 245, 0); /* 완전히 투명한 배경 */
    border: none; /* 테두리 제거 */
    box-shadow: none; /* 그림자 제거 */
    border-radius: 0; /* 둥근 모서리 제거 */
    overflow: hidden;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
`;

export const UniversityName = styled.h3`
  margin: 0;
`;

export const LinkText = styled.a`
  color: #23443D;
    font-size: 17.22px;
    margin-left: 7rem;
    text-decoration: underline;
  &:hover {
    text-decoration: underline;
  }
`;

export const InfoText = styled.p`
    margin-left: 20px;
  font-size: 0.9em;
`;


export const TextContainer = styled.div`
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    font-size: 21px;
    margin-left: 20px;
    margin-top: 100px;
    margin-bottom: 20px; /* 아래쪽 여백 */
`;
