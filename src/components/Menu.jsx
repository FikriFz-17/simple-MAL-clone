import "../styles/style.css"

const Menu = ({onSubmit, value, setAnimeTitle, isSearch}) => {
  return (
    <div className="menu-wrapper">
        {isSearch && (
          <div className="anime-nav">
            <a href="">Popular Anime</a> 
          </div>

        )}
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
