import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div>
        <Link to='/excuse-generator'>Excuse</Link>
      </div>
      <div>
        <Link to='/wishes-generator'>Wishes</Link>
      </div>
    </div>
  );
}

export default HomePage;
