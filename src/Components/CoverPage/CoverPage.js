import React from "react"
import Button from "react-bootstrap/Button";
import "./CoverPage.css"
import "./forestFire.jpg"
import "./fire.jpg"

const CoverPage = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center p-5 text-light" id="cover">
            <main role="main">
                <h1 className="text-pt-sans-pro mb-2">The 21<sup>st</sup> Problem</h1>
                <h2 className="text-pt-sans-pro mb-5">Ensuring Security and Prosperity in a Rapidly Changing World</h2>
                <Button variant="light" href="/problem">Continue</Button>
            </main>
        </div>
    )
}

export default CoverPage

