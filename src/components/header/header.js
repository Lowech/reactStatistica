import '../header/header.css';
import { Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { dispalyVisibli, displayHiden,buttonTextChange } from '../../redux/counterSlice';

function Header() {
  
  const value = useSelector(state => state.counter.value);
  const buttonText = useSelector(state => state.counter.buttonText);
  const navigate = useNavigate();
  const dispatch = useDispatch();

function displayHidenVisible(){
  if(value === "none"){
    if(buttonText === "Выйти"){
      dispatch(buttonTextChange("Войти"));
    }else{
      dispatch(dispalyVisibli());
    }
  }else{
    dispatch(displayHiden());
  }
}
function goHome(){
  navigate('/website/ReactApli/');
  dispatch(displayHiden());
}

  return (
    <div className="header-container">
        <div className="blockLogo">
          <img onClick={goHome} src={require("../../img/logo.png")} className="blockLogo-logo" alt="logo" />
        </div>
          <nav className="blockLink">
            <Link  className="blockLink-link" to={"/website/ReactApli/contacts"}>Контакты</Link>
          </nav>
        <div className="blockButton">
          <button onClick={displayHidenVisible} className="blockButton-button">{buttonText}</button>
        </div> 
    </div> 
  );
}

export default Header;
