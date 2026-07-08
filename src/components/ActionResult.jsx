export default function ActionResult({ result, advice, guidelines = [], onNext }) {
  const { unitLabel, columnLabel, roll, action, definition } = result
  const applicableGuidelines = guidelines.filter(
    (guideline) => guideline.universal || guideline.actions?.includes(action),
  )

  return (
    <div className="action-result">
      <p className="action-result__meta">
        {unitLabel} &middot; {columnLabel}
      </p>
      <p className="action-result__roll">
        Rolled
        <svg
          className="d20-icon"
          viewBox="0 0 40 46"
          role="img"
          aria-label={`d20 showing ${roll}`}
        >
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
      </p>
      <h2 className="action-result__action">{action}</h2>
      <p className="action-result__definition">{definition}</p>
      {applicableGuidelines.length > 0 && (
        <div className="action-result__guidelines">
          <p className="action-result__guidelines-title">Activation guidelines</p>
          <ul>
            {applicableGuidelines.map((guideline) => (
              <li key={guideline.id}>{guideline.text}</li>
            ))}
          </ul>
        </div>
      )}
      <button type="button" className="next-unit-button" onClick={onNext}>
        Next unit
      </button>
      {advice && <p className="activation-advice">{advice}</p>}
    </div>
  )
}
