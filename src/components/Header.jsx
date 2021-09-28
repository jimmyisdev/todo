import { useState } from "react";
import { connect } from "react-redux";
import { themeChange, addUser } from "./../redux/globalReducer";
import { FaLightbulb, FaRegLightbulb, FaUserPlus } from "react-icons/fa";

const mapStateToProps = (state) => {
  return {
    global: state.global,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    themeChange: (boolean) => dispatch(themeChange(boolean)),
    addUser: (user) => dispatch(addUser(user)),
  };
};
function Header(props) {
    const { addUser, global, themeChange } = props; 
    const [ isLight, setIsLight ] = useState(false)
    const handleThemeBtn = () => {
        setIsLight(!isLight);
        themeChange(isLight);
    }
    const handleUserName = () => {
      const inputName = prompt("Input your name");
      addUser(inputName);

    }

    return (
      <header className="header">
        <div className="header_logo">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
        </div>
        <div>
          <h1>
            { global.user.length > 0  ?  `Hi! ${(global.user).toUpperCase() }` : "Hi!" }
          </h1>
        </div>
        <div className="header_set_theme">
          <button className="header_btn" onClick={() => handleThemeBtn()}>
            {isLight ? <FaRegLightbulb /> : <FaLightbulb />}
          </button>
        </div>
        <div className="header_set_user">
          <button className="header_btn" onClick={() => handleUserName()}>
            <FaUserPlus />
          </button>
        </div>
      </header>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
