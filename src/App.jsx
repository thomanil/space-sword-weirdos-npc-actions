import { useLayoutEffect, useRef, useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { rollD20, lookupAction } from './lib/actionTables'
import SystemToggle from './components/SystemToggle'
import UnitList from './components/UnitList'
import ActionResult from './components/ActionResult'
import spaceWeirdos from './data/spaceWeirdos'
import swordWeirdos from './data/swordWeirdos'
import './App.css'

const SYSTEMS = [spaceWeirdos, swordWeirdos]

function App() {
  const [systemKey, setSystemKey] = useLocalStorage('weirdos-system', spaceWeirdos.key)
  const [result, setResult] = useState(null)
  const listScrollY = useRef(0)

  const system = SYSTEMS.find((s) => s.key === systemKey) ?? spaceWeirdos

  useLayoutEffect(() => {
    if (!result) {
      window.scrollTo(0, listScrollY.current)
    }
  }, [result])

  const handleSystemChange = (nextKey) => {
    setSystemKey(nextKey)
    setResult(null)
  }

  const handleRoll = ({ category, unit, columnKey, columnLabel }) => {
    listScrollY.current = window.scrollY
    const roll = rollD20()
    const row = lookupAction(unit.table, roll)
    const action = row[columnKey]
    setResult({
      categoryLabel: category.label,
      unitLabel: unit.label,
      columnLabel,
      roll,
      action,
      definition: system.definitions[action],
    })
  }

  return (
    <div className="app">
      {!result && (
        <header className="app__header">
          <h1>Weirdos NPC Actions in solo/co-op play</h1>
          <p className="activation-instructions">{system.activationAdvice[0]}</p>
          <SystemToggle systems={SYSTEMS} activeKey={system.key} onChange={handleSystemChange} />
        </header>
      )}
      <main className="app__main">
        {result ? (
          <ActionResult
            result={result}
            advice={system.activationAdvice[1]}
            onNext={() => setResult(null)}
          />
        ) : (
          <UnitList system={system} onRoll={handleRoll} />
        )}
      </main>
      {!result && (
        <footer className="app__footer">
          <div className="game-credit">
            <p className="activation-advice">{system.activationAdvice[2]}</p>
            <a
              className="support-link"
              href="https://www.wargamevault.com/en/publisher/7692/garske-games"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support Garske Games – buy the game!
            </a>
          </div>
        </footer>
      )}
    </div>
  )
}

export default App
