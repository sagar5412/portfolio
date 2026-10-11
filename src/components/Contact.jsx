import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
export default function Contact() {
  const [copyState, setCopyState] = useState("idle");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }
  return (
    <section
      id="contact"
      className="contact-section"
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow contact-label">
            <span>05</span> / What’s next
          </p>
          <div className="contact-grid">
            <h2 id="contact-title">
              Good work starts
              <br />
              with a <span className="serif">conversation.</span>
            </h2>
            <div className="contact-copy">
              <p>
                Looking for a developer who cares about the whole product? I’d
                love to hear about the problems your team is solving.
              </p>
              <p className="eyebrow">
                Full stack roles & meaningful collaborations
              </p>
            </div>
          </div>
        </Reveal>
        <div className="contact-bottom">
          <div className="email-area">
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight aria-hidden="true" />
            </a>
            <button
              className="copy-email"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              {copyState === "copied" ? (
                <Check aria-hidden="true" />
              ) : (
                <Copy aria-hidden="true" />
              )}
            </button>
            <span className="copy-feedback" role="status">
              {copyState === "copied"
                ? "Email copied."
                : copyState === "failed"
                  ? "Select the address to email me."
                  : ""}
            </span>
          </div>
          <div className="contact-socials">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
