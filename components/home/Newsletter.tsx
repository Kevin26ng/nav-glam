"use client";

import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email.includes("@")) {
      setNote("Enter a valid email address.");
      return;
    }
    const key = "nav-glam-edit-list";
    const current = JSON.parse(localStorage.getItem(key) ?? "[]") as string[];
    localStorage.setItem(key, JSON.stringify([...new Set([...current, email])]));
    setNote("Saved on this device. A mailing list is not connected yet, so nothing has been sent.");
    setEmail("");
  }

  return (
    <div className="border-b border-white/10">
      <form onSubmit={onSubmit} className="mx-auto grid max-w-[1500px] gap-6 px-5 py-14 md:grid-cols-[1.2fr_1fr] md:items-end md:px-10">
        <div>
          <p className="eyebrow text-gold">The edit</p>
          <h2 className="mt-3 font-serif text-5xl leading-none md:text-6xl">Enter the Nav Glam world.</h2>
        </div>
        <div>
          <label htmlFor="edit-email" className="eyebrow text-ivory/70">Email</label>
          <div className="mt-2 flex items-end gap-3">
            <input
              id="edit-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="field border-white/30 text-ivory placeholder:text-ivory/40"
              placeholder="you@email.com"
            />
            <button className="btn shrink-0" type="submit">Join the edit</button>
          </div>
          {note ? <p className="mt-3 text-sm text-ivory/70" role="status">{note}</p> : null}
        </div>
      </form>
    </div>
  );
}
