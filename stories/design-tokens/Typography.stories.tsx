import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const TypographyShowcase = () => {
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
            color: "var(--primary-base)",
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
          Typography
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "715px",
          }}
        >
          Defines font families, styles, and hierarchy across the product.
          <br />
          Ensures readability, accessibility, and a cohesive product voice.
        </p>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid var(--greyscale-border)", margin: "32px 0 48px" }} />

      {/* Headings Typeface */}
      <section style={{ marginBottom: "80px" }}>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "1.4",
            color: "var(--greyscale-text-title)",
            marginBottom: "16px",
          }}
        >
          Headings
        </p>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "60px",
            lineHeight: "1.3",
            color: "var(--greyscale-text-title)",
            marginBottom: "32px",
          }}
        >
          Inter
        </p>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "1.4",
            color: "var(--greyscale-text-title)",
          }}
        >
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          <br />
          abcdefghijklmnopqrstuvwxyz
          <br />
          0123456789 !@#$%^&*()
        </p>
      </section>

      {/* Type Scale - Headings */}
      <section style={{ marginBottom: "80px" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "36px",
            color: "var(--greyscale-text-title)",
            marginBottom: "32px",
          }}
        >
          Heading Type Scale
        </h2>

        {/* H1 - text-6xl */}
        <TypeScaleRow
          name="H1"
          className="text-6xl"
          fontSize="60px"
          lineHeight="84px (140%)"
          fontFamily="var(--font-heading)"
        />

        {/* H2 - text-5xl */}
        <TypeScaleRow
          name="H2"
          className="text-5xl"
          fontSize="48px"
          lineHeight="68px"
          fontFamily="var(--font-heading)"
        />

        {/* H3 - text-4xl */}
        <TypeScaleRow
          name="H3"
          className="text-4xl"
          fontSize="36px"
          lineHeight="54px (150%)"
          fontFamily="var(--font-heading)"
        />

        {/* H4 - text-3xl */}
        <TypeScaleRow
          name="H4"
          className="text-3xl"
          fontSize="30px"
          lineHeight="45px (150%)"
          fontFamily="var(--font-heading)"
        />

        {/* H5 - text-2xl */}
        <TypeScaleRow
          name="H5"
          className="text-2xl"
          fontSize="24px"
          lineHeight="36px (150%)"
          fontFamily="var(--font-heading)"
        />

        {/* H6 - text-xl */}
        <TypeScaleRow
          name="H6"
          className="text-xl"
          fontSize="20px"
          lineHeight="30px (150%)"
          fontFamily="var(--font-heading)"
        />
      </section>

      {/* Body Typeface */}
      <section style={{ marginBottom: "80px" }}>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "1.4",
            color: "var(--greyscale-text-title)",
            marginBottom: "16px",
          }}
        >
          Body
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "60px",
            lineHeight: "1.3",
            color: "var(--greyscale-text-title)",
            marginBottom: "32px",
          }}
        >
          Manrope
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "1.4",
            color: "var(--greyscale-text-title)",
          }}
        >
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          <br />
          abcdefghijklmnopqrstuvwxyz
          <br />
          0123456789 !@#$%^&*()
        </p>
      </section>

      {/* Type Scale - Body */}
      <section>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "36px",
            color: "var(--greyscale-text-title)",
            marginBottom: "32px",
          }}
        >
          Body Type Scale
        </h2>

        {/* text-lg */}
        <TypeScaleRow
          name="Large"
          className="text-lg"
          fontSize="18px"
          lineHeight="28px (150%)"
          fontFamily="var(--font-body)"
          isBody
        />

        {/* text-base */}
        <TypeScaleRow
          name="Base"
          className="text-base"
          fontSize="16px"
          lineHeight="24px (150%)"
          fontFamily="var(--font-body)"
          isBody
        />

        {/* text-sm */}
        <TypeScaleRow
          name="Small"
          className="text-sm"
          fontSize="14px"
          lineHeight="18px (130%)"
          fontFamily="var(--font-body)"
          isBody
        />

        {/* text-xs */}
        <TypeScaleRow
          name="Extra Small"
          className="text-xs"
          fontSize="12px"
          lineHeight="14px (130%)"
          fontFamily="var(--font-body)"
          isBody
        />
      </section>

      {/* Font Weights Reference */}
      <section style={{ marginTop: "80px" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "36px",
            color: "var(--greyscale-text-title)",
            marginBottom: "32px",
          }}
        >
          Font Weights
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          <WeightSample weight={300} label="Light" />
          <WeightSample weight={400} label="Regular" />
          <WeightSample weight={600} label="Semi Bold" />
          <WeightSample weight={700} label="Bold" />
        </div>
      </section>
    </div>
  );
};

