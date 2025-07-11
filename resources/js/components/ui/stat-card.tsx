import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    iconBgClass: string;
    change?: string; // Prop opsional untuk perubahan
    changeType?: 'positive' | 'negative'; // Tipe perubahan untuk warna
}

export function StatCard({ title, value, icon, iconBgClass, change, changeType }: StatCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{value}</div>
                    <div className={cn("flex h-10 w-10 items-center justify-center rounded-full", iconBgClass)}>
                        {icon}
                    </div>
                </div>
                {change && (
                    <p className={cn(
                        "text-xs text-muted-foreground mt-1",
                        changeType === 'positive' && "text-green-600",
                        changeType === 'negative' && "text-red-600"
                    )}>
                        {change} dari bulan lalu
                    </p>
                )}
            </CardContent>
        </Card>
    );
}