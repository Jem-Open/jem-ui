import React from "react";

interface ComponentCardProps {
  name: string;
  description: string;
  href?: string;
  children?: React.ReactNode;
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  name,
  description,
  href,
  children,
}) => {
  const cardContent = (
    <div
      style={{
        width: "100%",
        height: "330px",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#fff",
        border: "1px solid var(--greyscale-border-default, #cecece)",
        cursor: href ? "pointer" : "default",
        transition: "box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        if (href) {
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          height: "206px",
          backgroundColor: "var(--greyscale-surface-default, #f3f3f3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        {children || <PlaceholderPreview />}
      </div>
      <div style={{ padding: "20px 20px 24px" }}>
        <h4
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: 600,
            color: "var(--greyscale-text-title, #062133)",
            fontFamily: "var(--font-family-body, Manrope, sans-serif)",
          }}
        >
          {name}
        </h4>
        <p
          style={{
            margin: "8px 0 0",
            fontSize: "12px",
            color: "var(--greyscale-text-caption, #6a7a85)",
            fontFamily: "var(--font-family-body, Manrope, sans-serif)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );

  if (!href) {
    return cardContent;
  }

  const handleClick = () => {
    // Navigate to the story by updating the parent window location
    if (window.top) {
      const baseUrl = window.top.location.origin + window.top.location.pathname;
      window.top.location.href = `${baseUrl}?path=${href}`;
    }
  };

  return (
    <div onClick={handleClick} style={{ textDecoration: "none", display: "block", cursor: "pointer" }}>
      {cardContent}
    </div>
  );
};

interface CategorySectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  description,
  children,
}) => (
  <section style={{ marginBottom: "64px" }}>
    <h2
      style={{
        fontSize: "32px",
        fontWeight: 600,
        margin: "0 0 8px",
        color: "var(--greyscale-text-title, #062133)",
        fontFamily: "var(--font-family-heading, Inter, sans-serif)",
      }}
    >
      {title}
    </h2>
    <p
      style={{
        fontSize: "14px",
        color: "var(--greyscale-text-caption, #6a7a85)",
        margin: "0 0 32px",
        fontFamily: "var(--font-family-body, Manrope, sans-serif)",
      }}
    >
      {description}
    </p>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
      }}
    >
      {children}
    </div>
  </section>
);

// Component previews
const ButtonPreview = () => (
  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
    <div
      style={{
        padding: "8px 16px",
        backgroundColor: "var(--primary-surface-default, #062133)",
        color: "white",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: 600,
      }}
    >
      Primary
    </div>
    <div
      style={{
        padding: "8px 16px",
        backgroundColor: "var(--pink-900, #ff697f)",
        color: "white",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: 600,
      }}
    >
      Secondary
    </div>
    <div
      style={{
        padding: "8px 16px",
        backgroundColor: "white",
        color: "var(--primary-text-label, #062133)",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: 600,
        border: "1px solid var(--primary-border-default, #dadee0)",
      }}
    >
      Outline
    </div>
  </div>
);

const StylePreview = () => (
  <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
    <div style={{ width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "var(--primary-surface-default, #062133)" }} />
    <div style={{ width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "var(--pink-900, #ff697f)" }} />
    <div style={{ width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "var(--pink-400, #ffb4bf)" }} />
  </div>
);

const IconPreview = () => (
  <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "8px",
          backgroundColor: i === 1 ? "var(--pink-900, #ff697f)" : "var(--greyscale-border-default, #cecece)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "4px",
            backgroundColor: i === 1 ? "white" : "#999",
          }}
        />
      </div>
    ))}
  </div>
);

const TypographyPreview = () => (
  <div
    style={{
      fontSize: "72px",
      fontWeight: 600,
      color: "var(--greyscale-text-title, #062133)",
      fontFamily: "var(--font-family-heading, Inter, sans-serif)",
    }}
  >
    Aa
  </div>
);

