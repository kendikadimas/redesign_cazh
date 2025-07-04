// resources/js/components/StatsSection.tsx


import React from "react";


interface StatItemProps {
 title: string;
 value: string | number;
}


const StatItem: React.FC<StatItemProps> = ({ title, value }) => {
 return (
 <div className="bg-white rounded-md shadow-md p-8 px-20 text-center">
 <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
 <p className="mt-2 text-2xl font-bold text-indigo-600">{value}</p>
 </div>
 );
};


export function StatsSection() {
 return (
 <section className=" bg-gray-100">
 <div className="container mx-auto px-8 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
 <StatItem title="Total Users" value="10,000+" />
 <StatItem title="Active Sessions" value="500+" />
 <StatItem title="Daily Visits" value="2,500+" />
 </div>
 </section>
 );
}