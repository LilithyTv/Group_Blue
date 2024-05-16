import React from 'react';
import './Grid.css';
import data from '../../data/cakes.json';

function Grid() {
  return (
    <div style={{ padding: '20px' }}>
      <div className="grid grid-cols-3 gap-10">
        {data.map(cake => (
          <div key={cake.picture} className="grid-item">
            {/* Details section for name and description */}
            <div className="details">
              <p className="cake-name">{cake.name}</p>
              <p className="cake-description">{cake.description}</p>
            </div>
            {/* Image section */}
            <div className="image-container">
              <img src={cake.picture} alt={`Cake ${cake.name}`} className="cake-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
