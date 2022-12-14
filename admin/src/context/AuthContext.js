import { createContext, useEffect, useReducer } from "react"

const INITIAL_STATE = {
    email: JSON.parse(localStorage.getItem("email")) || null,
    loading: false,
    error: null,
}

export const AuthContext = createContext(INITIAL_STATE)

const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return {
                email: null,
                loading: true,
                error: null,
            }
        case "LOGIN_SUCCESS":
            return {
                email: action.payload,
                loading: false,
                error: null,
            }
        case "LOGIN_FAILURE":
            return {
                email: null,
                loading: false,
                error: action.payload,
            }
        case "LOGOUT":
            return {
                email: null,
                loading: false,
                error: null,
            }
        default:
            return state;
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    useEffect(()=>{
        localStorage.setItem("email", JSON.stringify(state.email))
    },[state.email])

    return(
        <AuthContext.Provider value={{
            email:state.email, 
            loading:state.loading, 
            error:state.error, 
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}