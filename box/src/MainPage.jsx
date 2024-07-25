import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);

  const handleWelcomeClick = () => {
    setShowButtons(true);
  };

  return (
    <div className="main-page">
      <h1>Bun venit!</h1>
      {!showButtons &&(
        <button onClick={handleWelcomeClick}>Începeți!</button>
      )}
      {showButtons && (
        <div>
          <button onClick={() => navigate('/place-object')}>Plasați un obiect</button>
          <button onClick={() => navigate('/pick-object')}>Ridicați un obiect</button>
        </div>
      )}
    </div>
  );
}

export default MainPage;
