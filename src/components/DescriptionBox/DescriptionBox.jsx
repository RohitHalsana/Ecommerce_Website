import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className='descriptionbox'>
      <div className="navigator">
        <div
          className={`tab ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div
          className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (122)
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'description' ? (
          <div className="description-card">
            <p>
              Oversized Graphic Tee is designed for modern comfort and bold style.
              Made from high-quality cotton, it’s soft, breathable, and durable. Perfect for streetwear or everyday use.
              Graphic prints inspired by desi culture give it a unique edge.
            </p>
            <p>
              Features: oversized fit, drop shoulders, available in S–XL. Wear it with cargos, jeans, or under a jacket.
              It’s built for all-day confidence and comfort.
            </p>
          </div>
        ) : (
          <div className="review-card">
            <p>⭐️⭐️⭐️⭐️⭐️ Great quality and style. — Aman</p>
            <p>⭐️⭐️⭐️⭐️ Love the fabric, fits perfectly. — Neha</p>
            <p>⭐️⭐️⭐️⭐️⭐️ Bold print and comfortable for daily wear. — Raj</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
