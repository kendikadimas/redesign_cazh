import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Data statis untuk contoh
const data = [
  { date: 'Senin', visits: 2200 },
  { date: 'Selasa', visits: 2400 },
  { date: 'Rabu', visits: 1890 },
  { date: 'Kamis', visits: 2780 },
  { date: 'Jumat', visits: 3190 },
  { date: 'Sabtu', visits: 4200 },
  { date: 'Minggu', visits: 4500 },
];

export function VisitsLineChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Pengunjung 7 Hari Terakhir</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}/>
                        <Line type="monotone" dataKey="visits" stroke="#00718F" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}