import React from "react";
import StyledButton from "./UI/button/StyledButton";

const DownloadContent = () => {
    return(
        <div className="download__bg">
            <div className="download__container">
                <h1 className="download__text">Завантажити більше меню</h1>
                <StyledButton style={{marginTop: '62px'}}>Завантажити</StyledButton>
            </div> 
        </div>
    );
}

export default DownloadContent;