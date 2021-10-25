import React from "react";
import InfoGraphicCard from "../InfoGraphicCard/InfoGraphicCard";
import infoGraphicData from './problemDataInfoGraphics.json';
import CallToActionHero from "../Heroes/CallToActionHero";

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
            <CallToActionHero
                title="More Info"
                buttonOneText="Solution Data"
                buttonOneVariant="secondary"
                buttonOneHref="solution-data"
                buttonTwoText="References"
                buttonTwoVariant="light"
                buttonTwoHref="references" />
        </section>
    )
}

export default ProblemDataPage