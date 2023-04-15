export function Activity() {
    return (
        <div className="flex w-full gap-x-4">
            <p className="font-black flex-shrink-0 flex-grow-0 py-1">19 Jan, 2023</p>

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
    );
}
