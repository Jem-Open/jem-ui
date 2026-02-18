import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/navigation/accordion";

const meta: Meta<typeof Accordion> = {
  title: "Navigation/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 max-w-2xl">
      {/* Header */}
      <div style={{ marginBottom: "16px" }}>
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
          Navigation
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
          Accordion
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>
      </div>

      {/* Default */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Default
        </h3>
        <Accordion type="single" collapsible className="w-[450px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match your design system.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Multiple Open */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Multiple Items Open
        </h3>
        <Accordion type="multiple" className="w-[450px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
            <AccordionContent>
              Yes. Set the type prop to &quot;multiple&quot; to allow multiple items to be open at once.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does it work?</AccordionTrigger>
            <AccordionContent>
              Each item can be toggled independently without closing others.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it customizable?</AccordionTrigger>
            <AccordionContent>
              Yes. You can customize the styles using the className prop.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Default Open */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Default Open
        </h3>
        <Accordion type="single" collapsible defaultValue="item-2" className="w-[450px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>First item</AccordionTrigger>
            <AccordionContent>
              This item is closed by default.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Second item (default open)</AccordionTrigger>
            <AccordionContent>
              This item is open by default using the defaultValue prop.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Third item</AccordionTrigger>
            <AccordionContent>
              This item is also closed by default.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* FAQ Example */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          FAQ Example
        </h3>
        <Accordion type="single" collapsible className="w-[450px]">
          <AccordionItem value="faq-1">
            <AccordionTrigger>What is your refund policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day money-back guarantee on all purchases. If you&apos;re not satisfied with your purchase, contact our support team for a full refund.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>How do I contact support?</AccordionTrigger>
            <AccordionContent>
              You can reach our support team via email at support@example.com or through the chat widget on our website. We typically respond within 24 hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>Do you offer enterprise plans?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer custom enterprise plans with additional features, dedicated support, and volume discounts. Contact our sales team to learn more.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match your design system.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Multiple
export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes. Set the type prop to &quot;multiple&quot; to allow multiple items to be open at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
          Each item can be toggled independently without closing others.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// With Default Value
export const WithDefaultValue: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>This item is open by default</AccordionTrigger>
        <AccordionContent>
          Use the defaultValue prop to set which item should be open initially.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>This item is closed</AccordionTrigger>
        <AccordionContent>
          Click to open this item.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
