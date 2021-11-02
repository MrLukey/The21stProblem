import React, {useEffect} from "react";
import RightImageHero from "../../Heroes/RightImageHero";
import LeftImageHero from "../../Heroes/LeftImageHero";
import CallToActionHero from "../../Heroes/CallToActionHero";

const NewWorldPage = () => {

    useEffect(() => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: 'new_world'
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => console.log(error))
    }, [])

    return (
        <section className="bg-dark">
            <RightImageHero
                title="We evolved to adapt"
                info="Instead of claw and fang, we have intelligence and community. Unlike other species, that take millions
                of years and countless generations to respond to physical changes in the environment, we as individuals
                can observe a change, create an adaptive solution to the threat, then transmit that information to the rest
                of the species, all in a fraction of a lifetime. This is why we are so advanced compared to other forms of
                life; we can adapt many times in a single generation. Of all the large animals alive today, we have the
                best chance of surviving climate change."
                image="https://i.redd.it/8tc2x21aqdi31.jpg"
                alt="A precarious looking settlement built atop a thin slice of rock, with a winding path that leads
                through clouds, up a mountain, to end at the settlement." />
            <LeftImageHero
                title="We are the great evolver"
                info="Throughout our history, we have dramatically changed any environment we found ourselves in. This
                has had a profound impact on the evolution of life on Earth, creating new niches into which species can
                evolve and increasing the complexity of the environment, forcing species to become more intelligent to
                survive. Something as simple to us as access to cooked food, for others is an evolutionary leap equivalent
                to hundreds of millions of years. If we break down the ideological wall that separates us from the rest
                of nature, we can begin to see ourselves as more than just another creature, but as a primary driver of
                evolution, a producer of intelligent life in the universe."
                image="assets/images/machuPicchu.jpg"
                alt="Machu Picchu in the daylight." />
            <RightImageHero
                title="This is the Anthropocene"
                info="Few appreciate the significance of naming a geological era after a life form. It means that a
                living being has attained a power comparable to that which moves mountains, and rips continents apart.
                The fact we are forced to name this age after ourselves should tell us one thing: it is time to accept
                our natural place as architect of Earth, and build a world that benefits all. If you have any doubt that
                we shall prevail, remember it was only ignorance and greed that led us to this place, imagine what will
                happen when the rest of humanity joins in the fight."
                image="assets/images/city.jpg"
                alt="A large city at night." />
            <LeftImageHero
                title="We can build better than Earth"
                info="For all of its history, life on Earth has been constrained by three physical limitations; energy,
                water and space. The most extensive and diverse ecosystems exist where energy and water are abundant,
                like in the shallows and on land where rain falls regularly, but these spaces make up only a faction of
                the total. We can access energies other than the Sun, and shape the land to maximise space. With technology
                we can alter the water cycles of the world, dramatically increasing the amount of available fresh water
                without impacting the salinity of the ocean. We can even free life from the Earth itself, creating ecosystems
                capable of navigating the vacuum of space to colonise the solar system. We must struggle to save the
                pre-industrial world, but after we can restore the pre-historic and continue on, to define a new
                measure of abundance."
                image="https://images.unsplash.com/photo-1620757482070-4994c580db7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80"
                alt="Earth not as a pale blue dot, but as a shining green marble of flourishing life." />
            <RightImageHero
                title="There are no limits"
                info="When it comes to humanity, most of the limitations placed on life do not apply. We have conquered
                our planet and face no threat from predators. We are explorers of the solar system, and are beginning to
                unravel the mysteries of time and space. Recently, we unlocked the ability to directly modify genes,
                effectively ending evolution by natural selection. We possess the means to survive any environmental
                change, and as conditions worsen motivating people to act will not be difficult. As our culture evolves
                to place planetary consciousness at its core, new paradigms will allow the development of technologies
                and design patterns that inexorably increase abundance of life and biodiversity, instead of exploiting
                and depleting it. Truly, we cannot imagine what the result of such a system could be, but responsibility
                for its conception falls to us."
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Spacecolony3edit.jpeg/1024px-Spacecolony3edit.jpeg"
                alt="An example of space worthy ecosystems, where people tend land that rotates around a column in
                space, simulating gravity with centrifugal force." />
            <CallToActionHero
                title="But we must act now"
                info="This future may be possible, but it is by no means certain. We must set about achieving Separation
                of Concerns, and redesign civilisation around principles of planetary stewardship. This means acting NOW!"
                buttonOneText="More Info"
                buttonOneVariant="secondary"
                buttonOneHref="#"
                buttonTwoText="What To Do Now"
                buttonTwoVariant="light"
                buttonTwoHref="what-to-do" />
        </section>
    )
}

export default NewWorldPage