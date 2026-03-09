import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');

  if (!username) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        color: '#00ff9d',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>RazHouse Party Chat 🔥</h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>Join the chaos, name shows on ya messages</p>
        <input
          type="text"
          placeholder="Your wild name (e.g. NasTheGod)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && username.trim()) setUsername(username.trim()); }}
          style={{
            padding: '1rem',
            fontSize: '1.2rem',
            width: '300px',
            borderRadius: '8px',
            border: '2px solid #00ff9d',
            background: '#111',
            color: '#00ff9d',
            marginBottom: '1rem'
          }}
        />
        <button
          onClick={() => { if (username.trim()) setUsername(username.trim()); }}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            background: '#00ff9d',
            color: '#000',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Enter the Party
        </button>
      </div>
    );
  }

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = {
      id: Date.now(),
      text: input.trim(),
      user: username,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })
    };
    setMessages(prev => [...prev, newMsg]);
    setInput('');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <header style={{
        background: '#111',
        padding: '1rem',
        textAlign: 'center',
        borderBottom: '2px solid #00ff9d'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>RazHouse Party 🔥</h1>
        <p style={{ margin: '0.5rem 0 0', color: '#00ff9d' }}>Messages vanish on refresh/close – pure chaos 😂</p>
      </header>

      <div style={{
        flex: 1,
        padding: '1rem',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {messages.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888', marginTop: '5rem' }}>
            Party empty... hit 'em with the first message!
          </p>
        ) : (
          messages.map(msg => (
            <div
              key={msg.id}
              style={{
                alignSelf: msg.user === username ? 'flex-end' : 'flex-start',
                maxWidth: '70%',
                background: msg.user === username ? '#00ff9d33' : '#ffffff11',
                padding: '1rem',
                borderRadius: '12px',
                border: msg.user === username ? '1px solid #00ff9d' : '1px solid #444'
              }}
            >
              <strong style={{ color: '#00ff9d' }}>{msg.user}</strong>
              <p style={{ margin: '0.3rem 0' }}>{msg.text}</p>
              <small style={{ color: '#aaa', display: 'block', textAlign: 'right' }}>{msg.time}</small>
            </div>
          ))
        )}
      </div>

      <footer style={{
        background: '#111',
        padding: '1rem',
        display: 'flex',
        gap: '0.5rem',
        borderTop: '2px solid #00ff9d'
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
          placeholder="Type ya wildest shit... (Enter to send)"
          style={{
            flex: 1,
            padding: '1rem',
            fontSize: '1.1rem',
            borderRadius: '8px',
            border: '2px solid #444',
            background: '#222',
            color: '#fff'
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: '1rem 1.5rem',
            fontSize: '1.1rem',
            background: '#00ff9d',
            color: '#000',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </footer>
    </div>
  );
}

export default App;
