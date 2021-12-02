import {
  ActiveMembers,
  ComparingCard,
  LatestTransactions,
  MonthlyTarget,
  NewUsers,
  UniqueVisitors,
} from "../../components/dashboard/overview";

const OverviewView = () => {
  return (
    <div className="flex flex-col px-4 py-4 lg:py-6 gap-4 lg:gap-6 max-w-screen-2xl w-full mx-auto">
      <div className="flex flex-col xl:flex-row gap-4 lg:gap-6">
        <div className="flex-1 flex flex-col gap-4 lg:gap-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="lg:flex-1 card overflow-hidden">
              <ComparingCard title="Revenue" amount={4567} rate={-2.67} />
            </div>
            <div className="lg:flex-1 card overflow-hidden">
              <ComparingCard title="Sales" amount={8452} rate={8.24} />
            </div>
            <div className="lg:flex-1 card overflow-hidden">
              <ComparingCard title="Costs" amount={6451} rate={4.46} />
            </div>
          </div>
          <div className="card flex-1 w-full overflow-hidden">
            <UniqueVisitors />
          </div>
        </div>
        <div className="w-full xl:w-96 h-full flex flex-col lg:flex-row xl:flex-col gap-4 lg:gap-6">
          <div className="lg:flex-1 xl:flex-none card">
            <MonthlyTarget />
          </div>
          <div className="lg:flex-1 xl:flex-none card">
            <ActiveMembers />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="card flex-1 w-full lg:max-w-sm xl:max-w-lg">
          <NewUsers />
        </div>
        <div className="card flex-1">
          <LatestTransactions />
        </div>
      </div>
    </div>
  );
};

export default OverviewView;
