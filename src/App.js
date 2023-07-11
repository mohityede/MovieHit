import { useEffect } from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { getApiConfig } from './redux/slices/homeSlice';
import './App.css';
import { fetchData } from './utils/api';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector(state => state.home);

  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    try {
      const res = await fetchData("/movie/popular");
      console.log(res);
      dispatch(getApiConfig(res));
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="App">
      App
      { url.total_pages }
    </div>
  );
}

export default App;
