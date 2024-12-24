import React from "react";
import TopPanel from "../../components/panel-tab/TopPanel";
import MultiSelectFilterMenu from "../../components/MultiSelectFilter/MultiSelectFilter";
import { SidebarStyles, SidebarItem } from "./SidebarStyles";

export default function SidePanel() {
  return (
    <SidebarStyles>
      <SidebarItem>
        <TopPanel />
      </SidebarItem>
      <SidebarItem>
        <MultiSelectFilterMenu />
      </SidebarItem>
    </SidebarStyles>
  );
}
