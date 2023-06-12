import React from "react";
import Container from "./Container";
import StyledButton from "./UI/button/StyledButton";

const Header = () => {

    return(
        <Container>
            <div className="header">
                <a href="/" className="logo">
                    <img src="img/logo.svg" alt="" className="logo__img"/>
                </a>
                    <div className="text__header-inner">
                        <a href="/#" className="text__header text__header-active">Додому</a>
                        <a href="/#" className="text__header">Сторінки</a>
                        <a href="/#" className="text__header">Інші замовлення</a>
                        <a href="/#" className="text__header">Ціни</a>
                        <a href="/#" className="text__header">Магазин</a>
                    </div>
                    <StyledButton>Замовити зараз</StyledButton>
            </div>
        </Container>
    );
}

export default Header;