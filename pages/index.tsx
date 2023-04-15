import { Header } from "@/components/Header";

const skills = [
  {
    color: "rgba(255, 145, 98, 1)",
    icon: "https://www.svgrepo.com/show/452091/python.svg",
    skill: "Python · 85%",
  },
  {
    color: "rgba(76, 228, 171, 1)",
    icon: "https://www.svgrepo.com/show/378484/android-fill.svg",
    skill: "Android · 90%",
  },
  {
    color: "rgba(44, 140, 194, 1)",
    icon: "https://www.svgrepo.com/show/508931/php01.svg",
    skill: "PHP · 76%",
  },
  {
    color: "rgba(99, 237, 246, 1)",
    icon: "https://www.svgrepo.com/show/503445/nodejs.svg",
    skill: "NodeJS · 92%",
  },
  {
    color: "rgba(72, 180, 226, 1)",
    icon: "https://www.svgrepo.com/show/373604/flutter.svg",
    skill: "Flutter · 54%",
  },
  {
    color: "rgba(252, 139, 130, 1)",
    icon: "https://www.svgrepo.com/show/452095/ruby.svg",
    skill: "Ruby · 88%",
  },
];

export default function Home() {
  return (
    <>
      <Header />
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

        <div className="py-6 flex flex-wrap gap-4">
          {skills.map(({ skill, icon, color }, index) => (
            <p key={index} className="pill" style={{ backgroundColor: color }}>
              <img alt="ss" src={icon} className={"icon"} />
              {skill}
            </p>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex justify-between mb-8">
            <h3>Activity</h3>

            <div className="flex items-center font-bold gap-x-1">
              <p>Show: all</p>
              <ion-icon name="chevron-down-outline" />
            </div>
          </div>

          <div className="flex w-full gap-x-4">
            <p className="font-black flex-shrink-0 flex-grow-0 py-1">
              19 Jan, 2023
            </p>

            <div className="flex-1">
              <div className="flex items-center gap-x-4">
                <ion-icon class="time" name="time-outline"></ion-icon>

                <p className="pill pill-sm bg-brand-purple/10 text-brand-purple font-black">
                  <ion-icon className={"icon"} name="briefcase"></ion-icon>
                  Launched a side project
                </p>
              </div>

              <div className="mt-2 border-l pl-6 ml-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={"rounded w-full"}
                  src="https://picsum.photos/id/14/536/354"
                  alt="Activity"
                />

                <h3 className="mt-4">Obsidian</h3>
                <p className="font-bold mt-1">
                  Built a no-code analytics platform that adheres to the GDPR
                  guidelines and can be easily setup by any business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
