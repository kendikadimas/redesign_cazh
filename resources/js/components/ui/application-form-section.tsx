import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { router } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { SectionHeader } from '@/components/ui/section-header'; // Menggunakan SectionHeader jika perlu

// Skema validasi menggunakan Zod
const formSchema = z.object({
  namaPartner: z.string().min(3, { message: "Nama partner harus diisi." }),
  jenisPartner: z.string({ required_error: "Pilih jenis partner." }),
  namaPic: z.string().min(3, { message: "Nama PIC harus diisi." }),
  nomorHp: z.string().min(10, { message: "Nomor HP tidak valid." }),
  kebutuhan: z.string({ required_error: "Pilih kebutuhan." }),
  kebutuhanPendanaan: z.string().min(1, { message: "Jumlah pendanaan harus diisi."}),
  tenor: z.string({ required_error: "Pilih tenor." }),
});

// Data untuk dropdown
const jenisPartnerOptions = ["Sekolah", "Perusahaan", "Yayasan"];
const kebutuhanOptions = ["Modal Usaha", "Renovasi", "Pendidikan"];
const tenorOptions = ["6 Bulan", "12 Bulan", "24 Bulan"];


export function ApplicationFormSection() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            namaPartner: "Sekolah Digital Indonesia",
            namaPic: "Vira",
            nomorHp: "087812345678",
            kebutuhanPendanaan: "0",
        },
    });

    // Fungsi untuk mengirim data ke backend Laravel
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Gunakan router dari Inertia untuk mengirim data
        router.post('/ajukan-flexycazh', values);
        console.log(values);
    }

    return (
        <section className="py-16 lg:py-24 bg-teal-400">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Kolom Kiri: Judul dan Gambar */}
                    <div className="text-white text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Tertarik untuk mengajukan FlexyCazh? Isi formulirnya di sini.
                        </h2>
                        <img src="/path/to/your/image.png" alt="FlexyCazh" className="mt-8 mx-auto lg:mx-0" />
                    </div>

                    {/* Kolom Kanan: Formulir */}
                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField name="namaPartner" control={form.control} render={({ field }) => (
                                    <FormItem><FormLabel>Nama Partner</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <FormField name="jenisPartner" control={form.control} render={({ field }) => (
                                    <FormItem><FormLabel>Jenis Partner</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl><SelectTrigger><SelectValue placeholder="Pilih jenis partner.." /></SelectTrigger></FormControl>
                                        <SelectContent>{jenisPartnerOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                                    </Select><FormMessage /></FormItem>
                                )}/>
                                <FormField name="namaPic" control={form.control} render={({ field }) => (
                                    <FormItem><FormLabel>Nama PIC</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <FormField name="nomorHp" control={form.control} render={({ field }) => (
                                    <FormItem><FormLabel>Nomor HP PIC</FormLabel><FormControl><Input type="tel" {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <FormField name="kebutuhan" control={form.control} render={({ field }) => (
                                    <FormItem><FormLabel>Kebutuhan</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl><SelectTrigger><SelectValue placeholder="Pilih kebutuhan.." /></SelectTrigger></FormControl>
                                        <SelectContent>{kebutuhanOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                                    </Select><FormMessage /></FormItem>
                                )}/>
                                <FormField name="kebutuhanPendanaan" control={form.control} render={({ field }) => (
                                    <FormItem><FormLabel>Kebutuhan Pendanaan</FormLabel>
                                        <div className="relative"><div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span className="text-gray-500 sm:text-sm">Rp</span></div>
                                        <FormControl><Input type="number" className="pl-8" {...field} /></FormControl></div>
                                    <FormMessage /></FormItem>
                                )}/>
                                <FormField name="tenor" control={form.control} render={({ field }) => (
                                    <FormItem><FormLabel>Tenor</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl><SelectTrigger><SelectValue placeholder="Pilih tenor.." /></SelectTrigger></FormControl>
                                        <SelectContent>{tenorOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                                    </Select><FormMessage /></FormItem>
                                )}/>
                                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">Kirim</Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}