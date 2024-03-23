import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
    return (
        <header className={style.menu}>
            <img src="logo-ar-livre 1.png" className={style.logo} alt="Logo aventura ao ar livre" />
            <ul className={style.menuNav}>
                <NavLink to={"/"} className={style.menuItem}>Home</NavLink>
                <NavLink to={"/sobreNos"} className={style.menuItem}>Sobre nós</NavLink>
                <NavLink to={"/contato"} className={style.menuItem}>Contato</NavLink>
            </ul>
        </header>
    )
}

export default Header;