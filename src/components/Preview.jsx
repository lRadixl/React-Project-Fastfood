import React from "react";
import Container from "./Container";
import StyledButton from "./UI/button/StyledButton";

const Preview = () => {
    return(
        <Container>
            <div className="preview">
            <h3 className="preview__top-text">Фастфуд бургери</h3>
                <h1 className="quote">"Найшвидша їжа для миттєвого знеболення голоду.</h1>
                <p className="preview__text-bottom">
                Деяка їжа виглядала настільки несмачно, що схоже на те, що приніс 
                додому пес, проте після одного ковтка мені довелося їсти свої думки, 
                свої слова і свою їжу, і я повернувся за додатковою порцією.
                </p>
                <StyledButton style={{margin: '42px 0 0 0'}}>Замовити зараз</StyledButton>
            </div>
        </Container>
    );
}

export default Preview;