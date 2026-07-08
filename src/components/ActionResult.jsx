export default function ActionResult({ result, onNext }) {
  const { unitLabel, columnLabel, roll, action, definition } = result

  return (
    <div className="action-result">
      <p className="action-result__meta">
        {unitLabel} &middot; {columnLabel}
      </p>
      <p className="action-result__roll">
        Rolled
        <svg
          className="d20-icon"
          viewBox="0 0 40 40"
          role="img"
          aria-label={`d20 showing ${roll}`}
        >
          <path
            d="M20 2 L36 12 L36 28 L20 38 L4 28 L4 12 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M20 2 L20 38 M4 12 L20 20 L36 12 M4 28 L20 20 L36 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
            opacity="0.5"
          />
          <text
            x="20"
            y="21"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="16"
            fontWeight="700"
            fill="currentColor"
          >
            {roll}
          </text>
        </svg>
      </p>
      <h2 className="action-result__action">{action}</h2>
      <p className="action-result__definition">{definition}</p>
      <button type="button" className="next-unit-button" onClick={onNext}>
        Next unit
      </button>
    </div>
  )
}
