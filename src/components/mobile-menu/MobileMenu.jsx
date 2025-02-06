import React, { useRef, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { TieredMenu } from "primereact/tieredmenu";
import styled from "styled-components";

const MobileMenuDisplay = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: block;
  }
`;

const FullScreenMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  .menu-items {
    width: 90%;
    max-width: 400px;
    color: #fff;
    text-align: center;
    transform: ${(props) =>
      props.visible ? "translateY(0)" : "translateY(-20px)"};
    transition: transform 0.3s ease-in-out;

    .p-tieredmenu {
      border: none;
      background: transparent;
      overflow: hidden;

      .p-menuitem {
        color: #fff;
        margin: 10px 0;

        .p-menuitem-link {
          color: #fff;
          font-size: 1.2rem;
          padding: 15px 20px;
          border-radius: 8px;
          transition: background-color 0.3s ease-in-out;

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }

          .p-menuitem-icon {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
`;

const MenuButton = styled(Button)`
  background: transparent;
  border: none;
  color: #fff;
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    background: transparent;
    transform: scale(1.1);
  }

  i {
    font-size: 1.5rem;
  }
`;

export default function MobileMenu() {
  const menu = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const items = [
    { label: "Home", icon: "pi pi-home" },
    {
      label: "Category",
      icon: "pi pi-folder",
      items: [
        { label: "Option 1", icon: "pi pi-file" },
        { label: "Option 2", icon: "pi pi-file" },
        { label: "Option 3", icon: "pi pi-file" },
        { label: "Delete", icon: "pi pi-times" },
      ],
    },
    { label: "Beat", icon: "pi pi-search" },
    { label: "Packs", icon: "pi pi-search" },
    { label: "Producer", icon: "pi pi-search" },
    { label: "Playlist", icon: "pi pi-search" },
    { label: "Genre", icon: "pi pi-search" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 720);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <MobileMenuDisplay>
      {isMobile && (
        <>
          <MenuButton
            onClick={toggleMenu}
            icon={menuVisible ? "pi pi-times" : "pi pi-bars"}
            aria-label="Menu"
          />
          <FullScreenMenu visible={menuVisible}>
            <div className="menu-items">
              <TieredMenu model={items} popup={false} />
            </div>
          </FullScreenMenu>
        </>
      )}
    </MobileMenuDisplay>
  );
}
