import FetchData from './FetchData';
import AxiosData from './AxiosData';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '30px auto', padding: '0 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h1>TP – Consommer une API avec React</h1>
      <FetchData />
      <AxiosData />
    </div>
  );
}

export default App;
