import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav'; // Adjust the path if needed
import Home from './pages/Home';
import Trending from './pages/Trending';
import Movies from './pages/Movies';
import TVSeries from './pages/TVSeries';
import BookmarkedMovies from './pages/BookmarkedMovies';
import Account from './pages/Account';

function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-series" element={<TVSeries />} />
      <Route path="/bookmarked-movies" element={<BookmarkedMovies />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  </Router>
  );
}

export default App;