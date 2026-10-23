import { useState, useEffect } from 'react';

function FetchData() {
  const [posts, setPosts] = useState([]);       // Liste des articles
  const [loading, setLoading] = useState(true); // État de chargement
  const [error, setError] = useState(null);     // État d'erreur éventuelle

  const loadPosts = () => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadPosts();
  }, []); // Le tableau vide signifie que l'effet ne s'exécute qu'une fois au montage

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Articles chargés avec fetch()</h2>
      <button onClick={loadPosts} style={{ marginBottom: '10px', padding: '6px 12px', cursor: 'pointer' }}>
        🔄 Recharger les données
      </button>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: '6px' }}>
            <strong>#{post.id}</strong> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
