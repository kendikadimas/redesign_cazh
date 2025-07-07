import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CheckCircle2, HelpCircle } from 'lucide-react';

// 1. Definisikan data untuk setiap paket harga
const pricingPlans = [
    {
        id: "explorer",
        name: "Explorer Plan",
        description: "Terbaik untuk tim kecil dan freelancer.",
        price: { monthly: 100, yearly: 1000 },
        features: ["5 User Quota", "2 Workflow Quota", "100.000 Tokens"],
        isPrimary: false,
    },
    {
        id: "innovator",
        name: "Innovator Plan",
        description: "Untuk tim yang sedang berkembang.",
        price: { monthly: 500, yearly: 5000 },
        features: ["10 User Quota", "4 Workflow Quota", "1 Juta Tokens"],
        isPrimary: true, // Menandai paket utama
    },
    {
        id: "pioneer",
        name: "Pioneer Plan",
        description: "Untuk organisasi skala besar.",
        price: { monthly: 1000, yearly: 10000 },
        features: ["20 User Quota", "10 Workflow Quota", "Unlimited Tokens"],
        isPrimary: false,
    },
];

// Sub-komponen untuk setiap kartu agar lebih rapi
function PricingCard({ plan, billingCycle }) {
    const [userQuota, setUserQuota] = useState(10);
    const [useAgent, setUseAgent] = useState(false);

    const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly;
    const period = billingCycle === 'monthly' ? "/ bulan" : "/ tahun";

    return (
        <Card className={`flex flex-col ${plan.isPrimary ? 'border-2 border-primary shadow-lg' : ''}`}>
            <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
                <div className="mb-6">
                    <span className="text-4xl font-bold">${price}</span>
                    <span className="text-muted-foreground"> {period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <Separator className="my-4" />

                <div className="space-y-6">
                    <h4 className="font-semibold">Add ons</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm flex items-center gap-1">
                                Additional User
                                <TooltipProvider><Tooltip><TooltipTrigger><HelpCircle className="h-4 w-4 text-muted-foreground" /></TooltipTrigger><TooltipContent><p>Tambah kuota pengguna</p></TooltipContent></Tooltip></TooltipProvider>
                            </label>
                            <span className="text-sm font-bold">{userQuota}</span>
                        </div>
                        <Slider defaultValue={[10]} max={100} step={1} onValueChange={(value) => setUserQuota(value[0])} />
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="text-sm flex items-center gap-1">
                            Salesforce Agent
                            <TooltipProvider><Tooltip><TooltipTrigger><HelpCircle className="h-4 w-4 text-muted-foreground" /></TooltipTrigger><TooltipContent><p>Integrasi dengan Salesforce</p></TooltipContent></Tooltip></TooltipProvider>
                        </label>
                        <Switch checked={useAgent} onCheckedChange={setUseAgent} />
                    </div>
                </div>

                <div className="mt-auto pt-8">
                    <Button className="w-full" variant={plan.isPrimary ? 'default' : 'secondary'}>
                        {plan.isPrimary ? "Mulai Uji Coba Gratis" : "Pilih Paket Ini"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export function ProductPricing() {
    const [billingCycle, setBillingCycle] = useState("monthly");

    return (
        <section className="w-full py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Pilih Paket Berlangganan Anda
                        </h2>
                        <p className="mt-2 text-lg text-muted-foreground">
                            Skalakan sesuai kebutuhan Anda. Batalkan kapan saja.
                        </p>
                    </div>
                    <Tabs defaultValue={billingCycle} onValueChange={setBillingCycle} className="w-full sm:w-auto">
                        <TabsList>
                            <TabsTrigger value="monthly">Bulanan</TabsTrigger>
                            <TabsTrigger value="yearly">Tahunan</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} billingCycle={billingCycle} />
                    ))}
                </div>
            </div>
        </section>
    );
}