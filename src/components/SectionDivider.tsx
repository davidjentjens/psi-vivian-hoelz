export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <svg
        width="120"
        height="12"
        viewBox="0 0 120 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold/50 animate-draw-in"
        aria-hidden="true"
      >
        <path
          d="M2 8 C 15 2, 25 10, 40 6 S 55 2, 60 6 S 75 10, 80 6 S 95 2, 105 6 C 110 8, 115 4, 118 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
