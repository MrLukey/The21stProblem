import React from "react";
import referenceData from './references.json'
import ReferenceCard from "../ReferenceCard/ReferenceCard";

const ReferencesPage = () => {
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