export interface ProgressProps {
  value: number;
}
export function Progress(props: ProgressProps) {
  return (
    <div className="progress">
      <div className="bar" style={{ width: `${props.value}%` }} />
    </div>
  );
}
