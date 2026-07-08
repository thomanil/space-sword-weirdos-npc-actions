export default function SystemToggle({ systems, activeKey, onChange }) {
  return (
    <div className="system-toggle" role="tablist" aria-label="Game system">
      {systems.map((system) => (
        <button
          key={system.key}
          type="button"
          role="tab"
          aria-selected={system.key === activeKey}
          className={`system-toggle__option${system.key === activeKey ? ' is-active' : ''}`}
          onClick={() => onChange(system.key)}
        >
          {system.name}
        </button>
      ))}
    </div>
  )
}
