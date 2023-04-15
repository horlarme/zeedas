import { useState } from "react";
import Link from "next/link";

const Links = [
  { title: "Home", icon: "home-outline", page: "/" },
  { title: "Resume", icon: "person-outline", page: "/resume" },
  { title: "Viewer Stats", icon: "stats-chart-outline", page: "stats" },
];

export function Header() {
  const [showDropDown, showDropDown_] = useState(false);

  return (
    <nav className="container mx-auto py-7 flex justify-between">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="w-12" src={"/logo.svg"} alt={"Logo"} />

      <div className="relative">
        <button
          onClick={() => showDropDown_(!showDropDown)}
          className="avatar avatar-small bg-brand-black/10 text-brand-black relative"
        >
          <ion-icon name="person-outline" />
        </button>
        <div
          className={`bg-white shadow overflow-hidden absolute right-0 top-8 rounded-lg py-4 w-48 transition-all ${
            showDropDown ? "h-auto" : "h-0 py-0"
          }`}
        >
          {Links.map(({ title, icon, page }, index) => (
            <Link
              onClick={() => showDropDown_(false)}
              key={index}
              href={page}
              className="text-brand-black flex gap-x-4 p-4 items-center hover:text-brand-primary text-left"
            >
              <ion-icon name={icon} />
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
