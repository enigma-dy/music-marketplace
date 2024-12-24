import React from "react";
import Navigation from "../navigation/Navigation";
import SidePanel from "../side-panel/SidePanel";
import { Outlet } from "react-router";
import {
  Header,
  LayoutContainer,
  SidePanelContainer,
  MainContent,
} from "./LayoutStyles";

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <LayoutContainer>
        <SidePanelContainer>
          <SidePanel />
        </SidePanelContainer>

        <MainContent>
          <Outlet />
        </MainContent>
      </LayoutContainer>
    </>
  );
};

export default Layout;
