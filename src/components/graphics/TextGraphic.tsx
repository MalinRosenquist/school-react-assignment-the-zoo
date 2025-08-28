type TextGraphicProps = {
  text: string;
  className: string;
  fontFamily: string;
};

export const TextGraphic = ({ text, className = "", fontFamily = "" }: TextGraphicProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 160 150"
      width="100%"
      height="auto"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <text
        className="svg-text"
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="30"
        fontFamily={fontFamily}
        fill="#363520"
        stroke="#efebce"
        strokeWidth="30"
        paintOrder="stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {text}
      </text>
    </svg>
  );
};
