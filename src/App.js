import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getApiConfig } from './redux/slices/homeSlice';
import { fetchData } from './utils/api';
import './App.css';

import Home from './pages/home/Home';
import PageNotFound from './pages/404/PageNotFound';
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import Search from './pages/search/Search';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector(state => state.home);

  useEffect(() => {
    getConfiguration();
  }, []);
  const getConfiguration = async () => {
    try {
      const res = await fetchData("/configuration");
      console.log(res);
      const url = {
        backdropImgPath: res.images.secure_base_url + "original"
      }
      dispatch(getApiConfig(url));
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        { <Header /> }
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/:mediaType/:id' element={ <Details /> } />
          <Route path='/search/:query' element={ <Search /> } />
          <Route path='/explore/:mediaType' element={ <Explore /> } />
          <Route path='*' element={ <PageNotFound /> } />
        </Routes>
        { <Footer /> }
      </BrowserRouter>
    </div>
  );
}

export default App;
