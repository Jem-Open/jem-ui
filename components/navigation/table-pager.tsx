"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { IconButton } from "@/components/forms/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/forms/select";

const DEFAULT_PAGE_SIZE_OPTIONS = [5, 10, 25, 50, 100] as const;

interface TablePagerProps extends Omit<React.ComponentProps<"div">, "children"> {
  /** 1-based current page. */
  page: number;
  /** Total rows across all pages, not the rows on this page. */
  count: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  /** Omit to hide the rows-per-page control — for a list whose size is fixed by its source. */
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeOptions?: readonly number[];
  /** Override the "Rows per page" label, e.g. for a non-tabular list. */
  rowsPerPageLabel?: string;
}

/**
 * The pager a paginated table actually wants: a `start–end of total` range on the left, and a
 * rows-per-page control plus two arrows on the right.
 *
 * This is the shape products converge on, and jem-hub proves it — 42 of its tables use exactly this
 * composition while only 2 use numbered page links. `Pagination` (numbered) is still the right
 * control for a short, browsable set where jumping to page 7 is meaningful; this is for the far more
 * common case of a long list you step through, where a page NUMBER carries no information and the
 * useful facts are "where am I in the total" and "how much do I see at once".
 *
 * DELIBERATELY CONTROLLED-ONLY. jem-hub's version reads and writes `?page` / `?page_size` so a
 * server component re-fetches, which means importing `next/navigation` — a framework dependency this
 * library must not have. Paging state stays the caller's: a Next app wires these callbacks to the
 * router, a client-side table to `useState`, and neither needs a different component.
 *
 * Hidden entirely at `count === 0` — a pager for nothing is noise. It stays visible at one page when
 * a size control is present, so a reader who narrowed to 5 rows can widen again.
 */
function TablePager({
  page,
  count,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  rowsPerPageLabel = "Rows per page",
  className,
  ...props
}: TablePagerProps) {
  const pageCount = Math.max(1, Math.ceil(count / pageSize));
  if (count === 0) return null;

  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, count);

  function goToPage(next: number) {
    onPageChange(Math.min(Math.max(1, next), pageCount));
  }

  return (
    <div
      data-slot="table-pager"
      className={cn(
        "flex flex-wrap items-center gap-sm pt-xs text-sm text-greyscale-text-caption",
        className,
      )}
      {...props}
    >
      <span>
        <span className="font-medium text-greyscale-text-title">
          {start}–{end}
        </span>{" "}
        of {count}
      </span>

      <div className="ml-auto flex items-center gap-sm">
        {onPageSizeChange ? (
          <>
            {/* Hidden on narrow screens: the select's own value makes the meaning clear, and the
                label is the first thing worth dropping when the row runs out of width. */}
            <span className="hidden sm:inline">{rowsPerPageLabel}</span>
            <Select
              value={String(pageSize)}
              onValueChange={(value) => onPageSizeChange(Number(value))}
            >
              <SelectTrigger aria-label={rowsPerPageLabel} className="h-9 w-[88px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {pageSizeOptions.map((option) => (
                  <SelectItem key={option} value={String(option)}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </>
        ) : null}

        <IconButton
          aria-label="Previous page"
          shape="circle"
          size="medium"
          disabled={page <= 1}
          onClick={() => goToPage(page - 1)}
          icon={<ChevronLeft className="size-4" aria-hidden />}
        />
        <IconButton
          aria-label="Next page"
          shape="circle"
          size="medium"
          disabled={page >= pageCount}
          onClick={() => goToPage(page + 1)}
          icon={<ChevronRight className="size-4" aria-hidden />}
        />
      </div>
    </div>
  );
}

export { TablePager, type TablePagerProps };
