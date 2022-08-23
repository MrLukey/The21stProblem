import React from "react"
import CallToActionHero from "../../Heroes/CallToActionHero";
import PageLogger from "../../PageLogger/PageLogger";

const CoverPage = () => {
    return (
        <div className="full-page bg-dark d-flex align-items-center">
            <PageLogger page="cover" />
            <CallToActionHero
                title="The 21st Problem"
                info="Ensuring Security and Prosperity in a Rapidly Changing World"
                buttonOneText="About"
                buttonOneVariant="secondary"
                buttonOneHref="about"
                buttonTwoText="Enter"
                buttonTwoVariant="light"
                buttonTwoHref="problem" />
        </div>
    )
}

export default CoverPage

