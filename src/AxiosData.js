import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosData() {
  const [users, setUsers] = useState([]);        // Liste des utilisateurs
  const [loading, setLoading] = useState(true);  // État de chargement
  const [error, setError] = useState(null);      // État d'erreur éventuelle

  const loadUsers = () => {
    setLoading(true);
    setError(null);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Utilisateurs chargés avec axios</h2>
      <button onClick={loadUsers} style={{ marginBottom: '10px', padding: '6px 12px', cursor: 'pointer' }}>
        🔄 Recharger les données
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '6px' }}>
            <strong>{user.name}</strong> – {user.email} (Ville : {user.address?.city})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosData;
