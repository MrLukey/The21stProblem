import React from "react";
import referenceData from './references.json'
import ReferenceCard from "../../Cards/ReferenceCard/ReferenceCard";
import PageLogger from "../../PageLogger/PageLogger";

const ReferencesPage = () => {
    return (
        <section className="bg-dark">
            <PageLogger page="refs" />
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