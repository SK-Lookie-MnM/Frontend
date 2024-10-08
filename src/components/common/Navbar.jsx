// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import "./Navbar.css";

const Navbar = () => {
  const menuLst = ["소개", "가이드", "연합", "NEWS", "캠코더 맵", "문의"];
  const submenuLst = [
      ["가치관", "BM • Campaign"],
      ["사용방법"],
      ["동맹연합"],
      ["기사"],
      ["학교별 맵"],
      ["FAQ"]
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

  return (
      <nav className="nav">
    <ul className="navContainer">
      {menuLst.map((menu, index) => (
          <li
              key={index}
              className="navItem"
              onMouseEnter={() => mouseEvent(index, true)}
              onMouseLeave={() => mouseEvent(index, false)}
          >
            <p>{menu}</p>
            {hide[index] && (
                <ul className="dropdown">
                  {submenuLst[index].map((submenu, subIndex) => (
                      <li key={subIndex}>{submenu}</li>
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
