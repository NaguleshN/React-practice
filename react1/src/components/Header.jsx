import './Header.css';
import { PropTypes } from "prop-types";


export const Header = (props) => {
  return (
    <>
      <div className="nav">
        <div>Myapp {props.name}</div>
        <div>Home</div>
        <div>About</div>
      </div>
      <a>My dear  friend, I am a link!</a>

      
    </>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
