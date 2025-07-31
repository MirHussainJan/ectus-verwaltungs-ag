"use client";
import React from "react";
import { Menu } from "@mantine/core";

const MentineMenu = ({
  items = [],
  ariaLabel = "Actions",
  className = "h-8 w-8 rounded-md hover:bg-[#F1F5F9] flex items-center justify-center cursor-pointer",
}) => {
  return (
    <Menu width={200} shadow="md" position="bottom-end" withinPortal>
      <Menu.Target>
        <button type="button" className={className} aria-label={ariaLabel}>
          <span className="text-xl leading-none">⋯</span>
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        {items.map((it, idx) => (
          <Menu.Item key={idx} onClick={it.onClick}>
            {it.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default MentineMenu;
