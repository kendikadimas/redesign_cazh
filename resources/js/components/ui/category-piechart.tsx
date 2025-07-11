import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Data statis untuk contoh
const data = [
  { name: 'Trending', value: 45 },
  { name: 'Digitalisasi Pendidikan', value: 30 },
  { name: 'Edukasi & Informasi', value: 15 },
  { name: 'Tips & Trik', value: 10 },
  { name: 'Tutorial', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6699'];

export function CategoryPieChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Distribusi Kategori Artikel</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                        <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}/>
                        <Legend />
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}