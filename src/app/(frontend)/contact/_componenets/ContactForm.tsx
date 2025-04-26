'use client';

import { useForm } from 'react-hook-form';
import { FormInput, formSchema } from '@/lib/zod/schema/formInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { z } from 'zod'

export default function ContactForm() {

  const items = [
    {
      id: "renting",
      label: "Rent",
    },
    {
      id: "buying",
      label: "Buy",
    },
    {
      id: "other",
      label: "Other",
    }
  ] as const;

  const form = useForm<FormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      items: [""]
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
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
          )} />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="h-12 text-lg px-4 bg-white"  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
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
          )} />
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem className="flex items-center gap-4 py-1">
              <FormLabel className="text-xl whitespace-nowrap">I want to...</FormLabel>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    name="items"
                    control={form.control}
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <Checkbox
                              className="h-6 w-6 bg-white"
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([item.id]);
                                } else {
                                  field.onChange([]);
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-lg font-medium m-0">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
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
          )} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}