import { useState } from 'react'
import './LeftSidebar.css'

const MENU_ITEMS = [
  { icon: null, label: 'Raiba Ayub', isProfile: true },
  { 
    icon: 'meta-ai', 
    label: 'Meta AI',
    iconStyle: {
      backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/y3/r/y4ebe2JPqZY.webp?_nc_eui2=AeEVFmO4qDrvLsnVfJ2ndk-2YG1o82lT1CpgbWjzaVPUKlWjBQP2QUyCBVWirCH8E9fpV1Nn7ulji8YwqZFsdGey')",
      backgroundPosition: '0px 0px',
      backgroundSize: 'auto',
      width: 36, height: 36,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      borderRadius: '50%',
    }
  },
  { 
    icon: 'events', 
    label: 'Events',
    iconStyle: {
      backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/yq/r/6aum_pQMnLN.webp?_nc_eui2=AeER5bIr5iK26a_LjLFBAY--8ctQYTbLk1Pxy1BhNsuTU77FIXZ3YxJhLNHQ7a93G2uGU8YFTXfboMhkqKZh29XO')",
      backgroundPosition: '0px -666px',
      backgroundSize: 'auto',
      width: 36, height: 36,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
    }
  },
  { 
    icon: 'friends', 
    label: 'Friends',
    iconStyle: {
      backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/yq/r/6aum_pQMnLN.webp?_nc_eui2=AeER5bIr5iK26a_LjLFBAY--8ctQYTbLk1Pxy1BhNsuTU77FIXZ3YxJhLNHQ7a93G2uGU8YFTXfboMhkqKZh29XO')",
      backgroundPosition: '0px -814px',
      backgroundSize: 'auto',
      width: 36, height: 36,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
    }
  },
  { 
    icon: 'memories', 
    label: 'Memories',
    iconStyle: {
      backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/yq/r/6aum_pQMnLN.webp?_nc_eui2=AeER5bIr5iK26a_LjLFBAY--8ctQYTbLk1Pxy1BhNsuTU77FIXZ3YxJhLNHQ7a93G2uGU8YFTXfboMhkqKZh29XO')",
      backgroundPosition: '0px -1221px',
      backgroundSize: 'auto',
      width: 36, height: 36,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
    }
  },
]

const SHORTCUTS = [
  { icon: '🍽️', label: 'Undiscovered Eats', color: '#e17055' },
  { icon: '✈️', label: 'Weekend Trips', color: '#74b9ff' },
  { icon: '🌿', label: "Jasper's Market", color: '#55efc4' },
  { icon: '📋', label: 'Red Table Talk Group', color: '#fd79a8' },
  { icon: '🥾', label: 'Best Hidden Hiking Trails', color: '#a29bfe' },
]

export default function LeftSidebar() {
  const [showMoreMenu, setShowMoreMenu] = useState(false)
const [showMoreShortcuts, setShowMoreShortcuts] = useState(false)

  return (
    <aside className="left-sidebar">
      <div className="sidebar-inner">

        {/* Main nav */}
        <ul className="sidebar-menu">
          {MENU_ITEMS.map((item, i) => (
            <li key={i}>
              <a href="#" className={`sidebar-item ${item.isProfile ? 'profile-item' : ''}`} onClick={e => e.preventDefault()}>
                {item.isProfile ? (
                  <div className="avatar" style={{
                    width: 36, height: 36, borderRadius: '50%',
                    overflow: 'hidden', flexShrink: 0,
                    background: '#e4e6eb', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: 15, fontWeight: 700, color: '#65676b'
                  }}>
                    <img
                      src="https://i.pinimg.com/736x/6c/a5/a7/6ca5a7363746519492b3c19fe5f91e04.jpg"
                      alt="Raiba Ayub"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => {
                        e.target.style.display = 'none'
                        e.target.parentNode.innerText = 'R'
                      }}
                    />
                  </div>
                ) : item.iconStyle ? (
                  <i style={item.iconStyle}></i>
                ) : (
                  <span className="sidebar-icon">{item.icon}</span>
                )}
                <span className="sidebar-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

       <button
  className="see-more-btn"
  onClick={() => setShowMoreMenu(!showMoreMenu)}
>
  <span
    className="see-more-icon"
    style={{
      transform: showMoreMenu ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: '0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <svg
      viewBox="0 0 20 20"
      width={20}
      height={20}
      fill="currentColor"
      aria-hidden="true"
      style={{ color: '#050505' }}
    >
      <path d="M8.586 12.5a2 2 0 0 0 2.828 0l2.543-2.543a1 1 0 0 0-1.414-1.414L10 11.086 7.457 8.543a1 1 0 0 0-1.414 1.414L8.586 12.5z" />
    </svg>
  </span>

  <span>{showMoreMenu ? 'See Less' : 'See More'}</span>
</button>
        <div className="sidebar-divider" />

        {/* Shortcuts */}
        <div className="shortcuts-section">
          <div className="shortcuts-header">
            <span className="section-title">Your Shortcuts</span>
            <button className="edit-btn">✏️</button>
          </div>
          <ul className="sidebar-menu">
            {SHORTCUTS.map((item, i) => (
              <li key={i}>
                <a href="#" className="sidebar-item" onClick={e => e.preventDefault()}>
                  <div className="shortcut-icon" style={{ background: item.color }}>
                    <span>{item.icon}</span>
                  </div>
                  <span className="sidebar-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <button
  className="see-more-btn"
  onClick={() => setShowMoreShortcuts(!showMoreShortcuts)}
>
  <span
    className="see-more-icon"
    style={{
      transform: showMoreShortcuts ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: '0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <svg
      viewBox="0 0 20 20"
      width={20}
      height={20}
      fill="currentColor"
      aria-hidden="true"
      style={{ color: '#050505' }}
    >
      <path d="M8.586 12.5a2 2 0 0 0 2.828 0l2.543-2.543a1 1 0 0 0-1.414-1.414L10 11.086 7.457 8.543a1 1 0 0 0-1.414 1.414L8.586 12.5z" />
    </svg>
  </span>

  <span>{showMoreShortcuts ? 'See Less' : 'See More'}</span>
</button>
        </div>

        <div className="sidebar-divider" />

        <div className="sidebar-footer">
          <p>Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2026</p>
        </div>

      </div>
    </aside>
  )
}