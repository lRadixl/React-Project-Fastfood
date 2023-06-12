import React from "react";
import Container from "./Container";
import StyledButton from "./UI/button/StyledButton";

const BurgerContent = () => {
    return(
        <div className="burgerking__content">
            <Container>
                <div className="burgerking">
                    <img src="img/burger.svg" alt="" className="burger__img"/>
                    <div className="burgerking__content-inner">
                        <h1 className="burgerking__top-text">Burger King</h1>
                        <p className="burgerking__bottom-text">Разом з McDonald's, 
                                    Burger King став синонімом бургерів в США.
                        </p>
                        <div className="burgerking__price">
                            <h2 className="real__price">50₴</h2>
                            <h2 className="fake__price">45₴</h2>
                        </div>
                        <StyledButton style={{marginTop: '11px'}}>Замовити зараз</StyledButton>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default BurgerContent;