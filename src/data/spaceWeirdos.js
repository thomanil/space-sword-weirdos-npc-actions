import { buildTable } from '../lib/actionTables'

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
    'Choose a Bad Guy models current range to see how you should activate it, based on the Bad Guy Activation lookup tables in the ruleset.',
    "No table can cover all circumstances, so there will be times that results will need to be liberally interpreted, especially with psychics. This is fine. Just do whatever is most fun and don't worry about it.",
    'Space / Sword Weirdos is a game system created and owned by Garske Games.',
  ],
  categories: [
    {
      key: 'melee',
      label: 'Melee',
      units: [
        {
          key: 'mooks',
          label: 'Mook',
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
    Assassinate: 'As Attack, but all Shoot actions have +1DT.',
    Assault: 'As Attack, but the first Fight action is +1DT.',
    Attack: 'The model takes Fight actions up to the maximum for its weapon.',
    Blitz: 'As Rush, but any Fight actions have +1DT.',
    Cloud:
      'As a Psychic Power action, the model floods the battlefield with psychic noise. The psychic and the Good Guy leader make opposed Willpower rolls. If the psychic wins, the Good Guys lose a Command Point.',
    Cower: 'The model does nothing this round.',
    Crush: 'As Attack, but all Fight actions have +1DT.',
    Disengage: 'The model takes a Disengage action and then a single Shoot action.',
    Engage:
      'The model takes move actions up to its maximum towards the closest Good Guy. If it has actions remaining when they touch bases, it takes a Fight action.',
    Extricate: 'The model takes a Disengage action and then a Shoot action with +1DT.',
    Fire: 'The model takes Shoot actions up to the maximum for its weapon.',
    Focus: 'As Fire, but the first Shoot action is +1DT.',
    Force:
      'As an action, the psychic moves each Good Guy touching it a ½ stick directly away. The psychic then uses a Psychic Power action.',
    Hide: 'The model uses Move actions up to its max until it is out of LoS of any Good Guys.',
    Move: 'The model takes Move actions up to its maximum, not moving into LoS of a Good Guy.',
    Power: 'The model takes a Psychic Power action and another action in any order.',
    Retreat:
      'The model takes a Disengage action, then a Move action that cannot bring it into contact with a Good Guy.',
    Rush: 'The models Move score is increased by 1, up to 3 max. The model then takes Move actions until it is touching the closest Good Guy model. If it has actions remaining, it takes Fight actions.',
    Torrent: "As Power, but the psychic's Willpower roll is +1DT.",
  },
}
