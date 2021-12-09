import React from 'react'
import { resetAC, setUserDataAC, setUserLoginAC, setUserPasswordAC, succesAC } from '../../redux/reducer/auth-reducer';
import { connect } from 'react-redux';
import FormAuth from './FormAuth';


let mapStateToProps=(state)=>{
    return{
        authData:state.auth
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        setUserData:(login,password)=>{
            dispatch(setUserDataAC(login,password));
        },
        setUserLogin:(login)=>{
            dispatch(setUserLoginAC(login));
        },
        setUserPassword:(password)=>{
            dispatch(setUserPasswordAC(password));
        },
        reset:()=>{
            dispatch(resetAC());
        },
        succes:()=>{
            dispatch(succesAC());
        },
    }
}
const FormAuthContanier =connect(mapStateToProps,mapDispatchToProps)(FormAuth);
export default FormAuthContanier;