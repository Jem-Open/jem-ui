import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { TablePager } from "@/components/navigation/table-pager";

/**
 * The pager most tables actually want — and the one this design system was missing.
 *
 * jem-hub settled on this composition independently and uses it in **42** tables, against **2** that
 * use numbered `Pagination`. Both controls have a job: numbered links suit a short browsable set
 * where jumping to page 7 means something, this suits the far more common long list you step
 * through, where the page NUMBER carries no information and what a reader needs is "where am I in
 * the total" and "how much do I see at once".
 *
 * Controlled-only on purpose. The consuming app decides where paging state lives — a Next app wires
 * these callbacks to the router so a server component re-fetches, a client-side table to `useState`.
 * Putting `next/navigation` in a design system would make it a framework dependency.
 */
const meta: Meta<typeof TablePager> = {
  title: "Navigation/Table pager",
  component: TablePager,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TablePager>;

/** Live: step through, change the size, and watch the range and disabled arrows follow. */
export const Interactive: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(25);
    return (
      <div className="w-[680px]">
        <TablePager
          page={page}
          count={412}
          pageSize={pageSize}
          onPageChange={setPage}
          onPageSizeChange={(next) => {
            setPageSize(next);
            setPage(1); // a new size invalidates the old offset
          }}
        />
      </div>
    );
  },
};

/**
 * The states worth seeing together, because each is a different edge: the first page disables one
 * arrow, the last disables the other and shows a short final range, and a fixed-size list has no
 * rows-per-page control at all.
 */
export const States: Story = {
  render: () => (
    <div className="flex w-[680px] flex-col gap-8">
      {[
        { label: "First page — previous disabled", page: 1, count: 412, pageSize: 25, sized: true },
        { label: "Mid list — both arrows live", page: 7, count: 412, pageSize: 25, sized: true },
        { label: "Last page — a short final range", page: 17, count: 412, pageSize: 25, sized: true },
        { label: "One page only, but resizable", page: 1, count: 12, pageSize: 25, sized: true },
        {
          label: "Fixed page size — no rows-per-page control",
          page: 2,
          count: 96,
          pageSize: 20,
          sized: false,
        },
      ].map(({ label, page, count, pageSize, sized }) => (
        <div key={label} className="flex flex-col gap-2">
          <span className="text-xs tracking-wide text-greyscale-text-caption uppercase">
            {label}
          </span>
          <TablePager
            page={page}
            count={count}
            pageSize={pageSize}
            onPageChange={() => {}}
            onPageSizeChange={sized ? () => {} : undefined}
          />
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <span className="text-xs tracking-wide text-greyscale-text-caption uppercase">
          Nothing to page — renders nothing at all
        </span>
        <div className="rounded-lg border border-dashed border-greyscale-border p-4 text-sm text-greyscale-text-caption">
          <TablePager page={1} count={0} pageSize={25} onPageChange={() => {}} />
          (empty by design — a pager for zero rows is noise)
        </div>
      </div>
    </div>
  ),
};
