import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const askQuestion = async () => {
    const response = await axios.post('/api/chat', { question });
    setAnswer(response.data.answer);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Sufi Tarikat GPT</h1>
      <textarea
        rows={4}
        style={{ width: '100%' }}
        placeholder="Postavi duhovno pitanje..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={askQuestion}>Pošalji</button>
      <div style={{ marginTop: 20 }}>
        <strong>Odgovor:</strong>
        <p>{answer}</p>
      </div>
    </div>
  );
}
