import { Header } from "@/components/Header";
import { Activity, ActivityProps } from "@/components/Activity";
import { SkillSet } from "@/components/SkillSet";

const activities: Array<ActivityProps> = [
  {
    activity: "side-project",
    date: "19 Jan, 2023",
    title: "Obsidian",
    description:
      "Built a no-code analytics platform that adheres to the GDPR guidelines and can be easily setup by any business.",
  },
  {
    activity: "certificate",
    date: "17 Jan, 2023",
    title: "Udacity · Introduction to machine learning",
    description:
      "Completed the course and earned a certificate of excellence for finishing top five in the cohort with one of the highest grades.",
  },
  {
    date: "14 Jan, 2023",
    activity: "badge",
    title: "Code review ninja",
    description: "Achieved 3,000 code review hours.",
  },
  {
    date: "19 Dec, 2022",
    activity: "oss-contribution",
    title: "Made an open source contribution",
    description:
      "https://opengraph.githubassets.com/72cdd00e06b1a7a93b8a85a5f288bcbee701ae8ddd9366013f617f1998cbe533/github/linguist",
  },
  {
    date: "14 Jan, 2023",
    activity: "badge",
    title: "Code wrangler",
    description: "Milestone: written a 1,000,000 lines of code",
  },
];
export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="w-1/2 mx-auto">
          <div className="flex justify-between mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://picsum.photos/id/14/536/354"
              alt="Profile Image"
              className="avatar"
            />

            <div className="grid grid-cols-1 gap-y-2 place-content-center justify-items-stretch">
              <button className="button">Contact Me</button>
              <button className="button button-gray">Follow</button>
            </div>
          </div>

          <h1 className="mb-2">Adeyemi Oluwafemi</h1>
          <p className="font-semibold">
            I’m a talented full-stack developer with a passion for building
            high-quality, scalable, and maintainable web applications. With my
            extensive experience working with popular frameworks such as Spring,
            Django, and React.
          </p>

          <SkillSet />

          <div className="mt-6">
            <div className="flex justify-between mb-8">
              <h3>Activity</h3>

              <div className="flex items-center font-bold gap-x-1">
                <p>Show: all</p>
                <ion-icon name="chevron-down-outline" />
              </div>
            </div>

            {activities.map(({ activity, title, date, description }, index) => (
              <Activity
                key={index}
                activity={activity}
                title={title}
                date={date}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
