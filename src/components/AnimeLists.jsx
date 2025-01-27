import "../styles/style.css"

function AnimeLists({ title, image, url }) {
    return (
      <div className="anime-lists">
        <img src={image} alt={title} />
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    );
  }
  
  export default AnimeLists;
  
