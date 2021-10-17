import React from "react";

const LeftImageHero = (props) => {
    return (
        <div className="container bg-dark col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-white">{props.title}</h1>
                    <p className="fs-5 mb-4 text-white">{props.info}</p>
                </div>
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={props.image} className="d-block mx-lg-auto img-fluid" alt={props.alt}
                         width="700" height="500" loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default LeftImageHero