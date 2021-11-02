import React, {useEffect} from "react";
import RightImageHero from "../../Heroes/RightImageHero";
import LeftImageHero from "../../Heroes/LeftImageHero";
import CallToActionHero from "../../Heroes/CallToActionHero";

const AboutPage = () => {

    useEffect(() => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: 'about'
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => error)
    }, [])

    return (
        <section className="bg-dark">
            <RightImageHero
                title="Foundations"
                info="In 2019 a group of scientists, engineers and activists came together to analyse the state of the
                climate crisis. The aim was to provide contextual information for climate protests, ensuring that demands
                were based on good science, were realistic, attainable and worthwhile. Over three months of fact finding it
                became increasingly apparent that a tipping point could have been reached already, rendering most protest
                demands redundant. After repeated attempts to relay this information to the wider community, it became
                clear that the appetite for confronting this possibility was rare in the climate movement. Demoralised
                at not being able to convince their colleagues, and without enough evidence to prove their theory beyond
                reasonable doubt, the group disbanded."
                image="assets/images/groupWork.jpg"
                alt="A group of people in class, most heads are bowed except one who raises an arm." />
            <LeftImageHero
                title="Rebirth"
                info="In August 2021 the IPCC finalised the first part of its Sixth Assessment Report - Climate Change
                2021: The Physical Science Basis. At the time, one of the group was on a coding bootcamp, training to
                be a fullstack developer, that is someone capable of building a web application from scratch. Motivated
                by the devastating conclusions of the report, they decided to apply their new skills to the subject,
                resulting in this."
                image="assets/images/rebirth.jpg"
                alt="A burnt forest buds with new life, the vibrant red of the new leaves standing in stark contrast to
                the blackened trunks." />
            <RightImageHero
                title="Is a cascade in motion?"
                info="We don't know. Nothing but the possibility is certain. When originally analysing the situation as
                a group, we collected evidence on both the climate crisis and social responses to it. We separated evidence
                by whether it showed continuing degradation, stabilisation or improvement. In all aspects, evidence for
                continued degradation overwhelmingly dominated, hence we were forced to make our conclusion. If the same
                process was undertaken today, we believe the conclusion would be the same and the results more convincing."
                image="assets/images/waterfall.jpg"
                alt="A strange box adorned with two large question marks is bordered by yellow neon lights." />
            <LeftImageHero
                title="What about wildlife?"
                info="Unfortunately, arguments to preserve wild environments for the sake of other species have historically
                fallen on deaf ears. We believe that only arguments phrased in terms of security and prosperity stand a chance of
                resonating sufficiently to get world leaders to act as if in an emergency. However, because the problem
                of human survival stems from the same factors as every other species, effective solutions will provide
                benefits for all."
                image="assets/images/elephant.jpg"
                alt="A large elephant stands at the edge of the brush, looking intensely at the camera." />
            <RightImageHero
                title="The Solution and A New World"
                info="Of course many solutions exist, and the new world described is a distant future, however facing
                the possibility of a cascade in motion is psychologically challenging at the best of times. Without a
                solution, or vision of a world after, there is a chance of defeatism. We believe that providing a viable
                solution can alleviate fear and focus the demands made of leadership. Moreover total SoC would provide a
                quality of life equal to or better than that of today, therefore we feel confident in its endorsement
                when compared to the alternatives. A vision of a new world, one which can exist even if all that we hold
                dear from this is lost, we hope provides a glimmer of light that can be sustained even in humanity's
                darkest hour."
                image="https://images.unsplash.com/photo-1620757482070-4994c580db7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80"
                alt="Earth not as a pale blue dot, but as a shining green marble of flourishing life." />
            <CallToActionHero
                title="Sign up or get in touch"
                info="If you would like to take part in collective action, sign up to receive more information. If
                you would like to offer any feedback on the site, feel free to contact us."
                buttonOneText="Contact"
                buttonOneVariant="secondary"
                buttonOneHref="contact"
                buttonTwoText="Sign Up"
                buttonTwoVariant="light"
                buttonTwoHref="sign-up" />
        </section>
        // <section className="full-page d-flex flex-column flex-nowrap justify-content-center align-items-center bg-dark">
        //     <div className="container text-center col-lg-6">
        //         <h3 className="card-title text-light text-muted text-center mb-3">About</h3>
        //         <p className="card-text text-light">Started by a cadre of scientists and engineers from Extinction
        //             Rebellion, The 21<sup>st</sup> Problem aims to highlight the scale and severity of the climate crisis.
        //             Instead of sugar-coating the situation to preserve false hope, we believe assuming the worst and acting
        //             accordingly is the most prudent course of action.
        //         </p>
        //     </div>
        // </section>
    )
}

export default AboutPage