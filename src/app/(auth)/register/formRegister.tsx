"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  PersonIcon,
  LockClosedIcon,
  EyeOpenIcon,
  EyeClosedIcon,
} from "@radix-ui/react-icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import React from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
});

export default function RegisterForm({ csrfToken }: any) {
  type FormSchemaKeys = keyof (typeof formSchema)["_def"]["shape"];

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await signIn("credentials", {
      username: values.username,
      password: values.password,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        method="POST"
        action="/api/auth/callback/credentials"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        {Object.entries(formSchema.shape).map(([fieldName]) => (
          <FormField
            key={fieldName}
            control={form.control}
            name={fieldName as FormSchemaKeys}
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>
                  {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                </FormLabel> */}
                <FormControl>
                  <div className="flex items-center">
                    {fieldName === "username" ? (
                      <PersonIcon className="w-5 h-5 mr-2" />
                    ) : (
                      <LockClosedIcon className="w-5 h-5 mr-2" />
                    )}
                    {fieldName === "username" ? (
                      <Input
                        className="w-[250px]"
                        placeholder={`Enter your ${fieldName}`}
                        {...field}
                      />
                    ) : (
                      <section className="relative">
                        <Input
                          className="w-[250px]"
                          type={showPassword ? "text" : "password"}
                          placeholder={`Enter your ${fieldName}`}
                          {...field}
                        />
                        <div
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeClosedIcon className="w-5 h-5" />
                          ) : (
                            <EyeOpenIcon className="w-5 h-5" />
                          )}
                        </div>
                      </section>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div className="flex justify-center items-center pt-2">
          <Button
            variant="outline"
            type="submit"
            className="w-full rounded-full"
          >
            SIGN UP
          </Button>
        </div>
      </form>
    </Form>
  );
}
