import { createContext, useState, useContext, ReactNode } from 'react';

interface ActiveSectionContextType {
  activeSection: string | null;
  setActiveSection: (id: string | null) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error('useActiveSection must be used within a ActiveSectionProvider');
  }
  return context;
}; 