import SigninForm from "@/components/auth/signinForm";
import { redirectIfAuth } from "@/utils/redirect/ifAuth";

export default async function SigninPage() {
  await redirectIfAuth();
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08090c] px-6 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e520,transparent_30%),radial-gradient(circle_at_bottom_right,#312e8120,transparent_30%)]" />

      <div className="relative grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="hidden lg:block">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-300">
              Vendor dashboard
            </div>

            <h1 className="text-6xl font-semibold tracking-tight text-white">
              Sign in and keep every trade organized.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Access your trade analyzer, compare trade-in and trade-out values,
              and make faster booth decisions.
            </p>
          </div>
        </div>

        <SigninForm />
      </div>
    </main>
  );
}
