import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { router, Head } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

// Skema validasi untuk setiap field
const formSchema = z.object({
  namaAnda: z.string().min(3, "Nama harus diisi."),
  sebagai: z.string({ required_error: "Pilih peran Anda." }),
  namaLembaga: z.string().min(3, "Nama lembaga harus diisi."),
  jenisLembaga: z.string({ required_error: "Pilih jenis lembaga." }),
  estimasiJumlahSiswa: z.string().optional(),
  nomorHp: z.string().min(10, "Nomor HP tidak valid."),
  kabupatenKota: z.string().min(3, "Kabupaten/Kota harus diisi."),
  provinsi: z.string().min(3, "Provinsi harus diisi."),
  kebutuhanFitur: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Pilih setidaknya satu fitur.",
  }),
  sumberInfo: z.enum(["Sales CAZH", "Mesin Pencari", "Sosial Media", "YouTube", "Iklan", "Referral"], {
    required_error: "Pilih salah satu sumber informasi.",
  }),
  namaPereferensi: z.string().optional(),
});

// Data untuk opsi-opsi
const sebagaiOptions = ["Kepala Sekolah", "Guru", "Staf IT", "Pemilik Yayasan"];
const jenisLembagaOptions = ["SMA/SMK", "SMP", "SD", "Pesantren", "Lainnya"];
const fiturOptions = [
    { id: "ppdb", label: "PPDB Online" },
    { id: "tagihan", label: "Tagihan & Pembayaran Online" },
    { id: "akademik", label: "Akademik, Jadwal Pelajaran" },
    { id: "presensi", label: "Presensi Harian, Mapel, Kegiatan" },
    { id: "keuangan", label: "Keuangan, Pinjaman" },
    { id: "kasir", label: "Kasir Kantin/Toko" },
    { id: "kamar", label: "Pembagian Kamar" },
    { id: "data_siswa", label: "Data Siswa & Guru/Staf, Alumni" },
    { id: "lain", label: "Lain" },
];
const sumberInfoOptions = ["Sales CAZH", "Mesin Pencari", "Sosial Media", "YouTube", "Iklan", "Referral"];


export default function RequestDemo() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { kebutuhanFitur: [] },
    });

    // Tonton perubahan pada field sumberInfo untuk menampilkan input kondisional
    const sumberInfoValue = form.watch("sumberInfo");

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.post('/request-demo', values);
        console.log(values);
    }

    return (
        <>
            <Head title="Permintaan Demo" />
            <Navbar />
            <main className="bg-white">
                <header className="py-16 text-center">
                    <h1 className="text-5xl font-bold">Formulir Pendaftaran</h1>
                    <p className="mt-4 text-muted-foreground">Layanan CazhCards - Digitalisasi Sekolah dan Pesantren</p>
                </header>

                <section className="pb-16">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-white p-8 rounded-lg border shadow-sm">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField name="namaAnda" render={({ field }) => <FormItem><FormLabel>Nama Anda *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>} />
                                        <FormField name="sebagai" render={({ field }) => <FormItem><FormLabel>Sebagai *</FormLabel><Select onValueChange={field.onChange}><FormControl><SelectTrigger><SelectValue placeholder="Silakan Pilih" /></SelectTrigger></FormControl><SelectContent>{sebagaiOptions.map(o=><SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>} />
                                        <FormField name="namaLembaga" render={({ field }) => <FormItem><FormLabel>Nama Lembaga *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>} />
                                        <FormField name="jenisLembaga" render={({ field }) => <FormItem><FormLabel>Jenis Lembaga *</FormLabel><Select onValueChange={field.onChange}><FormControl><SelectTrigger><SelectValue placeholder="Please Select" /></SelectTrigger></FormControl><SelectContent>{jenisLembagaOptions.map(o=><SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>} />
                                        <FormField name="estimasiJumlahSiswa" render={({ field }) => <FormItem><FormLabel>Estimasi Jumlah Siswa/Santri</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>} />
                                        <FormField name="nomorHp" render={({ field }) => <FormItem><FormLabel>Nomor HP/WhatsApp Anda *</FormLabel><FormControl><Input type="tel" {...field} /></FormControl><FormMessage /></FormItem>} />
                                        <FormField name="kabupatenKota" render={({ field }) => <FormItem><FormLabel>Kabupaten/Kota *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>} />
                                        <FormField name="provinsi" render={({ field }) => <FormItem><FormLabel>Provinsi *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>} />
                                    </div>

                                    <FormField name="kebutuhanFitur" render={() => (
                                        <FormItem>
                                            <FormLabel>Kebutuhan Fitur *</FormLabel>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {fiturOptions.map((item) => (
                                                    <FormField key={item.id} name="kebutuhanFitur" render={({ field }) => (
                                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                            <FormControl><Checkbox checked={field.value?.includes(item.id)} onCheckedChange={(checked) => {
                                                                return checked ? field.onChange([...field.value, item.id]) : field.onChange(field.value?.filter((value) => value !== item.id));
                                                            }} /></FormControl>
                                                            <FormLabel className="font-normal">{item.label}</FormLabel>
                                                        </FormItem>
                                                    )}/>
                                                ))}
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <FormField name="sumberInfo" render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel>Mendengar CAZH dari *</FormLabel>
                                            <FormControl><RadioGroup onValueChange={field.onChange} className="flex flex-col space-y-1">
                                                {sumberInfoOptions.map(opt => (
                                                    <FormItem key={opt} className="flex items-center space-x-3 space-y-0">
                                                        <FormControl><RadioGroupItem value={opt} /></FormControl>
                                                        <FormLabel className="font-normal">{opt}</FormLabel>
                                                    </FormItem>
                                                ))}
                                            </RadioGroup></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>
                                    
                                    {sumberInfoValue === 'Referral' && (
                                        <FormField name="namaPereferensi" render={({ field }) => <FormItem><FormLabel>Nama Pereferensi</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>} />
                                    )}

                                    <div className="flex justify-end">
                                        <Button type="submit" size="lg">KIRIM</Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}