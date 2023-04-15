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

export function SkillSet() {
  return (
    <div className="py-6 flex flex-wrap gap-4">
      {skills.map(({ skill, icon, color }, index) => (
        <p key={index} className="pill" style={{ backgroundColor: color }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="ss" src={icon} className={"icon"} />
          {skill}
        </p>
      ))}
    </div>
  );
}
