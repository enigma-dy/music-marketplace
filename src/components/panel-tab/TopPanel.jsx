import React, { useState } from "react";
import { useNavigate } from "react-router";
import { TreeWrapper } from "../../uicomponents/layout/LayoutStyles";

export default function TopPanel() {
  const navigate = useNavigate();

  const [items] = useState([
    { key: "0", label: "All Categories" },
    { key: "1", label: "Beats", path: "/beats" },
    { key: "2", label: "Packs", path: "/packs" },
    { key: "3", label: "Producer", path: "/producer" },
    { key: "4", label: "Playlist", path: "/playlist" },
  ]);

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    } else {
      alert("No navigation path available for this item.");
    }
  };

  return (
    <TreeWrapper>
      <div className="tree">
        {items.map((item) => (
          <div
            key={item.key}
            className={item.path ? "tree-item clickable" : "tree-item"}
            onClick={item.path ? () => handleNavigation(item.path) : null}
          >
            {item.label}
          </div>
        ))}
      </div>
    </TreeWrapper>
  );
}


