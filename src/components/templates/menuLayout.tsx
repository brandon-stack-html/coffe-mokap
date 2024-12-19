import { MainLayout } from "./mainLayout";

interface MenuLayoutProps {
    children: React.ReactNode;
    sidebar?: React.ReactNode;
  }
  
  export const MenuLayout: React.FC<MenuLayoutProps> = ({ 
    children, 
    sidebar 
  }) => {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              {children}
            </div>
            {sidebar && (
              <aside className="lg:w-1/4">
                {sidebar}
              </aside>
            )}
          </div>
        </div>
      </MainLayout>
    );
  };
  