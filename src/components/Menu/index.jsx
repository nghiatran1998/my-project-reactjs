import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

Menu.propTypes = {};

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/my-project-reactjs">Trang chủ</Link>
        </li>
        <li>
          <Link to="/products">Quản lý sản phẩm</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
