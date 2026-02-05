import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const colorPrimitives = {
  "Primary Navy": {
    50: "#fafbfb",
    100: "#f5f6f7",
    200: "#dadee0",
    300: "#cdd3d6",
    400: "#c1c7cc",
    500: "#6a7a85",
    600: "#516470",
    700: "#384d5c",
    800: "#1f3747",
    900: "#062133",
  },
  "Secondary Pink": {
    50: "#fff0f2",
    100: "#ffe1e5",
    200: "#ffd2d9",
    300: "#ffc3cc",
    400: "#ffb4bf",
    500: "#ffa5b2",
    600: "#ff96a5",
    700: "#ff8799",
    800: "#ff788c",
    900: "#ff697f",
  },
  lime: {
    50: "#f7ffe7",
    100: "#e8fdc6",
    200: "#d1f89b",
    300: "#adf267",
    400: "#8be342",
    500: "#6cc636",
    600: "#4c9b22",
    700: "#3a701e",
    800: "#31571c",
    900: "#2b4b18",
  },
  purple: {
    50: "#faf5fd",
    100: "#f3e6fe",
    200: "#e7cefb",
    300: "#d7acfd",
    400: "#be77f7",
    500: "#a54def",
    600: "#8d2fe1",
    700: "#791fc5",
    800: "#651e9b",
    900: "#52187a",
  },
  violet: {
    50: "#f4f1ff",
    100: "#e9e4fc",
    200: "#d6d0f7",
    300: "#bcacf7",
    400: "#9f80f5",
    500: "#8253f0",
    600: "#7132e5",
    700: "#6325cc",
    800: "#511fa7",
    900: "#441b87",
  },
  blue: {
    50: "#edf4fb",
    100: "#d2e6fb",
    200: "#acd6fd",
    300: "#75bffd",
    400: "#3b9bf1",
    500: "#0078ef",
    600: "#005be7",
    700: "#0048cf",
    800: "#00399f",
    900: "#07347d",
  },
  green: {
    50: "#e9fdf2",
    100: "#d2fae5",
    200: "#a7f8ce",
    300: "#59eea4",
    400: "#00da7c",
    500: "#00be5c",
    600: "#009b48",
    700: "#00773a",
    800: "#005c30",
    900: "#00492a",
  },
  orange: {
    50: "#fff5e8",
    100: "#ffe8cd",
    200: "#ffd0a6",
    300: "#ffaf6e",
    400: "#ff843f",
    500: "#ff601f",
    600: "#f94a23",
    700: "#c7341c",
    800: "#9a2b1b",
    900: "#7c2415",
  },
  yellow: {
    50: "#fffce4",
    100: "#fff6be",
    200: "#ffef8d",
    300: "#ffdc4d",
    400: "#ffc338",
    500: "#f4aa2f",
    600: "#cd7d24",
    700: "#9f5419",
    800: "#82441c",
    900: "#6c3517",
  },
  red: {
    50: "#fdf0f1",
    100: "#ffdfe0",
    200: "#ffc0c2",
    300: "#ff9a9d",
    400: "#ff5e67",
    500: "#ff3140",
    600: "#ee0626",
    700: "#c20f1e",
    800: "#99101c",
    900: "#7e191e",
  },
  neutral: {
    50: "#fbfbfb",
    100: "#f3f3f3",
    200: "#e0e0e0",
    300: "#cecece",
    400: "#9a9a9a",
    500: "#696969",
    600: "#494949",
    700: "#383838",
    800: "#222222",
    900: "#161616",
  },
  slate: {
    50: "#f7f7f7",
    100: "#ecf5fb",
    200: "#dee5ec",
    300: "#c2d0dc",
    400: "#8299b1",
    500: "#54687d",
    600: "#3b4d5f",
    700: "#28394a",
    800: "#182534",
    900: "#0f1725",
  },
};

const neutralExtras = {
  White: "#ffffff",
  Cream: "#fff7ec",
  Black: "#000000",
};

