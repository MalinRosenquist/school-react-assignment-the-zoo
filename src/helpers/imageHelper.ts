import fallbackImg from "../assets/images/fallback-animal.jpg";

// Handles broken img-url with a fallbackimg
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.target as HTMLImageElement;

  // If img-url fails, use fallback-img
  if (target.src !== fallbackImg) {
    target.src = fallbackImg;
  }
};
