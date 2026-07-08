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
