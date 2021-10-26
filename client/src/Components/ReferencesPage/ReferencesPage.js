import React, {useEffect} from "react";
import referenceData from './references.json'
import ReferenceCard from "../ReferenceCard/ReferenceCard";

const ReferencesPage = () => {

    useEffect(() => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: 'refs'
            })
        }
        fetch(url, requestOptions)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }, [])

    return (
        <section className="bg-dark">
            {
                referenceData.references.map(ref =>
                    <ReferenceCard
                        key={ref.key}
                        id={ref.key}
                        link={ref.link}
                        citation={ref.citation} />
                )
            }
        </section>
    )
}

export default ReferencesPage