import React from "react";
import RightImageHero from "./Heroes/RightImageHero";
import LeftImageHero from "./Heroes/LeftImageHero";
import CenterImageHero from "./Heroes/CenterImageHero";

const ProblemSection = () => {
    return (
        <section>
            <RightImageHero
                title="Catastrophic climate change is inevitable and irreversible"
                image="assets/Images/fire.jpg"/>
            <LeftImageHero
                title="Our civilisation consistently underestimates the severity of the situation"
                image="https://wilmslowhealthcentre.com/wp-content/uploads/2020/10/keep-calm-it-s-business-as-usual-3.png"/>
            <CenterImageHero
                title="It is likely that climate models have biases that prevent showing irreversible change"
                image="https://www.visualcapitalist.com/wp-content/uploads/2018/03/cognitive-bias-examples-1200px.jpg"
                />
            <RightImageHero
                title="It is likely that climate models have biases that prevent showing irreversible change"
                info="Something something something dark side"
                image="https://www.visualcapitalist.com/wp-content/uploads/2018/03/cognitive-bias-examples-1200px.jpg"/>
            <LeftImageHero
                title="It is possible that a cascade of the Earth System toward a greenhouse state is underway"
                image="assets/InfoGraphics/4_tipping_points_map.jpg"/>
            <RightImageHero
                title="Ancient climate records imply a potential for warming of 6-14°C"
                image="assets/Images/desert.jpg"/>
            <LeftImageHero
                title="However our future may be without geological precedent in the last half a billion years"
                image="assets/InfoGraphics/4_tipping_points_map.jpg"/>
        </section>
    )
}

export default ProblemSection