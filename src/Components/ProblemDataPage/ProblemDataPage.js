import React from "react";
import InfoGraphicCard from "../InfoGraphicCard";
import infoGraphicData from './problemDataInfoGraphics.json';

const ProblemDataPage = () => {
    return (
        <section className="bg-dark">
            {
                infoGraphicData.info_graphics.map(infoGraphic =>
                    <InfoGraphicCard
                        key={infoGraphic.key}
                        variant="top"
                        title={infoGraphic.needsTitle ? infoGraphic.alt : ''}
                        text={infoGraphic.extraInfo}
                        image={infoGraphic.path}
                        alt={infoGraphic.alt}
                        link={infoGraphic.link}
                        linkText={infoGraphic.linkText} />
                )
            }
        </section>
    )
}

export default ProblemDataPage