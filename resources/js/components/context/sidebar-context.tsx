import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

// Tipe untuk context
interface SidebarContextType {
    isExpanded: boolean;
    toggleSidebar: () => void;
}

// Buat context dengan nilai awal null
const SidebarContext = createContext<SidebarContextType | null>(null);

// Buat Provider
export function SidebarProvider({ children }: PropsWithChildren) {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <SidebarContext.Provider value={{ isExpanded, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
}

// Buat custom hook 'useSidebar'
export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === null) {
        // Ini adalah error yang Anda lihat
        throw new Error('useSidebar must be used within a SidebarProvider.');
    }
    return context;
}