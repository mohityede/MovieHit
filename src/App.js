import { useEffect } from 'react';
import './App.css';
import { fetchData } from './utils/api';

function App() {
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    try {
      const res = await fetchData("/movie/popular");
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
