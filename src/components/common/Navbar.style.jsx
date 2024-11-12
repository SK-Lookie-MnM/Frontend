import { Link } from "react-router-dom";
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
  height: ${({ visible }) =>
    visible ? "300px" : "146px"}; /* visible에 따라 높이 조정 */
  flex-direction: column; /* 세로 방향으로 NavWrapper와 Dropdown 배치 */
  align-items: center;

  font-family: "Pretendard-Medium";
  font-size: 23px;
  gap: 30px;
`;
export const LoginContainer = styled.div`
  transform: ${({ isLoggingOut }) =>
    isLoggingOut ? "translateY(-10px)" : "translateY(0)"};
  transition: transform 0.5s ease;
  display: flex;
  gap: 10px; /* 여백 조정 */
`;
export const InstaLogo = styled.img``;
export const UsersBox = styled.div`
  display: flex;
  white-space: nowrap; /* 줄바꿈 방지 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  width: 199px;
  height: 74px;
  background-color: ${({ visible }) =>
    visible ? "rgba(35, 68, 61, 1)" : "rgba(255, 255, 255, 1)"};
  margin-right: 20px;
  gap: 8px;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  color: rgba(139, 139, 139, 1);
`;
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  position: absolute
  top: -80%; /* 수평 중앙 정렬 */
  transform: translateY(80%); /* 중앙 정렬을 위해 이동 */
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
  width: 774px;
  height: 54px;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  flex: 1; /* 각 항목이 동일한 너비를 가짐 */
  position: relative; /* 세부 메뉴를 절대 위치로 설정하기 위해 상대 위치 */
  display: flex;
  font-size: 23px;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  
  color: ${({ visible }) =>
    visible ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)"};

  &:last-child {
    margin-right: 0; /* 마지막 메뉴 항목은 오른쪽 간격을 없앰 */
  }

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

export const DropDownBox = styled.div``;

export const DropdownWrapper = styled.div`
  top: 100%;
  width: 100%;
  position: absolute;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  display: flex;
  background-color: rgba(35, 68, 61, 1); /* 드롭다운 배경색 */
  animation: fadeIn 0.3s ease-in-out;
  z-index: 1000;
  overflow: visible; /* 내용이 잘리지 않도록 설정 */
`;

export const SubmenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 32px; /* 항목 간의 간격 설정 */
  width: 739px;
  height: 82px;
  font-family: "Pretendard-Regular";
  font-size: 21px;
`;

export const SubmenuColumn = styled.div`
  display: flex; /* Flexbox 사용 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  list-style: none;
  white-space: nowrap;
  font-family: "Pretendard-Regular";
  font-size: 21px;
  padding: 10px; /* 패딩 추가하여 여유 공간 확보 */

  & > li {
    cursor: pointer;
    &:hover {
      color: #03b888;
    }
  }
`;

export const Logo = styled.img`
  width: 46px;
  height: 54px;
  cursor: pointer;
`;

export const LogoItem = styled.div`
  display: flex;
  padding: 0 20px;
`;

export const StyledLink = styled(Link)`
  color: inherit; /* 부모의 색상 상속 */
  text-decoration: none; /* 밑줄 제거 */

  &:hover {
    color: rgba(35, 68, 61, 1); /* 마우스 오버 시 색상 변화 */
  }
`;

export const InstagramLink = styled.a`
  color: inherit; /* 부모의 색상 상속 */
  text-decoration: none; /* 밑줄 제거 */
  display: inline-block; /* 클릭 가능한 전체 영역 설정 */

  &:hover {
    color: #03b888; /* 마우스 오버 시 색상 변화 */
  }
`;
