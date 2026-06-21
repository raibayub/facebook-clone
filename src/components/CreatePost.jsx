import { useState } from 'react'
import './CreatePost.css'
import SVGComponent from './SVGComponent'

export default function CreatePost({ onPost }) {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('')

  const handlePost = () => {
    if (!text.trim()) return
    onPost({
      id: Date.now(),
      user: 'Raiba Ayub',
      avatar: 'R',
      avatarColor: '#74b9ff',
      time: 'Just now',
      privacy: '👥',
      text: text.trim(),
      image: null,
      likes: 0,
      comments: 0,
      shares: 0,
      reactions: [],
      reactionCount: 0,
    })
    setText('')
    setIsOpen(false)
  }

  return (
    
    <div className="create-post card">
      <div className="create-post-top">
        <img
          src="https://i.pinimg.com/736x/6c/a5/a7/6ca5a7363746519492b3c19fe5f91e04.jpg"
          alt="Profile"
          className="avatar-img"
        />

        {/* ✅ Icons are now INSIDE the input wrapper */}
        <div className="create-post-input" onClick={() => setIsOpen(true)}>
          <span>What's on your mind, Raiba?</span>

          <div className="create-post-options">
            <button className="create-option" onClick={e => e.stopPropagation()}>
              <span className="option-icon"><SVGComponent /></span>
            </button>

            <button className="create-option" onClick={e => e.stopPropagation()}>
              <span className="option-icon">
                <img
                  height="24" width="24" alt="Photo/Video"
                  src="https://static.xx.fbcdn.net/rsrc.php/yX/r/8_VnccIZfRa.webp?_nc_eui2=AeFqEeGTO2x_X-exxkXDTLbvtIBijxuqePS0gGKPG6p49FvZR2Qp0HzdQbRLRm30Qkk8-jvt9q1eYZ3JEdxtL0nd"
                />
              </span>
            </button>

            <button className="create-option" onClick={e => e.stopPropagation()}>
              <span className="option-icon">
                <img
                  height="24" width="24" alt="Feeling"
                  src="https://static.xx.fbcdn.net/rsrc.php/ya/r/XlpCJi9w2HF.webp?_nc_eui2=AeElz5iwsbtkFrIqK9Ve5HQCwIB16X8qm_nAgHXpfyqb-Wb0zqc_qKtMvDByJFEAHVb5lNrDfLAf7WiFPz_gWn9-"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="create-post-expanded">
          <textarea
            className="post-textarea"
            placeholder="What's on your mind, Raiba?"
            value={text}
            onChange={e => setText(e.target.value)}
            autoFocus
            rows={3}
          />
          <div className="post-actions-bottom">
            <button className="btn-gray" onClick={() => { setIsOpen(false); setText('') }}>Cancel</button>
            <button className="btn-blue" onClick={handlePost} disabled={!text.trim()}>Post</button>
          </div>
        </div>
      )}

      {/* ✅ Divider and bottom options removed — no longer needed */}
    </div>
  )
}