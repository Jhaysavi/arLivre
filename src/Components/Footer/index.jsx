import style from './Footer.module.css';
import { FaRegCopyright } from "react-icons/fa";


function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.logoFooter}>
                <img src="logo-ar-livre 1.png" className={style.logo} alt="Logo aventura ao ar livre" />
                <h6>Aventuras ao ar livre</h6>
            </div>

            <small><FaRegCopyright /> Desenvolvido por Sonia Janara</small>

        </footer>
    )
}

export default Footer;