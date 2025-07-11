import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Data statis untuk contoh chart
const data = [
  { name: 'Jan', total: 12 },
  { name: 'Feb', total: 19 },
  { name: 'Mar', total: 15 },
  { name: 'Apr', total: 21 },
  { name: 'Mei', total: 28 },
  { name: 'Jun', total: 25 },
  { name: 'Jul', total: 32 },
];

export function ArticleChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Statistik Publikasi Artikel</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }} />
                        <Bar dataKey="total" fill="#00718F" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}