import React from "react";
import { Link } from "react-router";
import { StyledTabMenu, StyledLink } from "./DesketopStyles";

export default function DesktopMenu() {
  const items = [
    { label: "Home", icon: "pi pi-home", path: "/" },
    { label: "Category", icon: "pi pi-palette", path: "/category" },
    { label: "Contact Us", icon: "pi pi-phone", path: "/contact" },
  ];

  return (
    <StyledTabMenu>
      {items.map((item, index) => (
        <li key={index} className="tabmenu-item">
          <StyledLink to={item.path} className="menu-link">
            {item.icon && <i className={`icon ${item.icon}`}></i>}
            <span>{item.label}</span>
          </StyledLink>
        </li>
      ))}
    </StyledTabMenu>
  );
}
