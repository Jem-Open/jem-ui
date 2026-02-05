import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  PrimaryLogo,
  SecondaryLogoSquare,
  SecondaryLogoRound,
} from "@/components/design-tokens/logo";

const LogosShowcase = () => {
  return (
    <div
      style={{
        padding: "48px",
        fontFamily: "var(--font-body)",
        color: "var(--greyscale-text-body)",
        maxWidth: "1400px",
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
          Logos
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "715px",
          }}
        >
          Contains the approved logo variants used across the product.
          <br />
          Ensures consistent brand representation in different contexts and
          layouts.
        </p>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--greyscale-border-default)",
          margin: "32px 0 48px",
        }}
      />

      {/* Primary Logo Section */}
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
          Primary Logo
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "32px",
            marginBottom: "48px",
          }}
        >
          <LogoCard
            title="Pink Background"
            description="Default variant for light surfaces"
            bgColor="#f8f9fa"
          >
            <PrimaryLogo variant="bg-pink" size="xl" />
          </LogoCard>

          <LogoCard
            title="White Background"
            description="Alternative with white background"
            bgColor="#f8f9fa"
          >
            <PrimaryLogo variant="bg-white" size="xl" />
          </LogoCard>

          <LogoCard
            title="Pink Text"
            description="Standalone logo without background"
            bgColor="#f8f9fa"
          >
            <PrimaryLogo variant="pink" size="xl" />
          </LogoCard>

          <LogoCard
            title="White Text"
            description="For dark backgrounds"
            bgColor="var(--navy-900)"
          >
            <PrimaryLogo variant="white" size="xl" />
          </LogoCard>

          <LogoCard
            title="Subtle"
            description="Light version"
            bgColor="#f8f9fa"
          >
            <div style={{ opacity: 0.3 }}>
              <PrimaryLogo variant="pink" size="xl" />
            </div>
          </LogoCard>
        </div>

        {/* Sizes */}
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "28px",
            color: "var(--greyscale-text-title)",
            marginBottom: "16px",
          }}
        >
          Sizes
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "32px",
            padding: "32px",
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <PrimaryLogo variant="bg-pink" size="sm" />
            <p
              style={{
                marginTop: "8px",
                fontSize: "12px",
                color: "var(--greyscale-text-caption)",
              }}
            >
              sm (h-6)
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <PrimaryLogo variant="bg-pink" size="md" />
            <p
              style={{
                marginTop: "8px",
                fontSize: "12px",
                color: "var(--greyscale-text-caption)",
              }}
            >
              md (h-10)
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <PrimaryLogo variant="bg-pink" size="lg" />
            <p
              style={{
                marginTop: "8px",
                fontSize: "12px",
                color: "var(--greyscale-text-caption)",
              }}
            >
              lg (h-16)
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <PrimaryLogo variant="bg-pink" size="xl" />
            <p
              style={{
                marginTop: "8px",
                fontSize: "12px",
                color: "var(--greyscale-text-caption)",
              }}
            >
              xl (h-24)
            </p>
          </div>
        </div>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--greyscale-border-default)",
          margin: "32px 0 48px",
        }}
      />

      {/* Secondary Logo Section */}
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
          Secondary Logo
        </h2>

        <div style={{ display: "flex", gap: "64px" }}>
          {/* Square */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "28px",
                color: "var(--greyscale-text-title)",
                marginBottom: "24px",
              }}
            >
              Square
            </h3>
            <div style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
              <LogoCard
                title="Pink Background"
                description="Default"
                bgColor="#f8f9fa"
                compact
              >
                <SecondaryLogoSquare variant="bg-pink" size="xl" />
              </LogoCard>
              <LogoCard
                title="White Background"
                description="Alternate"
                bgColor="#f8f9fa"
                compact
              >
                <SecondaryLogoSquare variant="bg-white" size="xl" />
              </LogoCard>
            </div>

            {/* Square Sizes */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "24px",
                padding: "24px",
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
              }}
            >
              {(
                [
                  { size: "sm", tw: "h-8" },
                  { size: "md", tw: "h-12" },
                  { size: "lg", tw: "h-16" },
                  { size: "xl", tw: "h-24" },
                ] as const
              ).map(({ size, tw }) => (
                <div key={size} style={{ textAlign: "center" }}>
                  <SecondaryLogoSquare variant="bg-pink" size={size} />
                  <p
                    style={{
                      marginTop: "8px",
                      fontSize: "12px",
                      color: "var(--greyscale-text-caption)",
                    }}
                  >
                    {size} ({tw})
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Round */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "28px",
                color: "var(--greyscale-text-title)",
                marginBottom: "24px",
              }}
            >
              Round
            </h3>
            <div style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
              <LogoCard
                title="Pink Background"
                description="Default"
                bgColor="#f8f9fa"
                compact
              >
                <SecondaryLogoRound variant="bg-pink" size="lg" />
              </LogoCard>
            </div>

            {/* Round Sizes */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "24px",
                padding: "24px",
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
              }}
            >
              {(
                [
                  { size: "sm", tw: "h-8" },
                  { size: "md", tw: "h-12" },
                  { size: "lg", tw: "h-16" },
                  { size: "xl", tw: "h-24" },
                ] as const
              ).map(({ size, tw }) => (
                <div key={size} style={{ textAlign: "center" }}>
                  <SecondaryLogoRound variant="bg-pink" size={size} />
                  <p
                    style={{
                      marginTop: "8px",
                      fontSize: "12px",
                      color: "var(--greyscale-text-caption)",
                    }}
                  >
                    {size} ({tw})
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--greyscale-border-default)",
          margin: "32px 0 48px",
        }}
      />

      {/* Usage Section */}
      <section>
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
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            padding: "24px",
            fontFamily: "monospace",
            fontSize: "14px",
            lineHeight: "1.8",
          }}
        >
          <code style={{ color: "var(--greyscale-text-body)" }}>
            {`import { PrimaryLogo, SecondaryLogoSquare, SecondaryLogoRound } from "@/components/design-tokens/logo";`}
            <br />
            <br />
            {`// Primary Logo`}
            <br />
            {`<PrimaryLogo variant="bg-pink" size="lg" />`}
            <br />
            {`<PrimaryLogo variant="bg-white" size="lg" /> // white background`}
            <br />
            {`<PrimaryLogo variant="pink" />  // text only`}
            <br />
            {`<PrimaryLogo variant="white" /> // text only for dark bg`}
            <br />
            <br />
            {`// Secondary Logos`}
            <br />
            {`<SecondaryLogoSquare variant="bg-pink" size="md" />`}
            <br />
            {`<SecondaryLogoSquare variant="bg-white" size="md" />`}
            <br />
            {`<SecondaryLogoRound variant="bg-pink" size="lg" />`}
          </code>
        </div>
      </section>
    </div>
  );
};

interface LogoCardProps {
  title: string;
  description: string;
  bgColor: string;
  children: React.ReactNode;
  compact?: boolean;
}

const LogoCard = ({
  title,
  description,
  bgColor,
  children,
  compact,
}: LogoCardProps) => (
  <div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: compact ? "24px" : "32px",
        backgroundColor: bgColor,
        borderRadius: "12px",
        marginBottom: "12px",
        minHeight: compact ? "120px" : "160px",
      }}
    >
      {children}
    </div>
    <h4
      style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: "14px",
        color: "var(--greyscale-text-title)",
        marginBottom: "4px",
      }}
    >
      {title}
    </h4>
    <p
      style={{
        fontSize: "12px",
        color: "var(--greyscale-text-caption)",
      }}
    >
      {description}
    </p>
  </div>
);

const meta: Meta<typeof LogosShowcase> = {
  title: "Design Tokens/Logos",
  component: LogosShowcase,
  parameters: {
    layout: "fullscreen",
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof LogosShowcase>;

export const Default: Story = {
  render: () => <LogosShowcase />,
};
