import React from "react";
import "./FormAuth.scss";
import Input from "../Inputs/Input";
import InputSignIn from "../Inputs/InputSignIn";
import Error from "../error/error";
function FormAuth(props) {
 console.log(props);
  const myRefLog = React.createRef();
  const myRefPas = React.createRef();
  return (
    <div className="FormAuth">

        <Error   check={props.authData.check} checkLength={props.authData.checkLength}
                    checkToUpperCase={props.authData.checkToUpperCase}
                    checkHaveNumber={props.authData.checkHaveNumber}
                    checkThreeInRow={props.authData.checkThreeInRow} 
                    checkThreeInRowLog={props.authData.checkThreeInRowLog} />

      <h1>Authentication</h1>
      <p>Login</p>
      <Input
        myRef={myRefLog}
        value={props.authData.login}
        setData={props.setUserLogin}
        placeholder="Login..."
        obolocka="obolocka"
        style="LogPasInput"
        type="text"
      />
      <br />
      <p>Зassword</p>
      <Input
        myRef={myRefPas}
        value={props.authData.password}
        setData={props.setUserPassword}
        placeholder="password..."
        obolocka="obolocka"
        style="LogPasInput"
        type="password"
      />
      <br />
      <InputSignIn
        myRefLog={myRefLog}
        myRefPas={myRefPas}
        reset={props.reset}
        setUserData={props.setUserData}
        succes={props.succes}
        style="buttonSignIn"
        value="sign in"
        type="button"
      />
    </div>
  );
}

export default FormAuth;
