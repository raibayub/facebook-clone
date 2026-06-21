import './RightSidebar.css'
import { USERS } from '../data/users'

const CONTACTS = [
  { user: USERS.kashaf, online: true },
  { user: USERS.zainab, online: true },
  { user: USERS.noor, online: false },
  { user: USERS.salman, online: true },
  { user: USERS.Shariq, online: false },
  { user: USERS.Tayyaba, online: true },
]

export default function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <div className="sidebar-inner">

        {/* Sponsored */}
        <section className="sidebar-section">
          <h3 className="section-heading">Sponsored</h3>

          <div className="ad-card">
            <div className="ad-content">
              <div className="ad-icon">🍕</div>

              <div className="ad-info">
                <div className="ad-title">Lebo's Pizza</div>
                <div className="ad-subtitle">lebospizza.com</div>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
              alt="Lebo's Pizza"
              className="ad-image"
            />

            <p className="ad-desc">
              Experience the trending pizza spot in Palo Alto being called the next big thing.
            </p>
          </div>
        </section>

        {/* Birthdays */}
        <section className="sidebar-section">
          <h3 className="section-heading">Birthdays</h3>

          <div className="birthday-card">
            <i
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/yL/r/_1B5IH4MpiR.webp?_nc_eui2=AeGbe2lMlGYvD3ub3RBauEKYH3PeBfNHHVMfc94F80cdUwiFJkX8owQE28GFf9lULwWoxv_RswngZ1SPjfHLyPhi')",
                backgroundPosition: '0px 0px',
                backgroundSize: 'auto',
                width: 36,
                height: 36,
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',
                flexShrink: 0,
              }}
            ></i>

            <p className="birthday-text">
              <strong>Raiba, Mujtaba</strong> and <strong>2 others</strong> have birthdays today.
            </p>
          </div>
        </section>

        {/* Contacts */}
        <section className="sidebar-section">
          <div className="contacts-header">
            <h3 className="section-heading">Contacts</h3>

            <div className="contacts-actions">
              <button className="icon-btn" title="Search contacts">
                🔍
              </button>

              <button className="icon-btn" title="More options">
                •••
              </button>
            </div>
          </div>

          <ul className="contacts-list">
            {CONTACTS.map((c, i) => (
              <li key={i}>
                <button className="contact-item">

                  <div className="contact-avatar-wrap">

                    <div
                      className="avatar"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={c.user.img}
                        alt={c.user.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>

                    {c.online && <span className="online-dot" />}
                  </div>

                  <span className="contact-name">
                    {c.user.name}
                  </span>

                </button>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* Floating new message btn */}
      <button className="new-chat-btn" title="New message">
        <span style={{ fontSize: 22 }}>➕</span>
      </button>
    </aside>
  )
}