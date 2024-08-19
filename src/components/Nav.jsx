import { Link } from 'react-router-dom';
import Home from "../assets/logo.svg"
import Trending from "../assets/icon-nav-home.svg"
import Movies from '../assets/icon-category-movie.svg';
import TVSeries from "../assets/icon-nav-tv-series.svg";
import Bookmarked from "../assets/icon-nav-bookmark.svg";
import User from "../assets/image-avatar.png"
function Nav() {
  return (
    <nav className='navigation'> 
      <Link className='logo' to="/"><img src={Home} alt="" /></Link>
      <div className='nav-elmeant'>
      <Link className='elmeant' to="/trending"><img src={Trending} alt="" /></Link>
      <Link className='' to="/movies"><img src={Movies} alt="" /></Link>
      <Link className='' to="/tv-series"><img src={TVSeries} alt="" /></Link>
      <Link className='' to="/bookmarked-movies"><img src={Bookmarked} alt="" /></Link>
      </div>
      <Link className='user' to="/account"><img src={User} alt="" /></Link>
    </nav>
  );
}

export default Nav;