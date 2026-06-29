import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarState {
  [tabKey: string]: {
    [itemKey: string]: boolean;
  };
}

interface ScrollPositions {
  [tabKey: string]: number;
}

interface SidebarStateContextType {
  isExpanded: (tabKey: string, itemKey: string) => boolean;
  setExpanded: (tabKey: string, itemKey: string, expanded: boolean) => void;
  initializeDefaults: (tabKey: string, defaults: Record<string, boolean>) => void;
  getScrollPosition: (tabKey: string) => number;
  setScrollPosition: (tabKey: string, position: number) => void;
}

const SidebarStateContext = createContext<SidebarStateContextType | undefined>(undefined);

export function SidebarStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SidebarState>({});
  const [initialized, setInitialized] = useState<Set<string>>(new Set());
  const [scrollPositions, setScrollPositions] = useState<ScrollPositions>({});

  const isExpanded = (tabKey: string, itemKey: string): boolean => {
    return state[tabKey]?.[itemKey] ?? false;
  };

  const setExpanded = (tabKey: string, itemKey: string, expanded: boolean) => {
    setState(prev => ({
      ...prev,
      [tabKey]: {
        ...prev[tabKey],
        [itemKey]: expanded,
      },
    }));
  };

  const initializeDefaults = (tabKey: string, defaults: Record<string, boolean>) => {
    // Only initialize once per tab
    if (initialized.has(tabKey)) {
      return;
    }

    setState(prev => ({
      ...prev,
      [tabKey]: {
        ...prev[tabKey],
        ...defaults,
      },
    }));

    setInitialized(prev => new Set([...prev, tabKey]));
  };

  const getScrollPosition = (tabKey: string): number => {
    return scrollPositions[tabKey] ?? 0;
  };

  const setScrollPosition = (tabKey: string, position: number) => {
    setScrollPositions(prev => ({
      ...prev,
      [tabKey]: position,
    }));
  };

  return (
    <SidebarStateContext.Provider value={{ isExpanded, setExpanded, initializeDefaults, getScrollPosition, setScrollPosition }}>
      {children}
    </SidebarStateContext.Provider>
  );
}

export function useSidebarState() {
  const context = useContext(SidebarStateContext);
  if (!context) {
    throw new Error('useSidebarState must be used within SidebarStateProvider');
  }
  return context;
}