const semanticColors = {
  primary: {
    surfaceDefault: "#062133",
    surfaceLighter: "#516470",
    surfaceSubtle: "#c1c7cc",
    surfaceDarker: "#161616",
    borderDefault: "#dadee0",
    borderLighter: "#516470",
    borderSubtle: "#c1c7cc",
    borderDarker: "#062133",
    textLabel: "#062133",
  },
  secondary: {
    surfaceDefault: "#ff697f",
    surfaceLighter: "#ffa5b2",
    surfaceSubtle: "#fff0f2",
    surfaceDarker: "#ff697f",
    borderDefault: "#ffc3cc",
    borderLighter: "#ffd2d9",
    borderSubtle: "#fff0f2",
    borderDarker: "#ffb4bf",
    textLabel: "#062133",
  },
  error: {
    surfaceDefault: "#ff3140",
    surfaceLighter: "#ff9a9d",
    surfaceSubtle: "#fdf0f1",
    surfaceDarker: "#ee0626",
    borderDefault: "#ffc0c2",
    borderLighter: "#ff9a9d",
    borderSubtle: "#fdf0f1",
    borderDarker: "#ee0626",
    textLabel: "#ee0626",
  },
  warning: {
    surfaceDefault: "#ff601f",
    surfaceLighter: "#ffaf6e",
    surfaceSubtle: "#fff5e8",
    surfaceDarker: "#f94a23",
    borderDefault: "#ffd0a6",
    borderLighter: "#ffaf6e",
    borderSubtle: "#fff5e8",
    borderDarker: "#f94a23",
    textLabel: "#f94a23",
  },
  success: {
    surfaceDefault: "#00be5c",
    surfaceLighter: "#59eea4",
    surfaceSubtle: "#e9fdf2",
    surfaceDarker: "#009b48",
    borderDefault: "#a7f8ce",
    borderLighter: "#59eea4",
    borderSubtle: "#e9fdf2",
    borderDarker: "#009b48",
    textLabel: "#009b48",
  },
};

const greyscaleTokens = {
  surface: {
    default: "#f3f3f3",
    subtle: "#fbfbfb",
    disabled: "#f3f3f3",
  },
  border: {
    default: "#cecece",
    disabled: "#f3f3f3",
    darker: "#9a9a9a",
  },
  text: {
    title: "#062133",
    subtitle: "#1f3747",
    body: "#384d5c",
    caption: "#6a7a85",
    negative: "#fbfbfb",
    disabled: "#cdd3d6",
  },
};

const ColorSwatch = ({
  color,
  name,
  showHex = true,
}: {
  color: string;
  name: string;
  showHex?: boolean;
}) => {
  const isLight = isLightColor(color);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "64px",
          backgroundColor: color,
          borderRadius: "8px",
          border: color === "#ffffff" ? "1px solid #e0e0e0" : "none",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: "8px",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: 600,
            color: isLight ? "#062133" : "#ffffff",
            fontFamily: "var(--font-body)",
          }}
        >
          {name}
        </span>
      </div>
      {showHex && (
        <span
          style={{
            fontSize: "12px",
            color: "var(--greyscale-text-caption)",
            fontFamily: "monospace",
          }}
        >
          {color}
        </span>
      )}
    </div>
  );
};

const isLightColor = (hex: string): boolean => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
};

const ColorScale = ({
  name,
  colors,
}: {
  name: string;
  colors: Record<string, string>;
}) => (
  <div style={{ marginBottom: "48px" }}>
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
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </h3>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        gap: "8px",
      }}
    >
      {Object.entries(colors).map(([shade, color]) => (
        <ColorSwatch key={shade} color={color} name={shade} />
      ))}
    </div>
  </div>
);

