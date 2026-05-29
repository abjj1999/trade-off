import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardStats from "@/components/dashboard/DashboardStats";

export default async function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard">
      <DashboardStats />
    </DashboardLayout>
  );
}
