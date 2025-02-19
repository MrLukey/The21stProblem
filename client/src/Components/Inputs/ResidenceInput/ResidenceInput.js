import React, {useEffect} from "react";
import {FormGroup} from "react-bootstrap";

const ResidenceInput = (props) => {

    const setAllCountries = props.setAllCountries
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
    }, [setAllCountries])


    const handleResidenceInput = (evt) => {
        const countryMatches = props.allCountries.filter(country => country.name.toLowerCase().includes(evt.target.value.toLowerCase()))
        if (countryMatches.length === 1){
            props.setPlaceOfResidence(countryMatches[0].name)
            props.setResidenceValid(' is-valid')
        } else {
            props.setResidenceValid('')
            countryMatches.forEach(country => {
                if (country.name.toLowerCase().includes(evt.target.value.toLowerCase())){
                    props.setPlaceOfResidence(evt.target.value)
            }})
        }
    }

    return (
        <FormGroup className="form-floating flex-grow-1 mx-1 ">
            <input className={"form-control" + props.residenceValid} type="search" list="countryOfResidence"
                   value={props.placeOfResidence} onChange={handleResidenceInput}/>
            <datalist id="countryOfResidence">
                {props.allCountries.map(country =>
                    <option key={country.id}>{country.name}</option>
                )}
            </datalist>
            <label htmlFor="countryOfResidence">Residence</label>
        </FormGroup>
    )
}

export default ResidenceInput