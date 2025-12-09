import React, { useState } from 'react';
import './VideoGallery.css';

const VideoGallery = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const videos = [
    { title: 'BLACK', subtitle: 'Premium Yoga Sessions', color: '#1a1a1a' },
    { title: 'FIJI ISLAND', subtitle: 'Beach Yoga Retreat', color: '#2563eb' },
    { title: 'Creative Portfolio', subtitle: 'Mindful Practices', color: '#f97316' },
    { title: 'Mark Riccardo', subtitle: 'Personal Training', color: '#dc2626' },
    { title: 'Flexible Yoga', subtitle: 'Dynamic Movements', color: '#7c3aed' },
    { title: 'Luxury Cars', subtitle: 'Meditation Journey', color: '#059669' }
  ];

  return (
    <section className="video-gallery">
      <div className="gallery-header">
        <h2>More videos</h2>
        <div className="video-controls">
          <button className="play-btn">Play (k)</button>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span className="time">0:04 / 32:47</span>
        </div>
      </div>
      
      <div className="video-grid">
        {videos.map((video, index) => (
          <div 
            key={index}
            className={`video-card ${index === currentVideo ? 'active' : ''}`}
            onClick={() => setCurrentVideo(index)}
            style={{ '--accent-color': video.color }}
          >
            <div className="video-thumbnail">
              <div className="video-overlay">
                <h3>{video.title}</h3>
                <p>{video.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="progress-dots">
        {videos.map((_, index) => (
          <div 
            key={index}
            className={`dot ${index === currentVideo ? 'active' : ''}`}
            onClick={() => setCurrentVideo(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;