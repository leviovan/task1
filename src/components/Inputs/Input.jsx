import React from 'react'
import './Input.scss';

function Input(props) {


    const OnChangeData=()=>{
        props.setData(props.myRef.current.value)
    }

    return (
        <div className={props.obolocka}>
        <input ref={props.myRef} onChange={OnChangeData} value={props.value} placeholder={props.placeholder} className={props.style}  type={props.type}/> 
        </div>
    )
}

export default Input
