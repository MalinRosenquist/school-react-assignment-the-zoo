import fallbackImg from "../images/fallback-animal.jpg";

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.target as HTMLImageElement;
  if (target.src !== fallbackImg) {
    target.src = fallbackImg;
  }
};
