import DashboardLayout from "@/components/dashboard/DashboardLayout";
import NewTradeBuilder from "@/components/trades/NewTradeBuilder";
const NewTradePage = () => {
  return (
    <DashboardLayout title="New Trade">
      <NewTradeBuilder />
    </DashboardLayout>
  );
};

export default NewTradePage;
