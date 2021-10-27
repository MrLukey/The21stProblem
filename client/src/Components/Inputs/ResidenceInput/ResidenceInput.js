import React, {useEffect, useState} from "react";
import {FormGroup} from "react-bootstrap";

const ResidenceInput = props => {

    const [allCountries, setAllCountries] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3001/get-all-countries'
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setAllCountries(data))
            .catch(error => console.log(error))

    }, [])

    const handleResidenceInput = evt => {
        props.setPlaceOfResidence(evt.target.value)
    }

    return (
        <FormGroup className="form-floating flex-grow-1 mx-1">
            <input className="form-control" type="text" list="countryOfResidence" value={props.placeOfResidence} onChange={handleResidenceInput}/>
            <datalist id="countryOfResidence">
                {allCountries.map(country =>
                    <option key={country.id}>{country.name}</option>
                )}
            </datalist>
            <label htmlFor="countryOfResidence">Residence</label>
        </FormGroup>
    )
}

export default ResidenceInput