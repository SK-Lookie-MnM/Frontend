import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    background: #E8EEEA;
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
    width: 1059px;
    height: 444px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px; /* 맵과 정보 간 간격을 설정 */
`;

export const InfoContainer = styled.div`
    width: 1059px;  /* 너비를 100%로 설정하여, 화면에 맞게 차지하게 */
    padding: 10px;
    background-color: rgba(240, 245, 245, 0); /* 완전히 투명한 배경 */
    border-radius: 5px;
    font-size: 21.53px;
`;

export const UnivItem = styled.div`
    display: flex;
    flex-direction: column; /* 세로로 배치 */
    width: 80%;
    background-color: rgba(240, 245, 245, 0); /* 완전히 투명한 배경 */
    border: none; /* 테두리 제거 */
    box-shadow: none; /* 그림자 제거 */
    border-radius: 0; /* 둥근 모서리 제거 */
    overflow: hidden;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    margin-bottom: 100px;
`;

export const UniversityName = styled.h3`
    margin-left: 20px;
    color: #23443D;
    font-size: 30px;
`;

export const InfoText = styled.p`
    margin-left: 20px;
  font-size: 0.9em;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between; /* 텍스트는 왼쪽, 버튼은 오른쪽에 위치 */
    align-items: center; /* 세로 중앙 정렬 */
    font-size: 21px;
    margin-top: 20px; /* 맵과 정보 간 간격을 줄임 */
    margin-bottom: 20px; /* 아래쪽 여백 */
`;


// eslint-disable-next-line react-refresh/only-export-components
export const Button_Map = styled.button`
    background-color: #23443D;
    color: white;
    border: none;
    padding: 8px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 40px;

    &:hover {
        background-color: #8B8B8B;
    }
`;

export const CoderContainer = styled.div`
    display: flex;
    flex-direction: column; /* 세로로 배치 */
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    text-align: center; /* 텍스트 중앙 정렬 */
    gap: 10px; /* 요소들 사이 간격 조정 */
    margin-top: 100px;
`;

export const Dot = styled.h1`
    color: #0C4536;
`;

export const CoderText = styled.h1`
    margin-top: 100px;
    color: #0C4536;
`;

export const Button_Coder = styled.button`
    margin-top: 100px;
    background-color: #23443D;
    color: white;
    border: none;
    padding: 20px 35px;
    font-size: 25px;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 100px;

    &:hover {
        background-color: #8B8B8B;
    }
`;
