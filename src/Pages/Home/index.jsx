import style from './home.module.css';
import { IoLogoWhatsapp } from "react-icons/io";

function Home() {
    return (
        <>
            
            <main>
                <section className={style.banner}>
                    <div className={style.text}>
                        <h1 className={style.titleBanner}>Aventuras ao Ar Livre</h1>
                        <p>Explore a Natureza como Nunca Antes </p>

                        <p> Nossa missão é proporcionar experiências ao ar livre que conectam as pessoas à natureza, promovendo aventuras emocionantes e momentos inesquecíveis.</p>
                        <p> Seja explorando trilhas, escalando montanhas, acampando sob as estrelas ou navegando em rios selvagens, estamos aqui para guiá-lo em sua jornada de descoberta.</p>
                    </div>

                </section>

                <section className={style.textContainer}>
                    <h2 className={style.titleText}>Descubra o Mundo Natural</h2>
                    <p>Deseja sair da rotina e vivenciar novas experiências? Junte-se a nós em nossas expedições emocionantes!</p>
                    <button className={style.buttonWhatsapp}>
                        <a href="https://www.whatsapp.com/">Clique aqui!</a>
                        <IoLogoWhatsapp className={style.iconWhatsapp} />
                    </button>
                </section>

                <section className={style.galery}>
                    <h2 className={style.galeryTitle}>Nossas aventuras</h2>
                    <div className={style.galeryContainer}>
                        <div className={style.card}>
                            <h4 className={style.cardTitle}>Trilhas na Montanha</h4>
                            <figure>
                                <img src="/src/assets/trilhaMontanha.jpg" className={style.cardImg} alt="" />
                                <caption className={style.cardDesciption}>
                                    <p>Explore trilhas panorâmicas com vistas de tirar o fôlego.</p>
                                </caption>
                            </figure>
                        </div>

                        <div className={style.card}>
                            <h4 className={style.cardTitle}>Rafting em Águas Brancas</h4>
                            <figure>
                                <img src="/src/assets/RaftingEmÁguasBrancas.jpg" alt="" />
                                <caption className={style.cardDesciption}>
                                    <p>Descubra a emoção de navegar por rios selvagens.</p>
                                </caption>
                            </figure>
                        </div>

                        <div className={style.card}>
                            <h4 className={style.cardTitle}>Acampamento Sob as Estrelas</h4>
                            <figure>
                                <img src="/src/assets/AcampamentoSobAsEstrelas.jpg" alt="" />
                                <caption className={style.cardDesciption}>
                                    <p>Relaxe e recarregue em meio à natureza intocada.</p>
                                </caption>
                            </figure>
                        </div>
                    </div>

                </section>

                <section className={style.videoSection}>
                    <h3 className={style.titleVideo}>Próxima Aventura?</h3>
                    <h4 className={style.subtitle}> Reserve Agora!</h4>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/cxIn8f4QWjA?si=JkkdN1Z5oK4VdXjp"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </section>
            </main>

            
        </>
    );
}

export default Home;