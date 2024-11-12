// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import instaLogo from "../../components/assets/navbar/NavbarInstaLogo.png";
import logoLight from "../../components/assets/navbar/NavbarlogoWhite.png"; // visible이 true일 때 사용할 이미지
import logoDark from "../../components/assets/navbar/NavbarlogoDark.png"; // visible이 false일 때 사용할 이미지

import {
  NavContainer,
  NavItem,
  LogoItem,
  NavWrapper,
  UsersBox,
  InstaLogo,
  Logo,
  DropdownWrapper,
  SubmenuColumn,
  NavBox,
  SubmenuWrapper,
  StyledLink,
  InstagramLink,
  LoginContainer,
} from "./Navbar.style"; // styled-components로 정의된 스타일 임포트

const Navbar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const menuLst = ["소개", "가이드", "연합", "NEWS", "캠코더 맵", "문의"];

  const submenuLst = [
    ["가치관", "BM • Campaign"],
    ["사용방법"],
    ["동맹연합"],
    ["기사"],
    ["학교별 맵"],
    ["FAQ"],
  ];
  const [showDropdown, setShowDropdown] = useState(false); // 드롭다운 표시 상태

  // 각 서브메뉴와 연결된 경로
  const submenuLinks = [
    ["/value", "/bm"],
    ["/usageInfo"],
    ["/union"],
    ["/articles"],
    ["/univMap"],
    ["/faq"],
  ];

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  const handleMenuClick = (link) => {
    navigate(link); // 클릭 시 해당 링크로 이동
  };

  const handleLogoClick = () => {
    navigate("/"); // 로고 클릭 시 홈 화면으로 이동
  };
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggingOut(true); // 애니메이션 트리거
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true); // 로그인 상태로 설정
    }
  }, [navigate]);

  useEffect(() => {
    if (isLoggingOut) {
      const timer = setTimeout(() => {
        setIsLoggingOut(false); // 애니메이션 상태 초기화
        setIsAuthenticated(false); // 로그인 상태 해제
      }, 500); // 애니메이션 시간과 일치
      return () => clearTimeout(timer); // 타이머 정리
    }
  }, [isLoggingOut]);

  return (
    <NavWrapper visible={showDropdown} onMouseLeave={() => handleMouseLeave()}>
      <NavContainer>
        <LogoItem>
          <Logo
            src={showDropdown ? logoLight : logoDark}
            alt="Logo"
            onClick={() => handleLogoClick()}
          />
        </LogoItem>
        <NavBox>
          {menuLst.map((menu, index) => (
            <NavItem
              key={index}
              visible={showDropdown}
              onMouseEnter={() => handleMouseEnter(index, true)}
              onMouseLeave={() => handleMouseLeave(index, false)}
            >
              <p onClick={() => handleMenuClick(submenuLinks[index][0])}>
                {menu}
              </p>
              {showDropdown && (
                <DropdownWrapper>
                  <SubmenuWrapper>
                    {submenuLst[index].map((submenu, subIndex) => (
                      <SubmenuColumn
                        cursor={showDropdown}
                        key={`${index}-${subIndex}`}
                        onClick={() =>
                          handleMenuClick(submenuLinks[index][subIndex])
                        }
                      >
                        {submenu}
                      </SubmenuColumn>
                    ))}
                  </SubmenuWrapper>
                </DropdownWrapper>
              )}
            </NavItem>
          ))}
        </NavBox>
        <UsersBox visible={showDropdown}>
          {isAuthenticated ? (
            <>
              {" "}
              <StyledLink to="/mypage">마이페이지</StyledLink>
              <a>|</a>
              <StyledLink onClick={handleLogout}>로그아웃</StyledLink>
              <a>|</a>
              <InstagramLink
                href="https://www.instagram.com/mnm_ddsl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstaLogo src={instaLogo} />
              </InstagramLink>
            </>
          ) : (
            <LoginContainer isLoggingOut={isLoggingOut}>
              {" "}
              <StyledLink to="/login">로그인</StyledLink>
              <a>|</a>
              <StyledLink to="/signup">회원가입</StyledLink>
              <a>|</a>
              <InstagramLink
                href="https://www.instagram.com/mnm_ddsl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstaLogo src={instaLogo} />
              </InstagramLink>
            </LoginContainer>
          )}
        </UsersBox>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;
