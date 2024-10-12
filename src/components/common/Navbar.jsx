// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mainpage/camcoder_logo2.png";

const Navbar = () => {
    const navigate = useNavigate(); // useNavigate 초기화

    const menuLst = ["소개", "가이드", "연합", "NEWS", "캠코더 맵", "문의"];
    const submenuLst = [
        ["가치관", "BM • Campaign"],
        ["사용방법"],
        ["동맹연합"],
        ["기사"],
        ["학교별 맵"],
        ["FAQ"]
    ];

    // 각 서브메뉴와 연결된 경로
    const submenuLinks = [
        ["/value", "/bm"],
        ["/usageInfo"],
        ["/union"],
        ["/articles"],
        ["/univMap"],
        ["/faq"]
    ];
  const [hide, setHide] = useState({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
  });

  const mouseEvent = (index, bool) => {
    const change = { ...hide };
    change[index] = bool;
    setHide(change);
  };

    const handleMenuClick = (link) => {
        navigate(link); // 클릭 시 해당 링크로 이동
    };

    const handleLogoClick = () => {
        navigate("/"); // 로고 클릭 시 홈 화면으로 이동
    };

    return (
        <nav className="nav">
            <li className="logoItem">
                <img
                    src={logo}
                    alt="Logo"
                    className="logo"
                    onClick={handleLogoClick}
                />
            </li>
            <ul className="navContainer">
                {menuLst.map((menu, index) => (
                    <li
                        key={index}
                        className="navItem"
                        onMouseEnter={() => mouseEvent(index, true)}
                        onMouseLeave={() => mouseEvent(index, false)}
                    >
                        <p onClick={() => handleMenuClick(submenuLinks[index][0])}>{menu}</p>
                        {hide[index] && (
                            <ul className="dropdown">
                                {submenuLst[index].map((submenu, subIndex) => (
                                    <li key={subIndex} onClick={() => handleMenuClick(submenuLinks[index][subIndex])}>
                                        {submenu}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;