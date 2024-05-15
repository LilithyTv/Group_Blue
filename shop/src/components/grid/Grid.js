import React from 'react';
//import './Grid.css';
import data from '../../data/cakes.json';

function Grid() {
  return (
    // Container div with padding
    <div style={{ padding: '20px' }}>
      <div className="grid grid-cols-4 gap-10">
        {data.map(cake => (
          <div key={cake.picture} className="grid-item">
            <div className="bg-white duration-500 hover:scale-105 hover:shadow-xl relative">
              <img src={cake.picture} alt={`Cake ${cake.name}`} className="object-cover rounded-md w-60 shadow-md" />
              <div className="px-4 py-3 font-bold absolute right-[-15px] bg-yellow-100 p-1 border-[1px] shadow-md bottom-[-10px] text-black border-dashed -rotate-2">
                <p className="text-md block tracking-wider text-shadow">{cake.price} kr</p>
              </div>
            </div>
            <div className="w-60">
              <p className="pt-6 pb-2 pl-1 truncate text-md tracking-wider font-bold shadow-pink-950 scale-y-110">{cake.name}</p>
              <p className="pl-1 pb-[20px] truncate text-sm tracking-wider text-gray-400 shadow-pink-950 scale-y-110">{cake.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;