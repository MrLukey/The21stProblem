import React from "react";

const CenterImageHero = (props) => {
    return (
        <div className="px-4 pt-5 my-5 text-center bg-dark">
            <h1 className="display-4 fw-bold text-white">{props.title}</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4 text-white">{props.info}</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="container px-5">
                    <img src={props.image} className="img-fluid border rounded-3 shadow-lg mb-4"
                         alt="" width="700" height="500" loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default CenterImageHero