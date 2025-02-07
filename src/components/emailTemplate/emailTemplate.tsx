/* eslint-disable @next/next/no-img-element */
import React from "react";

export const EmailTemplate: React.FC<Readonly<MainFormProps>> = ({ food }) => (
  <section
    style={{
      maxWidth: "48rem",
      padding: "2.5rem 2rem",
      margin: "auto",
      backgroundColor: "#fafafa",
      borderRadius: "0.5rem",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    }}
  >
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "1.5rem",
      }}
    >
      <a
        href="https://nielleportfolio.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <img
          src="https://nielleportfolio.vercel.app/logo-footer.png"
          alt="danielle logo header"
          style={{
            display: "block",
            maxWidth: "200px",
            width: "100%",
            height: "auto",
            margin: "auto",
          }}
        />
      </a>
    </header>

    <main style={{ marginTop: "1rem" }}>
      <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "black" }}>
        Hi Danielle,
      </h2>

      <p style={{ marginTop: "1rem", color: "#4a5568" }}>
        You have received a new inquiry through your portfolio. Below are the
        details of the submission:
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            lineHeight: "1.75",
          }}
        >
          <li style={{ fontWeight: "500", color: "black" }}>
            Food:{" "}
            <span style={{ fontWeight: "normal", color: "#4a5568" }}>
              {food}
            </span>
          </li>
        </ul>
      </div>
    </main>

    <footer style={{ marginTop: "2.5rem" }}>
      <p style={{ textAlign: "center", color: "#4a5568" }}>
        © Jan Danielle Plaza 2024. All rights reserved.
      </p>
    </footer>
  </section>
);
