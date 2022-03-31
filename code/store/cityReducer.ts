const CHANGE_CITY = 'CHANGE_CITY'

interface cityAction {
    type: string;
    payload?: any;
}

interface cityReducer {
    name: string;
}

const initialState:cityReducer = {
    name: 'Тюмень',
}

export const cityReducer = (state = initialState, action:cityAction):cityReducer => {
    switch(action.type){
        case  CHANGE_CITY: 
            return {...state, name: action.payload}
        default: 
            return state
        
    }
}