interface TypeScaleRowProps {
  name: string;
  className: string;
  fontSize: string;
  lineHeight: string;
  fontFamily: string;
  isBody?: boolean;
}

const TypeScaleRow = ({ name, className, fontSize, lineHeight, fontFamily, isBody }: TypeScaleRowProps) => {
  const sizes = {
    "text-6xl": { size: "60px", lh: "84px" },
    "text-5xl": { size: "48px", lh: "68px" },
    "text-4xl": { size: "36px", lh: "54px" },
    "text-3xl": { size: "30px", lh: "45px" },
    "text-2xl": { size: "24px", lh: "36px" },
    "text-xl": { size: "20px", lh: "30px" },
    "text-lg": { size: "18px", lh: "28px" },
    "text-base": { size: "16px", lh: "24px" },
    "text-sm": { size: "14px", lh: "18px" },
    "text-xs": { size: "12px", lh: "14px" },
  };

  const sizeConfig = sizes[className as keyof typeof sizes];

  return (
    <div style={{ marginBottom: "48px" }}>
      {/* Properties header */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "1.5",
          marginBottom: "16px",
        }}
      >
        <span>
          <span style={{ color: "var(--greyscale-text-caption)" }}>Font Size </span>
          <span style={{ color: "var(--primary-base)" }}>{fontSize}</span>
        </span>
        <span>
          <span style={{ color: "var(--greyscale-text-caption)" }}>Line Height </span>
          <span style={{ color: "var(--primary-base)" }}>{lineHeight}</span>
        </span>
      </div>

      {/* Divider */}
      <hr style={{ border: "none", borderTop: "1px solid var(--greyscale-border)", marginBottom: "24px" }} />

      {/* Weight samples */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
        {[300, 400, 600, 700].map((weight) => (
          <div key={weight}>
            <p
              style={{
                fontFamily,
                fontWeight: weight,
                fontSize: sizeConfig.size,
                lineHeight: sizeConfig.lh,
                color: "var(--greyscale-text-title)",
                marginBottom: "8px",
              }}
            >
              {isBody ? className : `${name} ${className}`}
            </p>
            <p
              style={{
                fontFamily,
                fontWeight: weight,
                fontSize: sizeConfig.size,
                lineHeight: sizeConfig.lh,
                color: "var(--greyscale-text-title)",
              }}
            >
              {weight === 300 ? "Light" : weight === 400 ? "Regular" : weight === 600 ? "Semi Bold" : "Bold"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

interface WeightSampleProps {
  weight: number;
  label: string;
}

const WeightSample = ({ weight, label }: WeightSampleProps) => (
  <div
    style={{
      padding: "24px",
      backgroundColor: "var(--greyscale-bg-subtle)",
      borderRadius: "8px",
    }}
  >
    <p
      style={{
        fontFamily: "var(--font-heading)",
        fontWeight: weight,
        fontSize: "24px",
        lineHeight: "36px",
        color: "var(--greyscale-text-title)",
        marginBottom: "8px",
      }}
    >
      Aa
    </p>
    <p
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        lineHeight: "18px",
        color: "var(--greyscale-text-caption)",
      }}
    >
      {label} ({weight})
    </p>
  </div>
);

const meta: Meta<typeof TypographyShowcase> = {
  title: "Design Tokens/Typography",
  component: TypographyShowcase,
  parameters: {
    layout: "fullscreen",
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TypographyShowcase>;

export const Default: Story = {
  render: () => <TypographyShowcase />,
};
