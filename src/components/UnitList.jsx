import CategoryIcon from './CategoryIcon'

export default function UnitList({ system, onRoll, onReinforce }) {
  return (
    <div className="unit-list">
      {system.categories.map((category) => (
        <section key={category.key} className="unit-category">
          <h2 className="unit-category__title">
            <CategoryIcon category={category.key} />
            {category.label}
          </h2>
          {category.units.map((unit) => (
            <div key={unit.key} className="unit-row">
              <span className="unit-row__label">
                {unit.label}
                <span className="unit-row__blurb">{unit.blurb}</span>
              </span>
              <div className="unit-row__buttons">
                {Object.entries(system.columns).map(([columnKey, columnLabel]) => (
                  <button
                    key={columnKey}
                    type="button"
                    className="state-button"
                    onClick={() => onRoll({ category, unit, columnKey, columnLabel })}
                  >
                    {columnLabel}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}
      <section className="unit-category reinforcements">
        <h2 className="unit-category__title">
          <CategoryIcon category="reinforcements" />
          Reinforcements
        </h2>
        <div className="unit-row__buttons">
          <button type="button" className="state-button" onClick={onReinforce}>
            Reinforce
          </button>
        </div>
      </section>
    </div>
  )
}
