import React from "react";

const ActionsView = (props) => {
    return (
        <section className={props.activeView === 'actions' ? '' : 'd-none'}>
            <p>HELLO</p>
        </section>
    )
}

export default ActionsView