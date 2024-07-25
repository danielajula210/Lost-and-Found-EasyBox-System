import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlaceObjectPage.css';

function PlaceObjectPage() {
  const [objectName, setObjectName] = useState('');
  const [questions, setQuestions] = useState(['']); // Inițializăm cu un singur câmp pentru întrebări
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const navigate = useNavigate();

  const handleAddQuestion = () => {
    setQuestions([...questions, '']); // Adaugă un nou câmp de întrebări
  };

  const handleRemoveQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index)); // Șterge întrebarea la indexul specificat
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = questions.slice();
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddObject = (e) => {
    e.preventDefault();
    // Cod pentru a adăuga obiectul și întrebările (de exemplu, salvarea în starea sau baza de date)
    console.log(`Object Name: ${objectName}, Questions: ${questions}, Image: ${image}`);

    // Afișează mesajul de succes
    alert('Obiectul a fost plasat cu succes!');
    navigate('/'); // Navighează către pagina principală
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="place-object-page">
      <div className="info-text">Completarea se face folosind diacritice</div>
      <h1>Completați următoarele câmpuri</h1>
      <form onSubmit={handleAddObject}>
        <div className="form-group">
          <label htmlFor="objectName">Nume Obiect:</label>
          <input
            type="text"
            id="objectName"
            placeholder="Adaugă nume obiect"
            value={objectName}
            onChange={(e) => setObjectName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="questions">Întrebări:</label>
          {questions.map((question, index) => (
            <div key={index} className="question-group">
              <input
                type="text"
                placeholder="Adaugă întrebare"
                value={question}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => handleRemoveQuestion(index)}
                className="remove-question-button"
              >
                Șterge
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddQuestion} className="add-question-button">
            Adaugă întrebare
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="objectPhoto">Adăugați Poza:</label>
          <input
            type="file"
            id="objectPhoto"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {imagePreview && (
          <div className="image-preview">
            <h2>Preview:</h2>
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
        <button type="submit">Adaugă</button>
      </form>
    </div>
  );
}

export default PlaceObjectPage;
