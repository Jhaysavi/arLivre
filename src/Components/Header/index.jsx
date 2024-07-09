import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { useState, useEffect } from 'react';
import style from './Header.module.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const updateMedia = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });

    return (
        <header className={style.menu}>
            <img src="logo.png" className={style.logo} alt="Logo aventura ao ar livre" />
            {isMobile ? (
                <Menu 
                    right 
                    isOpen={menuOpen} 
                    onStateChange={(state) => handleStateChange(state)}
                    customBurgerIcon={<div className={style.burgerIcon}>&#9776;</div>}
                    outerContainerId={"outer-container"}
                    pageWrapId={"page-wrap"}
                >
                    <NavLink to="/" className={style.menuItem} onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/sobreNos" className={style.menuItem} onClick={closeMenu}>Sobre nós</NavLink>
                    <NavLink to="/contato" className={style.menuItem} onClick={closeMenu}>Contato</NavLink>
                </Menu>
            ) : (
                <ul className={style.menuNav}>
                    <NavLink to="/" className={style.menuItem}>Home</NavLink>
                    <NavLink to="/sobreNos" className={style.menuItem}>Sobre nós</NavLink>
                    <NavLink to="/contato" className={style.menuItem}>Contato</NavLink>
                </ul>
            )}
        </header>
    );
}

export default Header;
