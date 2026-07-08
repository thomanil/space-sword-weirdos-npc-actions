import D20Icon from './D20Icon'

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
        <D20Icon roll={roll} />
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
        Next
      </button>
      {advice && <p className="activation-advice">{advice}</p>}
    </div>
  )
}
