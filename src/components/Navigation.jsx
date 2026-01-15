import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ onClick }) {
  return (
    <ul className="nav">
      <li><NavLink to="/" onClick={onClick}>Почетна</NavLink></li>
      <li><NavLink to="/podcast" onClick={onClick}>Подкаст</NavLink></li>
      <li><NavLink to="/politika" onClick={onClick}>Политика</NavLink></li>
      <li><NavLink to="/sport" onClick={onClick}>Спорт</NavLink></li>
      <li><NavLink to="/novosti" onClick={onClick}>Новости</NavLink></li>
      <li><NavLink to="/zabava" onClick={onClick}>Забава</NavLink></li>
      <li><NavLink to="/nauka" onClick={onClick}>Наука</NavLink></li>
      <li><NavLink to="/apologetika" onClick={onClick}>Апологетика</NavLink></li>
      <li><NavLink to="/manifest" onClick={onClick}>Манифест</NavLink></li>
    </ul>
  );
}
