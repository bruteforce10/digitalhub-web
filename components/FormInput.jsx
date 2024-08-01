"use client";
import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { sendMail } from "@/lib/mail";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";

const formSchema = z.object({
  nama: z.string().min(2, {
    message: "nama must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(2, { message: "Email must be at least 2 characters." })
    .email({ message: "Email must be a valid email address." }),
  message: z
    .string()
    .min(2, { message: "Message must be at least 2 characters." }),
  numberwhatsapp: z
    .string()
    .min(2, { message: "Whatsapp must be at least 2 characters." })
    .startsWith("+62", { message: "Whatsapp must start with +62" }),
});

const FormInput = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: "",
      email: "",
      message: "",
      numberwhatsapp: "",
    },
  });
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(values) {
    setIsLoading(true);
    const { nama, email, message, numberwhatsapp } = values;

    const result = await sendMail({
      to: email,
      subject: "Contact Us",
      body: `saya ${nama} dengan nomor whatsapp ${numberwhatsapp} ingin menghubungi anda dengan pesan ${message}`,
    });

    if (result) {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Email sent successfully",
      });
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogDescription>
          <p className="mb-4">
            {" "}
            Need more information from us? Use the form below to contact us and
            one of our team member will contact you
          </p>{" "}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="nama"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Nama Lengkap Anda"
                        {...field}
                      />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email Anda" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberwhatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomor Whatsapp</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Nomor Whatsapp Anda"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      pastikan formatnya sesuai seperti ini (+62xxxxxxxxxx)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Tulis Pesan Anda" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                className="w-full bg-custom_tersier"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default FormInput;
