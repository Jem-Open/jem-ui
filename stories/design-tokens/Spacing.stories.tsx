import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const spacingTokens = [
  { token: "none", rem: "0", px: "0px", usage: "" },
  { token: "xxxxs", rem: "0.125rem", px: "2px", usage: "Hairline spacing, fine adjustments" },
  { token: "xxxs", rem: "0.25rem", px: "4px", usage: "Icon padding, micro-gaps" },
  { token: "xxs", rem: "0.5rem", px: "8px", usage: "Compact spacing, small controls" },
  { token: "xs", rem: "0.75rem", px: "12px", usage: "Tight layouts, text + icon gaps" },
  { token: "sm", rem: "1rem", px: "16px", usage: "Default padding (buttons, inputs)" },
  { token: "md", rem: "1.5rem", px: "24px", usage: "Section spacing, list items" },
  { token: "lg", rem: "2rem", px: "32px", usage: "Card groups, layout gaps" },
  { token: "xl", rem: "3rem", px: "48px", usage: "Major content spacing" },
  { token: "xxl", rem: "4rem", px: "64px", usage: "Page-level separation" },
  { token: "xxxl", rem: "6rem", px: "96px", usage: "Large layout margins" },
  { token: "xxxxl", rem: "8rem", px: "128px", usage: "Full-screen layouts, hero sections" },
];

const SpacingShowcase = () => {
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
          Spacing
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "715px",
          }}
        >
          A consistent spacing scale used across layouts and components.
          <br />
          Creates visual rhythm, alignment, and predictable UI patterns.
        </p>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--greyscale-border-default)",
          margin: "32px 0 48px",
        }}
      />

      {/* Spacing Variables */}
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
          Spacing Variables
        </h2>

        {/* Table Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "100px 120px 80px 140px 1fr",
            gap: "16px",
            padding: "16px 0",
            borderBottom: "1px solid var(--greyscale-border-default)",
            fontWeight: 600,
            fontSize: "14px",
            color: "var(--greyscale-text-caption)",
          }}
        >
          <span>Token</span>
          <span>Rem (base 16px)</span>
          <span>Spacing</span>
          <span></span>
          <span>Usage examples</span>
        </div>

        {/* Table Rows */}
        {spacingTokens.map(({ token, rem, px, usage }) => (
          <div
            key={token}
            style={{
              display: "grid",
              gridTemplateColumns: "100px 120px 80px 140px 1fr",
              gap: "16px",
              padding: "16px 0",
              borderBottom: "1px solid var(--greyscale-border-default)",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "14px",
                color: "var(--greyscale-text-title)",
              }}
            >
              {token}
            </span>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "14px",
                color: "var(--greyscale-text-body)",
              }}
            >
              {rem}
            </span>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "14px",
                color: "var(--greyscale-text-body)",
              }}
            >
              {px}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: px === "0px" ? "1px" : px,
                  maxWidth: "128px",
                  height: "16px",
                  backgroundColor: "var(--pink-200)",
                  borderRadius: "2px",
                }}
              />
              {px !== "0px" && (
                <span
                  style={{
                    fontSize: "10px",
                    color: "var(--pink-900)",
                    fontWeight: 500,
                  }}
                >
                  {px}
                </span>
              )}
            </div>
            <span
              style={{
                fontSize: "14px",
                color: "var(--greyscale-text-caption)",
              }}
            >
              {usage}
            </span>
          </div>
        ))}
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
            {`p-sm  m-md  gap-lg  space-x-xs`}
            <br />
            <br />
            {`/* CSS Variables */`}
            <br />
            {`padding: var(--spacing-sm);`}
            <br />
            {`margin: var(--spacing-md);`}
            <br />
            {`gap: var(--spacing-lg);`}
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
          Visual Examples
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Padding Example */}
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--greyscale-text-title)",
                marginBottom: "12px",
              }}
            >
              Padding Scale
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {["xxs", "xs", "sm", "md", "lg"].map((size) => {
                const token = spacingTokens.find((t) => t.token === size);
                return (
                  <div
                    key={size}
                    style={{
                      backgroundColor: "var(--pink-100)",
                      borderRadius: "8px",
                      display: "inline-block",
                    }}
                  >
                    <div
                      style={{
                        padding: `var(--spacing-${size})`,
                        backgroundColor: "var(--primary-surface-default)",
                        borderRadius: "4px",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      {size} ({token?.px})
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gap Example */}
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--greyscale-text-title)",
                marginBottom: "12px",
              }}
            >
              Gap Scale
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {["xs", "sm", "md", "lg"].map((size) => {
                const token = spacingTokens.find((t) => t.token === size);
                return (
                  <div key={size}>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "var(--greyscale-text-caption)",
                        marginBottom: "4px",
                        display: "block",
                      }}
                    >
                      gap-{size} ({token?.px})
                    </span>
                    <div
                      style={{
                        display: "flex",
                        gap: `var(--spacing-${size})`,
                      }}
                    >
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          style={{
                            width: "48px",
                            height: "32px",
                            backgroundColor: "var(--primary-surface-default)",
                            borderRadius: "4px",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
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

const meta: Meta<typeof SpacingShowcase> = {
  title: "Design Tokens/Spacing",
  component: SpacingShowcase,
  parameters: {
    layout: "fullscreen",
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpacingShowcase>;

export const Default: Story = {
  render: () => <SpacingShowcase />,
};
