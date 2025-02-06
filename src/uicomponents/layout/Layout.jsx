import Navigation from "../navigation/Navigation";
import SidePanel from "../side-panel/SidePanel";
import { Outlet } from "react-router";
import {
  LayoutStyle,
  Header,
  LayoutContainer,
  SidePanelContainer,
  MainContent,
} from "./LayoutStyles";

const Layout = () => {
  return (
    <LayoutStyle>
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
    </LayoutStyle>
  );
};

export default Layout;
