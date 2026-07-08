import { buildTable, ATTACK_ACTIONS, MOVEMENT_ACTIONS, RANGED_ACTIONS } from '../lib/actionTables'

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
  key: 'space',
  name: 'Space Weirdos',
  columns: { noLos: 'No LoS', hasLos: 'Has LoS', touching: 'Touching' },
  activationAdvice: [
    'Choose a Bad Guy models current state to see how you should activate it, based on the lookup tables in the solo/co-op ruleset.',
    "Note: No table can cover all circumstances, so there will be times that results will need to be liberally interpreted, especially with psychics. This is fine. Just do whatever is most fun and don't worry about it.",
    'Space / Sword Weirdos is a game system created and owned by Garske Games.',
  ],
  guidelines: [
    {
      id: 'ready',
      text: 'A Bad Guy must be ready before it can perform the action above. If it is staggered or down it must take appropriate Recover or Stand actions before taking the action above.',
      universal: true,
    },
    {
      id: 'no-attack-fallback',
      text: 'If a model rolls an action that allows attacks, but it cannot attack, it may take Move actions instead.',
      actions: RANGED_ACTIONS,
    },
    {
      id: 'target-priority',
      text: 'Bad Guys generally attack the closest Good Guy, but will attack Good Guys without cover in preference to a closer model in cover.',
      actions: RANGED_ACTIONS,
    },
    {
      id: 'cover',
      text: 'Bad Guys will move into cover if available.',
      actions: MOVEMENT_ACTIONS,
    },
    {
      id: 'aim',
      text: 'Bad Guys will use the Aim action against Good Guys with Defense scores of 2d10.',
      actions: RANGED_ACTIONS,
    },
    {
      id: 'objectives',
      text: 'In scenarios with objectives, Bad Guys may move towards those instead of Good Guys.',
      actions: MOVEMENT_ACTIONS,
    },
  ],
  categories: [
    {
      key: 'melee',
      label: 'Melee',
      units: [
        {
          key: 'mooks',
          label: 'Mook',
          blurb: 'Up to 12 points, no FP score',
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
          key: 'thugs',
          label: 'Thug',
          blurb: '13-19 points, no FP score',
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
          key: 'bigguns',
          label: 'Biggun',
          blurb: '20+ points, no FP score',
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
          key: 'goons',
          label: 'Goon',
          blurb: 'Up to 12 points, has FP score',
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
          key: 'henchers',
          label: 'Hencher',
          blurb: '13-19 points, has FP score',
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
          key: 'bigShooters',
          label: 'Big Shooter',
          blurb: '20+ points, has FP score',
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
          key: 'psychics',
          label: 'Psychic',
          blurb: 'Any points, has psychic powers',
          table: buildTable(
            rows(
              ['Move', 'Cloud', 'Disengage'],
              ['Cloud', 'Power', 'Force'],
              ['Cloud', 'Power', 'Force'],
              ['Power', 'Power', 'Power'],
              ['Power', 'Power', 'Power'],
              ['Power', 'Torrent', 'Torrent'],
              ['Power', 'Torrent', 'Torrent'],
            ),
          ),
        },
      ],
    },
  ],
  definitions: {
    Advance:
      'The model takes Move actions until it has LoS to a Good Guy, then takes Shoot actions with its remaining actions.',
    Assassinate:
      'The model takes Shoot actions up to the maximum for its weapon, but all of them have +1DT.',
    Assault:
      'The model takes Fight actions up to the maximum for its weapon, but the first one has +1DT.',
    Attack: 'The model takes Fight actions up to the maximum for its weapon.',
    Blitz:
      'The models Move score is increased by 1, up to 3 max. The model then takes Move actions until it is touching the closest Good Guy model. If it has actions remaining, it takes Fight actions, all of which have +1DT.',
    Cloud:
      'As a Psychic Power action, the model floods the battlefield with psychic noise. The psychic and the Good Guy leader make opposed Willpower rolls. If the psychic wins, the Good Guys lose a Command Point.',
    Cower: 'The model does nothing this round.',
    Crush: 'The model takes Fight actions up to the maximum for its weapon, and all of them have +1DT.',
    Disengage: 'The model takes a Disengage action and then a single Shoot action.',
    Engage:
      'The model takes move actions up to its maximum towards the closest Good Guy. If it has actions remaining when they touch bases, it takes a Fight action.',
    Extricate: 'The model takes a Disengage action and then a Shoot action with +1DT.',
    Fire: 'The model takes Shoot actions up to the maximum for its weapon.',
    Focus:
      'The model takes Shoot actions up to the maximum for its weapon, but the first one has +1DT.',
    Force:
      'As an action, the psychic moves each Good Guy touching it a ½ stick directly away. The psychic then uses a Psychic Power action.',
    Hide: 'The model uses Move actions up to its max until it is out of LoS of any Good Guys.',
    Move: 'The model takes Move actions up to its maximum, not moving into LoS of a Good Guy.',
    Power: 'The model takes a Psychic Power action and another action in any order.',
    Retreat:
      'The model takes a Disengage action, then a Move action that cannot bring it into contact with a Good Guy.',
    Rush: 'The models Move score is increased by 1, up to 3 max. The model then takes Move actions until it is touching the closest Good Guy model. If it has actions remaining, it takes Fight actions.',
    Torrent:
      "The model takes a Psychic Power action and another action in any order, but the psychic's Willpower roll is +1DT.",
  },
}
