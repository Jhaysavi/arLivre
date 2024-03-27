import style from './Contact.module.css';

function Contact() {
    return (
        <>
            <section className={style.maps}>
                <h1 className={style.mapTitle}>Nossa localização</h1>
                <h2 className={style.mapSubtitle}>Venha conferir nossa sede!</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15539.949317262897!2d-72.5452621!3d-13.1631988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d9a5f89555555%3A0x3a10370ea4a01a27!2sMachu%20Picchu!5e0!3m2!1spt-BR!2sbr!4v1711163146784!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </section>

            <section className={style.form}>
                <h2 className={style.formTitle}>Cadastre-se para Ofertas Exclusivas!!</h2>
                <form action="#">
                    <fieldset className={style.formGroup}>
                        <label className={style.labelForm} htmlFor="name">Nome</label>
                        <input className={style.inputForm} id="name" type="text" placeholder='Joane Lester' />
                    </fieldset>

                    <fieldset className={style.formGroup}>
                        <label className={style.labelForm} htmlFor="phone">Celular</label>
                        <input className={style.inputForm} id="phone" type="tel" placeholder='(XX) X XXXX XXXX' />
                    </fieldset>

                    <fieldset className={style.formGroup}>
                        <label className={style.labelForm} htmlFor="email">E-mail</label>
                        <input className={style.inputForm} id="email" type="email" placeholder='email@exemplo.com' />
                    </fieldset>

                    <fieldset className={style.formGroup}>
                        <label className={style.labelForm} htmlFor="subject">Assunto:</label>
                        <textarea className={style.inputForm} id="subject" type="text" placeholder='Gostaria de fazer um orçamento dos pacotes de paraquedas' />
                    </fieldset>

                    <button type='submit' className={style.buttonForm}>Enviar</button>
                </form>

            </section>
        </>
    )

}

export default Contact;