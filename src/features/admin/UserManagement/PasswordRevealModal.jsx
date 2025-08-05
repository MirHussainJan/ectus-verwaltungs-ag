"use client";

import React from "react";
import { Modal, Button, PasswordInput } from "@mantine/core";

const PasswordRevealModal = ({ opened, onClose, password = "" }) => {
  return (
    <Modal opened={opened} onClose={onClose} title="Passwort" centered>
      <div className="p-4 flex flex-col items-center gap-6">
        <PasswordInput
          label="Passwort"
          placeholder="••••••••"
          value={password}
          readOnly
          className="w-full"
          classNames={{
            input: "h-[50px]",
          }}
          visibilityToggleIcon={({ reveal }) => (reveal ? "🙈" : "👁️")}
        />

        <Button
          unstyled
          type="button"
          onClick={onClose}
          className="h-[50px] w-full sm:w-[278px] bg-transparent text-[#111827] border border-[#E7E7E7] rounded-md hover:bg-[#F3F4F6] transition"
        >
          Schließen
        </Button>
      </div>
    </Modal>
  );
};

export default PasswordRevealModal;
