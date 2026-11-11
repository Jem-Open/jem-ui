"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Column,
  Table as TanstackTable,
} from "@tanstack/react-table"
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  EyeOff,
  Settings2,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { resolveMessage, type Message } from "@/lib/messages"
import { Button } from "@/components/forms/button"
import { TablePager, type TablePagerMessages } from "@/components/navigation/table-pager"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/feedback/dropdown-menu"
import { Input } from "@/components/forms/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/data-display/table"

/**
 * The words `DataTable` writes itself. Each key is optional and falls back to the English the table
 * has always shown (see `Message`).
 *
 * Set once on `DataTable`. The column headers you build with `DataTableColumnHeader` read it too,
 * though they are rendered from your column definitions rather than by the table.
 */
interface DataTableMessages {
  /** The empty-body row. English: "No results." */
  noResults?: Message
  /** The selection count. English: "{selected} of {total} row(s) selected." */
  rowsSelected?: Message<{ selected: number; total: number }>
  /** The toolbar filter's placeholder, when `filterPlaceholder` is not given. English: "Filter..." */
  filterPlaceholder?: Message
  /** The column-visibility button. English: "View". */
  view?: Message
  /** The column-visibility menu's heading. English: "Toggle columns". */
  toggleColumns?: Message
  /** A sortable header's menu. English: "Asc". */
  sortAscending?: Message
  /** English: "Desc". */
  sortDescending?: Message
  /** English: "Hide". */
  hideColumn?: Message
  /** The pager under the table. See `TablePagerMessages`. */
  pagination?: TablePagerMessages
}

const DataTableMessagesContext = React.createContext<DataTableMessages | undefined>(undefined)

// DataTable Column Header
interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  const messages = React.useContext(DataTableMessagesContext)

  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-neutral-100"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDown className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUp className="ml-2 h-4 w-4" />
            ) : (
              <ArrowUpDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUp className="mr-2 h-3.5 w-3.5 text-greyscale-text-caption" />
            {resolveMessage(messages?.sortAscending, "Asc")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDown className="mr-2 h-3.5 w-3.5 text-greyscale-text-caption" />
            {resolveMessage(messages?.sortDescending, "Desc")}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeOff className="mr-2 h-3.5 w-3.5 text-greyscale-text-caption" />
            {resolveMessage(messages?.hideColumn, "Hide")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

// DataTable Pagination
interface DataTablePaginationProps<TData> {
  table: TanstackTable<TData>
  showRowsSelected?: boolean
}

/**
 * Thin adapter from TanStack's table state onto `TablePager`.
 *
 * This used to be its own inline composition — a differently sized Select (`h-8 w-[70px]`), plain
 * `Button`s rather than `IconButton`s, and its own spacing — which meant the default table and a
 * hand-built one paginated with visibly different controls. There is one pager now.
 *
 * `showFirstLast` and `showPageReadout` are on because this pager had both, and losing them in a
 * consolidation would be a capability regression rather than a simplification. The page-size options
 * stay this component's own (10/20/30/40/50), not `TablePager`'s default, for the same reason.
 */
function DataTablePagination<TData>({
  table,
  showRowsSelected = true,
}: DataTablePaginationProps<TData>) {
  const { pageIndex, pageSize } = table.getState().pagination
  const messages = React.useContext(DataTableMessagesContext)

  return (
    <div className="flex flex-wrap items-center gap-sm px-2 py-4">
      {showRowsSelected && (
        <div className="text-sm text-greyscale-text-caption">
          {resolveMessage(messages?.rowsSelected, "{selected} of {total} row(s) selected.", {
            selected: table.getFilteredSelectedRowModel().rows.length,
            total: table.getFilteredRowModel().rows.length,
          })}
        </div>
      )}
      <TablePager
        className="ml-auto w-full pt-0 sm:w-auto"
        page={pageIndex + 1}
        count={table.getFilteredRowModel().rows.length}
        pageSize={pageSize}
        pageSizeOptions={[10, 20, 30, 40, 50]}
        onPageChange={(next) => table.setPageIndex(next - 1)}
        onPageSizeChange={(next) => table.setPageSize(next)}
        showFirstLast
        showPageReadout
        messages={messages?.pagination}
      />
    </div>
  )
}

// DataTable View Options
interface DataTableViewOptionsProps<TData> {
  table: TanstackTable<TData>
}

function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  const messages = React.useContext(DataTableMessagesContext)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <Settings2 className="mr-2 h-4 w-4" />
          {resolveMessage(messages?.view, "View")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>{resolveMessage(messages?.toggleColumns, "Toggle columns")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// DataTable Toolbar
interface DataTableToolbarProps<TData> {
  table: TanstackTable<TData>
  filterColumn?: string
  filterPlaceholder?: string
  children?: React.ReactNode
}

function DataTableToolbar<TData>({
  table,
  filterColumn,
  filterPlaceholder: filterPlaceholderProp,
  children,
}: DataTableToolbarProps<TData>) {
  const messages = React.useContext(DataTableMessagesContext)
  const filterPlaceholder =
    filterPlaceholderProp ?? resolveMessage(messages?.filterPlaceholder, "Filter...")

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex flex-1 items-center space-x-2">
        {filterColumn && (
          <Input
            placeholder={filterPlaceholder}
            value={(table.getColumn(filterColumn)?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn(filterColumn)?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
        )}
        {children}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}

// Main DataTable Component
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  filterColumn?: string
  filterPlaceholder?: string
  showPagination?: boolean
  showToolbar?: boolean
  showRowsSelected?: boolean
  toolbarChildren?: React.ReactNode
  /** Translations for the table's built-in text. See `DataTableMessages`. */
  messages?: DataTableMessages
}

function DataTable<TData, TValue>({
  columns,
  data,
  filterColumn,
  filterPlaceholder,
  showPagination = true,
  showToolbar = true,
  showRowsSelected = true,
  toolbarChildren,
  messages,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: showPagination ? getPaginationRowModel() : undefined,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <DataTableMessagesContext.Provider value={messages}>
      <div className="w-full">
        {showToolbar && (
          <DataTableToolbar
            table={table}
            filterColumn={filterColumn}
            filterPlaceholder={filterPlaceholder}
          >
            {toolbarChildren}
          </DataTableToolbar>
        )}
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  {resolveMessage(messages?.noResults, "No results.")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {showPagination && (
          <DataTablePagination table={table} showRowsSelected={showRowsSelected} />
        )}
      </div>
    </DataTableMessagesContext.Provider>
  )
}

export {
  DataTable,
  DataTableColumnHeader,
  DataTablePagination,
  DataTableViewOptions,
  DataTableToolbar,
  type DataTableMessages,
}
