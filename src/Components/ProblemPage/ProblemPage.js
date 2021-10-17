import React from "react";
import RightImageHero from "../Heroes/RightImageHero";
import LeftImageHero from "../Heroes/LeftImageHero";
import CallToActionHero from "../Heroes/CallToActionHero";

const ProblemPage = () => {
    return (
        <section className="bg-dark">
            <RightImageHero
                title="Climate change is inevitable and irreversible"
                info="Because of a critical lack of leadership, catastrophic environmental changes are now unavoidable.
                Billions are destined for disaster, and the fate of humanity hangs in the balance."
                image="assets/images/drivingThroughFire.jpg"/>
            <LeftImageHero
                title="We consistently underestimate the severity of the situation"
                info="Both The Paris Agreement and policies for Carbon Neutrality are based on flawed logic. At the time
                of their invention, carbon budgets were already spent, and carbon neutrality will not halt or diminish the
                impact of what we have already set in motion."
                image="assets/images/flood2.jpg"/>
            <RightImageHero
                title="It is likely that climate models have biases that prevent showing irreversible change"
                info='Because of the method of their construction, and the impossibility of gathering sufficient data on
                such a vast and rapidly evolving phenomena, climate models cannot reliably predict complex interactions.
                Extreme and unusual weather events, such as a heat dome over North America, therefore come as a surprise.
                Additionally, cognitive biases in the academic community have prevented exploration of the possibility
                that a cascade of environmental feedback loops is already in motion, being rejected on the grounds that
                it may lead "to a sense of helplessness, inadequacy, hopelessness and ultimately disengagement from the issue".'
                image="assets/images/twister.jpg"
                />
            <LeftImageHero
                title="A cascade of the Earth System may be underway"
                info="Nine climate tipping points are now active. These are processes that humans cannot control and which
                continuously feedback on themselves and each other, causing even more climate change. The impact of this
                cannot be understated. We may be witnessing a shift of the Earth System so profound that the majority of
                species alive today will not survive it."
                image="assets/images/tippingPointsMap.jpg"/>
            <RightImageHero
                title="Ancient climate records imply a potential for warming of 6-14°C"
                info="The Earth can exist for long periods in 3 stable states; snowball, icehouse and greenhouse. Snowball
                Earth can occur when the atmosphere lacks greenhouse gases, and the planet becomes entombed in a ball of ice
                for millions of years. Greenhouse Earth is the default, making up 85% of Earth's history. The planet is ice
                free, surface sea temperatures ranging from 28°C in the tropics to 0°C in the poles, and the atmopshere is
                rich in methane. Icehouse Earth is the one we know, a rare goldilocks state where carbon levels are just right
                for ice to cover the poles, cooling the Earth just enough to make conditions perfect for us. The states are
                stable because it takes a lot of energy to change from one to another, but just like pushing a ball over a hill,
                once enough energy has been put into the system, natural forces take over, leading to a runaway effect."
                image="https://ars.els-cdn.com/content/image/1-s2.0-S0262407908615523-fx1.jpg"/>
            <LeftImageHero
                title="However our future may be without precedent in the last half a billion years"
                info="The evolution of Earth’s climate is largely driven by variations in solar irradiance and atmospheric
                content: how much energy the Sun produces and what percentage of that energy is absorbed by the Earth.
                Since the last period of greenhouse Earth, the Sun has got hotter, so the same atmosphere today would
                lead to even greater temperatures than seen in geological records."
                image="assets/images/desert2.jpg"/>
            <RightImageHero
                title="The threat is existential, unpredictable and developing at a rapid pace"
                info="Even with a global effort, there is no guarantee humanity will survive. Even with all of the minds,
                tech and funds, there is no way to predict what will happen. The only thing we know for certain is that
                every life support system of this planet is in decline, and if trends continue will turn from friend to
                foe, producing conditions that humans cannot survive without technological assistance."
                image="assets/images/drowning.jpg" />
            <LeftImageHero
                title="Do The Maths - this is an emergency"
                info="There is no time to wait for a cultural or economic shift toward sustainability. The intervention
                time left to prevent tipping could already have shrunk towards zero, whereas the reaction time to achieve
                net zero emissions is 30 years at best. Hence we might already have lost control of whether tipping happens.
                The stability and resilience of our planet is in peril. International action - not just words - must reflect this."
                image="assets/images/doTheMaths.png" />
            <CallToActionHero
                title="Time has run out"
                info="Adapt or die is the mantra of Earth once again. If we do not respond in a proportional manner then
                our destiny is written in the fossil records. However, the risk is only equal to the opportunity. It is
                time to take responsibility, accept our role as stewards of Spaceship Earth and build a world that has
                never before been possible."
                buttonOneText="More Info"
                buttonOneVariant="secondary"
                buttonOneHref="#"
                buttonTwoText="The Solution"
                buttonTwoVariant="light"
                buttonTwoHref="/solution"
            />
        </section>
    )
}

export default ProblemPage