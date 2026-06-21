import { useState } from 'react'
import './Stories.css'

const STORIES = [
  { 
    id: 1, 
    name: 'Create a story', 
    isAdd: true, 
    profileImg: 'https://i.pinimg.com/736x/6c/a5/a7/6ca5a7363746519492b3c19fe5f91e04.jpg' 
  },
  { 
    id: 2, 
    name: 'Shumaiza', 
    color: '#74b9ff', 
    profileImg: 'https://i.pinimg.com/736x/09/cd/53/09cd53fb88ee701ab8a49f0b342a2520.jpg',
    storyImg: 'https://i.pinimg.com/736x/e5/2f/a0/e52fa02c5d0c8be2daf74dadfc7d6f4b.jpg'
  },
  { 
    id: 3, 
    name: 'Salman', 
    color: '#a29bfe', 
    profileImg: 'https://i.pinimg.com/736x/1a/ce/d8/1aced8d6a3a9864b0098866430e31a32.jpg',
    storyImg: 'https://i.pinimg.com/736x/c1/03/9b/c1039b3960b4f1b0e5fe63b0742bf4d1.jpg'
  },
  { 
    id: 4, 
    name: 'Kashaf', 
    color: '#0866ff', 
    profileImg: 'https://i.pinimg.com/736x/c7/d3/8a/c7d38a1886e44510425d43037aee0352.jpg',
    storyImg: 'https://i.pinimg.com/736x/c1/4d/68/c14d68ddd12ad0c88220011be30a1e7c.jpg'
  },
  { 
    id: 5, 
    name: 'Noor ul ain', 
    color: '#e17055', 
    profileImg: 'https://i.pinimg.com/736x/31/2b/e2/312be22303e2f1ebaaa316c23b3e7a67.jpg',
    storyImg: 'https://i.pinimg.com/webp70/1200x/ca/26/27/ca2627967386f9bfc74ad59dca3df288.webp'
  },
]

export default function Stories() {
  return (
    <div className="stories-container">
      <div className="stories-track">
        {STORIES.map(story => (
          <div key={story.id} className={`story-card ${story.isAdd ? 'add-story-card' : ''}`}>
            
            {story.isAdd ? (
              <>
                {/* Top: profile image */}
                <div
                  className="story-image"
                  style={{
                    backgroundImage: `url(${story.profileImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                {/* + icon at boundary */}
                <div className="add-icon">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="white">
                    <g fillRule="evenodd" transform="translate(-446 -350)">
                      <g fillRule="nonzero">
                        <path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)" />
                        <path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)" />
                      </g>
                    </g>
                  </svg>
                </div>

                {/* White bottom text */}
                <div className="story-add-bottom">
                  <span className="story-name">Create a<br />story</span>
                </div>
              </>
            ) : (
              <>
                {/* Story background image */}
                <div
                  className="story-image"
                  style={{
                    backgroundImage: `url(${story.storyImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Avatar with colored border on top-left */}
                  <div
                    className="story-avatar"
                    style={{ border: `3px solid ${story.color}` }}
                  >
                    <img
                      src={story.profileImg}
                      alt={story.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                {/* Name at bottom */}
                <div className="story-name-overlay">
                  {story.name}
                </div>
              </>
            )}

          </div>
        ))}
      </div>
    </div>
  )
}