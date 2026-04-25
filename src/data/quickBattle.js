const LEVEL_RANKS = [
  { min: 1, max: 7, rank: 1 },
  { min: 8, max: 14, rank: 2 },
  { min: 15, max: 21, rank: 3 },
  { min: 22, max: 28, rank: 4 },
  { min: 29, max: 35, rank: 5 },
  { min: 36, max: 42, rank: 6 },
  { min: 43, max: 49, rank: 7 },
  { min: 50, max: 56, rank: 8 },
  { min: 57, max: 63, rank: 9 },
  { min: 64, max: 70, rank: 10 },
  { min: 71, max: 77, rank: 11 },
  { min: 78, max: 84, rank: 12 },
  { min: 85, max: 91, rank: 13 },
  { min: 92, max: 98, rank: 14 },
  { min: 99, max: 100, rank: 15 }
]

const AI_PRESETS = [
  {
    id: 'weakest',
    strength: 'Weakest',
    type: 'All types',
    modifiers: { weapon: -2, hand: -2, head: -2, body: -2 }
  },
  {
    id: 'extremely-weak',
    strength: 'Extremely Weak / Weak: Customize',
    type: 'All types',
    modifiers: { weapon: -1, hand: -1, head: -1, body: -1 }
  },
  {
    id: 'weak-action-extreme',
    strength: 'Weak: Action',
    type: 'Extreme / Aggressive',
    modifiers: { weapon: 0, hand: -1, head: 0, body: -1 }
  },
  {
    id: 'weak-action-strategic',
    strength: 'Weak: Action',
    type: 'Strategic / Brave',
    modifiers: { weapon: 0, hand: -1, head: -1, body: 0 }
  },
  {
    id: 'normal-typical',
    strength: 'Normal',
    type: 'Typical',
    modifiers: { weapon: -1, hand: -1, head: 0, body: 0 }
  },
  {
    id: 'strong-action-patient',
    strength: 'Strong: Action',
    type: 'Patient / Calm',
    modifiers: { weapon: -1, hand: 0, head: 0, body: -1 }
  },
  {
    id: 'strong-action-careful',
    strength: 'Strong: Action',
    type: 'Careful',
    modifiers: { weapon: -1, hand: 0, head: -1, body: 0 }
  },
  {
    id: 'strong-customize',
    strength: 'Strong: Customize / Extremely Strong',
    type: 'All types',
    modifiers: { weapon: 0, hand: 0, head: 0, body: 0 }
  },
  {
    id: 'strongest',
    strength: 'Strongest',
    type: 'All types',
    modifiers: { weapon: 1, hand: 1, head: 1, body: 1 }
  }
]

function clampRank(rank) {
  if (rank < 0) return 0
  if (rank > 15) return 15
  return rank
}

function getBaseRankForLevel(level) {
  const match = LEVEL_RANKS.find(entry => level >= entry.min && level <= entry.max)
  return match?.rank ?? 0
}

function getSlotForItem(item) {
  if (item.slot) return item.slot
  if (item.category === 'Weapon' || item.category === 'Exclusive') return 'weapon'
  if (item.category === 'Hand Equipment') return 'hand'
  if (item.category === 'Head Equipment') return 'head'
  if (item.category === 'Body Equipment') return 'body'
  return null
}

function compressLevels(levels) {
  if (!levels.length) return []

  const ranges = []
  let start = levels[0]
  let end = levels[0]

  for (let index = 1; index < levels.length; index += 1) {
    const current = levels[index]
    if (current === end + 1) {
      end = current
      continue
    }
    ranges.push({ start, end })
    start = current
    end = current
  }

  ranges.push({ start, end })
  return ranges
}

export function getQuickBattleRoutes(item) {
  if (typeof item.rank !== 'number') {
    return []
  }

  const slot = getSlotForItem(item)
  if (!slot) {
    return []
  }

  return AI_PRESETS.map(preset => {
    const matchingLevels = []

    for (let level = 1; level <= 100; level += 1) {
      const baseRank = getBaseRankForLevel(level)
      const slotRank = clampRank(baseRank + preset.modifiers[slot])
      if (slotRank === item.rank) {
        matchingLevels.push(level)
      }
    }

    return {
      ...preset,
      ranges: compressLevels(matchingLevels)
    }
  }).filter(route => route.ranges.length > 0)
}

export function formatRanges(ranges) {
  return ranges
    .map(range => (range.start === range.end ? `${range.start}` : `${range.start}-${range.end}`))
    .join(', ')
}
