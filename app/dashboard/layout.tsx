import { redirectIfNotAuth } from "@/utils/redirect/ifNotAuth";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await redirectIfNotAuth();
  return <div className="">{children}</div>;
}
