import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export default function EncryptedTextName() {
  return (
    <p className="mx-auto max-w-lg text-left">
      <EncryptedText
        text="I'm Sagar"
        encryptedClassName="text-neutral-500"
        revealedClassName="dark:text-white text-white"
        revealDelayMs={50} />
    </p>
  );
}
