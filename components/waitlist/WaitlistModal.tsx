"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useWaitlist } from "@/lib/waitlist";

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "Free size"];

export function WaitlistModal() {
  const { open, request, closeWaitlist } = useWaitlist();
  const reduce = useReducedMotion();
  const titleId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [size, setSize] = useState("M");

  useEffect(() => {
    if (!open) return;
    setSubmitted(false);
    setSize("M");
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") closeWaitlist();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeWaitlist, request?.productName]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const entry = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      size: String(data.get("size") ?? ""),
      productName: request?.productName ?? "First drop",
      at: new Date().toISOString(),
    };
    try {
      const key = "nav-glam-waitlist";
      const current = JSON.parse(localStorage.getItem(key) ?? "[]") as unknown[];
      localStorage.setItem(key, JSON.stringify([...current, entry]));
    } catch {
      // The success state still confirms the lead on this screen.
    }
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4">
          <motion.button
            type="button"
            aria-label="Close waitlist"
            className="absolute inset-0 bg-ink/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            onClick={closeWaitlist}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-[81] w-full max-w-md bg-ivory text-ink shadow-2xl sm:max-h-[90vh] sm:overflow-y-auto"
            initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-4 px-5 pb-2 pt-5 md:px-7 md:pt-7">
              <div>
                <p className="eyebrow text-bronze">First batch</p>
                <h2 id={titleId} className="mt-2 font-serif text-4xl leading-none">
                  {submitted ? "You're on the list" : "Pre-order the drop"}
                </h2>
              </div>
              <button type="button" aria-label="Close" className="p-2" onClick={closeWaitlist}>
                <X size={18} strokeWidth={1.4} />
              </button>
            </div>
            <div className="px-5 pb-6 md:px-7 md:pb-8">
              {request?.productName ? (
                <p className="text-sm text-stone">{request.productName}</p>
              ) : (
                <p className="text-sm text-stone">Reserve a place before the first batch is cut.</p>
              )}
              {submitted ? (
                <p className="mt-6 font-serif text-2xl leading-snug" role="status">
                  You&apos;re on the list! We&apos;ll notify you when our first batch drops.
                </p>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                  <label className="block text-sm">
                    Name
                    <input name="name" required autoComplete="name" className="field" />
                  </label>
                  <label className="block text-sm">
                    Email
                    <input name="email" type="email" required autoComplete="email" className="field" />
                  </label>
                  <label className="block text-sm">
                    Select Size
                    <select name="size" required value={size} onChange={(event) => setSize(event.target.value)} className="field">
                      {sizes.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                  <button className="btn btn-solid mt-2 w-full" type="submit">Join Waitlist</button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
