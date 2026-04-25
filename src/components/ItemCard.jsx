import { formatRanges, getQuickBattleRoutes } from '../data/quickBattle.js'

function ItemCard({ item }) {
  const quickBattleRoutes = getQuickBattleRoutes(item)

  const getIcon = (category) => {
    const icons = {
      Weapon: '⚔️',
      Exclusive: '✦',
      'Hand Equipment': '🛡️',
      'Head Equipment': '⛑️',
      'Body Equipment': '👕',
      Accessory: '💍',
      Summon: '✨'
    }
    return icons[category] || '📦'
  }

  const getMethodClass = (method) => {
    const methodLower = method.toLowerCase()
    if (methodLower.includes('shop')) return 'shop'
    if (methodLower.includes('trade')) return 'trade'
    if (methodLower.includes('story') || methodLower.includes('chest') || methodLower.includes('dp')) return 'story'
    if (methodLower.includes('colosseum') || methodLower.includes('prize')) return 'colosseum'
    if (methodLower.includes('friend') || methodLower.includes('card')) return 'friend-card'
    if (methodLower.includes('password')) return 'password'
    if (methodLower.includes('quick battle') || methodLower.includes('quick')) return 'quick-battle'
    if (methodLower.includes('battle') || methodLower.includes('rise')) return 'battle-rise'
    if (methodLower.includes('mission')) return 'mission'
    if (methodLower.includes('level') || methodLower.includes('learn')) return 'level'
    return ''
  }

  const formatStatValue = (val) => {
    if (typeof val === 'number') {
      return val > 0 ? `+${val}` : String(val)
    }
    return String(val)
  }

  return (
    <div className="item-card">
      <div className="item-header">
        <div className="item-icon">
          {getIcon(item.category)}
        </div>
        <div className="item-title">
          <div className="item-name">{item.name}</div>
          {item.japaneseName && (
            <div className="item-jp-name">{item.japaneseName}</div>
          )}
        </div>
      </div>

      <div className="item-stats">
        {item.stats && Object.entries(item.stats).map(([stat, val]) => (
          <span key={stat} className="stat-badge">
            {stat}: <span className="value">{formatStatValue(val)}</span>
          </span>
        ))}
        {item.level !== undefined && (
          <span className="stat-badge level">
            Lv: <span className="value">{item.level}</span>
          </span>
        )}
        {item.rank && (
          <span className="stat-badge">
            Rank: <span className="value">{item.rank}</span>
          </span>
        )}
      </div>

      {item.effects && item.effects.length > 0 && (
        <div className="item-effects">
          {item.effects.map((effect, idx) => (
            <span key={idx} className="effect-tag">{effect}</span>
          ))}
        </div>
      )}

      {item.characters && item.characters.length > 0 && (
        <div className="item-characters">
          <div className="char-label">Characters</div>
          <div className="character-tags">
            {item.characters.map((char, idx) => (
              <span key={idx} className="character-tag">{char}</span>
            ))}
          </div>
        </div>
      )}

      {(quickBattleRoutes.length > 0 || item.battleRise) && (
        <div className="item-guide">
          <details className="guide-details">
            <summary className="guide-summary">
              {quickBattleRoutes.length > 0 ? 'Quick Battle Finder' : 'Battle Rise Finder'}
            </summary>

            {quickBattleRoutes.length > 0 && (
              <div className="guide-content">
                {quickBattleRoutes.map(route => (
                  <div key={route.id} className="guide-route">
                    <div className="guide-route-title">
                      {route.strength} / {route.type}
                    </div>
                    <div className="guide-route-levels">
                      Levels {formatRanges(route.ranges)}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {item.battleRise && (
              <div className="guide-content">
                <div className="guide-route">
                  <div className="guide-route-title">Trigger</div>
                  <div className="guide-route-levels">{item.battleRise.trigger}</div>
                </div>
                <div className="guide-route">
                  <div className="guide-route-title">Guide Values</div>
                  <div className="guide-route-levels">
                    LV {item.battleRise.level} / RIS {item.battleRise.ris} / RRL {item.battleRise.rrl}
                  </div>
                </div>
              </div>
            )}
          </details>
        </div>
      )}

      {item.acquisition && item.acquisition.length > 0 && (
        <div className="item-acquisition">
          <div className="acq-label">📍 Acquisition</div>
          <div className="acquisition-methods">
            {item.acquisition.map((acq, idx) => (
              <div key={idx} className="acq-method">
                <span className={`method-type ${getMethodClass(acq.method)}`}>
                  {acq.method}
                </span>
                <span className="method-detail">{acq.detail}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {item.notes && (
        <div
          className="item-notes"
          style={{
            padding: '0.75rem 1.25rem',
            borderTop: '1px solid var(--border)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)'
          }}
        >
          📝 {item.notes}
        </div>
      )}
    </div>
  )
}

export default ItemCard
