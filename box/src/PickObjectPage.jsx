import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PickObjectPage.css';

const objects = [
  { id: 1, name: 'Șapcă' },
  { id: 2, name: 'Brățară' },
];

function PickObjectPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Ridică un obiect</h1>
      <ul>
        {objects.map((object) => (
          <li key={object.id} onClick={() => navigate(`/object-details/${object.id}`)}>
            {object.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PickObjectPage;
