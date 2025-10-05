"use client";

import { useState } from "react";

export default function CopyableEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('mdhiaaouina@outlook.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <p className="mt-2 text-sm text-muted-foreground">
      Email: <span 
        className="cursor-pointer hover:text-foreground transition-colors" 
        onClick={handleCopy}
        title="Click to copy email"
      >
        mdhiaaouina@outlook.com
      </span> {copied && <span className="text-blue-400">✓ Copied!</span>}
    </p>
  );
}
