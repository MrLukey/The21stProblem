import React from "react";
import InfoGraphicCard from "../InfoGraphicCard";
import CallToActionHero from "../Heroes/CallToActionHero";
import infoGraphicData from './solutionDataInfoGraphics.json'

const SolutionDataPage = () => {
    return (
        <section className="bg-black">
            {
                infoGraphicData.info_graphics.map(infoGraphic =>
                    <InfoGraphicCard
                        key={infoGraphic.key}
                        bg="bg-black"
                        textColour="text-white"
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
                bg="bg-black"
                title="More Info"
                buttonOneText="Problem Data"
                buttonOneVariant="secondary"
                buttonOneHref="problem-data"
                buttonTwoText="References"
                buttonTwoVariant="light"
                buttonTwoHref="references" />
        </section>
    )
}

export default SolutionDataPage