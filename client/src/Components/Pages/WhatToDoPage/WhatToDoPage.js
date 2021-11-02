import React, {useEffect} from "react";
import RightImageHero from "../../Heroes/RightImageHero";
import LeftImageHero from "../../Heroes/LeftImageHero";
import CallToActionHero from "../../Heroes/CallToActionHero";

const WhatToDoPage = () => {

    useEffect(() => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: 'what_to_do'
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => console.log(error))
    }, [])

    return (
        <section className="bg-dark">
            <RightImageHero
                title="Leaders & influencers"
                info="If you are in a position of power, whether it be political or social, you have the most important
                job. Think deeply on what's important in your life, whether it's family or fame, money or power,
                achieving incredible feats or just having some fun, all reasons lead to the same conclusion; we must
                radically change course to preserve what we love. You must do everything you can to push an agenda of
                global stewardship, promoting and investing in the technologies that will ensure our long term survival.
                If you care about legacy, and want to leave a mark on the Earth that will last for generations, addressing
                this issue is a sure fire way to earn the respect of all that will follow, and cement your place on the
                right side of history."
                image="assets/images/influencers.jpg"
                alt="A crowd clamour to take pictures of an unseen celebrity." />
            <LeftImageHero
                title="Climate scientists"
                info="Stop beating around the bush! I appreciate that the evidence for a cascade in motion is not
                convincing enough to force certainty, but by the time it is, it will be far too late. You need to
                talk seriously about cascade scenarios, about a transition to a greenhouse Earth and what that would mean
                for humanity. We also need you to recommend technologies, laws and social campaigns that offer solutions
                now, instead of sitting on the fence to preserve your objectivity. Do not shy away from your feelings,
                you must not let your scientific integrity stand in the way of our survival. When you are inevitably
                labelled as an alarmist, remember it is better to be wrong and face judgement, than be right and face
                extinction."
                image="assets/images/scientists.jpg"
                alt="Scientists protesting against climate change." />
            <RightImageHero
                title="Everyone"
                info="Get involved! There is no aspect of our civilisation that will not decline in the face of climate
                change. Our food supply is at risk, our energy supply is at risk, even access to oxygen cannot be taken
                for granted anymore. It all depends on what we do next. If you care about anything at all, you must act.
                No matter your profession, no matter your values, you are important; you have skills that are needed. You
                must grasp the issue, and transition through denial and despair to find new hope. Make your voice heard,
                use your time and resources to exert pressure on leadership. Write letters, not emails or tweets but
                physical letters, describing how you feel now and how you will feel when freezing, starving, and
                struggling for air. Express your love for your family, your fear for their life, your hopes for the
                future and what can be done to secure them. Whether they be a government, a company or an individual,
                you must not let another decide your fate without first considering you."
                image="assets/images/climateProtest.jpg"
                alt="A climate protest. A young woman climbs a lamp post holding a sign that reads 'We are the change'." />
            <CallToActionHero
                title="We must work together"
                info="Our greatest resource is ourselves. We must put aside our differences and work together on saving
                our planet. If you would like to take part in collective action, sign up to receive more information. If
                you would like to offer any feedback on the site, feel free to contact us."
                buttonOneText="Contact"
                buttonOneVariant="secondary"
                buttonOneHref="contact"
                buttonTwoText="Sign Up"
                buttonTwoVariant="light"
                buttonTwoHref="sign-up" />
        </section>
    )
}

export default WhatToDoPage