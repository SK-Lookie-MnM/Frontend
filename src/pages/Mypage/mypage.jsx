import { useState } from "react";
import "./Mypage.style.jsx";
import {
  CancleBtn,
  EditBtn,
  MyPageBtnContainer,
  MyPageMenu,
  MyPageProfile,
  MyPageProfileContainer,
  MyPageProfileContents,
  MyPageTicket,
  MyPageTicketContents,
  MyPageTitle,
  MyPageTitleContainer,
  MyPageWrapper,
  NameInput,
  TableCell,
  TableRow,
} from "./Mypage.style.jsx";

const MyPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("profile");

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <MyPageWrapper>
      <MyPageTitleContainer>
        <MyPageTitle>마이 페이지</MyPageTitle>
        <MyPageMenu>
          <MyPageProfile onClick={() => handleSelectMenu("profile")}>
            프로필 수정
          </MyPageProfile>
          <p> ㅣ </p>
          <MyPageTicket onClick={() => handleSelectMenu("ticket")}>
            정기권 구독
          </MyPageTicket>
        </MyPageMenu>
      </MyPageTitleContainer>

      {selectedMenu === "profile" && (
        <MyPageProfileContainer>
          <MyPageProfileContents>
            <TableRow className="highlighted-row">
              <TableCell>이름</TableCell>
              <TableCell>
                <NameInput></NameInput>
              </TableCell>
            </TableRow>
            <TableRow className="highlighted-row">
              <TableCell>소속대학</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>회원유형</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </MyPageProfileContents>
          <MyPageBtnContainer>
            <CancleBtn>취소</CancleBtn>
            <EditBtn>수정</EditBtn>
          </MyPageBtnContainer>
        </MyPageProfileContainer>
      )}
      {selectedMenu === "ticket" && (
        <MyPageTicketContents></MyPageTicketContents>
      )}
    </MyPageWrapper>
  );
};

export default MyPage;
