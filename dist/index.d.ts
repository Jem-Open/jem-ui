import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import React__default from 'react';
import { VariantProps } from 'class-variance-authority';
import { DayPicker, DateRange } from 'react-day-picker';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Switch as Switch$1, Progress as Progress$1, Dialog as Dialog$1, Tooltip as Tooltip$1 } from 'radix-ui';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ColumnDef, Column } from '@tanstack/react-table';
import { Drawer as Drawer$1 } from 'vaul';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as lucide_react from 'lucide-react';
import { LucideProps, LucideIcon } from 'lucide-react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { ToasterProps } from 'sonner';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "default" | "primary" | "secondary" | "destructive" | "approve" | "outline" | "subtle" | "ghost" | "link" | null | undefined;
    size?: "default" | "xs" | "sm" | "small" | "medium" | "lg" | "large" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    loading?: boolean;
}
declare function Button({ className, variant, size, asChild, leftIcon, rightIcon, loading, children, disabled, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;
declare const iconButtonVariants: (props?: ({
    size?: "default" | "small" | "medium" | "large" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface IconButtonProps extends React.ComponentProps<"button">, VariantProps<typeof iconButtonVariants> {
    icon?: React.ReactNode;
}
declare function IconButton({ className, size, shape, icon, children, ...props }: IconButtonProps): react_jsx_runtime.JSX.Element;

declare function Calendar({ className, classNames, showOutsideDays, captionLayout, formatters, components, ...props }: React.ComponentProps<typeof DayPicker>): react_jsx_runtime.JSX.Element;

declare function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function CheckboxWithLabel({ className, label, description, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
    label: string;
    description?: string;
}): react_jsx_runtime.JSX.Element;
declare function CheckboxCard({ className, label, description, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
    label: string;
    description?: string;
}): react_jsx_runtime.JSX.Element;

interface DatePickerProps {
    date?: Date;
    onDateChange?: (date: Date | undefined) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    label?: string;
}
declare function DatePicker({ date, onDateChange, placeholder, className, disabled, label, }: DatePickerProps): react_jsx_runtime.JSX.Element;
interface DateRangePickerProps {
    dateRange?: DateRange;
    onDateRangeChange?: (dateRange: DateRange | undefined) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    label?: string;
}
declare function DateRangePicker({ dateRange, onDateRangeChange, placeholder, className, disabled, label, }: DateRangePickerProps): react_jsx_runtime.JSX.Element;

declare function Input({ className, type, ...props }: React.ComponentProps<"input">): react_jsx_runtime.JSX.Element;
interface InputFieldProps extends React.ComponentProps<"input"> {
    label?: string;
    description?: string;
    helperText?: string;
    error?: boolean;
    icon?: React.ReactNode;
    button?: React.ReactNode;
}
declare function InputField({ className, label, description, helperText, error, icon, button, ...props }: InputFieldProps): react_jsx_runtime.JSX.Element;
interface SearchInputProps extends Omit<React.ComponentProps<"input">, "type"> {
    onClear?: () => void;
}
declare function SearchInput({ className, value, onChange, onClear, ...props }: SearchInputProps): react_jsx_runtime.JSX.Element;

declare function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>): react_jsx_runtime.JSX.Element;

declare function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>): react_jsx_runtime.JSX.Element;
declare function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>): react_jsx_runtime.JSX.Element;
declare function SelectTrigger({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function SelectContent({ className, children, position, ...props }: React.ComponentProps<typeof SelectPrimitive.Content>): react_jsx_runtime.JSX.Element;
declare function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>): react_jsx_runtime.JSX.Element;
declare function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>): react_jsx_runtime.JSX.Element;
declare function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>): react_jsx_runtime.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): react_jsx_runtime.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): react_jsx_runtime.JSX.Element;

declare function Switch({ className, ...props }: React.ComponentProps<typeof Switch$1.Root>): react_jsx_runtime.JSX.Element;

declare function Textarea({ className, ...props }: React.ComponentProps<"textarea">): react_jsx_runtime.JSX.Element;

interface UploadProps {
    className?: string;
    state?: "default" | "uploading" | "uploaded";
    progress?: number;
    fileName?: string;
    title?: string;
    description?: string;
    maxSize?: string;
    onSelectFile?: () => void;
    onRemoveFile?: () => void;
    onSubmit?: () => void;
}
declare function Upload({ className, state, progress, fileName, title, description, maxSize, onSelectFile, onRemoveFile, onSubmit, }: UploadProps): react_jsx_runtime.JSX.Element;

