const EXAMPLE = "EXAMPLE";


const dataInicial = {
    example: 'example'
}


//Reducer

export default function dataReducer(state = dataInicial, action) {
    switch (action.type) {
        case EXAMPLE:
            return {...state, example: action.payload}
        
    
        default:
            break;
    }
}

export const bigExample = (newExample: string) =>async (dispatch) => {
    
    dispatch({
        type: EXAMPLE,
        payload: newExample
    });
};