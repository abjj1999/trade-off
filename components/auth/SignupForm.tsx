"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema, SignupFormValues } from "@/lib/validations/signup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Card, CardContent } from "@/components/ui/card";
import { signupAction } from "@/app/(auth)/actions";
import { toast } from "sonner";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      businessName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignupFormValues) => {
    const result = await signupAction(values);

    if (result?.error) {
      toast.error(result.error);
      return;
    }
  };

  return (
    <Card className="relative overflow-hidden border border-white/10 bg-[#0d1017]/90 text-white shadow-2xl backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6366f120,transparent_35%)]" />

      <CardContent className="relative p-8">
        <div className="mb-8">
          <div className="mb-5 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-300">
            Trade Off
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            Create vendor account
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Start analyzing card trades, comparing values, and calculating
            vendor profit in seconds.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <FormField label="Username" error={errors.username?.message}>
            <Input
              placeholder="pokeking99"
              {...register("username")}
              className="h-12 border-white/10 bg-black/20 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
            />
          </FormField>

          <FormField label="Email" error={errors.email?.message}>
            <Input
              type="email"
              placeholder="vendor@email.com"
              {...register("email")}
              className="h-12 border-white/10 bg-black/20 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
            />
          </FormField>

          <FormField label="Business name" error={errors.businessName?.message}>
            <Input
              placeholder="Rare Pulls TCG"
              {...register("businessName")}
              className="h-12 border-white/10 bg-black/20 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
            />
          </FormField>

          <div className="grid gap-5 md:grid-cols-2">
            <FormField label="Password" error={errors.password?.message}>
              <Input
                type="password"
                placeholder="••••••••"
                {...register("password")}
                className="h-12 border-white/10 bg-black/20 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
              />
            </FormField>

            <FormField
              label="Confirm password"
              error={errors.confirmPassword?.message}
            >
              <Input
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword")}
                className="h-12 border-white/10 bg-black/20 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
              />
            </FormField>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full bg-indigo-500 text-sm font-medium hover:bg-indigo-400"
          >
            {isSubmitting ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-medium text-indigo-300 hover:text-indigo-200"
          >
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-300">{label}</label>

      {children}

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
