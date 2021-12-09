import React from "react";
import "./Input.scss";

function Input(props) {

    const Register = () => {

        props.setUserData(props.myRefLog.current.value,props.myRefPas.current.value);
        setTimeout(()=>props.reset(), 5000)
        props.succes()
    };

    return (
        <div className={props.obolocka}>
            <input
                onClick={Register}
                placeholder={props.placeholder}
                className={props.style}
                value={props.value}
                type={props.type}
            />
        </div>
    );
}

export default Input;
