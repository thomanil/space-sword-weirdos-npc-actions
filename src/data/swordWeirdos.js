import {
  buildTable,
  ATTACK_ACTIONS,
  MOVEMENT_ACTIONS,
  RANGED_ACTIONS,
  MELEE_ACTIONS,
} from '../lib/actionTables'

const rows = (a, b, c, d, e, f, g) => [
  { range: '1-3', noLos: a[0], hasLos: a[1], touching: a[2] },
  { range: '4-6', noLos: b[0], hasLos: b[1], touching: b[2] },
  { range: '7-9', noLos: c[0], hasLos: c[1], touching: c[2] },
  { range: '10-12', noLos: d[0], hasLos: d[1], touching: d[2] },
  { range: '13-15', noLos: e[0], hasLos: e[1], touching: e[2] },
  { range: '16-18', noLos: f[0], hasLos: f[1], touching: f[2] },
  { range: '19-20', noLos: g[0], hasLos: g[1], touching: g[2] },
]

export default {
  key: 'sword',
  name: 'Sword Weirdos',
  columns: { noLos: 'No LoS', hasLos: 'Has LoS', touching: 'BtB' },
  activationAdvice: [
    'Choose a Bad Guy models current state to see how you should activate it, based on the lookup tables in the solo/co-op ruleset.',
    "Note: No table can cover all circumstances, so there will be times that results will need to be liberally interpreted, especially with warlocks. This is fine. Just do whatever is most fun and don't worry about it.",
    'Space / Sword Weirdos is a game system created and owned by Garske Games.',
  ],
  guidelines: [
    {
      id: 'ready',
      text: 'A Bad Guy must be ready before it can perform the action above. If it is staggered or down it must take appropriate Recover or Stand actions before taking the action above.',
      universal: true,
    },
    {
      id: 'reload',
      text: 'Bad Guys must use Reload actions before using other actions.',
      actions: RANGED_ACTIONS,
    },
    {
      id: 'no-attack-fallback',
      text: 'If a model rolls an action that allows attacks, but it cannot attack, it may take Move actions instead.',
      actions: RANGED_ACTIONS,
    },
    {
      id: 'target-priority',
      text: 'Bad Guys generally engage the closest Good Guy, but will attack Good Guys without cover instead of a closer model in cover.',
      actions: RANGED_ACTIONS,
    },
    {
      id: 'cover',
      text: 'Bad Guys will move into cover if available.',
      actions: MOVEMENT_ACTIONS,
    },
    {
      id: 'weapon-properties',
      text: 'Bad Guys will use weapon properties like powerful and crushing.',
      actions: ATTACK_ACTIONS,
    },
    {
      id: 'objectives',
      text: 'In scenarios with objectives, Bad Guys may move towards those instead of Good Guys.',
      actions: MOVEMENT_ACTIONS,
    },
  ],
  reinforcements: {
    helperText: 'If the scenario calls for it, roll for reinforcements',
    table: buildTable([
      { range: '1-3', outcome: 'None' },
      { range: '4-6', outcome: '1 Minion or Skirmisher' },
      { range: '7-9', outcome: '1d3 Minions/Skirmishers' },
      { range: '10-12', outcome: '1 Thug or Veteran' },
      { range: '13-15', outcome: '1d3 Thugs/Veterans' },
      { range: '16-18', outcome: '1 Lancer, Arbalist, or Warlock' },
      { range: '19-20', outcome: '2 Lancers/Arbalists/Warlocks' },
    ]),
  },
  categories: [
    {
      key: 'melee',
      label: 'Melee',
      units: [
        {
          key: 'minion',
          label: 'Minion',
          blurb: 'Up to 12 points, no ranged weapon',
          table: buildTable(
            rows(
              ['Cower', 'Hide', 'Retreat'],
              ['Cower', 'Move', 'Attack'],
              ['Move', 'Engage', 'Attack'],
              ['Engage', 'Engage', 'Attack'],
              ['Engage', 'Engage', 'Attack'],
              ['Engage', 'Rush', 'Attack'],
              ['Rush', 'Blitz', 'Assault'],
            ),
          ),
        },
        {
          key: 'thug',
          label: 'Thug',
          blurb: '13-19 points, no ranged weapon',
          table: buildTable(
            rows(
              ['Cower', 'Hide', 'Attack'],
              ['Move', 'Engage', 'Attack'],
              ['Engage', 'Engage', 'Attack'],
              ['Engage', 'Engage', 'Attack'],
              ['Engage', 'Rush', 'Attack'],
              ['Rush', 'Rush', 'Assault'],
              ['Blitz', 'Blitz', 'Assault'],
            ),
          ),
        },
        {
          key: 'lancer',
          label: 'Lancer',
          blurb: '20+ points, no ranged weapon',
          table: buildTable(
            rows(
              ['Move', 'Engage', 'Attack'],
              ['Engage', 'Engage', 'Attack'],
              ['Engage', 'Engage', 'Attack'],
              ['Engage', 'Rush', 'Attack'],
              ['Rush', 'Rush', 'Assault'],
              ['Rush', 'Blitz', 'Assault'],
              ['Blitz', 'Blitz', 'Crush'],
            ),
          ),
        },
      ],
    },
    {
      key: 'ranged',
      label: 'Ranged',
      units: [
        {
          key: 'skirmisher',
          label: 'Skirmisher',
          blurb: 'Up to 12 points, has ranged weapon',
          table: buildTable(
            rows(
              ['Cower', 'Hide', 'Retreat'],
              ['Cower', 'Move', 'Disengage'],
              ['Move', 'Engage', 'Disengage'],
              ['Engage', 'Advance', 'Attack'],
              ['Advance', 'Fire', 'Attack'],
              ['Advance', 'Fire', 'Attack'],
              ['Advance', 'Focus', 'Assault'],
            ),
          ),
        },
        {
          key: 'veteran',
          label: 'Veteran',
          blurb: '13-19 points, has ranged weapon',
          table: buildTable(
            rows(
              ['Cower', 'Hide', 'Disengage'],
              ['Move', 'Engage', 'Disengage'],
              ['Engage', 'Advance', 'Extricate'],
              ['Advance', 'Fire', 'Attack'],
              ['Advance', 'Fire', 'Attack'],
              ['Advance', 'Fire', 'Assault'],
              ['Focus', 'Focus', 'Assault'],
            ),
          ),
        },
        {
          key: 'arbalist',
          label: 'Arbalist',
          blurb: '20+ points, has ranged weapon',
          table: buildTable(
            rows(
              ['Engage', 'Engage', 'Disengage'],
              ['Rush', 'Blitz', 'Disengage'],
              ['Blitz', 'Fire', 'Extricate'],
              ['Advance', 'Fire', 'Extricate'],
              ['Advance', 'Focus', 'Attack'],
              ['Focus', 'Focus', 'Assault'],
              ['Focus', 'Assassinate', 'Crush'],
            ),
          ),
        },
      ],
    },
    {
      key: 'casters',
      label: 'Casters',
      units: [
        {
          key: 'warlock',
          label: 'Warlock',
          blurb: 'Any points, can cast spells',
          table: buildTable(
            rows(
              ['Move', 'Cloud', 'Disengage'],
              ['Cloud', 'Spell', 'Force'],
              ['Cloud', 'Spell', 'Force'],
              ['Spell', 'Spell', 'Spell'],
              ['Spell', 'Spell', 'Spell'],
              ['Spell', 'Torrent', 'Torrent'],
              ['Spell', 'Torrent', 'Torrent'],
            ),
          ),
        },
      ],
    },
  ],
  definitions: {
    Advance:
      'The model takes Move actions until it has LoS to a Good Guy, then takes Ranged Attack actions with its remaining actions.',
    Assassinate:
      'The model takes Ranged Attack actions up to the max for its weapons, but all of them have +1DT.',
    Assault:
      'The model takes Melee Attack actions up to the maximum for its weapons, but the first one has +1DT.',
    Attack: 'The model takes Melee Attack actions up to the maximum for its weapons.',
    Blitz:
      "The model's Move score is increased by 1, up to 3 max. The model then takes Move actions until it is touching the closest Good Guy model. If it has actions remaining, it takes Melee Attack actions, all of which have +1DT.",
    Cloud:
      'As a Cast Spell action, the model floods the board with magical power. The warlock and the Good Guy leader make opposed Willpower rolls. If the warlock wins, the Good Guys lose 1d3 Maneuver Points.',
    Cower: 'The model does nothing this round.',
    Crush:
      'The model takes Melee Attack actions up to the maximum for its weapons, and all of them have +1DT.',
    Disengage: 'The model takes a Disengage action and then a single Ranged Attack action.',
    Engage:
      'The model takes Move actions up to its maximum towards the closest Good Guy. If it has actions remaining when they touch bases, it takes a Melee Attack action.',
    Extricate: 'The model takes a Disengage action and then a Ranged Attack action with +1DT.',
    Fire: 'The model takes Ranged Attack actions up to the max for its weapons.',
    Focus:
      'The model takes Ranged Attack actions up to the max for its weapons, but the first one has +1DT.',
    Force:
      'As an action, the warlock moves each Good Guy touching it a ½ stick directly away. The warlock then uses a Cast Spell action.',
    Hide: 'The model uses Move actions up to its max until it is out of LoS of any Good Guys.',
    Move: 'The model takes Move actions up to its maximum, not moving into LoS of a Good Guy.',
    Retreat:
      'The model takes a Disengage action, then a Move action that cannot bring it into contact with a Good Guy.',
    Rush: "The model's Move score is increased by 1, up to 3 max. The model then takes Move actions until it is touching the closest Good Guy model. If it has actions remaining, it takes Melee Attack actions.",
    Spell: 'The model takes a Cast Spell action and another action in any order.',
    Torrent:
      "The model takes a Cast Spell action and another action in any order, but the warlock's Willpower roll is +1DT.",
  },
}
