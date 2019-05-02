const initialState = {
    name:'asad'
}

export const dummy_reducer = (state=initialState , action) => {
    switch(action.type){
        case 'USER':
        return {
            ...state,
            title:'redux'
        }
        default:
        return state
    }
}