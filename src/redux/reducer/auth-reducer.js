
let SET_USER_DATA = "SET_USER_DATA";
let SET_USER_LOGIN = "SET_USER_LOGIN";
let SET_USER_PASSWORD = "SET_USER_PASSWORD";
let RESET = "RESET";
let CHECK_SUCCES = "CHECK_SUCCES";
let initialState = {
    // login_true: "leviovan",
    // password_true: "Sereja001",
    check: false,
    login: null,
    password: null,
    checkLength: false,
    checkToUpperCase: false,
    checkHaveNumber: false,
    checkThreeInRow: false,
    checkThreeInRowLog: false,
}

const passLength = (pass) => { return Boolean(!(pass.length > 8)) }

const passToUpperCase = (pass) => {
    for (let i = 0; i < pass.length; i++) {
        if (isNaN(pass[i])) {
            if (pass[i] === pass[i].toUpperCase()) return false
        }
    }
    return true
}
const passHaveNumber = (pass) => {
    for (let i = 0; i < pass.length; i++) {
        if (!isNaN(pass[i])) {
            return false
        }
    }
    return true
}
const checkThreeInRow = (pass) => {
    for (let i = 1; i < pass.length - 1; i++) {

        if ((pass[i - 1] === pass[i]) && (pass[i] === pass[i + 1])) { return true }
    }
    return false
}
const checkAll = (check1, check2, check3, check4, check5) => {

    let suc = ((!check1) && (!check2) && (!check3) && (!check4) && (!check5))
    return suc

}
const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state, checkLength: passLength(action.data.password),
                checkToUpperCase: passToUpperCase(action.data.password),
                checkHaveNumber: passHaveNumber(action.data.password),
                checkThreeInRow: checkThreeInRow(action.data.password),
                checkThreeInRowLog: checkThreeInRow(action.data.login),
            }
        case RESET:
            return {
                ...state, checkLength: false,
                checkToUpperCase: false,
                checkHaveNumber: false,
                checkThreeInRow: false,
                checkThreeInRowLog: false,
            }
        case CHECK_SUCCES:
            let succes = checkAll(state.checkLength, state.checkToUpperCase, state.checkHaveNumber, state.checkThreeInRow, state.checkThreeInRowLog)
            return {
                ...state, check: succes
            }
        case SET_USER_LOGIN:
            return {
                ...state, login: action.data.login.replace(/[^A-Za-z0-9]/ig, '')
            }
        case SET_USER_PASSWORD:
            return {
                ...state, password: action.data.password.replace(/[^A-Za-z0-9]/ig, '')
            }
        default:
            return state;
    }
}

export const succesAC = () => ({ type: CHECK_SUCCES, data: {} });
export const resetAC = () => ({ type: RESET, data: {} });

export const setUserDataAC = (login, password) => ({ type: SET_USER_DATA, data: { login, password } });

export const setUserLoginAC = (login) => ({ type: SET_USER_LOGIN, data: { login } });

export const setUserPasswordAC = (password) => ({ type: SET_USER_PASSWORD, data: { password } });

export default auth_reducer;