export function Header() {
  return (
    <nav className="container mx-auto py-7 flex justify-between">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="w-12" src={"/logo.svg"} alt={"Logo"} />

      <button className="avatar avatar-small bg-brand-black/10 text-brand-black">
        <ion-icon name="person-outline" />
      </button>
    </nav>
  );
}
