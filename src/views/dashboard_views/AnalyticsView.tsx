import { EntrenceByRegion, MostVisited, SessIonDevices, SocialMediaRefferel, UniqueVisitors } from "../../components/dashboard/analytics";

const AnalyticsView = () => {
  return <div className="max-w-screen-2xl grid grid-cols-6 gap-3 mx-auto w-full px-2 py-4 lg:py-6">
    <div className="flex xl:col-span-4 col-span-6">
      <EntrenceByRegion />
    </div>
    <div className="flex xl:col-span-2 col-span-6">
      <SessIonDevices />
    </div>
    <div className="flex md:flex-row flex-col gap-3 xl:col-span-3 col-span-6">
      <div className="flex w-full">
        <MostVisited />
      </div>
      <div className="flex w-full">
        <SocialMediaRefferel />
      </div>
    </div>
    <div className="flex flex-row xl:col-span-3 col-span-6">
      <UniqueVisitors />
    </div>
  </div>;
};

export default AnalyticsView;
