import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerSection,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/feedback/drawer";
import { Button } from "@/components/forms/button";
import { InputField } from "@/components/forms/input";
import { TextareaField } from "@/components/forms/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/forms/select";
import { RadioGroup, RadioGroupItem } from "@/components/forms/radio-group";
import { Label } from "@/components/forms/label";

const meta: Meta<typeof Drawer> = {
  title: "Feedback/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

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
          Drawer
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          A panel that slides in from the edge of the screen, typically used for
          forms, filters, or detailed content views.
        </p>
      </div>

      {/* Right Drawer (Default) */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Right Drawer (Default)
        </h3>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="primary">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Title here</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <DrawerSection title="Heading here">
                <InputField
                  label="Field name"
                  description="This is a description if needed"
                  helperText="Enter your email address"
                  placeholder="Placeholder text"
                />

                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-semibold text-greyscale-text-title">
                    Options
                  </Label>
                  <RadioGroup defaultValue="option1" className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="option1" id="option1" />
                      <Label htmlFor="option1" className="font-normal">Default</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="option2" id="option2" />
                      <Label htmlFor="option2" className="font-normal">Default</Label>
                    </div>
                  </RadioGroup>
                </div>

                <TextareaField
                  label="Field name"
                  description="This is a description if needed"
                  placeholder="Placeholder text"
                />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <Label className="text-sm font-semibold text-greyscale-text-title">
                      Field name
                    </Label>
                    <span className="text-sm text-greyscale-text-body">
                      This is a description if needed
                    </span>
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Title" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </DrawerSection>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="primary" className="w-full">Button Title</Button>
              <Button variant="outline" className="w-full">Outline Button</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Left Drawer */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Left Drawer
        </h3>
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button variant="outline">Open Left Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Left Drawer</DrawerTitle>
              <DrawerDescription>
                This drawer slides in from the left side.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <DrawerSection title="Navigation">
                <div className="flex flex-col gap-2">
                  <Button variant="subtle" className="justify-start">Dashboard</Button>
                  <Button variant="subtle" className="justify-start">Settings</Button>
                  <Button variant="subtle" className="justify-start">Profile</Button>
                  <Button variant="subtle" className="justify-start">Help</Button>
                </div>
              </DrawerSection>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Simple Drawer */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Simple Content
        </h3>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="secondary">View Details</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Item Details</DrawerTitle>
              <DrawerDescription>
                View and edit item information
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between py-2 border-b border-greyscale-border">
                  <span className="text-sm text-greyscale-text-caption">Status</span>
                  <span className="text-sm font-semibold text-greyscale-text-title">Active</span>
                </div>
                <div className="flex justify-between py-2 border-b border-greyscale-border">
                  <span className="text-sm text-greyscale-text-caption">Created</span>
                  <span className="text-sm font-semibold text-greyscale-text-title">Jan 15, 2024</span>
                </div>
                <div className="flex justify-between py-2 border-b border-greyscale-border">
                  <span className="text-sm text-greyscale-text-caption">Updated</span>
                  <span className="text-sm font-semibold text-greyscale-text-title">Feb 3, 2024</span>
                </div>
              </div>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="primary" className="w-full">Save Changes</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  ),
};

// Default (Right)
export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="primary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Title here</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <DrawerSection title="Heading here">
            <InputField
              label="Field name"
              description="This is a description if needed"
              helperText="Enter your email address"
              placeholder="Placeholder text"
            />
          </DrawerSection>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="primary" className="w-full">Button Title</Button>
          <Button variant="outline" className="w-full">Outline Button</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

// Left Direction
export const LeftDirection: Story = {
  render: () => (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Open Left Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Left Drawer</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <p className="text-greyscale-text-body">
            This drawer slides in from the left side of the screen.
          </p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  ),
};

// With Form
export const WithForm: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="primary">Add New Item</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add New Item</DrawerTitle>
          <DrawerDescription>
            Fill in the details below to create a new item.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <div className="flex flex-col gap-6">
            <InputField
              label="Name"
              description="Enter the item name"
              placeholder="Item name"
            />
            <TextareaField
              label="Description"
              placeholder="Enter description..."
            />
            <div className="flex flex-col gap-2">
              <Label className="text-sm font-semibold text-greyscale-text-title">
                Category
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="category1">Category 1</SelectItem>
                  <SelectItem value="category2">Category 2</SelectItem>
                  <SelectItem value="category3">Category 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="primary" className="w-full">Create Item</Button>
          <Button variant="outline" className="w-full">Cancel</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
