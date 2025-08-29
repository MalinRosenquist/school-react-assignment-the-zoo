import "./statusImage.scss";
export type HungerStatus = "Mätt" | "Snart dags att mata" | "Hungrig";

type StatusImageProps = {
  imageUrl: string;
  alt: string;
  hungerStatus: HungerStatus;
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  className?: string;
};

export const StatusImage = ({ imageUrl, alt, hungerStatus, onError, className = "" }: StatusImageProps) => {
  // Determine className based on hunger status
  const statusClass = hungerStatus === "Mätt" ? "fed" : hungerStatus === "Snart dags att mata" ? "soon" : "hungry";

  // Combines className with optional class
  const wrapperClass = `${statusClass} ${className}`;

  const img = <img src={imageUrl} alt={alt} onError={onError} className="status-img" />;

  return <div className={wrapperClass}>{img}</div>;
};
