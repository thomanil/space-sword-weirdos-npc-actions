export default function D20Icon({ roll }) {
  return (
    <svg className="d20-icon" viewBox="0 0 40 46" role="img" aria-label={`d20 showing ${roll}`}>
      <path
        d="M20 2 L36 14 L36 32 L20 44 L4 32 L4 14 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20 2 L20 44 M4 14 L36 32 M36 14 L4 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <text
        x="20"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="15"
        fontWeight="700"
        fill="currentColor"
      >
        {roll}
      </text>
    </svg>
  )
}
