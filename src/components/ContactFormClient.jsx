import React, { useState } from 'react';

export default function ContactFormClient() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  /** @param {import('react').SyntheticEvent<HTMLFormElement>} e */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('sent');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus('error');
        console.error(data);
      }
    } catch (err) {
      setStatus('error');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 700, margin: 'auto' }}>
      <div style={{ marginBottom: 12 }}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Subject</label>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required style={{ width: '100%', minHeight: 150 }} />
      </div>
      <div>
        <button  style={{ backgroundColor: 'blue', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px' }} type="submit" disabled={status === 'sending'}>Send</button>
      </div>
      {status === 'sent' && <p>Message sent — thank you!</p>}
      {status === 'error' && <p style={{ color: 'red' }}>Failed to send message, try again later.</p>}
    </form>
  );
}
