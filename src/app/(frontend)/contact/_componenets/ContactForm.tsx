'use client';

import { useForm } from 'react-hook-form';
import { FormInput, formSchema } from '@/lib/zod/schema/formInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { z } from 'zod'
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState<boolean>(false)

  const form = useForm<FormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORM_KEY || "",
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      })
    });
    const result = await response.json();
    if (result.success) {
      setSent(true)
    }
  }

  return (
    <>
      {sent ? (
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl font-bold">Thank you for your message!</p>
          <p className="text-2xl font-medium opacity-50">
            Our team will reach out in 1-2 business days.
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col space-y-6 md:mx-32">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} className="h-12 text-lg px-4 bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} className="h-12 text-lg px-4 bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} className="h-12 text-lg px-4 bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder=""
                      className="min-h-[120px] text-lg px-4 py-2 bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </>
  )
}