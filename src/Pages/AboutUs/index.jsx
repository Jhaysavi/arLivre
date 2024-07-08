import style from './AboutUs.module.css';

function AboutUs() {
    return (
        <section className={style.container}>
            <div className={style.banner}>
                <div className={style.bannerText}>
                    <h1 className={style.bannerTitle}>Aventuras ao Ar Livre</h1>
                    <p>Explore a Natureza como Nunca Antes
                        Nossa missão é proporcionar experiências ao ar livre que conectam as pessoas à natureza, promovendo aventuras emocionantes e momentos inesquecíveis.</p>
                    <p>
                        Seja explorando trilhas, escalando montanhas, acampando sob as estrelas ou navegando em rios selvagens, estamos aqui para guiá-lo em sua jornada de descoberta.
                    </p>
                </div>
            </div>
            <h1 className={style.title}>Sobre nós</h1>
            <div className={style.textContainer}>
                <h2 className={style.subtitle}>Conectando Pessoas à Natureza</h2>
                <p className={style.text}>
                    Bem-vindo ao coração da nossa paixão: aventuras ao ar livre. Somos uma equipe dedicada e apaixonada por explorar os cantos mais remotos e deslumbrantes do mundo natural. Desde o nascer do sol nas altas montanhas até a tranquilidade de um acampamento à beira de um lago, nossa missão é simples: conectar pessoas à natureza de maneira significativa e memorável.
                </p>
                <div className={style.imgContainer}>
                    <img src="/src/assets/ConectandoPessoasNatureza.jpg" className={style.img} alt="Pessoas assistinfo o pôr do sol" />
                </div>
                <p className={style.text}>
                    Nossa jornada começou há mais de uma década, quando um grupo de amigos decidiu compartilhar sua paixão pelo ar livre com outros aventureiros. Desde então, cresceu para se tornar uma comunidade vibrante de amantes da natureza, guiados por princípios de respeito, segurança e sustentabilidade.
                </p>
            </div>

            <div className={style.textContainer}>
                <h2 className={style.subtitle}>Experiência que Conta</h2>
                <p className={style.text}>
                    Com anos de experiência em liderança de expedições e conhecimento especializado em ambientes naturais diversos, nossa equipe é composta por guias experientes e instrutores qualificados. Cada membro traz consigo um amor profundo pela natureza e um compromisso inabalável em proporcionar experiências excepcionais aos nossos participantes.
                </p>
                <div className={style.imgContainer}>
                    <img src="/src/assets/experienciaConta.jpg" className={style.img} alt="" />
                </div>
            </div>

            <div className={style.textContainer}>
                <h2 className={style.subtitle}>Segurança em Primeiro Lugar</h2>
                <p className={style.text}>
                    A segurança é nossa prioridade máxima em todas as aventuras que oferecemos. Nossos guias são treinados para lidar com uma variedade de situações e estão equipados com o conhecimento e os recursos necessários para garantir uma experiência segura e agradável para todos os envolvidos. Desde avaliações de risco até protocolos de emergência, cada aspecto da sua segurança é cuidadosamente considerado.
                </p>

                <h2 className={style.subtitle}>Diversidade e Inclusão</h2>
                <p className={style.text}>
                    Acreditamos que todos devem ter a oportunidade de experimentar a maravilha da natureza, independentemente de sua habilidade ou experiência prévia. É por isso que oferecemos uma variedade de expedições adaptadas a diferentes níveis de condicionamento físico e habilidades ao ar livre. Desde famílias com crianças pequenas até grupos de amigos aventureiros, há uma aventura esperando por todos.
                </p>

                <h2 className={style.subtitle}>Sustentabilidade em Ação</h2>
                <p className={style.text}>
                    Como amantes da natureza, reconhecemos a importância de proteger e preservar os ambientes naturais que tanto amamos. Estamos comprometidos em operar de maneira responsável e sustentável, minimizando nosso impacto ambiental e promovendo práticas de conservação. Por meio de parcerias com organizações locais e iniciativas de educação ambiental, buscamos não apenas proteger, mas também inspirar outros a cuidar do nosso planeta.
                </p>
            </div>

            <div className={style.finalText}>
                <p className={style.text}>
                    Junte-se a nós nesta jornada de descoberta, aventura e conexão com a natureza. Descubra o poder transformador de uma caminhada na montanha, o êxtase de remar por corredeiras rápidas e a serenidade de uma noite sob um céu estrelado. Sinta-se vivo, renove seu espírito e faça memórias que durarão para sempre.
                </p>
                <p className={style.text}>
                    Seja bem-vindo à nossa família de aventureiros. Estamos ansiosos para explorar o mundo natural ao seu lado.
                </p>
            </div>

        </section>

    );

}

export default AboutUs;