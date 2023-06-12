import React from "react";
import Container from "./Container";

const Footer = () => {

    const LinkInfoStyles = {
        display: 'flex',
        paddingTop: '16px',
        justifyContent: 'space-between',
    };

    const LogoStyles = {
        width: '132px',
        height: '132px',
    };

    return(
        <div>
            <Container>
                <footer className="footer">
                    <div className="main__info">
                        <a href="index.html"><img src="img/logo.svg" alt="" className="logo" style={LogoStyles}/></a>
                        <div className="main__info-inner">
                            <img src="img/mail.svg" alt="" className="mail"/>
                            <h3 className="mail__text">fastfood_usa@gmail.com</h3>
                        </div>
                        <div className="main__info-inner">
                            <img src="img/internet.svg" alt="" className="mail"/>
                            <h3 className="mail__text">www.fastfood_usa.com</h3>
                        </div>
                    </div>
                    <div className="main__info">
                        <div className="link__info-inner">
                            <h1 className="footer__top-text">Наше меню</h1>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Сніданок</h3></a>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Ланч</h3></a>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Обід</h3></a>
                        </div>
                    </div>
                    <div className="main__info">
                        <div className="link__info-inner">
                            <h1 className="footer__top-text">Інформація</h1>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Про нас</h3></a>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Відгук</h3></a>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Події</h3></a>
                        </div>
                    </div>
                    <div className="main__info">
                        <div className="link__info-inner">
                            <h1 className="footer__top-text">Корисні посилання</h1>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Послуги</h3></a>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Підтримка</h3></a>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Умови</h3></a>
                        </div>
                    </div>
                    <div className="main__info">
                        <h1 className="footer__top-text" style={{paddingTop: '55px'}}>Соціальні мережі</h1>
                        <div className="link__info-inner" style={LinkInfoStyles}>
                            <a className="link__info" href="/#"><img src="img/facebook 1.svg" alt="" className="link__social"/></a>
                            <a className="link__info" href="/#"><img src="img/twitter 1.svg" alt="" className="link__social"/></a>
                            <a className="link__info" href="/#"><img src="img/instagram 1.svg" alt="" className="link__social"/></a>
                            <a className="link__info" href="/#"><img src="img/linkedin 1.svg" alt="" className="link__social"/></a>
                        </div>
                    </div>
                </footer>
            </Container>
        </div>
    );
}

export default Footer;