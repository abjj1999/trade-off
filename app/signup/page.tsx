import SignupForm from "@/components/auth/SignupForm";
import { redirectIfAuth } from "@/utils/redirect/ifAuth";

export default async function SignupPage() {
  await redirectIfAuth();
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08090c] px-6 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e520,transparent_30%),radial-gradient(circle_at_bottom_right,#312e8120,transparent_30%)]" />

      <div className="relative grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="hidden lg:block">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-300">
              Trade smarter
            </div>

            <h1 className="text-6xl font-semibold tracking-tight text-white">
              Vendor trade analysis built for TCG sellers.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Compare trade-in value, trade-out value, cash difference, and
              vendor profit in one clean workflow.
            </p>

            <div className="mt-10 grid gap-4">
              <Feature text="TCGplayer market value lookup" />
              <Feature text="Vendor trade percentage calculations" />
              <Feature text="Good, fair, and bad deal ratings" />
            </div>
          </div>
        </div>

        <SignupForm />
      </div>
    </main>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
      <p className="text-slate-300">{text}</p>
    </div>
  );
}
