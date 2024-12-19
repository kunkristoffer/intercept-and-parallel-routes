"use client";

import { useState, useEffect } from "react";

/**
 * Helper function for avoiding errors when prerendered on the server.
 */
export function useMounted():boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
