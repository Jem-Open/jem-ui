import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContact,
} from "@/components/feedback/dialog";
import { Button } from "@/components/forms/button";

const meta: Meta<typeof Dialog> = {
  title: "Feedback/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-[500px]">
      {/* Header */}
      <div>
        <p className="text-lg font-bold text-secondary-pink-900 mb-2">
          Feedback
        </p>
        <h1 className="text-5xl font-semibold text-greyscale-text-title mb-4">
          Dialog
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </div>

      {/* Default Dialog */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Default Dialog
        </h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="primary">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog message here</DialogTitle>
              <DialogDescription>
                This is a description of what the dialog message is about.
                Please make sure the text in here isn&apos;t too long.
              </DialogDescription>
            </DialogHeader>
            <DialogContact />
            <DialogFooter>
              <Button variant="primary" size="medium">Button Title</Button>
              <Button variant="outline" size="medium">Outline Button</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Error Dialog */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Error Dialog
        </h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">Open Error Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle variant="error">Oops 404!</DialogTitle>
              <DialogDescription>
                You won&apos;t be able to continue right now - please reach out to
                our support team so we can assist you or try again a bit later.
              </DialogDescription>
            </DialogHeader>
            <DialogContact />
            <DialogFooter>
              <Button variant="primary" size="medium">Button Title</Button>
              <Button variant="outline" size="medium">Outline Button</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Without Close Button */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Without Close Button
        </h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog (No Close)</Button>
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Confirmation Required</DialogTitle>
              <DialogDescription>
                Please confirm your action by clicking one of the buttons below.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="primary" size="medium">Confirm</Button>
              <Button variant="outline" size="medium">Cancel</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog message here</DialogTitle>
          <DialogDescription>
            This is a description of what the dialog message is about. Please
            make sure the text in here isn&apos;t too long.
          </DialogDescription>
        </DialogHeader>
        <DialogContact />
        <DialogFooter>
          <Button variant="primary" size="medium">Button Title</Button>
          <Button variant="outline" size="medium">Outline Button</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Error Variant
export const Error: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Open Error Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle variant="error">Oops 404!</DialogTitle>
          <DialogDescription>
            You won&apos;t be able to continue right now - please reach out to our
            support team so we can assist you or try again a bit later.
          </DialogDescription>
        </DialogHeader>
        <DialogContact />
        <DialogFooter>
          <Button variant="primary" size="medium">Button Title</Button>
          <Button variant="outline" size="medium">Outline Button</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Simple Confirmation
export const SimpleConfirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your item.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="destructive" size="medium">Delete</Button>
          <Button variant="outline" size="medium">Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
