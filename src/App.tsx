import { useState } from 'react';
import { BellIcon, MenuIcon } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { DashboardContent } from './components/DashboardContent';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from './components/theme-provider';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background w-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center px-4 text-white">
            <Button
              variant="ghost"
              size="icon"
              className="p-0"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
            <div className="flex flex-1 items-center justify-between px-4">
              <h2 className="text-lg font-semibold">Dashboard</h2>
              <div className="flex items-center gap-4 text-white">
                <Button variant="ghost" size="icon" className="p-0">
                  <BellIcon className="h-5 w-5" />
                </Button>
                <div className="h-8 w-8 rounded-full bg-primary/10" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex">
          <Sidebar isCollapsed={isSidebarCollapsed} />
          <main className="flex-1 p-6">
            <DashboardContent />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;