const LogoPreview = () => (
  <div style={{ display: "flex", gap: "16px", alignItems: "center", justifyContent: "center" }}>
    <div
      style={{
        width: "80px",
        height: "32px",
        backgroundColor: "var(--pink-900, #ff697f)",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "14px",
        fontWeight: 700,
        fontFamily: "var(--font-family-heading, Inter, sans-serif)",
        letterSpacing: "0.5px",
      }}
    >
      jem
    </div>
    <div
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "var(--pink-900, #ff697f)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "16px",
        fontWeight: 700,
        fontFamily: "var(--font-family-heading, Inter, sans-serif)",
      }}
    >
      J
    </div>
  </div>
);

const DividerPreview = () => (
  <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "0 40px" }}>
    <div style={{ width: "100%", height: "1px", backgroundColor: "var(--greyscale-border-default, #cecece)" }} />
    <div style={{ width: "100%", height: "1px", backgroundColor: "var(--greyscale-border-default, #cecece)" }} />
  </div>
);

const SpacingPreview = () => (
  <div style={{ display: "flex", gap: "8px", alignItems: "flex-end", justifyContent: "center" }}>
    {[8, 16, 24, 32, 48].map((size, i) => (
      <div
        key={i}
        style={{
          width: "24px",
          height: `${size}px`,
          backgroundColor: "var(--pink-200, #ffd2d9)",
          borderRadius: "4px",
        }}
      />
    ))}
  </div>
);

const BorderRadiusPreview = () => (
  <div style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: "40px", height: "40px", backgroundColor: "var(--pink-200, #ffd2d9)", borderRadius: "0" }} />
    <div style={{ width: "40px", height: "40px", backgroundColor: "var(--pink-200, #ffd2d9)", borderRadius: "4px" }} />
    <div style={{ width: "40px", height: "40px", backgroundColor: "var(--pink-200, #ffd2d9)", borderRadius: "8px" }} />
    <div style={{ width: "40px", height: "40px", backgroundColor: "var(--pink-200, #ffd2d9)", borderRadius: "50%" }} />
  </div>
);

const AvatarPreview = () => (
  <div style={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>
    {[48, 40, 32].map((size, i) => (
      <div
        key={i}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          backgroundColor: i === 0 ? "var(--pink-200, #ffd2d9)" : "var(--greyscale-border-default, #cecece)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.4,
          fontWeight: 600,
          color: "var(--greyscale-text-body, #384d5c)",
        }}
      >
        {i === 0 ? "AJ" : ""}
      </div>
    ))}
  </div>
);

const BreadcrumbPreview = () => (
  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "14px" }}>
    <span style={{ color: "var(--greyscale-text-caption, #6a7a85)" }}>Home</span>
    <span style={{ color: "var(--greyscale-text-caption, #6a7a85)" }}>/</span>
    <span style={{ color: "var(--greyscale-text-caption, #6a7a85)" }}>Products</span>
    <span style={{ color: "var(--greyscale-text-caption, #6a7a85)" }}>/</span>
    <span style={{ color: "var(--greyscale-text-title, #062133)", fontWeight: 500 }}>Details</span>
  </div>
);

