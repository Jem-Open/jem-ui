import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ColumnDef } from "@tanstack/react-table";
import { expect, userEvent, within } from "storybook/test";

import { DataTable, DataTableColumnHeader } from "@/components/data-display/data-table";

type Person = { name: string; team: string };

const people: Person[] = Array.from({ length: 12 }, (_, i) => ({
  name: `Person ${i + 1}`,
  team: i % 2 ? "Ops" : "Floor",
}));

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
  },
  { accessorKey: "team", header: "Team", enableSorting: false },
];

const meta: Meta<typeof DataTable<Person, unknown>> = {
  title: "Data display/Data table",
  component: DataTable,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

/** The English default: what every existing consumer renders. */
export const Default: Story = {
  render: () => <DataTable columns={columns} data={people} filterColumn="name" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("0 of 12 row(s) selected.")).toBeVisible();
    await expect(canvas.getByPlaceholderText("Filter...")).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Next page" })).toBeVisible();
  },
};

export const Empty: Story = {
  render: () => <DataTable columns={columns} data={[]} />,
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByText("No results.")).toBeVisible();
  },
};

/**
 * Every string the table writes, supplied by the caller. The pager's keys nest under `pagination`,
 * and the sort menu on a column header reads the same `messages` through the table.
 */
export const WithMessages: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={people}
      filterColumn="name"
      messages={{
        rowsSelected: "[{selected} of {total} chosen]",
        filterPlaceholder: "[filter]",
        view: "[view]",
        toggleColumns: "[columns]",
        sortAscending: "[asc]",
        sortDescending: "[desc]",
        hideColumn: "[hide]",
        pagination: { ofCount: "[of {count}]", nextPage: "[next]", pageReadout: "[page {page}/{pageCount}]" },
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("[0 of 12 chosen]")).toBeVisible();
    await expect(canvas.getByPlaceholderText("[filter]")).toBeVisible();
    await expect(canvas.getByRole("button", { name: "[next]" })).toBeVisible();

    // The header's sort menu is outside the table's own markup, but inside its messages.
    await userEvent.click(canvas.getByRole("button", { name: "Name" }));
    const menu = within(document.body);
    await expect(await menu.findByRole("menuitem", { name: "[asc]" })).toBeVisible();
    await expect(menu.getByRole("menuitem", { name: "[desc]" })).toBeVisible();
    await expect(menu.getByRole("menuitem", { name: "[hide]" })).toBeVisible();
    await userEvent.keyboard("{Escape}");
  },
};

export const EmptyWithMessages: Story = {
  render: () => <DataTable columns={columns} data={[]} messages={{ noResults: "[nothing here]" }} />,
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByText("[nothing here]")).toBeVisible();
  },
};

/** With `showPagination={false}` the table shows every row, not just TanStack's first page of 10. */
export const WithoutPaginationShowsEveryRow: Story = {
  render: () => <DataTable columns={columns} data={people} showPagination={false} showToolbar={false} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Person 12")).toBeVisible();
    await expect(canvas.getAllByRole("row")).toHaveLength(13);
    await expect(canvas.queryByRole("button", { name: "Next page" })).toBeNull();
  },
};
