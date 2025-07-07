import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { router } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

// Skema validasi untuk formulir
const formSchema = z.object({
  name: z.string().min(2, { message: "Nama harus diisi." }),
  surname: z.string().min(2, { message: "Nama belakang harus diisi." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  message: z.string().min(10, { message: "Pesan minimal 10 karakter." }),
});

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", surname: "", email: "", message: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Kirim data ke backend Laravel
        router.post('/kontak', values);
        console.log(values);
    }

    return (
        <div className="bg-muted/30 p-8 rounded-lg">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField name="name" control={form.control} render={({ field }) => (
                            <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Value" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                        <FormField name="surname" control={form.control} render={({ field }) => (
                            <FormItem><FormLabel>Surname</FormLabel><FormControl><Input placeholder="Value" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                    </div>
                    <FormField name="email" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="Value" {...field} /></FormControl><FormMessage /></FormItem>
                    )}/>
                    <FormField name="message" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Value" className="min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem>
                    )}/>
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </Form>
        </div>
    );
}