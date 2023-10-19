import React, { useState } from 'react';

const EmailForm = () => {
  const recipient = "jack.wall.business@gmail.com";
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    clearForm()
  };

  const clearForm = () => {
    setMessage("");
    setSubject("");
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Email: </h2>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;