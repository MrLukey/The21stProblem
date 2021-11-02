import React, {useEffect} from "react";

const PageLogger = (props) => {

    const page = props.page
    useEffect(() => {
        const url = 'http://localhost:3001/log-page-load'
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                page: page
            })
        }
        fetch(url, requestOptions)
            .then(response => response)
            .catch(error => error)
    }, [page])

    return (
        <>
        </>
    )
}

export default PageLogger