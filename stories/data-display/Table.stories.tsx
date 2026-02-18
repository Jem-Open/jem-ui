import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/data-display/table";
import {
  DataTable,
  DataTableColumnHeader,
} from "@/components/data-display/data-table";
import { Button } from "@/components/forms/button";
import { Checkbox } from "@/components/forms/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/feedback/dropdown-menu";
import { Tag } from "@/components/data-display/tag";

const meta: Meta<typeof Table> = {
  title: "Data Display/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data for basic table
const invoices = [
  { invoice: "INV001", status: "success" as const, method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "pending" as const, method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "failed" as const, method: "Bank Transfer", amount: "$350.00" },
  { invoice: "INV004", status: "success" as const, method: "Credit Card", amount: "$450.00" },
  { invoice: "INV005", status: "processing" as const, method: "PayPal", amount: "$550.00" },
];

// Sample data for DataTable
type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  name: string;
  date: string;
};

const payments: Payment[] = [
  { id: "m5gr84i9", amount: 316, status: "success", email: "ken99@example.com", name: "Ken Adams", date: "2024-01-15" },
  { id: "3u1reuv4", amount: 242, status: "success", email: "abe45@example.com", name: "Abe Lincoln", date: "2024-01-14" },
  { id: "derv1ws0", amount: 837, status: "processing", email: "monserrat44@example.com", name: "Monserrat Ruiz", date: "2024-01-13" },
  { id: "5kma53ae", amount: 874, status: "success", email: "silas22@example.com", name: "Silas Green", date: "2024-01-12" },
  { id: "bhqecj4p", amount: 721, status: "failed", email: "carmella@example.com", name: "Carmella Rose", date: "2024-01-11" },
  { id: "p2kd93jf", amount: 456, status: "pending", email: "john.doe@example.com", name: "John Doe", date: "2024-01-10" },
  { id: "x8mn45lk", amount: 289, status: "success", email: "jane.smith@example.com", name: "Jane Smith", date: "2024-01-09" },
  { id: "q9we12rt", amount: 612, status: "processing", email: "bob.wilson@example.com", name: "Bob Wilson", date: "2024-01-08" },
  { id: "a3sd67fg", amount: 945, status: "success", email: "alice.jones@example.com", name: "Alice Jones", date: "2024-01-07" },
  { id: "z1xc89vb", amount: 178, status: "failed", email: "charlie.brown@example.com", name: "Charlie Brown", date: "2024-01-06" },
  { id: "n4mk78jh", amount: 523, status: "pending", email: "diana.prince@example.com", name: "Diana Prince", date: "2024-01-05" },
  { id: "b7vc34nm", amount: 867, status: "success", email: "edward.stark@example.com", name: "Edward Stark", date: "2024-01-04" },
];

// Column definitions for DataTable
const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as "success" | "pending" | "processing" | "failed";
      return (
        <Tag variant={status} className="capitalize">
          {status}
        </Tag>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" className="text-right" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      return <div>{date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// Simple columns without selection
const simpleColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as "success" | "pending" | "processing" | "failed";
      return (
        <Tag variant={status} className="capitalize">
          {status}
        </Tag>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 max-w-5xl">
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
          Data Display
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
          Table
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          A responsive table component powered by TanStack Table with sorting, filtering, pagination, row selection, and column visibility controls.
        </p>
      </div>

      {/* DataTable with all features */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          DataTable with Full Features
        </h3>
        <p className="text-sm text-greyscale-text-body mb-4">
          Includes sorting, filtering, pagination, row selection, and column visibility.
        </p>
        <DataTable
          columns={columns}
          data={payments}
          filterColumn="email"
          filterPlaceholder="Filter emails..."
        />
      </div>

      {/* Simple DataTable */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Simple DataTable
        </h3>
        <p className="text-sm text-greyscale-text-body mb-4">
          Basic table without selection or actions.
        </p>
        <DataTable
          columns={simpleColumns}
          data={payments.slice(0, 5)}
          showToolbar={false}
          showRowsSelected={false}
        />
      </div>

      {/* Basic Table */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Basic Table (Static)
        </h3>
        <p className="text-sm text-greyscale-text-body mb-4">
          Simple static table without TanStack Table features.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>
                  <Tag variant={invoice.status} className="capitalize">{invoice.status}</Tag>
                </TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell className="text-right">{invoice.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Table with Footer */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Table with Footer
        </h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.slice(0, 3).map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>
                  <Tag variant={invoice.status} className="capitalize">{invoice.status}</Tag>
                </TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell className="text-right">{invoice.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right font-semibold">$750.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  ),
};

// DataTable Full Featured
export const DataTableFullFeatured: Story = {
  render: () => (
    <div className="w-[900px]">
      <DataTable
        columns={columns}
        data={payments}
        filterColumn="email"
        filterPlaceholder="Filter emails..."
      />
    </div>
  ),
};

// DataTable Simple
export const DataTableSimple: Story = {
  render: () => (
    <div className="w-[700px]">
      <DataTable
        columns={simpleColumns}
        data={payments.slice(0, 5)}
        showToolbar={false}
        showPagination={false}
        showRowsSelected={false}
      />
    </div>
  ),
};

// Basic Static Table
export const Basic: Story = {
  render: () => (
    <div className="w-[600px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>
                <Tag variant={invoice.status} className="capitalize">{invoice.status}</Tag>
              </TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

// With Footer
export const WithFooter: Story = {
  render: () => (
    <div className="w-[600px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>
                <Tag variant={invoice.status} className="capitalize">{invoice.status}</Tag>
              </TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right font-semibold">$1,750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
};

// With Caption
export const WithCaption: Story = {
  render: () => (
    <div className="w-[600px]">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.slice(0, 3).map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>
                <Tag variant={invoice.status} className="capitalize">{invoice.status}</Tag>
              </TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};
