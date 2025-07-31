"use client";

import React from "react";
import { Modal, Button, PasswordInput } from "@mantine/core";

const PasswordRevealModal = ({ opened, onClose, password = "" }) => {
  return (
    <Modal opened={opened} onClose={onClose} title="Password" centered>
      <div className="p-4 flex flex-col items-center gap-6">
        <PasswordInput
          label="Password"
          placeholder="••••••••"
          value={password}
          readOnly
          className="w-full"
          // optional: make the field a bit taller like your style
          styles={{ input: { height: 50 } }}
        />

        <Button
          unstyled
          type="button"
          onClick={onClose}
          className="h-[50px] w-full sm:w-[278px] bg-transparent text-[#111827] border border-[#E7E7E7] rounded-md"
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default PasswordRevealModal;
