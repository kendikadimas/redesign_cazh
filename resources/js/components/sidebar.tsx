import React from 'react';
import { Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { LayoutDashboard, FileText, Clock, User, LogOut } from 'lucide-react';

// Item Navigasi
const NavLink = ({ href, active, children, badge }) => (
    <Link
        href={href}
        className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-primary-foreground/80 transition-all hover:bg-primary-foreground/10",
            active && "bg-primary-foreground/10 text-primary-foreground"
        )}
    >
        {children}
        {badge && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500">{badge}</Badge>}
    </Link>
);

export function Sidebar() {
    return (
        <aside className="hidden w-64 flex-col border-r bg-[#00718F] text-primary-foreground md:flex">
            <img src="/cards-logo.svg" alt="Cards Logo" className="w-25 h-10 mt-5 ml-5" />
            <div className="flex h-16 items-center border-b px-6">
                <Link href="#" className="flex items-center gap-2 font-semibold">
                    <span>Admin Dashboard</span>
                </Link>
            </div>
            <nav className="flex-1 space-y-2 p-4">
                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                    <LayoutDashboard className="h-4 w-4" /> Dashboard
                </NavLink>
                <NavLink href={route('articles.index')} active={route().current('articles.index')}>
                    <FileText className="h-4 w-4" /> Kelola Artikel
                </NavLink>
                <NavLink href="#" active={false} badge="5">
                    <Clock className="h-4 w-4" /> Artikel Pending
                </NavLink>
                <NavLink href="#" active={false}>
                    <User className="h-4 w-4" /> Profil
                </NavLink>
            </nav>
            <div className="mt-auto p-4 border-t">
                 <NavLink href={route('logout')} method="post" as="button">
                    <LogOut className="h-4 w-4" /> Logout
                </NavLink>
            </div>
        </aside>
    );
}