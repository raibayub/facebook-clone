import { useState } from 'react'
import Stories from './Stories'
import CreatePost from './CreatePost'
import Post from './Post'
import './Feed.css'
import { USERS } from '../data/users'

const INITIAL_POSTS = [
  {
    id: 1,
    user: 'Salman',
    profilePic:
      'https://i.pinimg.com/736x/1a/ce/d8/1aced8d6a3a9864b0098866430e31a32.jpg',
    time: '5 hrs',
    privacy: '👥',
    text:
      'Still buzzing from an absolutely incredible weekend at the F1 Grand Prix! 🏎️💨 There is nothing in the world that compares to this atmosphere...',
    image:
      'https://i.pinimg.com/1200x/74/19/e4/7419e4b2cc95a47ed1fab58336aeea12.jpg',
    likes: 142,
    comments: 23,
    shares: 8,
    reactions: ['👍', '❤️', '😮'],
    reactionCount: 142,
  },

  {
    id: 2,
    user: 'Shumaiza',
    profilePic:
      'https://i.pinimg.com/736x/09/cd/53/09cd53fb88ee701ab8a49f0b342a2520.jpg',
    time: '2 hrs',
    privacy: '🌐',
    text:
      "Lost in the mountains 🏔️, where the air feels lighter and the world feels far away 🌿. Surrounded by endless peaks and quiet winds, it’s just me and nature in its purest form 🍃. Every step feels like a journey deeper into peace, where worries fade and silence heals everything 🤍. The clouds touch the mountains like soft whispers ☁️, and time seems to slow down just for a while. No noise, no rush—only the beauty of being lost where I truly feel found ✨.",
    image:
      'https://i.pinimg.com/736x/96/e0/6d/96e06d44e0a13cb0d911f88449d2264b.jpg',
    likes: 234,
    comments: 45,
    shares: 12,
    reactions: ['❤️', '😮', '👍'],
    reactionCount: 234,
  },

  {
    id: 3,
    user: 'Shariq',
    profilePic:
      'https://i.pinimg.com/736x/53/66/b8/5366b80139874280877c5bb3ca7e09c6.jpg',
    time: '4 hrs',
    privacy: '👥',
    text:
      'Coffee and good books — perfect Sunday morning ☕📚 What are you all reading lately? Drop your recommendations below!',
    image: null,
    likes: 87,
    comments: 34,
    shares: 2,
    reactions: ['❤️', '😄', '👍'],
    reactionCount: 87,
  },

  {
    id: 4,
    user: 'Kashaf',
    profilePic:
      'https://i.pinimg.com/736x/c7/d3/8a/c7d38a1886e44510425d43037aee0352.jpg',
    time: '6 hrs',
    privacy: '🌐',
    text:
      'Lost between pages and reality 📖✨, where every word pulls me deeper into a world I never want to leave. A world of novels and books where silence speaks louder than reality, and imagination builds kingdoms only I can see 👑. I’m just a reader here, but in this fantasy world 🌌, I become part of every story—living different lives, feeling every emotion, and wandering through endless dreams. The real world fades away as I turn each page, and suddenly, nothing else matters except the story in my hands and the world in my mind 🖤📚.',
    image:
      'https://i.pinimg.com/webp70/1200x/40/62/a2/4062a26f1a95889cdb336f1a1cc12b09.webp',
    likes: 316,
    comments: 67,
    shares: 24,
    reactions: ['👍', '❤️', '😄'],
    reactionCount: 316,
  },

  {
    id: 5,
    user: 'Noor ul ain',
    profilePic:
      'https://i.pinimg.com/736x/31/2b/e2/312be22303e2f1ebaaa316c23b3e7a67.jpg',
    time: '1 day',
    privacy: '🌐',
    text:
      'Sitting on a swing 🪑 as the sun slowly sets 🌅, watching the sky melt into shades of orange and gold feels like time has paused just for a moment. The gentle breeze 🍃 carries a quiet kind of comfort, and everything around fades into stillness 🤍. No noise, no rush—just silence that speaks in the softest way 🤫. In that moment, the world feels distant, almost unreal ✨. It’s not loneliness, but a peaceful escape my soul has been craving 💭. Just me, the swing, the sunset, and silence that feels like home.',
    image:
      'https://i.pinimg.com/736x/c8/c3/27/c8c32793c2add7230845d85b5198ed87.jpg',
    likes: 528,
    comments: 92,
    shares: 31,
    reactions: ['❤️', '😮', '😄'],
    reactionCount: 528,
  },
]

export default function Feed() {
  const [posts, setPosts] = useState(INITIAL_POSTS)

  const addPost = (newPost) => {
    setPosts(prev => [newPost, ...prev])
  }

  return (
    <main className="feed">
      <Stories />
      <CreatePost onPost={addPost} />

      <div className="posts-list">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}