import React from "react";
import Button from 'react-bootstrap/Button'

const ProblemSection = () => {
    return (
        <section id="summary_section">
            <Button variant="primary">
                TEST
            </Button>
            <h3 className="summary_header">The Problem</h3>
            <ul className="problem_list">
                <li className="summary_wrapper">Catastrophic climate change is inevitable and irreversible
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="1">[1]</a>
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="2">[2]</a>
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="3">[3]</a>
                </li>
                <li className="summary_wrapper">Our civilisation consistently underestimates the severity of the
                    situation
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="4">[4]</a>
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="5">[5]</a>
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="6">[6]</a>
                </li>
                <li className="summary_wrapper">It is likely that climate models have biases that prevent showing
                    irreversible change
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="6">[6]</a>
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="7">[7]</a>
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="8">[8]</a>
                </li>
                <li className="summary_wrapper">It is possible that a cascade of the Earth System toward a greenhouse
                    state is underway
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="9">[9]</a>
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="10">[10]</a>
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="11">[11]</a>
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="12">[12]</a>
                    <a className="info_link" data-info_link_no="1">[S1]</a>
                    <a className="info_link" data-info_link_no="2">[S2]</a>
                </li>
                <li className="summary_wrapper">Ancient climate records imply a potential for warming of 6-14°C
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="13">[13]</a>
                    <a className="info_link" data-info_link_no="1">[S1]</a>
                </li>
                <li className="summary_wrapper">However our future may be without geological precedent in the last half
                    a billion years
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="14">[14]</a>
                </li>
                <li className="summary_wrapper">The threat is existential, unpredictable and developing at a rapid pace
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="15">[15]</a>
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="16">[16]</a>
                    <a className="info_link" data-info_link_no="2">[S2]</a>
                    <a className="info_link" data-info_link_no="3">[S3]</a>
                    <a className="info_link" data-info_link_no="4">[S4]</a>
                </li>
                <li className="summary_wrapper">“Do The Maths” - this is an emergency, there is no time to wait for a
                    cultural or economic shift toward sustainability
                    <a className="ref_tooltip_wrapper tooltip_wrapper" data-ref_no="12">[12]</a>
                    <a className="info_link" data-info_link_no="15">[S15]</a>
                </li>
            </ul>
        </section>
    )
}

export default ProblemSection