const SemanticColorGroup = ({
  name,
  colors,
}: {
  name: string;
  colors: Record<string, string>;
}) => (
  <div style={{ marginBottom: "32px" }}>
    <h4
      style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "24px",
        color: "var(--greyscale-text-title)",
        marginBottom: "12px",
        textTransform: "capitalize",
      }}
    >
      {name}
    </h4>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: "12px",
      }}
    >
      {Object.entries(colors).map(([tokenName, color]) => (
        <ColorSwatch
          key={tokenName}
          color={color}
          name={tokenName.replace(/([A-Z])/g, " $1").trim()}
        />
      ))}
    </div>
  </div>
);

const ColorsShowcase = () => {
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
            color: "var(--primary-surface-default)",
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
          Colours
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "715px",
          }}
        >
          A comprehensive colour system with primitives, semantic tokens, and
          greyscale utilities.
          <br />
          Ensures visual consistency and accessibility across all components.
        </p>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--greyscale-border-default)",
          margin: "32px 0 48px",
        }}
      />

      {/* Colour Primitives */}
      <section style={{ marginBottom: "80px" }}>
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
          Colour Primitives
        </h2>

        {Object.entries(colorPrimitives).map(([name, colors]) => (
          <ColorScale key={name} name={name} colors={colors} />
        ))}

        {/* Neutral Extras */}
        <div style={{ marginBottom: "48px" }}>
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
            Base Colours
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 120px)",
              gap: "8px",
            }}
          >
            {Object.entries(neutralExtras).map(([name, color]) => (
              <ColorSwatch key={name} color={color} name={name} />
            ))}
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

      {/* Semantic Colours */}
      <section style={{ marginBottom: "80px" }}>
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
          Semantic Colours
        </h2>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            marginBottom: "32px",
            maxWidth: "715px",
          }}
        >
          Semantic colours provide meaning and context. Use these tokens for
          interactive states, feedback, and emphasis.
        </p>

        {Object.entries(semanticColors).map(([name, colors]) => (
          <SemanticColorGroup key={name} name={name} colors={colors} />
        ))}
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--greyscale-border-default)",
          margin: "32px 0 48px",
        }}
      />

      {/* Greyscale Style Tokens */}
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
          Greyscale Style Tokens
        </h2>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            marginBottom: "32px",
            maxWidth: "715px",
          }}
        >
          Purpose-driven tokens for surfaces, borders, and text. These ensure
          consistent UI hierarchy.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          {/* Surface Tokens */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                color: "var(--greyscale-text-title)",
                marginBottom: "16px",
              }}
            >
              Surface
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {Object.entries(greyscaleTokens.surface).map(([name, color]) => (
                <ColorSwatch key={name} color={color} name={name} />
              ))}
            </div>
          </div>

          {/* Border Tokens */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                color: "var(--greyscale-text-title)",
                marginBottom: "16px",
              }}
            >
              Border
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {Object.entries(greyscaleTokens.border).map(([name, color]) => (
                <ColorSwatch key={name} color={color} name={name} />
              ))}
            </div>
          </div>

          {/* Text Tokens */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                color: "var(--greyscale-text-title)",
                marginBottom: "16px",
              }}
            >
              Text
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {Object.entries(greyscaleTokens.text).map(([name, color]) => (
                <ColorSwatch key={name} color={color} name={name} />
              ))}
            </div>
          </div>
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
          <p style={{ marginBottom: "16px", color: "var(--greyscale-text-caption)" }}>
            {/* Tailwind CSS classes */}
          </p>
          <code style={{ color: "var(--greyscale-text-body)" }}>
            {`/* Primitives */`}
            <br />
            {`bg-pink-500  text-navy-900  border-blue-200`}
            <br />
            <br />
            {`/* Semantic */`}
            <br />
            {`bg-primary-surface  text-error-text-label  border-success-border`}
            <br />
            <br />
            {`/* Greyscale */`}
            <br />
            {`bg-greyscale-surface  text-greyscale-text-title  border-greyscale-border`}
          </code>
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof ColorsShowcase> = {
  title: "Design Tokens/Colours",
  component: ColorsShowcase,
  parameters: {
    layout: "fullscreen",
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorsShowcase>;

export const Default: Story = {
  render: () => <ColorsShowcase />,
};
