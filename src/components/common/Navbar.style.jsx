import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 146px;
  flex-direction: column; /* 세로 방향으로 NavWrapper와 Dropdown 배치 */
  background-color: ${({ visible }) =>
    visible ? "rgba(35, 68, 61, 1)" : "rgba(255, 255, 255, 1)"};
  font-family: "Pretendard-Medium";
  list-style: none; /* 마커 제거 */
  align-items: center; /* 로고와 메뉴를 수평으로 정렬 */
  justify-content: center; /* 전체 Nav 내용을 중앙에 정렬 */
  position: relative;
`;
export const NavWrapper = styled.div`
  display: flex;
  background-color: ${({ visible }) =>
    visible ? "rgba(35, 68, 61, 1)" : "rgba(255, 255, 255, 1)"};

  width: 100%;
  height: 146px;
  white-space: nowrap;
  flex-direction: column; /* 세로 방향으로 NavWrapper와 Dropdown 배치 */
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InstaLogo = styled.img``;
export const UsersBox = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  width: 199px;
  height: 74px;
  background-color: ${({ visible }) =>
    visible ? "rgba(35, 68, 61, 1)" : "rgba(255, 255, 255, 1)"};

  gap: 8px;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  color: rgba(139, 139, 139, 1);
`;
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  align-items: center; /* 수직 가운데 정렬 */
  list-style: none; /* 마커 제거 */
  width: 100%;
  height: 54px;
  justify-content: space-between;
`;

export const NavBox = styled.ul`
  display: flex;
  list-style: none;
  cursor: pointer;
  width: 742px;
  height: 54px;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  margin-right: 30px; /* 각 메뉴 항목 사이 간격을 30px로 설정 */
  display: flex;
  font-size: 23px;
  position: relative;
  align-items: center;
  color: ${({ visible }) =>
    visible ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)"};

  &:last-child {
    margin-right: 0; /* 마지막 메뉴 항목은 오른쪽 간격을 없앰 */
  }

  & > p {
    cursor: pointer;
    margin-right: 30px;
    font-size: 25px; /* 글자 크기 설정 */
    /* 각 메뉴 항목 사이의 간격을 30px로 설정 */
    line-height: 0px; /* 줄 간격 설정 */

    &:hover {
      color: #03b888; /* 마우스 올릴 때 색깔 변화 */
    }
  }

  & > a {
    text-decoration: none; /* 링크의 밑줄 제거 */
    color: white; /* 링크 색상 설정 (원하는 색상으로 변경 가능) */

    &:hover {
      color: #03b888; /* 마우스 올릴 때 색깔 변화 */
    }
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  display: flex;
  background-color: rgba(35, 68, 61, 1); /* 드롭다운 배경색 */
  animation: fadeIn 0.3s ease-in-out;
  z-index: 1000;
`;

export const DropdownMenuWrapper = styled.div``;

export const Dropdown = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 150px;
  padding: 0 20px;
`;

export const SubmenuWrapper = styled.div`
  display: flex;
  width: 742px;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  margin-left: 180px;
`;
export const SubmenuRow = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
`;
export const SubmenuColumn = styled.li`
  list-style: none;
  display: flex;
  margin-right: 30px;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  font-family: "Pretendard-Regular";
  font-size: 21px;

  & > li {
    cursor: pointer;
    &:hover {
      color: #03b888;
    }
  }
`;

export const SubmenuItem = styled.div`
  display: flex;
  color: white;
  list-style-type: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: #03b888;
  }
`;

export const Logo = styled.img`
  width: 46px;
  height: 54px;
  cursor: pointer;
`;

export const LogoItem = styled.div`
  display: flex;

  margin-right: 20px; /* 로고와 메뉴 사이 간격을 설정 */
`;
