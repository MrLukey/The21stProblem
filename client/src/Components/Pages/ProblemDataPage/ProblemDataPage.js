import React, {useEffect} from "react";
import InfoGraphicCard from "../../Cards/InfoGraphicCard/InfoGraphicCard";
import infoGraphicData from './problemDataInfoGraphics.json';
import CallToActionHero from "../../Heroes/CallToActionHero";

const ProblemDataPage = () => {

    useEffect(() => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: 'problem_data'
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => console.log(error))
    }, [])

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