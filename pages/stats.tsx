import { Header } from "@/components/Header";
import { StatsTable } from "@/components/Stats/Table";

export default function Stats() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="w-2/3 mx-auto">
          <div className="flex justify-between items-center mb-5">
            <h1>Profile Analytics</h1>
            <p className="flex gap-x-1 items-center">
              Last 30 Days
              <ion-icon name="chevron-down-outline" />
            </p>
          </div>
          <div className="card grid grid-cols-2">
            <div className="grid grid-cols-2 justify-items-start border-r pr-10">
              <div className={"flex flex-col"}>
                <h3 className="font-bold">Profile visits</h3>
                <h3 className={"mt-3 font-bold"}>732</h3>
                <div className="pill mt-2 bg-brand-green/10 text-brand-green p-2 px-2 rounded-lg self-start">
                  <ion-icon name="arrow-up-outline" />
                  87%
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 justify-items-start pl-10">
              <div className={"flex flex-col"}>
                <h3 className="font-bold">Time Spent (hrs)</h3>
                <h3 className={"mt-3 font-bold"}>328</h3>
                <div className="pill mt-2 bg-brand-red/10 text-brand-red p-2 px-2 rounded-lg self-start">
                  <ion-icon name="arrow-down-outline" />
                  27%
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <h3 className="font-black">Recent visitors</h3>

            <StatsTable />
            <p className="text-brand-primary font-bold mt-3">Show More</p>
          </div>
        </div>
      </div>
    </>
  );
}
