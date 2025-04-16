import { useEffect, useState } from 'react';
import './Promises.css';

function Promises() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        const upperCaseUsers = data.map(user => ({
          ...user,
          displayName: user.name.toUpperCase(),
        }));
        return upperCaseUsers;
      })
      .then(upperCaseUsers => {
        const finalUsers = upperCaseUsers.map(user => ({
          ...user,
          displayName: user.displayName.toLowerCase(),
          company: {  ...user.company, name: "Ufours" }, 
        }));
        setUsers(finalUsers);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        alert('Failed to load users. Please try again later.');
        setUsers([]);
        setLoading(false);
      });
  }, []);
  

  return (
    <div className="container">
      <h2>User Details (Fetched with Promises)</h2>
      {loading ? (
        <p>Loading users, please wait...</p>
      ) : (
        <div className="card-grid">
          {users.map(user => (
            <div className="user-card" key={user.id}>
              <h3>{user.displayName} (@{user.username})</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
              <p><strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city}</p>
              <p><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
              <p><em>"{user.company.catchPhrase}"</em></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Promises;
