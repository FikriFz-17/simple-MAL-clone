import "../styles/style.css"
import { Link } from "react-router-dom"

const Menu = ({onSubmit, value, setAnimeTitle}) => {
  return (
    <div className="menu-wrapper">
        <div className="anime-nav">
            <a href="">Popular Anime</a> 
        </div>

        <form onSubmit={onSubmit}>
          <input 
              type="text" 
              className='anime-src' 
              placeholder="Search Anime..." 
              value={value}
              onChange={e => setAnimeTitle(e.target.value)}
          />
        </form>
        
    </div>
  )
}

export default Menu
