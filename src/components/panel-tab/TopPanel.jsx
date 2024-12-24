import React, { useState, useEffect } from "react";
import { Tree } from "primereact/tree";
import { useNavigate } from "react-router";
import { TreeWrapper } from "./TopPanelStyled";

export default function TopPanel() {
  const navigate = useNavigate();

  const [nodes, setNodes] = useState([
    {
      key: "0",
      label: "All Categories",
      children: [
        {
          key: "0-0",
          label: "Beats",
          path: "/beats",
        },
        {
          key: "0-1",
          label: "Packs",
          path: "/packs",
        },
        {
          key: "0-2",
          label: "Producer",
          path: "/producer",
        },
        {
          key: "0-3",
          label: "Playlist",
          path: "/playlist",
        },
      ],
    },
  ]);

  const [expandedKeys, setExpandedKeys] = useState({});

  useEffect(() => {
    const expanded = {};
    nodes.forEach((node) => {
      expanded[node.key] = true;
      if (node.children) {
        node.children.forEach((child) => {
          expanded[child.key] = true;
        });
      }
    });
    setExpandedKeys(expanded);
  }, [nodes]);

  const onToggle = (e) => {
    setExpandedKeys(e.value);
  };

  // This effect ensures navigation works after first click
  useEffect(() => {
    // This will be triggered after any navigation (based on `expandedKeys`)
    const handleNavigation = () => {
      // Optionally perform other tasks after navigation
    };

    handleNavigation();
  }, [expandedKeys]);

  const handleNodeClick = (node, e) => {
    // Prevents event bubbling if necessary
    e.stopPropagation();

    if (node.path) {
      // Delay navigation slightly to allow state updates to complete
      setTimeout(() => {
        navigate(node.path);
      }, 0); // You can also increase the timeout if necessary
    }
  };

  const renderLabel = (node) => {
    return <div onClick={(e) => handleNodeClick(node, e)}>{node.label}</div>;
  };

  return (
    <div>
      <TreeWrapper>
        <Tree
          value={nodes}
          expandedKeys={expandedKeys}
          onToggle={onToggle}
          nodeTemplate={(node) => (
            <div className="p-treenode-content">{renderLabel(node)}</div>
          )}
        />
      </TreeWrapper>
    </div>
  );
}
