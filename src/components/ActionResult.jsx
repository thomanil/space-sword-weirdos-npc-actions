export default function ActionResult({ result, onNext }) {
  const { unitLabel, columnLabel, roll, action, definition } = result

  return (
    <div className="action-result">
      <p className="action-result__meta">
        {unitLabel} &middot; {columnLabel}
      </p>
      <p className="action-result__roll">Rolled {roll}</p>
      <h2 className="action-result__action">{action}</h2>
      <p className="action-result__definition">{definition}</p>
      <button type="button" className="next-unit-button" onClick={onNext}>
        Next unit
      </button>
    </div>
  )
}
