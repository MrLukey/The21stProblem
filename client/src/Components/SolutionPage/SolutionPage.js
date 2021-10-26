import React, {useEffect} from "react";
import RightImageHero from "../Heroes/RightImageHero";
import LeftImageHero from "../Heroes/LeftImageHero";
import CallToActionHero from "../Heroes/CallToActionHero";

const SolutionPage = () => {

    useEffect(() => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: 'solution'
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => console.log(error))
    }, [])

    return (
        <section className="bg-dark">
            <RightImageHero
                title="We must utilise executive power"
                info="The leaders of today are the last capable of making a significant impact on our situation. If they
                do not act, the collapse of our civilisation is assured. They must remember their purpose, and think deeply
                on what is important in life."
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/UN_General_Assembly_hall.jpg/1200px-UN_General_Assembly_hall.jpg"
                alt="" />
            <LeftImageHero
                title="We must decouple"
                info="The root of the problem is a tight coupling between human activity and environmental health: human
                activity depends on environmental health and environmental health depends on human activity. We must decouple
                this relationship, allowing human activity to continue independent of environmental conditions, and environmental
                health to recover without impediment from human activity."
                image="https://www.nasa.gov/images/content/386905main_moorhead_tm5_2009253.jpg"
                alt="" />
            <RightImageHero
                title="Separation of Concerns is required"
                info="Separation of Concerns (SoC) is a design principle used in computer science to ensure that a system
                is resilient to failures. It involves identifying and removing interdependencies between subsystems, ensuring
                that as much as possible each can operate independently from the rest. Applying it to society at scale would
                mean that each city produces its own food and energy, generating minimal waste in the process. A failure
                of global supply chains would not significantly impact the city, and outside of its perimeter wild environments
                would be free to reclaim the land."
                image=" https://images.adsttc.com/media/images/5db7/00a2/3312/fd22/3f00/0b7a/large_jpg/Credit_The_Big_Picture_(4).jpg?1572274326"
                alt="" />
            <LeftImageHero
                title="Vertical farms must become the default"
                info="Vertical agriculture requires a fraction of the land, 5% of the water and, by allowing for artificial
                growth cycles, produces vastly more food compared to traditional methods. Because farms are contained,
                they are inherently protected from drought, storms and insects, so food production is not dependent on
                predictable seasons or good weather, and the lack of competition from other species means no pesticides
                are required at all. They can be built in populated areas, so the need for preservation, packaging and
                transport is also removed, making for much healthier produce. Conversion to vertical farming will end the
                genocide of insects, halt the culling of forests and free enough land to completely restore the wilds of
                old. They also offer long lasting resilience to climate change, ensuring that no matter the state of the
                environment, humanity will have food to eat."
                image="https://www.usda.gov/sites/default/files/ocs-vertical-farming-blog-081418.jpg"
                alt="" />
            <RightImageHero
                title="Advanced nuclear is the most reliable energy solution"
                info="Unfortunately, we have done enough damage to make relying on renewable energy a dangerous proposition.
                As extreme weather becomes more common, power systems that are exposed to the elements will become proportionally
                less reliable and more costly to maintain. Nuclear energy is clean, more productive and inherently decoupled
                from the health of the environment. Rather than using fuel rods and running the risk of meltdown, modern
                reactors can use liquid fuels to generate electricity. If the plant suffers a catastrophic loss of power,
                such as in Fukushima, a small freeze plug will melt and the fuel will drain safely into a holding tank.
                This allows small, modular reactors to be built close to where power is consumed, reducing waste and removing
                the need for sprawling power lines. Breeders can convert nuclear waste into fuel, massively reducing what
                is eventually sent to storage, and what remains can be geologically disposed of, ensuring the material
                doesn't surface for millions of years."
                image="https://images.ctfassets.net/cnu0m8re1exe/4TQUSloIhxnH3vIdcAYe2M/cbc94db486f5675131dd095c427f08b4/G-nuclear10-molten-salt-reactor.png"
                alt="" />
            <LeftImageHero
                title="Full electrification is needed"
                info="A common and misleading statistic often quoted in the media is the proportion of electric
                energy that comes from green sources, e.g 43% in the UK 2021. However, the vast majority of energy
                consumed is not in the form of electricity, it's carbon based fuels, meaning that of total UK energy demand
                only 6.6% is green. Not only do we need to immediately curtail the use of carbon based fuels, but we need to
                convert technology to consume electricity and increase green generation significantly. The land requirements
                for full electrification via renewables is another reason why nuclear must come to be seen as our best
                option for solving the climate crisis, providing stable generation, independent from the state of the
                environment, in quantities capable of satisfying vastly increased demand."
                image="assets/images/lightning.jpg"
                alt="" />
            <RightImageHero
                title="The nutrient loop must be closed"
                info="As well as greenhouse gasses, aerosols and pollutants, we must strictly manage our influence on the
                cycles of nitrogen, phosphorus and water in the environment. These are critical for ensuring fertility of
                the land, and have been hugely disrupted by human activity thus far. In practice, we must come to see waste
                not as an acceptable byproduct of activity, but as a useful resource for other endeavors. Products must be
                designed for longevity, ease of upgrade and user maintenance, and waste must be digestible by a form of
                life or natural process, allowing it to become feed for other species or deteriorate harmlessly into the
                environment."
                image="assets/images/forest2.jpg"
                alt="" />
            <LeftImageHero
                title="SoC will ensure long term prosperity"
                info="If we do not change the architecture of the global economy, and supply chains are significantly
                disrupted from extreme weather and climate change, war is likely to break out over increasingly scarce
                resources. If this happens, the chance to work collectively on the arduous task of restoration will be
                gone, and we will lose our home. Separation of Concerns will provide the global stability required to begin
                restoration of Earth, ensuring that every nation has access to food and energy even as global conditions
                deteriorate."
                image="assets/images/earthFromSpace.jpg"
                alt="" />
            <CallToActionHero
                title="But this is just the beginning"
                info="Risk and opportunity exist in tandem. Though our motivations may be self serving, scrabbling to ensure
                our own survival, the result will be a world never before made possible on Earth."
                buttonOneText="More Info"
                buttonOneVariant="secondary"
                buttonOneHref="solution-data"
                buttonTwoText="The New World"
                buttonTwoVariant="light"
                buttonTwoHref="new-world" />
        </section>
    )
}

export default SolutionPage