import React, {useEffect} from "react"
import CallToActionHero from "../../Heroes/CallToActionHero";

const CoverPage = () => {

    useEffect(() => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: 'cover'
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="full-page bg-dark d-flex align-items-center">
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

