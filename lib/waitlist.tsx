"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type WaitlistRequest = {
  productName?: string;
};

type WaitlistContextValue = {
  open: boolean;
  request: WaitlistRequest | null;
  openWaitlist: (request?: WaitlistRequest) => void;
  closeWaitlist: () => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [request, setRequest] = useState<WaitlistRequest | null>(null);

  const value = useMemo<WaitlistContextValue>(() => ({
    open: request !== null,
    request,
    openWaitlist: (next = {}) => setRequest(next),
    closeWaitlist: () => setRequest(null),
  }), [request]);

  return <WaitlistContext.Provider value={value}>{children}</WaitlistContext.Provider>;
}

export function useWaitlist() {
  const value = useContext(WaitlistContext);
  if (!value) throw new Error("useWaitlist must be used within WaitlistProvider");
  return value;
}
