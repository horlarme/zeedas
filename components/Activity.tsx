type ActivityType =
  | "badge"
  | "side-project"
  | "certificate"
  | "oss-contribution";

/**
 * todo: Interface can be configured better.
 */
export interface ActivityProps<T extends ActivityType = any> {
  activity: T;
  date: string;
  title: string;
  description?: string;
}

const ActivityText: Record<ActivityType, string> = {
  "oss-contribution": "Made an open source contribution",
  "side-project": "Launched a side project",
  certificate: "Earned a certificate",
  badge: "Earned a badge",
};

const ActivityColor: Record<ActivityType, string> = {
  "oss-contribution": "rgba(219, 104, 55, 1)",
  "side-project": "rgba(120, 51, 234, 1)",
  certificate: "rgba(66, 151, 119, 1)",
  badge: "rgba(51, 102, 255, 1)",
};
const ActivityBgColor: Record<ActivityType, string> = {
  "oss-contribution": "rgba(219, 104, 55, 0.1)",
  "side-project": "rgba(120, 51, 234, 0.1)",
  certificate: "rgba(66, 151, 119, 0.1)",
  badge: "rgba(51, 102, 255, 0.1)",
};

const hasTitle: Array<ActivityType> = ["badge", "certificate", "side-project"];

export function Activity(props: ActivityProps<ActivityType>) {
  const shouldShowTitle = hasTitle.includes(props.activity);

  return (
    <div className="flex w-full gap-x-4">
      <p className="font-black flex-shrink-0 flex-grow-0 py-1">{props.date}</p>

      <div className="flex-1">
        <div className="flex items-center gap-x-4">
          <ion-icon class="time" name="time-outline"></ion-icon>

          <p
            className="pill pill-sm bg-opacity-10 font-black bg-red-400"
            style={{
              color: ActivityColor[props.activity],
              backgroundColor: ActivityBgColor[props.activity],
            }}
          >
            <ion-icon className={"icon"} name="briefcase"></ion-icon>
            {ActivityText[props.activity]}
          </p>
        </div>

        <div className="mt-2 border-l pl-6 ml-2 pb-10 mb-1">
          {props.activity === "side-project" ||
          props.activity === "oss-contribution" ||
          props.activity === "certificate" ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              className={`rounded ${
                props.activity === "certificate"
                  ? "w-1/2 aspect-square"
                  : "w-full"
              }`}
              src={
                props.activity === "oss-contribution"
                  ? props.description
                  : "https://picsum.photos/id/14/536/354"
              }
              alt="Activity"
            />
          ) : null}

          {shouldShowTitle ? <h3 className="mt-4">{props.title}</h3> : null}
          {props.description && props.activity !== "oss-contribution" ? (
            <p className="font-bold mt-1">{props.description}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
