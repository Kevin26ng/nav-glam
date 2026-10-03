"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [note, setNote] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    sessionStorage.setItem("nav-glam-contact", JSON.stringify(Object.fromEntries(data.entries())));
    setNote("Thank you. The house has your note.");
    event.currentTarget.reset();
  }

  return (
    <div className="bg-ivory px-5 pb-20 pt-32 md:px-10">
      <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow text-bronze">Contact</p>
          <h1 className="mt-4 font-serif text-6xl leading-none">Write to the house.</h1>
          <p className="mt-5 text-sm leading-relaxed text-stone">Orders, sizing and press.</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block text-sm">Name
            <input name="name" required className="field" />
          </label>
          <label className="block text-sm">Email
            <input name="email" type="email" required className="field" />
          </label>
          <label className="block text-sm">About
            <select name="about" className="field">
              <option>A piece</option>
              <option>Sizing</option>
              <option>A pre-order</option>
              <option>Something else</option>
            </select>
          </label>
          <label className="block text-sm">Message
            <textarea name="message" required rows={5} className="field" />
          </label>
          <button className="btn btn-solid" type="submit">Send</button>
          {note ? <p role="status" className="text-sm text-stone">{note}</p> : null}
        </form>
      </div>
    </div>
  );
}
