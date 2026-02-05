import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const borderRadiusTokens = [
  { token: "none", tailwind: "rounded-none", css: "border-radius: 0;", rem: "0", px: "0px" },
  { token: "xs", tailwind: "rounded-xs", css: "border-radius: var(--radius-xs);", rem: "0.125rem", px: "2px" },
  { token: "sm", tailwind: "rounded-sm", css: "border-radius: var(--radius-sm);", rem: "0.25rem", px: "4px" },
  { token: "md", tailwind: "rounded-md", css: "border-radius: var(--radius-md);", rem: "0.375rem", px: "6px" },
  { token: "lg", tailwind: "rounded-lg", css: "border-radius: var(--radius-lg);", rem: "0.5rem", px: "8px" },
  { token: "xl", tailwind: "rounded-xl", css: "border-radius: var(--radius-xl);", rem: "0.75rem", px: "12px" },
  { token: "2xl", tailwind: "rounded-2xl", css: "border-radius: var(--radius-2xl);", rem: "1rem", px: "16px" },
  { token: "3xl", tailwind: "rounded-3xl", css: "border-radius: var(--radius-3xl);", rem: "1.5rem", px: "24px" },
  { token: "4xl", tailwind: "rounded-4xl", css: "border-radius: var(--radius-4xl);", rem: "2rem", px: "32px" },
  { token: "full", tailwind: "rounded-full", css: "border-radius: calc(infinity * 1px);", rem: "100px", px: "100px" },
];

const BorderRadiusShowcase = () => {
  return (
    <div
      style={{
        padding: "48px",
        fontFamily: "var(--font-body)",
        color: "var(--greyscale-text-body)",
        maxWidth: "1200px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "48px" }}>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "28px",
            color: "var(--pink-900)",
            marginBottom: "8px",
          }}
        >
          Jem Design Guidelines
        </p>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "48px",
            lineHeight: "56px",
            color: "var(--greyscale-text-title)",
            marginBottom: "16px",
          }}
        >
          Border Radius
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "715px",
          }}
        >
          Standardised corner radii applied across UI elements.
          <br />
          Contributes to a cohesive and approachable visual style.
        </p>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--greyscale-border-default)",
          margin: "32px 0 48px",
        }}
      />

      {/* Tailwind Variables */}
      <section>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "1.4",
            color: "var(--greyscale-text-title)",
            marginBottom: "32px",
          }}
        >
          Tailwind Variables
        </h2>

        {/* Visual Examples with Labels */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {borderRadiusTokens.map(({ token, tailwind, css, rem, px }) => (
            <div
              key={token}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 140px 1fr",
                gap: "32px",
                alignItems: "center",
              }}
            >
              {/* Visual Preview */}
              <div
                style={{
                  width: "100px",
                  height: "56px",
                  backgroundColor: "var(--pink-100)",
                  borderRadius: token === "full" ? "100px" : `var(--radius-${token})`,
                }}
              />

              {/* Tailwind Class */}
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "var(--greyscale-text-title)",
                }}
              >
                {tailwind}
              </span>

              {/* CSS Value */}
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "14px",
                  color: "var(--greyscale-text-caption)",
                }}
              >
                {css} {token !== "none" && token !== "full" && `/* ${rem} (${px}) */`}
                {token === "full" && `(${px})`}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Reference */}
      <section style={{ marginTop: "80px" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "36px",
            color: "var(--greyscale-text-title)",
            marginBottom: "24px",
          }}
        >
          Usage
        </h2>
        <div
          style={{
            backgroundColor: "var(--greyscale-surface-subtle)",
            borderRadius: "8px",
            padding: "24px",
            fontFamily: "monospace",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          <code style={{ color: "var(--greyscale-text-body)" }}>
            {`/* Tailwind CSS classes */`}
            <br />
            {`rounded-none  rounded-md  rounded-lg  rounded-full`}
            <br />
            <br />
            {`/* CSS Variables */`}
            <br />
            {`border-radius: var(--radius-md);`}
            <br />
            {`border-radius: var(--radius-lg);`}
            <br />
            {`border-radius: var(--radius-full);`}
          </code>
        </div>
      </section>

      {/* Visual Examples */}
      <section style={{ marginTop: "80px" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "36px",
            color: "var(--greyscale-text-title)",
            marginBottom: "24px",
          }}
        >
          Common Use Cases
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {/* Button */}
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--greyscale-text-caption)",
                marginBottom: "12px",
              }}
            >
              Buttons (rounded-md)
            </p>
            <div
              style={{
                padding: "10px 20px",
                backgroundColor: "var(--primary-surface-default)",
                borderRadius: "var(--radius-md)",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Button
            </div>
          </div>

          {/* Card */}
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--greyscale-text-caption)",
                marginBottom: "12px",
              }}
            >
              Cards (rounded-lg)
            </p>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--greyscale-surface-subtle)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--greyscale-border-default)",
                fontSize: "12px",
              }}
            >
              Card content
            </div>
          </div>

          {/* Input */}
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--greyscale-text-caption)",
                marginBottom: "12px",
              }}
            >
              Inputs (rounded-md)
            </p>
            <div
              style={{
                padding: "10px 12px",
                backgroundColor: "white",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--greyscale-border-default)",
                fontSize: "14px",
                color: "var(--greyscale-text-caption)",
              }}
            >
              Placeholder
            </div>
          </div>

          {/* Avatar */}
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--greyscale-text-caption)",
                marginBottom: "12px",
              }}
            >
              Avatars (rounded-full)
            </p>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "var(--pink-200)",
                borderRadius: "var(--radius-full)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--greyscale-text-body)",
              }}
            >
              AJ
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: "80px",
          paddingTop: "24px",
          borderTop: "1px solid var(--greyscale-border-default)",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "var(--greyscale-text-caption)",
            margin: 0,
          }}
        >
          © Jem HR
        </p>
      </footer>
    </div>
  );
};

const meta: Meta<typeof BorderRadiusShowcase> = {
  title: "Design Tokens/Border Radius",
  component: BorderRadiusShowcase,
  parameters: {
    layout: "fullscreen",
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BorderRadiusShowcase>;

export const Default: Story = {
  render: () => <BorderRadiusShowcase />,
};
