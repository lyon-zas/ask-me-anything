"use client";

import { useState } from "react";

// Where registrations go. Fill ONE of these before sharing the page.
const CONFIG = {
  whatsappNumber: "", // digits only with country code, e.g. "2348012345678"
  formUrl: "https://forms.gle/kJfmzGLr8kRFn8rHA", // or a full https link to a Google Form
};

const number = (CONFIG.whatsappNumber || "").replace(/\D/g, "");
const formUrl = /^https:\/\//.test(CONFIG.formUrl || "") ? CONFIG.formUrl : "";

const EMPTY = { name: "", whatsapp: "", email: "", work: "", stage: "", question: "", consent: false };

function buildMessage(v) {
  return [
    "ASK ME ANYTHING, Episode 01: seat request",
    "Name: " + v.name.trim(),
    "WhatsApp: " + v.whatsapp.trim(),
    "Email: " + v.email.trim(),
    "What I do: " + v.work.trim(),
    "Stage: " + v.stage.trim(),
    "My question: " + v.question.trim(),
    "I understand the session is filmed and published.",
  ].join("\n");
}

export default function RegistrationForm() {
  const [values, setValues] = useState(EMPTY);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(null); // non-null => show the "done" panel
  const [copied, setCopied] = useState("");

  const set = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  function onSubmit(e) {
    e.preventDefault();
    const missing = [];
    [
      ["name", "your name"],
      ["whatsapp", "your WhatsApp number"],
      ["email", "your email"],
      ["work", "what you do"],
      ["stage", "where you are right now"],
      ["question", "your question"],
    ].forEach(([key, label]) => {
      if (!values[key].trim()) missing.push(label);
    });
    const email = values.email.trim();
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) missing.push("a valid email address");
    if (!values.consent) missing.push("the recording tick box");
    if (missing.length) {
      setError("Please add " + missing.join(", ") + ".");
      return;
    }
    setError("");
    setCopied("");
    setMessage(buildMessage(values));
  }

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied("Copied.");
    } catch {
      const pre = document.getElementById("done-msg");
      const range = document.createRange();
      range.selectNodeContents(pre);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      setCopied("Text selected. Press copy on your keyboard or long-press to copy.");
    }
  }

  return (
    <div>
      {!formUrl && !number && (
        <p className="setup">
          <b>Not live yet.</b> This form needs a WhatsApp number or a form link before the page is shared. Until then, a
          registration can only be copied.
        </p>
      )}

      <div className="open-form">
        <a className="btn dark" href={formUrl || "#register"} target="_blank" rel="noopener noreferrer">
          Open the registration form
        </a>
        <p>
          The form opens in a new tab and takes about two minutes. Have your one question ready: if you could ask someone
          ten years ahead of you one question about life, career or relationships, what would you ask?
        </p>
      </div>

      {!formUrl && message === null && (
        <form onSubmit={onSubmit} noValidate>
          <div className="two">
            <div className="field">
              <label htmlFor="reg-name">Full name</label>
              <input id="reg-name" type="text" autoComplete="name" required value={values.name} onChange={set("name")} />
            </div>
            <div className="field">
              <label htmlFor="reg-whatsapp">WhatsApp number</label>
              <input
                id="reg-whatsapp"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+234"
                required
                value={values.whatsapp}
                onChange={set("whatsapp")}
              />
            </div>
          </div>
          <div className="two">
            <div className="field">
              <label htmlFor="reg-email">Email</label>
              <input id="reg-email" type="email" autoComplete="email" required value={values.email} onChange={set("email")} />
            </div>
            <div className="field">
              <label htmlFor="reg-work">What do you do?</label>
              <input
                id="reg-work"
                type="text"
                placeholder="Final-year student, product designer, baker"
                required
                value={values.work}
                onChange={set("work")}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="reg-stage">Where are you right now?</label>
            <select id="reg-stage" required value={values.stage} onChange={set("stage")}>
              <option value="">Choose one</option>
              <option>Student</option>
              <option>Recent graduate</option>
              <option>Early career</option>
              <option>Founder or freelancer</option>
              <option>Creative</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="reg-question">Your one question</label>
            <textarea id="reg-question" required value={values.question} onChange={set("question")} />
            <span className="hint">
              If you could ask someone ten years ahead of you one question about life, career or relationships, what would
              you ask?
            </span>
          </div>
          <label className="check" htmlFor="reg-consent">
            <input id="reg-consent" type="checkbox" required checked={values.consent} onChange={set("consent")} />
            <span>I understand the session is filmed and published as a podcast episode and short clips.</span>
          </label>
          {error && (
            <p className="error" role="alert">
              {error}
            </p>
          )}
          <div>
            <button className="btn dark" type="submit">
              Prepare my registration
            </button>
          </div>
        </form>
      )}

      {!formUrl && message !== null && (
        <div className="done">
          <h3>One more step: send it</h3>
          <p>
            {number
              ? "Your registration is ready. Tap Send on WhatsApp and press send in the chat that opens. Your seat request only reaches us once that message is sent."
              : "Your registration is ready. Copy it and send it to the Next Gen Africa team on WhatsApp."}
          </p>
          <pre id="done-msg">{message}</pre>
          <div className="row">
            {number && (
              <a
                className="btn"
                href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Send on WhatsApp
              </a>
            )}
            <button className="btn dark" type="button" onClick={onCopy}>
              Copy registration
            </button>
            <button className="link" type="button" onClick={() => setMessage(null)}>
              Edit my answers
            </button>
          </div>
          {copied && (
            <p className="hint" role="status">
              {copied}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
