import D20Icon from './D20Icon'

export default function ReinforcementResult({ result, advice, onNext }) {
  const { roll, outcome, side } = result

  return (
    <div className="action-result">
      <p className="action-result__meta">Reinforcements</p>
      <p className="action-result__roll">
        Rolled
        <D20Icon roll={roll} />
      </p>
      <h2 className="action-result__action action-result__action--reinforcement">{outcome}</h2>
      {side && (
        <p className="action-result__definition">
          They enter the board within 1 stick of the {side} side, from your perspective of the
          battlefield.
        </p>
      )}
      <button type="button" className="next-unit-button" onClick={onNext}>
        Next
      </button>
      {advice && <p className="activation-advice">{advice}</p>}
    </div>
  )
}
