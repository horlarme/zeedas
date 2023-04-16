import { Fragment, useState } from "react";
import { Progress } from "@/components/Progress";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export function StatsTable() {
  const [tableBodyRef] = useAutoAnimate<HTMLTableSectionElement>();
  const [opened, _opened] = useState(new Set<number>());

  function toggle(index: number) {
    _opened((opened) => {
      const data = new Set(opened.values());
      if (data.has(index)) {
        data.delete(index);
      } else data.add(index);

      return data;
    });
  }

  return (
    <table className={"table"}>
      <thead className="">
        <tr>
          <td>Name and email</td>
          <td>Date</td>
          <td>Location</td>
          <td>Time spent</td>
        </tr>
      </thead>

      <tbody ref={tableBodyRef}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Fragment key={index}>
            <tr
              key={`${index}-main`}
              className={`openable ${opened.has(index) ? "opened" : ""}`}
              onClick={() => toggle(index)}
            >
              <td>
                <div className="flex items-center gap-x-3">
                  <div className="avatar avatar-md bg-brand-primary">MB</div>
                  <div className="flex flex-col">
                    <p className={"font-bold text-brand-black"}>Marcus Brown</p>
                    <p className="text-xs">marcus@paystack.com</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p className={"font-bold text-brand-black"}>01 Feb 2023</p>
                  <p className="text-xs">04:55 PM</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <p className={"font-bold text-brand-black"}>Lagos, Nigeria</p>
                  <p className="text-xs">MacOS, Safari</p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className={"font-bold text-brand-black"}>02:54s</p>
                    <p className="text-xs">90% read</p>
                  </div>
                  <i
                    className={`grid text-xl text-brand-black transition-all ${
                      opened.has(index) && "-rotate-180"
                    }`}
                  >
                    <ion-icon name="chevron-down-outline" />
                  </i>
                </div>
              </td>
            </tr>
            {opened.has(index) ? (
              <tr className={"child"} key={`${index}-drop`}>
                <td colSpan={4} className="">
                  <div className="grid grid-cols-3">
                    <div className="border-brand-table-opened/50 pr-4">
                      <div className="flex flex-col gap-y-2">
                        <p className="flex items-center gap-x-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            className="w-4 h-4"
                            src="https://www.svgrepo.com/show/452062/microsoft.svg"
                            alt={"Icon"}
                          />
                          Microsoft
                        </p>
                        <p className="flex items-center gap-x-2">
                          <i className="grid">
                            <ion-icon name="briefcase" />
                          </i>
                          Senior Engineering Manager
                        </p>
                        <p className="flex items-center gap-x-2">
                          <i className="grid">
                            <ion-icon name="location" />
                          </i>
                          Seattle, WA, United States
                        </p>
                        <p className="flex items-center gap-x-2 font-bold">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            className="w-4 h-4"
                            src="https://www.svgrepo.com/show/448234/linkedin.svg"
                            alt={"Icon"}
                          />
                          View more on LinkedIn
                          <i className="-rotate-45 grid">
                            <ion-icon name="arrow-forward-outline" />
                          </i>
                        </p>
                      </div>
                      <hr className="my-3" />
                      <p className={"font-bold text-xs mb-3"}>
                        Colleagues who also viewed your profile
                      </p>
                      <div className="flex items-center gap-x-3">
                        <div className="avatar avatar-md bg-brand-primary">
                          FD
                        </div>
                        <div className="flex flex-col">
                          <p className={"font-bold text-brand-black"}>
                            Frank Donahue
                          </p>
                          <p className="text-xs">frank@microsoft.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l border-r px-4">
                      <p className="font-black text-xs">Visits</p>
                      <div className="flex flex-col gap-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <p className="text-brand-black">
                            Total number of visits
                          </p>
                          <p className="text-brand-black text-right font-bold">
                            18
                          </p>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <p className="text-brand-black">Day most visited</p>
                          <p className="text-brand-black text-right font-bold">
                            Tuesdays
                          </p>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <p className="text-brand-black">Time most visited</p>
                          <p className="text-brand-black text-right font-bold">
                            4PM
                          </p>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <p className="text-brand-black">Avg. time spent</p>
                          <p className="text-brand-black text-right font-bold">
                            10:44s
                          </p>
                        </div>
                        <div className="flex justify-between py-2">
                          <p className="text-brand-black">Avg. read</p>
                          <p className="text-brand-black text-right font-bold">
                            64%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <p className="font-bold text-xs">
                        Time spent on sections
                      </p>
                      <div className="flex flex-col gap-y-2">
                        <div className="flex justify-between pt-2">
                          <p className="text-brand-black">Personal details</p>
                          <p className="text-brand-text-body text-right font-bold">
                            259 hrs (54%)
                          </p>
                        </div>
                        <Progress value={84} />
                        <div className="flex justify-between pt-2">
                          <p className="text-brand-black">Coding assessments</p>
                          <p className="text-brand-text-body text-right font-bold">
                            176 hrs (32%)
                          </p>
                        </div>
                        <Progress value={72} />
                        <div className="flex justify-between pt-2">
                          <p className="text-brand-black">
                            Submit fundamentals
                          </p>
                          <p className="text-brand-text-body text-right font-bold">
                            84 hrs (15%)
                          </p>
                        </div>
                        <Progress value={52} />
                        <div className="flex justify-between pt-2">
                          <p className="text-brand-black">
                            Review fundamentals
                          </p>
                          <p className="text-brand-text-body text-right font-bold">
                            32 hrs (9%)
                          </p>
                        </div>
                        <Progress value={32} />
                        <div className="flex justify-between pt-2">
                          <p className="text-brand-black">Speed & accuracy</p>
                          <p className="text-brand-text-body text-right font-bold">
                            15 hrs (5%)
                          </p>
                        </div>
                        <Progress value={22} />
                        <div className="flex justify-between pt-2">
                          <p className="text-brand-black">Task awareness...</p>
                          <p className="text-brand-text-body text-right font-bold">
                            9 hrs (3%)
                          </p>
                        </div>
                        <Progress value={12} />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ) : null}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
