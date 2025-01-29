import "../styles/style.css"
import { Link } from "react-router-dom";

function AnimeLists({ title, image, url, id }) {
    return (
      <Link to={`/details/${id}`} className="anime-title">
        <div className="anime-lists">
          <img src={image} alt={title} />
          <Link to={`/details/${id}`}>{title}</Link>
        </div>
      </Link>
    );
  }
  
  export default AnimeLists;
  