declare function Accordion({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>): react_jsx_runtime.JSX.Element;
declare function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare function Breadcrumb({ ...props }: React.ComponentProps<"nav">): react_jsx_runtime.JSX.Element;
declare function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">): react_jsx_runtime.JSX.Element;
declare function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
declare function BreadcrumbLink({ asChild, className, ...props }: React.ComponentProps<"a"> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
declare function BreadcrumbSeparator({ children, className, variant, ...props }: React.ComponentProps<"li"> & {
    variant?: "chevron" | "slash";
}): react_jsx_runtime.JSX.Element;
declare function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;

declare const linkVariants: (props?: ({
    variant?: "default" | "muted" | null | undefined;
    size?: "xs" | "sm" | "base" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
}
declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;

declare function Pagination({ className, ...props }: React.ComponentProps<"nav">): react_jsx_runtime.JSX.Element;
declare function PaginationContent({ className, ...props }: React.ComponentProps<"ul">): react_jsx_runtime.JSX.Element;
declare function PaginationItem({ ...props }: React.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> & React.ComponentProps<"a">;
declare function PaginationLink({ className, isActive, size, ...props }: PaginationLinkProps): react_jsx_runtime.JSX.Element;
declare function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
declare function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
declare function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;

interface SidebarProps {
    className?: string;
    user?: {
        name: string;
        initials: string;
    };
}
declare function Sidebar({ className, user }: SidebarProps): react_jsx_runtime.JSX.Element;

declare function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare const tabsListVariants: (props?: ({
    variant?: "default" | "line" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function TabsList({ className, variant, ...props }: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>): react_jsx_runtime.JSX.Element;
declare const tabsTriggerVariants: (props?: ({
    variant?: "default" | "line" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function TabsTrigger({ className, variant, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger> & VariantProps<typeof tabsTriggerVariants>): react_jsx_runtime.JSX.Element;
declare function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare const avatarVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const avatarFallbackVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root>, VariantProps<typeof avatarVariants> {
}
declare function Avatar({ className, size, ...props }: AvatarProps): react_jsx_runtime.JSX.Element;
declare function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>): react_jsx_runtime.JSX.Element;
interface AvatarFallbackProps extends React.ComponentProps<typeof AvatarPrimitive.Fallback>, VariantProps<typeof avatarFallbackVariants> {
}
declare function AvatarFallback({ className, size, ...props }: AvatarFallbackProps): react_jsx_runtime.JSX.Element;

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>;
    title: string;
}
declare function DataTableColumnHeader<TData, TValue>({ column, title, className, }: DataTableColumnHeaderProps<TData, TValue>): react_jsx_runtime.JSX.Element;
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    filterColumn?: string;
    filterPlaceholder?: string;
    showPagination?: boolean;
    showToolbar?: boolean;
    showRowsSelected?: boolean;
    toolbarChildren?: React.ReactNode;
}
declare function DataTable<TData, TValue>({ columns, data, filterColumn, filterPlaceholder, showPagination, showToolbar, showRowsSelected, toolbarChildren, }: DataTableProps<TData, TValue>): react_jsx_runtime.JSX.Element;

declare const dividerVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    variant?: "default" | "primary" | "secondary" | "subtle" | "strong" | null | undefined;
    spacing?: "sm" | "lg" | "none" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
    /** Optional label to display in the center of the divider */
    label?: string;
}
declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;

declare function Progress({ className, value, ...props }: React.ComponentProps<typeof Progress$1.Root>): react_jsx_runtime.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare function Table({ className, ...props }: React.ComponentProps<"table">): react_jsx_runtime.JSX.Element;
declare function TableHeader({ className, ...props }: React.ComponentProps<"thead">): react_jsx_runtime.JSX.Element;
declare function TableBody({ className, ...props }: React.ComponentProps<"tbody">): react_jsx_runtime.JSX.Element;
declare function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">): react_jsx_runtime.JSX.Element;
declare function TableRow({ className, ...props }: React.ComponentProps<"tr">): react_jsx_runtime.JSX.Element;
declare function TableHead({ className, ...props }: React.ComponentProps<"th">): react_jsx_runtime.JSX.Element;
declare function TableCell({ className, ...props }: React.ComponentProps<"td">): react_jsx_runtime.JSX.Element;
declare function TableCaption({ className, ...props }: React.ComponentProps<"caption">): react_jsx_runtime.JSX.Element;

declare const tagVariants: (props?: ({
    variant?: "default" | "outline" | "success" | "processing" | "pending" | "failed" | "drafted" | "outline-navy" | "neutral" | "pink" | "pink-text" | "lime" | "purple" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TagProps extends React.ComponentProps<"span">, VariantProps<typeof tagVariants> {
    icon?: React.ReactNode;
}
declare function Tag({ className, variant, icon, children, ...props }: TagProps): react_jsx_runtime.JSX.Element;
interface DismissibleTagProps extends React.ComponentProps<"span">, VariantProps<typeof tagVariants> {
    onDismiss?: () => void;
}
declare function DismissibleTag({ className, variant, children, onDismiss, ...props }: DismissibleTagProps): react_jsx_runtime.JSX.Element;
interface CountTagProps extends React.ComponentProps<"span"> {
    count: number;
}
declare function CountTag({ className, count, ...props }: CountTagProps): react_jsx_runtime.JSX.Element;

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | "note" | "success" | "warning" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {
    hideIcon?: boolean;
}
declare function Alert({ className, variant, hideIcon, children, ...props }: AlertProps): react_jsx_runtime.JSX.Element;
interface AlertTitleProps extends React.ComponentProps<"div"> {
    icon?: React.ReactNode;
}
declare function AlertTitle({ className, icon, children, ...props }: AlertTitleProps): react_jsx_runtime.JSX.Element;
declare function AlertDescription({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare function Dialog({ ...props }: React.ComponentProps<typeof Dialog$1.Root>): react_jsx_runtime.JSX.Element;
declare function DialogTrigger({ ...props }: React.ComponentProps<typeof Dialog$1.Trigger>): react_jsx_runtime.JSX.Element;
declare function DialogPortal({ ...props }: React.ComponentProps<typeof Dialog$1.Portal>): react_jsx_runtime.JSX.Element;
declare function DialogClose({ ...props }: React.ComponentProps<typeof Dialog$1.Close>): react_jsx_runtime.JSX.Element;
declare function DialogOverlay({ className, ...props }: React.ComponentProps<typeof Dialog$1.Overlay>): react_jsx_runtime.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React.ComponentProps<typeof Dialog$1.Content> & {
    showCloseButton?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DialogHeader({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function DialogFooter({ className, children, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare const dialogTitleVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface DialogTitleProps extends React.ComponentProps<typeof Dialog$1.Title>, VariantProps<typeof dialogTitleVariants> {
}
declare function DialogTitle({ className, variant, ...props }: DialogTitleProps): react_jsx_runtime.JSX.Element;
declare function DialogDescription({ className, ...props }: React.ComponentProps<typeof Dialog$1.Description>): react_jsx_runtime.JSX.Element;

declare function Drawer({ direction, ...props }: React.ComponentProps<typeof Drawer$1.Root> & {
    direction?: "right" | "left" | "top" | "bottom";
}): react_jsx_runtime.JSX.Element;
declare function DrawerTrigger({ ...props }: React.ComponentProps<typeof Drawer$1.Trigger>): react_jsx_runtime.JSX.Element;
declare function DrawerPortal({ ...props }: React.ComponentProps<typeof Drawer$1.Portal>): react_jsx_runtime.JSX.Element;
declare function DrawerClose({ ...props }: React.ComponentProps<typeof Drawer$1.Close>): react_jsx_runtime.JSX.Element;
declare function DrawerOverlay({ className, ...props }: React.ComponentProps<typeof Drawer$1.Overlay>): react_jsx_runtime.JSX.Element;
declare function DrawerContent({ className, children, showCloseButton, ...props }: React.ComponentProps<typeof Drawer$1.Content> & {
    showCloseButton?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DrawerHeader({ className, children, showCloseButton, ...props }: React.ComponentProps<"div"> & {
    showCloseButton?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DrawerFooter({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function DrawerTitle({ className, ...props }: React.ComponentProps<typeof Drawer$1.Title>): react_jsx_runtime.JSX.Element;
declare function DrawerDescription({ className, ...props }: React.ComponentProps<typeof Drawer$1.Description>): react_jsx_runtime.JSX.Element;

declare function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): react_jsx_runtime.JSX.Element;

declare const emptyStateVariants: (props?: ({
    variant?: "default" | "card" | "bordered" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const iconMap: {
    folder: React.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    alert: React.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    search: React.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    file: React.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    inbox: React.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    users: React.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
};
type IconType = keyof typeof iconMap;
interface EmptyStateProps extends React.ComponentProps<"div">, VariantProps<typeof emptyStateVariants> {
    icon?: IconType | React.ReactNode;
    title: string;
    description?: string;
    primaryAction?: {
        label: string;
        onClick?: () => void;
        href?: string;
    };
    secondaryAction?: {
        label: string;
        onClick?: () => void;
        href?: string;
    };
    footer?: React.ReactNode;
}
declare function EmptyState({ className, variant, size, icon, title, description, primaryAction, secondaryAction, footer, children, ...props }: EmptyStateProps): react_jsx_runtime.JSX.Element;

declare function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function PopoverContent({ className, align, sideOffset, ...props }: React.ComponentProps<typeof PopoverPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => react_jsx_runtime.JSX.Element;

declare function TooltipProvider({ delayDuration, ...props }: React.ComponentProps<typeof Tooltip$1.Provider>): react_jsx_runtime.JSX.Element;
declare function Tooltip({ ...props }: React.ComponentProps<typeof Tooltip$1.Root>): react_jsx_runtime.JSX.Element;
declare function TooltipTrigger({ ...props }: React.ComponentProps<typeof Tooltip$1.Trigger>): react_jsx_runtime.JSX.Element;
declare const tooltipContentVariants: (props?: ({
    variant?: "dark" | "light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TooltipContentProps extends React.ComponentProps<typeof Tooltip$1.Content>, VariantProps<typeof tooltipContentVariants> {
}
declare function TooltipContent({ className, sideOffset, variant, children, ...props }: TooltipContentProps): react_jsx_runtime.JSX.Element;

declare const iconVariants: (props?: ({
    size?: "xs" | "sm" | "lg" | "md" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface IconProps extends Omit<LucideProps, "size">, VariantProps<typeof iconVariants> {
    icon: LucideIcon;
    label?: string;
}
declare const Icon: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

declare const primaryLogoVariants: (props?: ({
    variant?: "pink" | "bg-pink" | "bg-white" | "white" | null | undefined;
    size?: "sm" | "lg" | "md" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface PrimaryLogoProps extends React__default.HTMLAttributes<HTMLDivElement>, VariantProps<typeof primaryLogoVariants> {
}
declare const PrimaryLogo: React__default.ForwardRefExoticComponent<PrimaryLogoProps & React__default.RefAttributes<HTMLDivElement>>;

declare const secondaryLogoRoundVariants: (props?: ({
    variant?: "bg-pink" | "bg-white" | null | undefined;
    size?: "sm" | "lg" | "md" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SecondaryLogoRoundProps extends React__default.HTMLAttributes<HTMLDivElement>, VariantProps<typeof secondaryLogoRoundVariants> {
}
declare const SecondaryLogoRound: React__default.ForwardRefExoticComponent<SecondaryLogoRoundProps & React__default.RefAttributes<HTMLDivElement>>;

declare const secondaryLogoSquareVariants: (props?: ({
    variant?: "bg-pink" | "bg-white" | null | undefined;
    size?: "sm" | "lg" | "md" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SecondaryLogoSquareProps extends React__default.HTMLAttributes<HTMLDivElement>, VariantProps<typeof secondaryLogoSquareVariants> {
}
declare const SecondaryLogoSquare: React__default.ForwardRefExoticComponent<SecondaryLogoSquareProps & React__default.RefAttributes<HTMLDivElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertTitle, Avatar, AvatarFallback, AvatarImage, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Calendar, Checkbox, CheckboxCard, CheckboxWithLabel, CountTag, DataTable, DataTableColumnHeader, DatePicker, DateRangePicker, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DismissibleTag, Divider, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EmptyState, Icon, IconButton, Input, InputField, Label, Link, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverContent, PopoverTrigger, PrimaryLogo, Progress, RadioGroup, RadioGroupItem, SearchInput, SecondaryLogoRound, SecondaryLogoSquare, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Sidebar, Skeleton, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Tag, Textarea, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Upload, alertVariants, buttonVariants, cn, dividerVariants, iconButtonVariants, tagVariants };
