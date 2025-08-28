type HeadingGraphicProps = {
  text: string;
  className: string;
};

export const HeadingGraphic = ({ text, className = "" }: HeadingGraphicProps) => {
  return (
    <svg className={className} role="img" aria-hidden="true" viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg">
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="80"
        fontFamily="'Playpen Sans', cursive"
        fill="#363520"
        stroke="#efebce"
        strokeWidth="46"
        paintOrder="stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {text}
      </text>
    </svg>
  );
};
