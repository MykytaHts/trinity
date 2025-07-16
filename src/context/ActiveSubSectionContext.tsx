import { createContext, useState, useContext, ReactNode } from 'react';

interface ActiveSubSectionContextType {
  activeSubSection: string;
  setActiveSubSection: (id: string) => void;
}

const ActiveSubSectionContext = createContext<ActiveSubSectionContextType | undefined>(undefined);

export const ActiveSubSectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSubSection, setActiveSubSection] = useState('');

  return (
    <ActiveSubSectionContext.Provider value={{ activeSubSection, setActiveSubSection }}>
      {children}
    </ActiveSubSectionContext.Provider>
  );
};

export const useActiveSubSection = () => {
  const context = useContext(ActiveSubSectionContext);
  if (!context) {
    throw new Error('useActiveSubSection must be used within an ActiveSubSectionProvider');
  }
  return context;
}; 