import React from "react";
import Container from "./Container";

const Feedback = () => {
    return(
        <div>
            <Container>
                <div className="feedback">
                    <div className="feedback__inner">
                        <p className="feedback__text">
                        Дуже дякую за оперативне обслуговування. Дуже ціную це. Відмінний смак у кожному кукурудзині. Додайте радість найкращого смаку. Хвилини задоволення для гурманів.
                        </p>
                        <h1 className="feedback__name">Adele A. McNeill</h1>
                        <h3 className="feedback__company">USA</h3>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Feedback;