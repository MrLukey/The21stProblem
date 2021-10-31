import React from "react";

const AboutPage = () => {
    return (
        <section className="full-page d-flex flex-column flex-nowrap justify-content-center align-items-center bg-dark">
            <div className="container text-center col-lg-6">
                <h3 className="card-title text-light text-muted text-center mb-3">About</h3>
                <p className="card-text text-light">Started by a cadre of scientists and engineers from Extinction
                    Rebellion, The 21<sup>st</sup> Problem aims to highlight the scale and severity of the climate crisis.
                    Instead of sugar-coating the situation to preserve false hope, we believe assuming the worst and acting
                    accordingly is the most prudent course of action.
                </p>
            </div>
        </section>
    )
}

export default AboutPage