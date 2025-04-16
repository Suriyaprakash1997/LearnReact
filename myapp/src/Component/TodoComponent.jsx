import React, { useState } from 'react';
import axios from 'axios';

const TodoComponent = () => {
  const [users, setUsers] = useState([]);
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(false);

  const getUsers = async (method) => {
    setLoading(true);
    setUsers([]);
    setSource(method);

    try {
      let data;
      if (method === 'Fetch') {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        data = await response.json();
      } else if (method === 'Axios') {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        data = response.data;
      }
      setUsers(data);
    } catch (error) {
      alert(`${method} Error:`, error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '30px',
      background: '#f5f7fa',
      borderRadius: '15px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      maxWidth: '600px',
      margin: 'auto'
    }}>
      <h2>✨ User Fetcher: Fetch vs Axios ✨</h2>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => getUsers('Fetch')}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          🐱‍🏍 Get Users (Fetch)
        </button>

        <button
          onClick={() => getUsers('Axios')}
          style={{
            padding: '10px 20px',
            border: 'none',
            backgroundColor: '#28a745',
            color: 'white',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          🚀 Get Users (Axios)
        </button>
      </div>

      {loading && <p>🔄 Loading users with {source}...</p>}

      {!loading && users.length > 0 && (
        <div>
          <h3 style={{ color: source === 'Axios' ? '#28a745' : '#007bff' }}>
            ✅ Users Fetched using {source}
          </h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {users.map(user => (
              <li key={user.id} style={{
                background: '#fff',
                padding: '10px',
                margin: '5px 0',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}>
                👤 {user.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoComponent;