const AccordionPreview = () => (
  <div style={{ width: "200px", display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--greyscale-border-default, #cecece)" }}>
      <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--greyscale-text-title, #062133)" }}>Is it accessible?</span>
      <span style={{ color: "var(--greyscale-text-title, #062133)" }}>▼</span>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--greyscale-border-default, #cecece)" }}>
      <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--greyscale-text-title, #062133)" }}>Is it styled?</span>
      <span style={{ color: "var(--greyscale-text-title, #062133)" }}>▼</span>
    </div>
  </div>
);

const PaginationPreview = () => (
  <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
    <div style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid var(--greyscale-border-default, #cecece)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "var(--greyscale-text-caption, #6a7a85)" }}>{"<"}</div>
    <div style={{ width: "32px", height: "32px", borderRadius: "6px", backgroundColor: "var(--primary-surface-default, #062133)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "white", fontWeight: 500 }}>1</div>
    <div style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid var(--greyscale-border-default, #cecece)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "var(--greyscale-text-body, #384d5c)" }}>2</div>
    <div style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid var(--greyscale-border-default, #cecece)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "var(--greyscale-text-body, #384d5c)" }}>3</div>
    <div style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid var(--greyscale-border-default, #cecece)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "var(--greyscale-text-caption, #6a7a85)" }}>{">"}</div>
  </div>
);

const StepsPreview = () => (
  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "var(--success-surface-default, #00be5c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "white" }}>✓</div>
    <div style={{ width: "40px", height: "2px", backgroundColor: "var(--success-surface-default, #00be5c)" }} />
    <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "var(--primary-surface-default, #062133)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "white" }}>2</div>
    <div style={{ width: "40px", height: "2px", backgroundColor: "var(--greyscale-border-default, #cecece)" }} />
    <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid var(--greyscale-border-default, #cecece)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "var(--greyscale-text-caption, #6a7a85)" }}>3</div>
  </div>
);

const TabsPreview = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
    <div style={{ display: "flex", gap: "0" }}>
      <div style={{ padding: "8px 16px", fontSize: "14px", fontWeight: 500, color: "var(--primary-surface-default, #062133)", borderBottom: "2px solid var(--primary-surface-default, #062133)" }}>Tab 1</div>
      <div style={{ padding: "8px 16px", fontSize: "14px", color: "var(--greyscale-text-caption, #6a7a85)" }}>Tab 2</div>
      <div style={{ padding: "8px 16px", fontSize: "14px", color: "var(--greyscale-text-caption, #6a7a85)" }}>Tab 3</div>
    </div>
    <div style={{ width: "200px", height: "1px", backgroundColor: "var(--greyscale-border-default, #cecece)" }} />
  </div>
);

const CheckboxPreview = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{ width: "18px", height: "18px", borderRadius: "4px", backgroundColor: "var(--primary-surface-default, #062133)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "12px" }}>✓</div>
      <span style={{ fontSize: "14px", color: "var(--greyscale-text-body, #384d5c)" }}>Option 1</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{ width: "18px", height: "18px", borderRadius: "4px", border: "1px solid var(--greyscale-border-default, #cecece)" }} />
      <span style={{ fontSize: "14px", color: "var(--greyscale-text-body, #384d5c)" }}>Option 2</span>
    </div>
  </div>
);

const DatePickerPreview = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", border: "1px solid var(--greyscale-border-default, #cecece)", borderRadius: "6px", backgroundColor: "white" }}>
    <span style={{ fontSize: "14px", color: "var(--greyscale-text-body, #384d5c)" }}>📅</span>
    <span style={{ fontSize: "14px", color: "var(--greyscale-text-body, #384d5c)" }}>Select date</span>
  </div>
);

const InputPreview = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
    <div style={{ fontSize: "12px", color: "var(--greyscale-text-body, #384d5c)" }}>Label</div>
    <div style={{ width: "200px", height: "36px", border: "1px solid var(--greyscale-border-default, #cecece)", borderRadius: "6px", backgroundColor: "white", display: "flex", alignItems: "center", padding: "0 12px", fontSize: "14px", color: "var(--greyscale-text-caption, #6a7a85)" }}>
      Placeholder text
    </div>
  </div>
);

const RadioPreview = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{ width: "18px", height: "18px", borderRadius: "50%", border: "2px solid var(--primary-surface-default, #062133)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--primary-surface-default, #062133)" }} />
      </div>
      <span style={{ fontSize: "14px", color: "var(--greyscale-text-body, #384d5c)" }}>Option 1</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{ width: "18px", height: "18px", borderRadius: "50%", border: "1px solid var(--greyscale-border-default, #cecece)" }} />
      <span style={{ fontSize: "14px", color: "var(--greyscale-text-body, #384d5c)" }}>Option 2</span>
    </div>
  </div>
);

const SelectPreview = () => (
  <div style={{ width: "180px", height: "36px", border: "1px solid var(--greyscale-border-default, #cecece)", borderRadius: "6px", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px" }}>
    <span style={{ fontSize: "14px", color: "var(--greyscale-text-body, #384d5c)" }}>Select option</span>
    <span style={{ color: "var(--greyscale-text-caption, #6a7a85)" }}>▼</span>
  </div>
);

const TextareaPreview = () => (
  <div style={{ width: "180px", height: "80px", border: "1px solid var(--greyscale-border-default, #cecece)", borderRadius: "6px", backgroundColor: "white", padding: "8px 12px", fontSize: "14px", color: "var(--greyscale-text-caption, #6a7a85)" }}>
    Enter text here...
  </div>
);

const TogglePreview = () => (
  <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
    <div style={{ width: "44px", height: "24px", backgroundColor: "var(--primary-surface-default, #062133)", borderRadius: "12px", position: "relative" }}>
      <div style={{ position: "absolute", right: "2px", top: "2px", width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%" }} />
    </div>
    <div style={{ width: "44px", height: "24px", backgroundColor: "var(--greyscale-border-default, #cecece)", borderRadius: "12px", position: "relative" }}>
      <div style={{ position: "absolute", left: "2px", top: "2px", width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%" }} />
    </div>
  </div>
);

const UploadPreview = () => (
  <div style={{ width: "120px", height: "80px", border: "2px dashed var(--greyscale-border-default, #cecece)", borderRadius: "8px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
    <span style={{ fontSize: "24px", color: "var(--greyscale-text-caption, #6a7a85)" }}>↑</span>
    <span style={{ fontSize: "12px", color: "var(--greyscale-text-caption, #6a7a85)" }}>Upload</span>
  </div>
);

const ChartPreview = () => (
  <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "60px" }}>
    <div style={{ width: "20px", height: "30px", backgroundColor: "var(--pink-400, #ffb4bf)", borderRadius: "4px 4px 0 0" }} />
    <div style={{ width: "20px", height: "50px", backgroundColor: "var(--pink-600, #ff96a5)", borderRadius: "4px 4px 0 0" }} />
    <div style={{ width: "20px", height: "40px", backgroundColor: "var(--pink-900, #ff697f)", borderRadius: "4px 4px 0 0" }} />
    <div style={{ width: "20px", height: "60px", backgroundColor: "var(--primary-surface-default, #062133)", borderRadius: "4px 4px 0 0" }} />
  </div>
);

const ProgressPreview = () => (
  <div style={{ width: "180px", display: "flex", flexDirection: "column", gap: "12px" }}>
    <div style={{ height: "8px", backgroundColor: "var(--greyscale-border-default, #cecece)", borderRadius: "4px", overflow: "hidden" }}>
      <div style={{ width: "70%", height: "100%", backgroundColor: "var(--primary-surface-default, #062133)", borderRadius: "4px" }} />
    </div>
    <div style={{ height: "8px", backgroundColor: "var(--greyscale-border-default, #cecece)", borderRadius: "4px", overflow: "hidden" }}>
      <div style={{ width: "40%", height: "100%", backgroundColor: "var(--pink-900, #ff697f)", borderRadius: "4px" }} />
    </div>
  </div>
);

const TablePreview = () => (
  <div style={{ border: "1px solid var(--greyscale-border-default, #cecece)", borderRadius: "6px", overflow: "hidden", fontSize: "11px" }}>
    <div style={{ display: "flex", backgroundColor: "var(--greyscale-surface-default, #f3f3f3)", borderBottom: "1px solid var(--greyscale-border-default, #cecece)" }}>
      <div style={{ padding: "6px 12px", fontWeight: 600, width: "60px" }}>Name</div>
      <div style={{ padding: "6px 12px", fontWeight: 600, width: "60px" }}>Status</div>
    </div>
    <div style={{ display: "flex", borderBottom: "1px solid var(--greyscale-border-default, #cecece)" }}>
      <div style={{ padding: "6px 12px", width: "60px" }}>John</div>
      <div style={{ padding: "6px 12px", width: "60px" }}>Active</div>
    </div>
    <div style={{ display: "flex" }}>
      <div style={{ padding: "6px 12px", width: "60px" }}>Jane</div>
      <div style={{ padding: "6px 12px", width: "60px" }}>Pending</div>
    </div>
  </div>
);

const TagPreview = () => (
  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
    <div style={{ padding: "4px 12px", backgroundColor: "var(--greyscale-surface-default, #f3f3f3)", borderRadius: "4px", fontSize: "12px", color: "var(--greyscale-text-body, #384d5c)" }}>Default</div>
    <div style={{ padding: "4px 12px", backgroundColor: "var(--success-surface-subtle, #e9fdf2)", borderRadius: "4px", fontSize: "12px", color: "var(--success-text-label, #009b48)" }}>Success</div>
    <div style={{ padding: "4px 12px", backgroundColor: "var(--pink-100, #ffe1e5)", borderRadius: "4px", fontSize: "12px", color: "var(--pink-900, #ff697f)" }}>Pink</div>
  </div>
);

const TooltipPreview = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
    <div style={{ padding: "8px 12px", backgroundColor: "var(--primary-surface-default, #062133)", borderRadius: "6px", fontSize: "12px", color: "white", position: "relative" }}>
      Tooltip text
      <div style={{ position: "absolute", bottom: "-6px", left: "50%", transform: "translateX(-50%)", width: "0", height: "0", borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "6px solid var(--primary-surface-default, #062133)" }} />
    </div>
    <div style={{ width: "32px", height: "32px", borderRadius: "6px", backgroundColor: "var(--greyscale-border-default, #cecece)" }} />
  </div>
);

const AlertPreview = () => (
  <div style={{ padding: "12px 16px", backgroundColor: "var(--success-surface-subtle, #e9fdf2)", borderRadius: "6px", border: "1px solid var(--success-border-default, #a7f8ce)", display: "flex", alignItems: "center", gap: "12px" }}>
    <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "var(--success-surface-default, #00be5c)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "12px" }}>✓</div>
    <span style={{ fontSize: "14px", color: "var(--success-text-label, #009b48)" }}>Success message</span>
  </div>
);

const DialogPreview = () => (
  <div style={{ padding: "16px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", width: "180px" }}>
    <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "var(--greyscale-text-title, #062133)" }}>Dialog Title</div>
    <div style={{ fontSize: "12px", color: "var(--greyscale-text-caption, #6a7a85)", marginBottom: "12px" }}>Dialog content goes here.</div>
    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
      <div style={{ padding: "4px 12px", border: "1px solid var(--greyscale-border-default, #cecece)", borderRadius: "4px", fontSize: "12px" }}>Cancel</div>
      <div style={{ padding: "4px 12px", backgroundColor: "var(--primary-surface-default, #062133)", color: "white", borderRadius: "4px", fontSize: "12px" }}>Confirm</div>
    </div>
  </div>
);

const DrawerPreview = () => (
  <div style={{ display: "flex", gap: "4px" }}>
    <div style={{ width: "80px", height: "100px", backgroundColor: "var(--greyscale-surface-default, #f3f3f3)", borderRadius: "4px", opacity: 0.5 }} />
    <div style={{ width: "100px", height: "100px", backgroundColor: "white", borderRadius: "4px", boxShadow: "-4px 0 12px rgba(0,0,0,0.1)", padding: "8px" }}>
      <div style={{ fontSize: "11px", fontWeight: 600, marginBottom: "8px" }}>Drawer</div>
      <div style={{ width: "100%", height: "8px", backgroundColor: "var(--greyscale-border-default, #cecece)", borderRadius: "2px", marginBottom: "4px" }} />
      <div style={{ width: "60%", height: "8px", backgroundColor: "var(--greyscale-border-default, #cecece)", borderRadius: "2px" }} />
    </div>
  </div>
);

const ToastPreview = () => (
  <div style={{ padding: "12px 16px", backgroundColor: "var(--primary-surface-default, #062133)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
    <span style={{ fontSize: "14px", color: "white" }}>Toast notification</span>
    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", cursor: "pointer" }}>×</span>
  </div>
);

const EmptyStatePreview = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", padding: "16px" }}>
    <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "var(--pink-50, #fff0f2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "16px", height: "14px", border: "2px solid var(--pink-900, #ff697f)", borderRadius: "2px", borderBottom: "none", position: "relative" }}>
        <div style={{ position: "absolute", top: "-4px", left: "2px", width: "8px", height: "4px", backgroundColor: "var(--pink-900, #ff697f)", borderRadius: "1px" }} />
      </div>
    </div>
    <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--greyscale-text-title, #062133)" }}>No data yet</div>
    <div style={{ fontSize: "10px", color: "var(--greyscale-text-caption, #6a7a85)", textAlign: "center" }}>Get started</div>
  </div>
);

const SkeletonPreview = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "180px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--greyscale-surface-default, #f3f3f3)" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
        <div style={{ height: "10px", width: "80%", backgroundColor: "var(--greyscale-surface-default, #f3f3f3)", borderRadius: "4px" }} />
        <div style={{ height: "10px", width: "60%", backgroundColor: "var(--greyscale-surface-default, #f3f3f3)", borderRadius: "4px" }} />
      </div>
    </div>
    <div style={{ height: "10px", width: "100%", backgroundColor: "var(--greyscale-surface-default, #f3f3f3)", borderRadius: "4px" }} />
    <div style={{ height: "10px", width: "75%", backgroundColor: "var(--greyscale-surface-default, #f3f3f3)", borderRadius: "4px" }} />
  </div>
);

const PlaceholderPreview = () => (
  <div
    style={{
      width: "120px",
      height: "80px",
      borderRadius: "8px",
      backgroundColor: "var(--greyscale-border-default, #cecece)",
    }}
  />
);

export const OverviewPage: React.FC = () => {
  return (
    <div
      style={{
        padding: "48px",
        maxWidth: "1600px",
        margin: "0 auto",
        fontFamily: "var(--font-family-body, Manrope, sans-serif)",
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: "48px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            backgroundColor: "var(--pink-100, #ffe1e5)",
            borderRadius: "20px",
            marginBottom: "16px",
          }}
        >
          <span style={{ fontSize: "12px", color: "var(--pink-900, #ff697f)" }}>v1.0</span>
        </div>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 700,
            margin: "0 0 16px",
            color: "var(--greyscale-text-title, #062133)",
            fontFamily: "var(--font-family-heading, Inter, sans-serif)",
          }}
        >
          Jem&apos;s Design System
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 16px",
            backgroundColor: "var(--blue-50, #edf4fb)",
            borderRadius: "8px",
            maxWidth: "600px",
          }}
        >
          <span style={{ fontSize: "14px", color: "var(--blue-700, #0048cf)" }}>
            Click on a component card to view its documentation and examples.
          </span>
        </div>
      </header>

      {/* Design Tokens */}
      <CategorySection
        title="Design Tokens"
        description="Foundational design elements including colours, typography, spacing, and icons."
      >
        <ComponentCard name="Colours" description="Color palette and design tokens." href="/story/design-tokens-colours--default">
          <StylePreview />
        </ComponentCard>
        <ComponentCard name="Icon" description="Icon library and usage guidelines." href="/story/design-tokens-icons--complete-showcase">
          <IconPreview />
        </ComponentCard>
        <ComponentCard name="Logo" description="Brand logos and variants." href="/story/design-tokens-logos--default">
          <LogoPreview />
        </ComponentCard>
        <ComponentCard name="Typography" description="Font families, sizes, and text styles." href="/story/design-tokens-typography--default">
          <TypographyPreview />
        </ComponentCard>
        <ComponentCard name="Spacing" description="Consistent spacing scale for layouts." href="/story/design-tokens-spacing--default">
          <SpacingPreview />
        </ComponentCard>
        <ComponentCard name="Border Radius" description="Standardised corner radii for UI elements." href="/story/design-tokens-border-radius--default">
          <BorderRadiusPreview />
        </ComponentCard>
      </CategorySection>

      {/* Navigation */}
      <CategorySection
        title="Navigation"
        description="Components for navigating through the application."
      >
        <ComponentCard name="Accordion" description="Expandable content sections." href="/story/navigation-accordion--complete-showcase">
          <AccordionPreview />
        </ComponentCard>
        <ComponentCard name="Breadcrumb" description="Hierarchical navigation path." href="/story/navigation-breadcrumb--complete-showcase">
          <BreadcrumbPreview />
        </ComponentCard>
        <ComponentCard name="Pagination" description="Navigate through pages of content." href="/story/navigation-pagination--complete-showcase">
          <PaginationPreview />
        </ComponentCard>
        <ComponentCard name="Steps" description="Multi-step process indicator.">
          <StepsPreview />
        </ComponentCard>
        <ComponentCard name="Tabs" description="Organize content into tabbed sections." href="/story/navigation-tabs--complete-showcase">
          <TabsPreview />
        </ComponentCard>
      </CategorySection>

      {/* Forms */}
      <CategorySection
        title="Forms"
        description="Form controls and input components for collecting user data."
      >
        <ComponentCard
          name="Button"
          description="Primary, secondary, outline, and more button variants."
          href="/story/forms-button--complete-showcase"
        >
          <ButtonPreview />
        </ComponentCard>
        <ComponentCard name="Checkbox" description="Multiple selection control." href="/story/forms-checkbox--complete-showcase">
          <CheckboxPreview />
        </ComponentCard>
        <ComponentCard name="Date & Time Picker" description="Date and time selection." href="/story/forms-calendar--complete-showcase">
          <DatePickerPreview />
        </ComponentCard>
        <ComponentCard name="Input" description="Text input field." href="/story/forms-input--complete-showcase">
          <InputPreview />
        </ComponentCard>
        <ComponentCard name="Radio" description="Single selection from options." href="/story/forms-radiogroup--complete-showcase">
          <RadioPreview />
        </ComponentCard>
        <ComponentCard name="Select" description="Dropdown selection control." href="/story/forms-select--complete-showcase">
          <SelectPreview />
        </ComponentCard>
        <ComponentCard name="Textarea" description="Multi-line text input." href="/story/forms-textarea--complete-showcase">
          <TextareaPreview />
        </ComponentCard>
        <ComponentCard name="Toggle" description="On/off switch control." href="/story/forms-switch--complete-showcase">
          <TogglePreview />
        </ComponentCard>
        <ComponentCard name="Upload" description="File upload interface." href="/story/forms-upload--complete-showcase">
          <UploadPreview />
        </ComponentCard>
      </CategorySection>

      {/* Data Display */}
      <CategorySection
        title="Data Display"
        description="Components for presenting and visualizing data."
      >
        <ComponentCard name="Avatar" description="User profile images and initials." href="/story/data-display-avatar--complete-showcase">
          <AvatarPreview />
        </ComponentCard>
        <ComponentCard name="Chart" description="Data visualization charts.">
          <ChartPreview />
        </ComponentCard>
        <ComponentCard name="Divider" description="Visual separators for content sections." href="/story/data-display-divider--complete-showcase">
          <DividerPreview />
        </ComponentCard>
        <ComponentCard name="Progress" description="Progress indicator bars." href="/story/data-display-progress--complete-showcase">
          <ProgressPreview />
        </ComponentCard>
        <ComponentCard name="Skeleton" description="Placeholder loading state for content." href="/story/data-display-skeleton--complete-showcase">
          <SkeletonPreview />
        </ComponentCard>
        <ComponentCard name="Table" description="Tabular data display." href="/story/data-display-table--complete-showcase">
          <TablePreview />
        </ComponentCard>
        <ComponentCard name="Tags/Filter Tags" description="Categorization labels." href="/story/data-display-tag--complete-showcase">
          <TagPreview />
        </ComponentCard>
      </CategorySection>

      {/* Feedback */}
      <CategorySection
        title="Feedback"
        description="Components for providing user feedback and notifications."
      >
        <ComponentCard name="Alert" description="Inline alert messages." href="/story/feedback-alert--complete-showcase">
          <AlertPreview />
        </ComponentCard>
        <ComponentCard name="Dialog" description="Modal dialog windows." href="/story/feedback-dialog--complete-showcase">
          <DialogPreview />
        </ComponentCard>
        <ComponentCard name="Drawer" description="Side panel overlay." href="/story/feedback-drawer--complete-showcase">
          <DrawerPreview />
        </ComponentCard>
        <ComponentCard name="Empty State" description="Placeholder for empty content." href="/story/feedback-emptystate--complete-showcase">
          <EmptyStatePreview />
        </ComponentCard>
        <ComponentCard name="Toast" description="Brief notification toasts." href="/story/feedback-toast--complete-showcase">
          <ToastPreview />
        </ComponentCard>
        <ComponentCard name="Tooltip" description="Contextual information on hover." href="/story/feedback-tooltip--complete-showcase">
          <TooltipPreview />
        </ComponentCard>
      </CategorySection>

      {/* Footer */}
      <footer
        style={{
          marginTop: "64px",
          paddingTop: "24px",
          borderTop: "1px solid var(--greyscale-border-default, #cecece)",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "var(--greyscale-text-caption, #6a7a85)",
            margin: 0,
          }}
        >
          © Jem HR
        </p>
      </footer>
    </div>
  );
};

export default OverviewPage;
