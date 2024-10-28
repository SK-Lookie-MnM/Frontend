import styled from "styled-components";

export const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 599px;
  width: 1193px;
  margin: 107px;
`;

export const MyPageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Pretendard-Regular";
  gap: 100px;
`;
export const MyPageTitle = styled.p`
  font-size: 40px;
`;
export const MyPageMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 312px;
  height: 30px;
  font-size: 25px;
`;

export const MyPageProfile = styled.div``;
export const MyPageTicket = styled.div``;

export const MyPageProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 방향으로 중앙 정렬 */
  align-items: center; /* 수직 방향으로 중앙 정렬 */
  gap: 52px;
  padding: 82px;
`;

export const MyPageProfileContents = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr; /* 첫 번째 열은 작고, 두 번째 열은 큼 */
  grid-template-rows: repeat(3, 1fr);
  width: 1194px;
  height: 233px;
  border-top: 2px solid #000; /* 위쪽 테두리 */
  border-bottom: 2px solid #000; /* 아래쪽 테두리 */
  border-left: 2px solid transparent; /* 왼쪽 테두리: 투명 */
  border-right: 2px solid transparent; /* 오른쪽 테두리: 투명 */
  margin: 0 auto; /* 중앙 정렬 */
`;

export const TableRow = styled.div`
  display: contents;
`;
export const TableCell = styled.div`
  padding: 20px;
  text-align: center;
  font-family: "Pretendard-Medium";
  font-size: 20px;
  background-color: rgba(201, 207, 195, 0.3);
  display: flex; /* 정렬을 위해 플렉스 박스로 설정 */
  justify-content: center; /* 수평 방향으로 중앙 정렬 */
  align-items: center; /* 수직 방향으로 중앙 정렬 */
  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 1); /* 짝수 셀은 약간 다른 배경색 */
  }
  /* 마지막 행의 셀에 대한 스타일링 */
  .highlighted-row & {
    border-bottom: 2.55px solid rgba(201, 207, 195, 0.5); /* 아래쪽 테두리 */
  }
`;

export const NameInput = styled.input`
  width: 100%; /* 입력 필드가 셀을 꽉 채우도록 설정 */
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  border: 1px solid transparent; /* 왼쪽 테두리: 투명 */
  &:focus {
    border-color: #999; /* 포커스 시 테두리 색상 변경 */
  }
`;

export const MyPageTicketContents = styled.div``;

export const MyPageBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
`;

export const CancleBtn = styled.div`
  display: flex; /* 플렉스 박스로 설정 */
  justify-content: center; /* 수평 방향으로 중앙 정렬 */
  align-items: center; /* 수직 방향으로 중앙 정렬 */
  border-radius: 7.73px;
  width: 199.22px;
  height: 54.33px;
  border: 1px solid;
  font-family: "Pretendard-Medium";
  font-size: 21.71px;
  color: rgba(35, 68, 61, 1);
`;

export const EditBtn = styled.div`
  display: flex; /* 플렉스 박스로 설정 */
  justify-content: center; /* 수평 방향으로 중앙 정렬 */
  align-items: center; /* 수직 방향으로 중앙 정렬 */
  border-radius: 7.73px;
  width: 199.22px;
  height: 54.33px;
  border: 1px solid;
  font-family: "Pretendard-Semi-Bold";
  font-size: 21.71px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(35, 68, 61, 1);
`;
