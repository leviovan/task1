import React from 'react'

function PersonError(props) {
    return (
        <div className={props.classs}>
             {props.error}
        </div>
    )
}

export default PersonError
