import "../styles/style.css"
import { Link } from "react-router-dom";

function AnimeLists({ title, image, url, id }) {
    return (
      <div className="anime-lists">
        <img src={image} alt={title} />
        <Link to={`/details/${id}`}>{title}</Link>
      </div>
    );
  }
  
  export default AnimeLists;
  
