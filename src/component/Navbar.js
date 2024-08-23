import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "유아",
    "아동",
    "H&M Home",
    "Sale",
  ];

  let [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  const logout = () => {
    setAuthenticate(false); // 로그아웃 시 로그인 상태를 false로 설정
    navigate("/");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>{" "}
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="header">
        <div className="burger_menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <div
          className="login_button"
          onClick={authenticate ? logout : goToLogin}
        >
          <FontAwesomeIcon icon={faUser} />
          <div className="login">{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="section">
        <Link to="/">
          <img
            width={100}
            src="https://i.namu.wiki/i/DgtLbpNdB7yeqwJKvq5_o2qRRYJH6J6wMoWtgc5SIZhGeBQqEJDUEhGmQq2-kMhtCuGBbmSd8u0MMz2Q72JGjluU1IZs6TbKx3--eTG4bjbTRTomKD3IL--G3Z0ZTTKBJUx1pIvuxT8s2hx9N_jrtg.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="menu">
        <ul className="menu_list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
