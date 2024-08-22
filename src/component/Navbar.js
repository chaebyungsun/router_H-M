import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import React from "react";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "유아",
    "아동",
    "H&M Home",
    "Sale",
  ];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div>
        <div className="login_button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div className="login">로그인</div>
        </div>
      </div>
      <div className="section">
        <img
          width={100}
          src="https://i.namu.wiki/i/DgtLbpNdB7yeqwJKvq5_o2qRRYJH6J6wMoWtgc5SIZhGeBQqEJDUEhGmQq2-kMhtCuGBbmSd8u0MMz2Q72JGjluU1IZs6TbKx3--eTG4bjbTRTomKD3IL--G3Z0ZTTKBJUx1pIvuxT8s2hx9N_jrtg.svg"
          alt=""
        />
      </div>
      <div className="menu">
        <ul className="menu_list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
