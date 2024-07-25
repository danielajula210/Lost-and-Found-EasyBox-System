import React, { useState, useEffect } from 'react';
import './App.css';

const objectDetails = {
  1: { name: 'Șapcă', questions: ['Ce culoare are șapca?-neagră', 'Ce marcă este șapca?-Nike '], image: 'https://via.placeholder.com/150', code: '1fg567' },
  2: { name: 'Brățară', questions: ['Din ce e confecționată brățara?-mărgele', 'Ce culoare are brățara?-galbenă'], image: 'https://via.placeholder.com/150', code: 'aa3fr8' },
  // adaugă mai multe obiecte după cum este necesar
};

function AdminPage() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    // Într-o aplicație reală, aici ai face o cerere către un API pentru a obține obiectele
    const fetchedObjects = Object.keys(objectDetails).map(id => ({
      id,
      ...objectDetails[id],
    }));
    setObjects(fetchedObjects);
  }, []);

  const handleDelete = (id) => {
    // Implementare pentru ștergerea obiectului
    const updatedObjects = objects.filter(object => object.id !== id);
    setObjects(updatedObjects);
  };

  return (
    <div className="admin-page">
      <h1>Lista cu Obiecte</h1>
      <ul>
        {objects.map(object => (
          <li key={object.id}>
            <div className="object-header">
              <h2>{object.name}</h2>
              <button onClick={() => handleDelete(object.id)} className="delete-button">Șterge</button>
              <button className="code-button">{object.code}</button>
            </div>
            <ul>
              {object.questions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
            <div className="object-image">
              <img src={object.image} alt={object.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
