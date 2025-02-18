import React from 'react';
import { Instagram, Twitter, Music2, AtSign, Heart } from 'lucide-react';
import '../styles/styles.css';

const LinksPage = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        {/* Corner Decorations */}
        <div className="corner-decoration corner-decoration--top-left">
          <div className="corner-line corner-line--horizontal"></div>
          <div className="corner-line corner-line--vertical"></div>
        </div>
        <div className="corner-decoration corner-decoration--top-right">
          <div className="corner-line corner-line--horizontal"></div>
          <div className="corner-line corner-line--vertical"></div>
        </div>
        <div className="corner-decoration corner-decoration--bottom-left">
          <div className="corner-line corner-line--horizontal"></div>
          <div className="corner-line corner-line--vertical"></div>
        </div>
        <div className="corner-decoration corner-decoration--bottom-right">
          <div className="corner-line corner-line--horizontal"></div>
          <div className="corner-line corner-line--vertical"></div>
        </div>

        {/* Main Content Box */}
        <div className="main-container">
          <div className="flex-1 flex flex-col items-center relative">
            {/* Decorative Hearts */}
            <Heart 
              className="absolute -top-3 -right-3 text-pink-400" 
              size={40} 
              fill="#ec4899"
            />
            <Heart 
              className="absolute -top-3 -left-3 text-pink-400" 
              size={40} 
              fill="#ec4899"
            />
             <Heart 
              className="absolute -top-3 -left-3 text-pink-400" 
              size={40} 
              fill="#ec4899"
            />
            
            
            <h1 className="title">Paige St. James</h1>
            
            {/* Profile Image */}
            <div className="profile-image-wrapper">
              <div className="profile-image-border"></div>
              <div className="profile-image-container">
                <img 
                  src="/images/PaigeProfile.png" 
                  alt="Profile" 
                  className="profile-image"
                />
              </div>
            </div>
            
            {/* Links Section */}
            <div className="links-container relative">
              <Heart 
                className="absolute -top-4 right-2 text-pink-300" 
                size={20} 
                fill="#ec4899"
              />
              <Heart 
                className="absolute -bottom-4 left-2 text-pink-300" 
                size={20} 
                fill="#ec4899"
              />
              
              <a href="#" className="link">Exclusive Content</a>
              <a href="#" className="link">Telegram</a>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
  <input 
    type="email" 
    placeholder="Drop your email..get a surprise" 
    style={{
      width: '200px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ec4899'
    }}
  />
  <button 
  style={{
    backgroundColor: '#ec4899',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    width: '120px',
    transition: 'all 0.2s ease'  // Add this line
  }}
  onMouseEnter={e => e.target.style.backgroundColor = '#db2777'} // Darker pink on hover
  onMouseLeave={e => e.target.style.backgroundColor = '#ec4899'} // Back to original pink
>
  Subscribe
</button>
</div>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://instagram.com/your-handle" 
               target="_blank" 
               rel="noopener noreferrer">
              <Instagram className="social-icon" />
            </a>
            <a href="https://tiktok.com/@your-handle" 
               target="_blank" 
               rel="noopener noreferrer">
              <Music2 className="social-icon" />
            </a>
            <a href="https://twitter.com/your-handle" 
               target="_blank" 
               rel="noopener noreferrer">
              <Twitter className="social-icon" />
            </a>
            <a href="mailto:your-email@example.com">
              <AtSign className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksPage;