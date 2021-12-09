import React from 'react'
import PersonError from './PersonError'
import './error.scss'
function Error(props) {
   
    return (
        <div className="errorBlock">
            {!props.checkLength ?          "":<PersonError classs="error" error="пароль должен содержать больше 8 символом"/>}
            {!props.checkToUpperCase ?     "":<PersonError classs="error" error="пароль должен содержать букрвы Верхнего регистра "/>}
            {!props.checkHaveNumber ?      "":<PersonError classs="error" error="пароль должен содержать цыфры"/>}
            {!props.checkThreeInRow ?      "":<PersonError classs="error" error="пароль не должен содержать 3 буквы подряд"/>}
            {!props.checkThreeInRowLog ?   "":<PersonError classs="error" error="log не должен содержать 3 буквы подряд"/>}
            {props.check ? <PersonError classs="success" error="Успешно"/> : ""}
        </div>
    )
}
export default Error