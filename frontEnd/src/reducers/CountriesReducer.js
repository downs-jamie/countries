export default function (state = [], action) {
    if (action.type === 'ADD_COUNTRY') {
        if(action.payload === ""){
            return state
        }
        // we have something in the payload
        let newState = [...state, action.payload]
        console.log(newState)
        console.log(action)
        return newState;
    } else {
        return state
    }
}