import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ObjectDetailsPage.css';

const objectDetails = {
  1: {
    name: 'Șapcă',
    questions: ['Ce culoare are șapca?', 'Ce marcă este șapca?'],
    code: '1fg567',
    correctAnswers: ['neagră', 'Nike'],
  },
  2: {
    name: 'Brățară',
    questions: ['Din ce e confecționată brățara?', 'Ce culoare are brățara?'],
    code: 'aa3fr8',
    correctAnswers: ['mărgele', 'galbenă'],
  },
};

function ObjectDetailsPage() {
  const { id } = useParams();
  const object = objectDetails[id];
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(object.questions.map(() => ''));

  if (!object) {
    return <div>Object not found</div>;
  }

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const allCorrect = answers.every((answer, index) => answer.trim().toLowerCase() === object.correctAnswers[index].toLowerCase());
    if (allCorrect) {
      alert(`Răspunsuri corecte! Puteți ridica obiectul folosind codul ${object.code}`);
    } else {
      alert('Răspunsuri greșite! Obiectul nu poate fi ridicat!');
    }
    navigate('/'); // Asigură-te că ai ruta '/main' configurată în React Router
  };

  return (
    <div className="object-details-page">
      <h1>Răspundeți la următoarele întrebări folosind diacritice</h1>
      <ul>
        {object.questions.map((question, index) => (
          <li key={index}>
            {question}
            <input
              type="text"
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Răspunde</button>
    </div>
  );
}

export default ObjectDetailsPage;
