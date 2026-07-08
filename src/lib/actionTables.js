function parseRange(range) {
  const [lo, hi] = range.split('-').map(Number)
  return { lo, hi: hi ?? lo }
}

export function buildTable(rows) {
  return rows.map((row) => ({ ...row, ...parseRange(row.range) }))
}

export function rollD20() {
  return Math.floor(Math.random() * 20) + 1
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

export const MELEE_ACTIONS = ['Attack', 'Assault', 'Crush', 'Blitz', 'Rush', 'Engage']
