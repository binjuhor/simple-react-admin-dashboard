import {
  BarChart3Icon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  PackageIcon,
  Settings2Icon,
  UsersIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  isCollapsed: boolean;
}

const sidebarItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboardIcon,
    href: '#',
  },
  {
    title: 'Analytics',
    icon: BarChart3Icon,
    href: '#analytics',
  },
  {
    title: 'Customers',
    icon: UsersIcon,
    href: '#customers',
  },
  {
    title: 'Products',
    icon: PackageIcon,
    href: '#products',
  },
  {
    title: 'Messages',
    icon: MessageSquareIcon,
    href: '#messages',
  },
  {
    title: 'Settings',
    icon: Settings2Icon,
    href: '#settings',
  },
  {
    title: 'Logout',
    icon: Settings2Icon,
    href: '#logout',
  },
];

export function Sidebar({ isCollapsed }: SidebarProps) {
  return (
    <div
      className={cn(
        'relative border-r bg-background duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <Button
                  key={item.title}
                  variant="ghost"
                  className={cn(
                    'w-full justify-start text-white',
                    isCollapsed && 'justify-center p-0'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {!isCollapsed && (
                    <span className="ml-3">{item.title}</span>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}