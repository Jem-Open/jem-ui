import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Upload } from "@/components/forms/upload";

const selectedNativeFiles = fn();
const selectedMatchingFiles = fn();

const meta: Meta<typeof Upload> = {
  title: "Forms/Upload",
  component: Upload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["default", "uploading", "uploaded"],
    },
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Upload>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-[520px]">
      {/* Header */}
      <div>
        <p className="text-lg font-bold text-secondary-pink-900 mb-2">
          Forms
        </p>
        <h1 className="text-5xl font-semibold text-greyscale-text-title mb-4">
          Upload
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          A file upload component for dragging and dropping or selecting files
          to upload.
        </p>
      </div>

      {/* Default State */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Default
        </h3>
        <Upload state="default" />
      </div>

      {/* Uploading State */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Uploading
        </h3>
        <Upload state="uploading" progress={44} />
      </div>

      {/* Uploaded State */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Uploaded
        </h3>
        <Upload state="uploaded" fileName="12234.png" />
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  args: {
    state: "default",
  },
  render: (args) => (
    <div className="w-[520px]">
      <Upload {...args} />
    </div>
  ),
};

// Uploading
export const Uploading: Story = {
  args: {
    state: "uploading",
    progress: 44,
  },
  render: (args) => (
    <div className="w-[520px]">
      <Upload {...args} />
    </div>
  ),
};

// Uploaded
export const Uploaded: Story = {
  args: {
    state: "uploaded",
    fileName: "12234.png",
  },
  render: (args) => (
    <div className="w-[520px]">
      <Upload {...args} />
    </div>
  ),
};

// Custom Content
export const CustomContent: Story = {
  render: () => (
    <div className="w-[520px]">
      <Upload
        state="default"
        title="Upload your resume"
        description="PDF, DOC, or DOCX files only. Maximum 10mb."
        maxSize="10mb"
      />
    </div>
  ),
};

export const SelectsNativeFiles: Story = {
  render: () => {
    selectedNativeFiles.mockClear();
    return <Upload onFilesSelected={selectedNativeFiles} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const file = new File(["resume"], "resume.pdf", { type: "application/pdf" });
    const input = canvas.getByTestId("upload-input");

    await userEvent.upload(input, file);
    await expect(canvas.getByRole("status")).toHaveTextContent("Selected resume.pdf");
    await expect(selectedNativeFiles).toHaveBeenCalledTimes(1);
    const [selectedFiles] = selectedNativeFiles.mock.calls[0] as [File[]];
    await expect(selectedFiles).toHaveLength(1);
    await expect(selectedFiles[0]).toBe(file);
  },
};

export const RespectsAcceptAndMultiple: Story = {
  render: () => {
    selectedNativeFiles.mockClear();
    return <Upload accept="application/pdf" multiple disabled onFilesSelected={selectedNativeFiles} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("upload-input");
    const dropzone = canvas.getByTestId("upload-dropzone");
    const file = new File(["resume"], "resume.pdf", { type: "application/pdf" });
    const transfer = new DataTransfer();
    transfer.items.add(file);
    await expect(input).toHaveAttribute("accept", "application/pdf");
    await expect(input).toHaveAttribute("multiple");
    await expect(input).toBeDisabled();
    await userEvent.upload(input, file);
    dropzone.dispatchEvent(new DragEvent("drop", { bubbles: true, dataTransfer: transfer }));
    await expect(selectedNativeFiles).not.toHaveBeenCalled();
  },
};

export const DropMatchesFileSelection: Story = {
  render: () => {
    selectedMatchingFiles.mockClear();
    return <Upload accept="application/pdf" multiple onFilesSelected={selectedMatchingFiles} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const file = new File(["document"], "document.pdf", { type: "application/pdf" });
    const secondFile = new File(["second"], "second.pdf", { type: "application/pdf" });
    const rejectedFile = new File(["image"], "image.png", { type: "image/png" });
    const input = canvas.getByTestId("upload-input");
    const dropzone = canvas.getByTestId("upload-dropzone");
    const transfer = new DataTransfer();
    transfer.items.add(file);
    transfer.items.add(secondFile);
    transfer.items.add(rejectedFile);

    await userEvent.upload(input, [file, secondFile, rejectedFile]);
    dropzone.dispatchEvent(new DragEvent("drop", { bubbles: true, dataTransfer: transfer }));
    await expect(canvas.getByRole("status")).toHaveTextContent("Selected document.pdf, second.pdf");
    await expect(selectedMatchingFiles).toHaveBeenCalledTimes(2);
    for (const call of selectedMatchingFiles.mock.calls) {
      const [selectedFiles] = call as [File[]];
      await expect(selectedFiles).toHaveLength(2);
      await expect(selectedFiles[0]).toBe(file);
      await expect(selectedFiles[1]).toBe(secondFile);
    }
  },
};

export const AnnouncesProgressAndError: Story = {
  render: () => (
    <div className="flex w-[520px] flex-col gap-4">
      <Upload state="uploading" fileName="payslips.csv" progress={44} />
      <Upload error="The selected file could not be uploaded." />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Uploading payslips.csv: 44%");
    await expect(canvas.getByRole("alert")).toHaveTextContent("The selected file could not be uploaded.");
  },
};

export const HiddenNativeInputKeepsThePickerInTabOrder: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <input aria-label="Before upload" />
      <Upload />
      <button type="button">After upload</button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const before = canvas.getByRole("textbox", { name: "Before upload" });
    const picker = canvas.getByRole("button", { name: "Select File" });
    const after = canvas.getByRole("button", { name: "After upload" });

    await userEvent.tab();
    await expect(before).toHaveFocus();
    await userEvent.tab();
    await expect(picker).toHaveFocus();
    await userEvent.tab();
    await expect(after).toHaveFocus();
  },
};

function UploadLifecycleDemo() {
  const [state, setState] = React.useState<"default" | "uploading" | "uploaded">("default");

  return (
    <div className="flex w-[520px] flex-col gap-4">
      <Upload
        state={state}
        progress={44}
        onRemoveFile={() => setState("default")}
      />
      <button type="button" onClick={() => setState("uploading")}>Show uploading</button>
      <button type="button" onClick={() => setState("uploaded")}>Show uploaded</button>
    </div>
  );
}

export const SelectionStatusDoesNotLeakAcrossLifecycle: Story = {
  render: () => <UploadLifecycleDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("upload-input");
    const file = new File(["resume"], "resume.pdf", { type: "application/pdf" });

    await userEvent.upload(input, file);
    await expect(canvas.getByRole("status")).toHaveTextContent("Selected resume.pdf");
    await userEvent.click(canvas.getByRole("button", { name: "Show uploading" }));
    await expect(canvas.getByRole("status")).toHaveTextContent("Uploading file: 44%");
    await expect(canvas.queryByText(/Selected resume.pdf/)).toBeNull();
    await userEvent.click(canvas.getByRole("button", { name: "Show uploaded" }));
    await expect(canvas.queryByText(/Selected resume.pdf/)).toBeNull();
    await userEvent.click(canvas.getByRole("button", { name: "Remove File" }));
    await expect(canvas.queryByRole("status")).toBeNull();
  },
};
