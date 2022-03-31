const CHANGE_LOADING = 'CHANGE_LOADING'

interface loadingAction {
    type: string;
    payload: boolean;
}

interface loadingReducer {
    loading: boolean;
}

const initialState:loadingReducer = {
    loading: true,
}

export const loadingReducer = (state = initialState, action:loadingAction):loadingReducer => {
    switch(action.type){
        case  CHANGE_LOADING: 
            return {...state, loading: action.payload}
        default: 
            return state
        
    }
}