function parseRange(range) {
  if (range.endsWith('+')) {
    return { lo: Number(range.slice(0, -1)), hi: Infinity }
  }
  const [lo, hi] = range.split('-').map(Number)
  return { lo, hi: hi ?? lo }
}

export function buildTable(rows) {
  return rows.map((row) => ({ ...row, ...parseRange(row.range) }))
}

export function rollD20() {
  return Math.floor(Math.random() * 20) + 1
}

// Replaces dice notation (e.g. "1d3") inside a string with an actual rolled
// total, so outcomes read "2 Mooks/Goons" rather than "1d3 Mooks/Goons".
export function resolveDiceNotation(text) {
  return text.replace(/(\d*)d(\d+)/g, (_, count, sides) => {
    const n = count ? Number(count) : 1
    const size = Number(sides)
    let total = 0
    for (let i = 0; i < n; i += 1) total += Math.floor(Math.random() * size) + 1
    return String(total)
  })
}

export function lookupAction(table, roll) {
  return table.find((row) => roll >= row.lo && roll <= row.hi)
}

// Shared action groupings used to scope activation guidelines to the
// actions they're actually relevant for.
export const ATTACK_ACTIONS = [
  'Attack',
  'Assault',
  'Crush',
  'Assassinate',
  'Fire',
  'Focus',
  'Disengage',
  'Extricate',
  'Engage',
  'Rush',
  'Blitz',
  'Advance',
]

export const MOVEMENT_ACTIONS = [
  'Move',
  'Hide',
  'Engage',
  'Advance',
  'Rush',
  'Blitz',
  'Retreat',
  'Disengage',
  'Extricate',
]

export const RANGED_ACTIONS = ['Fire', 'Focus', 'Assassinate', 'Advance', 'Disengage', 'Extricate']
