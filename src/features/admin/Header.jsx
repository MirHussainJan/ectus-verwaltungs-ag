"use client";
import React, { useState } from "react";
import { TextInput, Button } from "@mantine/core";

const Header = ({
  title = "User Management",
  initialSearch = "",
  onSearchChange,
  onAddUser,
}) => {
  const [query, setQuery] = useState(initialSearch);

  const handleSearchChange = (e) => {
    const val = e.currentTarget.value;
    setQuery(val);
    onSearchChange?.(val);
  };

  const handleAddUser = () => {
    onAddUser?.();
  };

  return (
    <div className="flex md:items-center justify-between mb-6 gap-3 flex-col md:flex-row">
      {/* Left: Title */}
      <h3 className="font-bold text-[20px]/[150%] lg:text-[24px]/[150%]">
        {title}
      </h3>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
        {/* Search input */}
        <TextInput
          aria-label="Search users"
          placeholder="Search User"
          value={query}
          onChange={handleSearchChange}
          classNames={{
            root: "w-full",
            input: "h-[50px] bg-white border border-[#4B4B4B] rounded w-full",
            innerInput:
              "bg-transparent border-none w-full h-full text-[14px] leading-[150%] px-[20px] py-[14.5px]",
          }}
        />

        {/* Add User */}
        <Button
          unstyled
          type="button"
          onClick={handleAddUser}
          className="h-[50px] w-[117px] rounded bg-black text-white font-bold
                     text-[14px] md:text-[16px] leading-[150%]
                     hover:bg-[#1a1a1a] transition-colors duration-200
                     flex items-center gap-2 justify-center"
        >
          Add User
        </Button>
      </div>
    </div>
  );
};

export default Header;
