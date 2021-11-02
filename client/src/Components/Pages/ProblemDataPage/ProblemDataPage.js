import React from "react";
import InfoGraphicCard from "../../Cards/InfoGraphicCard/InfoGraphicCard";
import infoGraphicData from './problemDataInfoGraphics.json';
import CallToActionHero from "../../Heroes/CallToActionHero";
import PageLogger from "../../PageLogger/PageLogger";

const ProblemDataPage = () => {
    return (
        <section className="bg-dark">
            <PageLogger page="problem_data" />
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