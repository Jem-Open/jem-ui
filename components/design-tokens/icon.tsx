import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { LucideIcon, LucideProps } from "lucide-react";

const iconVariants = cva("inline-flex shrink-0", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

export interface IconProps
  extends Omit<LucideProps, "size">,
    VariantProps<typeof iconVariants> {
  icon: LucideIcon;
  label?: string;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size = "md", className, label, ...props }, ref) => {
    const pixelSize = sizeMap[size || "md"];

    return (
      <IconComponent
        ref={ref}
        size={pixelSize}
        className={cn(iconVariants({ size }), className)}
        aria-label={label}
        aria-hidden={!label}
        {...props}
      />
    );
  }
);
Icon.displayName = "Icon";

export { Icon, iconVariants };

// Re-export commonly used icons organized by category
export {
  // Navigation
  X,
  Menu,
  Check,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  // Sidebar menu
  Home,
  Settings,
  Calendar,
  Users,
  FolderClosed,
  Inbox,
  FileText,
  BarChart3,
  HelpCircle,
  // Alerts/Notifications
  Info,
  CircleAlert,
  AlertTriangle,
  CircleCheck,
  Bell,
  BellOff,
  BellRing,
  ShieldAlert,
  // Functions
  Edit,
  Trash2,
  Download,
  Upload,
  Copy,
  Clipboard,
  Plus,
  Minus,
  Search,
  Filter,
  RefreshCw,
  ExternalLink,
  Link,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Star,
  Heart,
  Bookmark,
  Share2,
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  Loader2,
  MoreHorizontal,
  MoreVertical,
  Grip,
  GripVertical,
  LogOut,
  LogIn,
  User,
  UserPlus,
  Zap,
  Image,
  Camera,
  Mic,
  Video,
  Play,
  Pause,
  Square,
  Circle,
} from "lucide-react";
