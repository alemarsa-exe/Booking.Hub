import { createContext, useReducer } from "react"

const INITIAL_STATE = {
    name: undefined,
    //description: undefined,
    dates:undefined,
    categoria: undefined
}

export const SearchContext = createContext(INITIAL_STATE)

const SearchReducer = (state, action) => {
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload
        case "RESER_SEARCH":
            return INITIAL_STATE
        default:
            return state
    }
}

export const SearchContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE)

    return(
        <SearchContext.Provider value={{name:state.name, dates:state.dates , categoria:state.categoria, dispatch}}>
            {children}
        </SearchContext.Provider>
    )
}