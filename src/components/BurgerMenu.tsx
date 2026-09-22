export default function BurgerIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <line
        x1="7"
        x2="25"
        y1="7"
        y2="7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />

      <line
        x1="7"
        x2="25"
        y1="16"
        y2="16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />

      <line
        x1="7"
        x2="25"
        y1="25"
        y2="25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}