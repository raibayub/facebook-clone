import { useState, useRef } from 'react'
import './Post.css'

const REACTIONS = ['👍', '❤️', '😂', '😮', '😢', '😡']
const REACTION_LABELS = { '👍': 'Like', '❤️': 'Love', '😂': 'Haha', '😮': 'Wow', '😢': 'Sad', '😡': 'Angry' }

const SPRITE_URL = `url("https://static.xx.fbcdn.net/rsrc.php/yd/r/Fv2SXGWpLpB.webp?_nc_eui2=AeGLdnjFf16928bSoXyMcJnOr_rM-2-GSAKv-sz7b4ZIAkDw8m20uLWCKcyN3TQP1jQx7rifRAez4SwgYgelfpHq")`

const spriteIcon = (yPos) => ({
  backgroundImage: SPRITE_URL,
  backgroundPosition: `0px ${yPos}px`,
  backgroundSize: 'auto',
  width: 20,
  height: 20,
  backgroundRepeat: 'no-repeat',
  display: 'inline-block',
  verticalAlign: 'middle',
  flexShrink: 0,
})

export default function Post({ post }) {
  const [myReaction, setMyReaction] = useState(null)
  const [showReactions, setShowReactions] = useState(false)
  const [likes, setLikes] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const reactionTimer = useRef(null)

  const handleLike = () => {
    if (myReaction) {
      setMyReaction(null)
      setLikes(l => l - 1)
    } else {
      setMyReaction('👍')
      setLikes(l => l + 1)
    }
  }

  const handleReaction = (emoji) => {
    if (myReaction === emoji) {
      setMyReaction(null)
      setLikes(l => l - 1)
    } else {
      if (!myReaction) setLikes(l => l + 1)
      setMyReaction(emoji)
    }
    setShowReactions(false)
  }

  const handleComment = (e) => {
    e.preventDefault()
    if (!comment.trim()) return
    setComments(prev => [...prev, {
      id: Date.now(),
      user: 'Raiba Ayub',
      text: comment.trim(),
      avatar: 'R',
      color: '#74b9ff',
      time: 'Just now',
    }])
    setComment('')
  }

  const formatCount = (n) => {
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
    return n
  }

  const handleMouseEnter = () => {
    reactionTimer.current = setTimeout(() => setShowReactions(true), 600)
  }

  const handleMouseLeave = () => {
    clearTimeout(reactionTimer.current)
    setTimeout(() => setShowReactions(false), 300)
  }

  // Determine displayed reactions (merge myReaction if not already shown)
  const displayReactions = myReaction && !post.reactions.includes(myReaction)
    ? [myReaction, ...post.reactions.slice(0, 2)]
    : post.reactions.slice(0, 3)

  return (
    <article className="post card">
      {/* Header */}
      <div className="post-header">
        <img src={post.profilePic} alt={post.user} className="post-avatar" />
        <div className="post-meta">
          <span className="post-user">{post.user}</span>
          <div className="post-time">
            <span>{post.time}</span>
            <span className="privacy-icon">{post.privacy}</span>
          </div>
        </div>
        <button className="icon-btn more-btn" title="More options">
          <span style={{ fontSize: 18 }}>•••</span>
        </button>
      </div>

      {/* Content */}
      <div className="post-content">
        {post.text && (
          <p className={`post-text ${!post.image && post.text.length < 80 ? 'post-text-large' : ''}`}>
            {post.text}
          </p>
        )}
      </div>

      {/* Image */}
      {post.image && (
        <div className="post-image-container">
          <img src={post.image} alt="Post" className="post-image" loading="lazy" />
        </div>
      )}

      {/* Stats + Actions row (combined) */}
      {(likes > 0 || post.comments > 0 || post.shares > 0) && (
        <div className="post-stats">

          {/* Left: like icon (with reaction picker on hover) */}
          <div className="post-stats-left">
            <div
              className="post-action-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className={`stat-item ${myReaction ? 'reacted' : ''}`}
                onClick={handleLike}
                title={myReaction ? REACTION_LABELS[myReaction] : 'Like'}
              >
                {myReaction
                  ? <span style={{ fontSize: 18, lineHeight: 1 }}>{myReaction}</span>
                  : <i style={spriteIcon(-697)} />
                }
                <span>{formatCount(likes)}</span>
              </span>

              {showReactions && (
                <div className="reactions-picker">
                  {REACTIONS.map(emoji => (
                    <button
                      key={emoji}
                      className={`reaction-btn ${myReaction === emoji ? 'active' : ''}`}
                      onClick={() => handleReaction(emoji)}
                      title={REACTION_LABELS[emoji]}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Comment icon */}
            <span
              className="stat-item"
              onClick={() => setShowComments(!showComments)}
              title="Comments"
            >
              <i style={spriteIcon(-487)} />
              <span>{post.comments + comments.length}</span>
            </span>

            {/* Share icon */}
            <span className="stat-item" title="Shares">
              <i style={spriteIcon(-844)} />
              <span>{post.shares}</span>
            </span>
          </div>

          {/* Right: reaction emojis */}
          <div className="post-stats-right">
            {displayReactions.map((r, i) => (
              <span key={i} className="reaction-emoji-small">{r}</span>
            ))}
          </div>
        </div>
      )}

      {/* Comments section */}
      {showComments && (
        <div className="comments-section">
          <div className="post-divider" />

          {comments.map(c => (
            <div key={c.id} className="comment">
              <div
                className="avatar"
                style={{ width: 32, height: 32, background: c.color, fontSize: 12, fontWeight: 700, color: 'white', flexShrink: 0 }}
              >
                {c.avatar}
              </div>
              <div className="comment-bubble">
                <span className="comment-user">{c.user}</span>
                <p className="comment-text">{c.text}</p>
              </div>
            </div>
          ))}

          <form className="comment-input-row" onSubmit={handleComment}>
            <div
              className="avatar"
              style={{ width: 32, height: 32, background: '#e4e6eb', fontSize: 12, fontWeight: 700, color: '#65676b', flexShrink: 0 }}
            >
              R
            </div>
            <div className="comment-input-wrap">
              <input
                type="text"
                className="comment-input"
                placeholder="Write a comment..."
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
              <button type="submit" className="comment-submit" disabled={!comment.trim()}>
                ➤
              </button>
            </div>
          </form>
        </div>
      )}
    </article>
  )
}